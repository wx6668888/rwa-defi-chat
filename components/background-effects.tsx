'use client'

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Cyan orb top-right */}
      <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,245,212,0.08)_0%,transparent_70%)] blur-3xl" />
      
      {/* Purple orb bottom-left */}
      <div className="absolute -bottom-40 -left-40 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.07)_0%,transparent_70%)] blur-3xl" />
      
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}
