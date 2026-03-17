import { colors, borderRadius, animations } from '@/lib/design-system'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

export function Button({ children, variant = 'primary', size = 'md', onClick, className = '' }: ButtonProps) {
  const baseStyles = 'font-bold uppercase tracking-wide transition-all rounded-xl'
  
  const variants = {
    primary: `bg-gradient-to-r from-[${colors.gold}] to-[${colors.goldLight}] text-white hover:opacity-90`,
    secondary: `border-2 border-[${colors.plasmaCyan}] bg-transparent text-[${colors.plasmaCyan}] hover:bg-[${colors.plasmaCyan}] hover:text-[${colors.void}]`,
    ghost: `bg-[${colors.surface1}] text-[${colors.textPrimary}] hover:bg-[${colors.surface2}]`,
    danger: `bg-[${colors.error}]/10 border border-[${colors.error}]/20 text-[${colors.error}] hover:border-[${colors.error}]/40`,
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  }
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
