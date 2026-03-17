interface ProgressBarProps {
  value: number // 0-100
  color?: 'gold' | 'cyan' | 'purple'
  height?: 'sm' | 'md'
}

export function ProgressBar({ value, color = 'gold', height = 'md' }: ProgressBarProps) {
  const colors = {
    gold: 'bg-gradient-to-r from-[#f59e0b] to-[#fb923c]',
    cyan: 'bg-[#00f5d4]',
    purple: 'bg-[#8b5cf6]',
  }
  
  const heights = {
    sm: 'h-1.5',
    md: 'h-2',
  }
  
  return (
    <div className={`w-full overflow-hidden rounded-full bg-[#13131e] ${heights[height]}`}>
      <div 
        className={`h-full rounded-full transition-all duration-300 ${colors[color]}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
