'use client'

import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    // In production, this would open a real chat widget
    alert('客服聊天功能 - 我們的客服團隊隨時為您服務！\n\nCustomer support - Our team is ready to help you 24/7!')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-primary-red to-secondary-gold rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 animate-pulse-slow"
      aria-label="打開即時客服聊天"
    >
      <span className="text-4xl" aria-hidden="true">💬</span>
    </button>
  )
}
