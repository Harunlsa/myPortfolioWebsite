interface StatCardProps {
  value: string;
  label: string;
  isPrimary?: boolean;
}

export default function StatCard({ value, label, isPrimary = true }: StatCardProps) {
  return (
    <div className="text-center group">
      <div
        className={`font-headline-lg text-3xl mb-2 group-hover:scale-110 transition-transform font-bold ${
          isPrimary ? "text-primary" : "text-secondary"
        }`}
      >
        {value}
      </div>
      <div className="font-label-caps text-label-caps text-on-surface-variant">
        {label}
      </div>
    </div>
  );
}
