"use client"

import { useState } from 'react'
import { useApp } from '@/lib/context/AppContext'
import { userService } from '@/lib/services/user.service'

export function WalletConnect() {
  const { user, setUser } = useApp()
  const [connecting, setConnecting] = useState(false)

  const connectWallet = async () => {
    setConnecting(true)
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        })
        const address = accounts[0]
        localStorage.setItem('wallet_address', address)
        const userData = await userService.getOrCreate(address)
        setUser(userData)
      } else {
        alert('Please install MetaMask')
      }
    } catch (error) {
      console.error('Wallet connection failed:', error)
    } finally {
      setConnecting(false)
    }
  }

  if (user) {
    return (
      <div className="text-xs text-text-secondary">
        {user.wallet_address.slice(0, 6)}...{user.wallet_address.slice(-4)}
      </div>
    )
  }

  return (
    <button
      onClick={connectWallet}
      disabled={connecting}
      className="px-4 py-2 bg-plasma-cyan text-void rounded-lg font-bold text-sm"
    >
      {connecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  )
}
