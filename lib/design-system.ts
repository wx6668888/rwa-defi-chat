// Design System - Colors, Typography, Spacing, Animations
// 基于示例代码提取的精确设计系统

export const colors = {
  // Background
  void: '#05050a',
  surface1: '#0d0d14',
  surface2: '#13131e',
  surface3: '#1a1a2e',
  
  // Primary
  plasmaCyan: '#00f5d4',
  gold: '#f59e0b',
  goldLight: '#fb923c',
  
  // Status
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  
  // Text
  textPrimary: '#f1f5f9',
  textSecondary: '#64748b',
  textTertiary: '#334155',
  
  // Accent
  purple: '#8b5cf6',
  
  // Border
  borderSubtle: 'rgba(255,255,255,0.04)',
  borderActive: 'rgba(255,255,255,0.08)',
  borderCyan: 'rgba(0,245,212,0.08)',
  borderGold: 'rgba(245,158,11,0.2)',
}

export const typography = {
  fontFamily: {
    display: 'var(--font-space-grotesk)',
    body: 'var(--font-inter)',
    mono: 'var(--font-jetbrains-mono)',
  },
  fontSize: {
    xs: '10px',
    sm: '11px',
    base: '13px',
    md: '15px',
    lg: '18px',
    xl: '24px',
    '2xl': '32px',
  },
}

export const spacing = {
  px: '1px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
}

export const borderRadius = {
  sm: '8px',
  md: '10px',
  lg: '12px',
  xl: '14px',
  '2xl': '16px',
  '3xl': '20px',
  full: '9999px',
}

export const animations = {
  transition: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
  },
}

export const shadows = {
  glow: '0 0 20px rgba(245,158,11,0.1)',
  glowCyan: '0 0 30px rgba(0,245,212,0.5)',
  card: '0 4px 6px rgba(0,0,0,0.1)',
}
