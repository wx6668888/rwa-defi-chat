import { supabase } from '../supabase'

export const userService = {
  async getOrCreate(walletAddress: string) {
    let { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('wallet_address', walletAddress)
      .single()
    
    if (!user) {
      const { data: newUser } = await supabase
        .from('users')
        .insert({ wallet_address: walletAddress })
        .select()
        .single()
      user = newUser
    }
    
    return user
  },

  async getNotifications(userId: string) {
    const { data } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(20)
    
    return data || []
  }
}
