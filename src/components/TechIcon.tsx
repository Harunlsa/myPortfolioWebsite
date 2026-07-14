type TechIconProps = {
  icon: string;
  coloured?: boolean;
};

export default function TechIcon({ icon, coloured = false }: TechIconProps) {
  return <i className={`devicon-${icon}-plain ${coloured ? "colored" : ""}`} />;
}
