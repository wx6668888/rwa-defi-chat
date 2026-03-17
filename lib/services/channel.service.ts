import { supabase } from '../supabase'

export const channelService = {
  async getAll() {
    const { data, error } = await supabase
      .from('channels')
      .select('*')
      .order('member_count', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getMessages(channelId: string) {
    const { data, error } = await supabase
      .from('messages')
      .select(`
        *,
        user:users(wallet_address, username, level)
      `)
      .eq('channel_id', channelId)
      .order('created_at', { ascending: true })
      .limit(50)
    
    if (error) throw error
    return data
  },

  async sendMessage(channelId: string, userId: string, content: string) {
    const { data, error } = await supabase
      .from('messages')
      .insert({
        channel_id: channelId,
        user_id: userId,
        content,
        message_type: 'text'
      })
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  subscribeToMessages(channelId: string, callback: (message: any) => void) {
    return supabase
      .channel(`channel:${channelId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `channel_id=eq.${channelId}`
      }, callback)
      .subscribe()
  }
}
