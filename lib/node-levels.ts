export interface NodeLevelConfig {
  level: number;
  code: string;
  name: string;
  emoji: string;
  color: string;
}

export const NODE_LEVELS: NodeLevelConfig[] = [
  { level: 1, code: "L1", name: "Quantum", emoji: "⚡", color: "#64748b" },
  { level: 2, code: "L2", name: "Particle", emoji: "🔬", color: "#06b6d4" },
  { level: 3, code: "L3", name: "Photon", emoji: "✨", color: "#00f5d4" },
  { level: 4, code: "L4", name: "Starship", emoji: "🛸", color: "#38bdf8" },
  { level: 5, code: "L5", name: "Comet", emoji: "☄️", color: "#6366f1" },
  { level: 6, code: "L6", name: "Planet", emoji: "🪐", color: "#8b5cf6" },
  { level: 7, code: "L7", name: "Star", emoji: "⭐", color: "#c084fc" },
  { level: 8, code: "L8", name: "Nebula", emoji: "🌌", color: "#f59e0b" },
  { level: 9, code: "L9", name: "Cosmos", emoji: "💫", color: "#f59e0b" },
];
