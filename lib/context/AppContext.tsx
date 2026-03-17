"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { userService } from '@/lib/services/user.service'

interface User {
  id: string
  wallet_address: string
  username?: string
  level: number
}

interface AppContextType {
  user: User | null
  setUser: (user: User | null) => void
  isConnected: boolean
}

const AppContext = createContext<AppContextType>({
  user: null,
  setUser: () => {},
  isConnected: false
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const savedAddress = localStorage.getItem('wallet_address')
    if (savedAddress) {
      userService.getOrCreate(savedAddress).then(setUser)
    }
  }, [])

  return (
    <AppContext.Provider value={{ user, setUser, isConnected: !!user }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
