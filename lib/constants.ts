// Node level configuration
export const NODE_LEVELS = [
  { level: 1, name: "Quantum", emoji: "⚡", color: "#64748b" },
  { level: 2, name: "Particle", emoji: "🔬", color: "#06b6d4" },
  { level: 3, name: "Photon", emoji: "✨", color: "#00f5d4" },
  { level: 4, name: "Starship", emoji: "🛸", color: "#38bdf8" },
  { level: 5, name: "Comet", emoji: "☄️", color: "#6366f1" },
  { level: 6, name: "Planet", emoji: "🪐", color: "#8b5cf6" },
  { level: 7, name: "Star", emoji: "⭐", color: "#c084fc" },
  { level: 8, name: "Nebula", emoji: "🌌", color: "#f59e0b" },
  { level: 9, name: "Cosmos", emoji: "💫", color: "#f59e0b" },
] as const;

export type NodeLevel = typeof NODE_LEVELS[number];
