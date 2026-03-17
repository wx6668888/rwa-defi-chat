-- Initial seed data for RWA DeFi Chat

-- Insert default channels
INSERT INTO channels (id, name, description, icon, member_count) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Global Community', 'Welcome to RWA Protocol', '🌍', 8432),
  ('00000000-0000-0000-0000-000000000002', 'Trading Signals', 'Real-time market insights', '📊', 3241),
  ('00000000-0000-0000-0000-000000000003', 'Staking Pool', 'Discuss staking strategies', '💎', 1876);

-- Insert sample user (for testing)
INSERT INTO users (id, wallet_address, username, level, total_staked, referral_code) VALUES
  ('00000000-0000-0000-0000-000000000001', '0x0000000000000000000000000000000000000000', 'System', 1, 0, 'SYSTEM');
