'use client'

import { NodeLevelConfig } from '@/lib/node-levels'
import { useState } from 'react'

interface NodeHexIconProps {
  config: NodeLevelConfig
  size?: number
  showCode?: boolean
  className?: string
  isInteractive?: boolean
  onClick?: () => void
}

const GLOBAL_STYLES = `
  @keyframes nhi-l2-burst  { 0%,100%{opacity:.35} 50%{opacity:1} }
  @keyframes nhi-l3-ray    { 0%,100%{opacity:.28} 50%{opacity:1} }
  @keyframes nhi-l4-hover  { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-2.5px)} }
  @keyframes nhi-l4-rim    { 0%,100%{opacity:.12} 50%{opacity:1} }
  @keyframes nhi-l4-beam   { 0%,100%{opacity:.06} 50%{opacity:.2} }
  @keyframes nhi-l5-drift  { 0%,100%{transform:translate(0px,0px)} 50%{transform:translate(2.5px,-2px)} }
  @keyframes nhi-l6-atm    { 0%,100%{opacity:.32} 50%{opacity:.72} }
  @keyframes nhi-l6-ring   { 0%,100%{stroke-opacity:.5} 50%{stroke-opacity:.95} }
  @keyframes nhi-l7-spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes nhi-l7-corona { 0%,100%{opacity:.12} 50%{opacity:.42} }
  @keyframes nhi-l8-spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes nhi-l8-core   { 0%,100%{opacity:.85} 50%{opacity:1} }
  @keyframes nhi-l9-spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes nhi-l9-bulge  { 0%,100%{opacity:.85} 50%{opacity:1} }
  @keyframes nhi-hex-blink { 0%,100%{stroke-opacity:.35} 50%{stroke-opacity:.88} }
  @keyframes nhi-lock-pulse{ 0%,100%{opacity:.75;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
`

let _stylesInjected = false
function injectStyles() {
  if (_stylesInjected || typeof document === 'undefined') return
  const el = document.createElement('style')
  el.textContent = GLOBAL_STYLES
  document.head.appendChild(el)
  _stylesInjected = true
}

const HEX = 'M40,5 L70,22 L70,58 L40,75 L10,58 L10,22 Z'
type Renderer = (a: string) => React.ReactElement

const RENDERERS: Renderer[] = [
  // L1 QUANTUM
  (a) => (
    <>
      <path d={HEX} fill={`${a}09`} stroke={a} strokeWidth="1.2" strokeOpacity=".3" />
      <circle cx="40" cy="40" r="5" fill={a} opacity=".9" />
      <circle r="2.5" fill="#94a3b8">
        <animateMotion dur="3.6s" repeatCount="indefinite" path="M60,40 A20,6,0,0,1,20,40 A20,6,0,0,1,60,40" />
      </circle>
    </>
  ),
  // L2 PARTICLE
  (a) => (
    <>
      <path d={HEX} fill={`${a}0a`} stroke={a} strokeWidth="1.2" strokeOpacity=".35" />
      <circle cx="40" cy="40" r="3.5" fill={a} style={{ animation: 'nhi-l2-burst 1.4s ease-in-out infinite' }} />
      <circle r="3.5" fill="#7dd3fc">
        <animateMotion dur="2.8s" repeatCount="indefinite" path="M63,40 A23,23,0,0,1,17,40 A23,23,0,0,1,63,40" />
      </circle>
    </>
  ),
  // L3 PHOTON
  (a) => (
    <>
      <path d={HEX} fill={`${a}0a`} stroke={a} strokeWidth="1.2" strokeOpacity=".4" />
      <polygon points="20,20 20,60 58,40" fill={`${a}06`} stroke={a} strokeWidth="1.5" />
      <line x1="6" y1="40" x2="20" y2="40" stroke={a} strokeWidth="2.5" strokeOpacity=".95" />
    </>
  ),
  // L4 STARSHIP
  (a) => (
    <>
      <path d={HEX} fill={`${a}0a`} stroke={a} strokeWidth="1.2" strokeOpacity=".38" />
      <g style={{ animation: 'nhi-l4-hover 2.8s ease-in-out infinite' }}>
        <ellipse cx="40" cy="46" rx="26" ry="9" fill={`${a}12`} stroke={a} strokeWidth="1.5" />
        <circle cx="40" cy="36" r="4.5" fill={a} opacity=".65" />
      </g>
    </>
  ),
  // L5 COMET
  (a) => (
    <>
      <path d={HEX} fill={`${a}0a`} stroke={a} strokeWidth="1.2" strokeOpacity=".42" />
      <g style={{ animation: 'nhi-l5-drift 4s ease-in-out infinite' }}>
        <path d="M32,32 Q49,43 64,56" fill="none" stroke={a} strokeWidth="3.5" strokeOpacity=".16" />
        <circle cx="28" cy="27" r="5.5" fill={a} opacity=".88" />
      </g>
    </>
  ),
  // L6 PLANET
  (a) => (
    <>
      <path d={HEX} fill={`${a}0c`} stroke={a} strokeWidth="1.3" strokeOpacity=".48" />
      <circle cx="40" cy="40" r="17" fill={`${a}18`} stroke={a} strokeWidth="1.6" />
      <path d="M12,40 A28,9,0,0,1,68,40" fill="none" stroke={a} strokeWidth="3.5" style={{ animation: 'nhi-l6-ring 3.5s ease-in-out infinite' }} />
    </>
  ),
  // L7 STAR
  (a) => (
    <>
      <path d={HEX} fill={`${a}0e`} stroke={a} strokeWidth="1.4" strokeOpacity=".55" style={{ animation: 'nhi-hex-blink 2.5s ease-in-out infinite' }} />
      <polygon points="40,18 42.7,33.5 50.6,29.4 46.5,37.3 62,40 46.5,42.7 50.6,50.6 42.7,46.5 40,62 37.3,46.5 29.4,50.6 33.5,42.7 18,40 33.5,37.3 29.4,29.4 37.3,33.5" fill={a} opacity=".88" style={{ animation: 'nhi-l7-spin 28s linear infinite', transformOrigin: '40px 40px' }} />
      <circle cx="40" cy="40" r="5.5" fill={a} opacity=".95" />
    </>
  ),
  // L8 NEBULA
  (a) => (
    <>
      <path d={HEX} fill={`${a}12`} stroke={a} strokeWidth="1.8" strokeOpacity=".78" style={{ animation: 'nhi-hex-blink 2.5s ease-in-out infinite' }} />
      <g style={{ animation: 'nhi-l8-spin 22s linear infinite', transformOrigin: '40px 40px' }}>
        <path d="M40,40 Q46,28 58,20 Q64,15 67,11" fill="none" stroke={a} strokeWidth="3.5" strokeOpacity=".52" />
        <circle cx="52" cy="27" r="3" fill="#fbbf24" opacity=".82" />
      </g>
      <circle cx="40" cy="40" r="8" fill={a} opacity=".9" style={{ animation: 'nhi-l8-core 2s ease-in-out infinite' }} />
    </>
  ),
  // L9 COSMOS
  (a) => (
    <>
      <path d={HEX} fill={`${a}16`} stroke={a} strokeWidth="2.2" strokeOpacity=".92" style={{ animation: 'nhi-hex-blink 2.5s ease-in-out infinite' }} />
      <g style={{ animation: 'nhi-l9-spin 28s linear infinite', transformOrigin: '40px 40px' }}>
        <path d="M40,40 Q44,29 52,21 Q60,14 66,9" fill="none" stroke={a} strokeWidth="4" strokeOpacity=".55" />
        <circle cx="53" cy="24" r="2.8" fill={a} opacity=".82" />
      </g>
      <circle cx="40" cy="40" r="8" fill={a} opacity=".9" style={{ animation: 'nhi-l9-bulge 2.5s ease-in-out infinite' }} />
    </>
  ),
]

export function NodeHexIcon({ config, size = 64, showCode = true, className = '', isInteractive = false, onClick }: NodeHexIconProps) {
  injectStyles()
  const [hovered, setHovered] = useState(false)
  const idx = Math.min(Math.max(config.level - 1, 0), 8)
  const accent = config.color
  const glowSize = config.level >= 7 ? config.level * 2 : 0

  return (
    <div className={`relative flex flex-col items-center gap-1 ${isInteractive ? 'cursor-pointer' : ''} ${className}`}
      style={{ width: size, transform: hovered && isInteractive ? 'scale(1.08)' : undefined, transition: 'transform 0.25s ease' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}>
      <svg viewBox="0 0 80 80" width={size} height={size} style={{ overflow: 'visible', filter: glowSize > 0 ? `drop-shadow(0 0 ${glowSize}px ${accent}70)` : undefined }}>
        {RENDERERS[idx](accent)}
      </svg>
      {showCode && <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: Math.max(size * 0.16, 9), fontWeight: 700, color: accent, opacity: 0.9 }}>{config.code}</span>}
    </div>
  )
}

export function MiniNodeHexIcon({ config, size = 24 }: { config: NodeLevelConfig; size?: number }) {
  injectStyles()
  const idx = Math.min(Math.max(config.level - 1, 0), 8)
  return <svg viewBox="0 0 80 80" width={size} height={size} style={{ overflow: 'visible', display: 'block' }}>{RENDERERS[idx](config.color)}</svg>
}
