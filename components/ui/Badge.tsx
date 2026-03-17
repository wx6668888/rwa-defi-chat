interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'cyan' | 'purple' | 'success' | 'error'
  size?: 'sm' | 'md'
}

export function Badge({ children, variant = 'gold', size = 'md' }: BadgeProps) {
  const variants = {
    gold: 'bg-[rgba(245,158,11,0.1)] text-[#f59e0b] border-[#f59e0b]/20',
    cyan: 'bg-[rgba(0,245,212,0.1)] text-[#00f5d4] border-[#00f5d4]/20',
    purple: 'bg-[rgba(139,92,246,0.1)] text-[#8b5cf6] border-[#8b5cf6]/20',
    success: 'bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[#10b981]/20',
    error: 'bg-[rgba(239,68,68,0.1)] text-[#ef4444] border-[#ef4444]/20',
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  }
  
  return (
    <span className={`inline-flex items-center rounded-full border font-[family-name:var(--font-jetbrains-mono)] font-bold ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}
