"use client"

import { useState, useEffect } from 'react'
import { channelService } from '@/lib/services/channel.service'

export function useMessages(channelId: string) {
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMessages()
    const subscription = channelService.subscribeToMessages(channelId, (payload) => {
      setMessages(prev => [...prev, payload.new])
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [channelId])

  const loadMessages = async () => {
    try {
      const data = await channelService.getMessages(channelId)
      setMessages(data)
    } finally {
      setLoading(false)
    }
  }

  return { messages, loading }
}
