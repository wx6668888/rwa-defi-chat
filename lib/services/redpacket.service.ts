import { supabase } from '../supabase'

export const redPacketService = {
  async create(creatorId: string, channelId: string, amount: number, count: number) {
    const { data: message } = await supabase
      .from('messages')
      .insert({
        channel_id: channelId,
        user_id: creatorId,
        content: 'Red Packet',
        message_type: 'red_packet'
      })
      .select()
      .single()

    const { data: redPacket } = await supabase
      .from('red_packets')
      .insert({
        message_id: message.id,
        creator_id: creatorId,
        total_amount: amount,
        total_count: count
      })
      .select()
      .single()

    return redPacket
  },

  async claim(redPacketId: string, userId: string) {
    const { data: redPacket } = await supabase
      .from('red_packets')
      .select('*')
      .eq('id', redPacketId)
      .single()

    if (redPacket.claimed_count >= redPacket.total_count) {
      throw new Error('Red packet fully claimed')
    }

    const amount = redPacket.total_amount / redPacket.total_count

    await supabase.from('red_packet_claims').insert({
      red_packet_id: redPacketId,
      user_id: userId,
      amount
    })

    await supabase
      .from('red_packets')
      .update({ claimed_count: redPacket.claimed_count + 1 })
      .eq('id', redPacketId)

    return amount
  }
}
