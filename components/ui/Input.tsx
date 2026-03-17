interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'number'
  className?: string
}

export function Input({ value, onChange, placeholder, type = 'text', className = '' }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#13131e] px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9] placeholder:text-[#334155] focus:border-[rgba(0,245,212,0.2)] focus:outline-none transition-colors ${className}`}
    />
  )
}
