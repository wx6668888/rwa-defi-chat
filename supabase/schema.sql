-- RWA DeFi Chat Database Schema

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wallet_address TEXT UNIQUE NOT NULL,
  username TEXT,
  avatar_url TEXT,
  level INTEGER DEFAULT 1,
  total_staked DECIMAL DEFAULT 0,
  referral_code TEXT UNIQUE,
  referred_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Channels table
CREATE TABLE channels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  member_count INTEGER DEFAULT 0,
  is_private BOOLEAN DEFAULT false,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  channel_id UUID REFERENCES channels(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  content TEXT,
  message_type TEXT DEFAULT 'text', -- text, red_packet, lucky_draw
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Red Packets table
CREATE TABLE red_packets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  message_id UUID REFERENCES messages(id) ON DELETE CASCADE,
  creator_id UUID REFERENCES users(id),
  total_amount DECIMAL NOT NULL,
  total_count INTEGER NOT NULL,
  claimed_count INTEGER DEFAULT 0,
  token_symbol TEXT DEFAULT 'USDT',
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Red Packet Claims table
CREATE TABLE red_packet_claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  red_packet_id UUID REFERENCES red_packets(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  amount DECIMAL NOT NULL,
  claimed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Staking table
CREATE TABLE staking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  amount DECIMAL NOT NULL,
  apy DECIMAL DEFAULT 40,
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active' -- active, completed, withdrawn
);

-- Notifications table
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  type TEXT NOT NULL, -- red_packet, message, lucky_draw, staking, system
  title TEXT NOT NULL,
  description TEXT,
  is_read BOOLEAN DEFAULT false,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_messages_channel ON messages(channel_id, created_at DESC);
CREATE INDEX idx_messages_user ON messages(user_id);
CREATE INDEX idx_notifications_user ON notifications(user_id, created_at DESC);
CREATE INDEX idx_users_wallet ON users(wallet_address);
CREATE INDEX idx_red_packets_creator ON red_packets(creator_id);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE red_packets ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies (allow authenticated users to read/write)
CREATE POLICY "Users can read all users" ON users FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can read all channels" ON channels FOR SELECT USING (true);
CREATE POLICY "Users can create channels" ON channels FOR INSERT WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can read messages in channels" ON messages FOR SELECT USING (true);
CREATE POLICY "Users can create messages" ON messages FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read notifications" ON notifications FOR SELECT USING (auth.uid() = user_id);
