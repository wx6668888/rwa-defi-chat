"use client";

import { NODE_LEVELS } from "@/lib/constants";

export function NodeHexagonGrid() {
  // Honeycomb layout positions (9 hexagons)
  const positions = [
    { x: 0, y: 0 },      // Center (L5)
    { x: -60, y: -35 },  // Top-left (L4)
    { x: 60, y: -35 },   // Top-right (L6)
    { x: -120, y: 0 },   // Left (L3)
    { x: 120, y: 0 },    // Right (L7)
    { x: -60, y: 35 },   // Bottom-left (L2)
    { x: 60, y: 35 },    // Bottom-right (L8)
    { x: -120, y: 70 },  // Far bottom-left (L1)
    { x: 0, y: 70 },     // Far bottom-center (L9)
  ];

  return (
    <div className="relative h-[280px] w-[280px]">
      {NODE_LEVELS.map((node, index) => {
        const pos = positions[index];
        const isHighLevel = node.level >= 8;
        
        return (
          <div
            key={node.level}
            className="absolute"
            style={{
              left: `calc(50% + ${pos.x}px)`,
              top: `calc(50% + ${pos.y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className={`relative flex h-12 w-12 items-center justify-center transition-all duration-300 ${
                isHighLevel ? 'animate-pulse' : ''
              }`}
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundColor: node.level === 1 ? '#1a1a2e' : `${node.color}20`,
                border: `1px solid ${node.color}`,
                opacity: node.level <= 7 ? 0.8 : 1,
              }}
            >
              <span className="text-xl">{node.emoji}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
