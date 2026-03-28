import { useEffect, useState } from 'react'

export function usePersistentState<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(initial)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null
    if (stored) setState(JSON.parse(stored))
  }, [key])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState] as const
}
