"use client";

export function MobileFrame({ 
  children, 
  label 
}: { 
  children: React.ReactNode
  label?: string 
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#000000] p-8">
      <div className="flex flex-col items-center">
        <div className="relative h-[844px] w-[390px] overflow-hidden rounded-[40px] border-4 border-[#1a1a24] bg-[#05050a]">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
            <div className="absolute -bottom-[200px] -left-[200px] h-[500px] w-[500px] rounded-full bg-[#00f5d4] opacity-[0.05] blur-3xl" />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '80px 80px'
              }}
            />
            <div 
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
          
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-10 h-8 w-36 -translate-x-1/2 rounded-b-2xl bg-[#1a1a24]" />
          
          {/* Content */}
          <div className="relative h-full w-full pt-8">
            {children}
          </div>
        </div>
        {label && (
          <p className="mt-4 font-display text-sm font-medium uppercase tracking-wider text-[#64748b]">
            {label}
          </p>
        )}
      </div>
    </div>
  );
}
