'use client'

import { useState } from 'react'

export default function TopBar() {
  const [language, setLanguage] = useState('zh-TW')

  return (
    <div className="bg-gradient-to-r from-primary-red to-primary-dark-red py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Language Selector */}
          <div className="flex items-center">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-black/30 text-white border border-white/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-gold cursor-pointer"
            >
              <option value="zh-TW">中文 (繁體)</option>
              <option value="en">English</option>
              <option value="ne">नेपाली</option>
            </select>
          </div>

          {/* Currency Info */}
          <div className="flex items-center space-x-4">
            <span className="text-white text-sm hidden sm:block">您的遊戲貨幣</span>
            <button className="bg-white text-primary-red px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              💰 NPR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
