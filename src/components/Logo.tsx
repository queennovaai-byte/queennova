export default function Logo({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-void shadow-[0_0_20px_rgba(0,210,255,0.2)] ${className}`}
      style={{ width: size, height: size }}
    >
      <img 
        src="/logo.png" 
        alt="Queen Nova Logo" 
        className="h-full w-full object-cover"
      />
      {/* subtle inner glow overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/10" />
    </div>
  );
}
