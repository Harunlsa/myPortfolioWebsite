import { useEffect, useRef } from "react";

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    gl.getExtension("OES_standard_derivatives");

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      #extension GL_OES_standard_derivatives : enable
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_light_mode;
      
      float grid(vec2 uv, float spacing) {
          vec2 grid = abs(fract(uv / spacing - 0.5) - 0.5) / fwidth(uv / spacing);
          return 1.0 - min(grid.x, grid.y);
      }
      
      void main() {
          vec2 uv = v_texCoord;
          vec2 mouse = u_mouse / u_resolution;
          
          // Background color
          vec3 bgDark = vec3(0.04, 0.04, 0.05);
          vec3 bgLight = vec3(0.97, 0.98, 0.99);
          vec3 color = mix(bgDark, bgLight, u_light_mode);
          
          // Animated Grid
          vec2 gridUV = uv * 20.0;
          float g = grid(gridUV + vec2(u_time * 0.1), 1.0);
          vec3 gridDark = g * 0.05 * vec3(0.14, 0.38, 0.92);
          vec3 gridLight = g * 0.02 * vec3(0.14, 0.38, 0.92);
          color += mix(gridDark, gridLight, u_light_mode);
          
          // Mouse Glow
          float dist = distance(uv, mouse);
          float glow = smoothstep(0.3, 0.0, dist);
          vec3 glowDark = glow * 0.15 * vec3(0.14, 0.38, 0.92);
          vec3 glowLight = glow * 0.04 * vec3(0.14, 0.38, 0.92);
          color += mix(glowDark, glowLight, u_light_mode);
          
          // Floating Particles (Simulated)
          for(float i = 0.0; i < 15.0; i++) {
              vec2 p = vec2(
                  fract(sin(i * 452.1) * 1000.0 + u_time * 0.02),
                  fract(cos(i * 123.4) * 1000.0 + u_time * 0.01)
              );
              float circle = smoothstep(0.005, 0.0, length(uv - p));
              vec3 partDark = circle * 0.4 * vec3(0.4, 0.7, 1.0);
              vec3 partLight = circle * 0.15 * vec3(0.14, 0.38, 0.92);
              color += mix(partDark, partLight, u_light_mode);
          }
          
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Buffers
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uLightMode = gl.getUniformLocation(program, "u_light_mode");

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = 1.0 - (e.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const syncSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    window.addEventListener("resize", syncSize);
    syncSize();

    const render = (time: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      const isLight = document.documentElement.classList.contains("light");
      gl.uniform1f(uLightMode, isLight ? 1.0 : 0.0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", syncSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{ display: "block" }}
    />
  );
}
