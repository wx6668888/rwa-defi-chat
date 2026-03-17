interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'glow' | 'bordered'
  className?: string
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const variants = {
    default: 'rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4',
    glow: 'rounded-xl border border-[rgba(245,158,11,0.2)] bg-[#0d0d14] p-4 shadow-[0_0_20px_rgba(245,158,11,0.1)]',
    bordered: 'rounded-xl border border-[rgba(0,245,212,0.12)] bg-[#0d0d14] p-4',
  }
  
  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
