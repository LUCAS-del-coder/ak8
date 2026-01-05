'use client'

import { useState } from 'react'

const categories = [
  { id: 'slots', icon: '🎰', label: '老虎機' },
  { id: 'live-casino', icon: '🎲', label: '真人娛樂場' },
  { id: 'cricket', icon: '🏏', label: '板球' },
  { id: 'sports', icon: '⚽', label: '體育' },
  { id: 'esports', icon: '🎮', label: '電子競技' },
  { id: 'fishing', icon: '🎣', label: '捕魚' },
  { id: 'other', icon: '🎪', label: '其他' },
]

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState('slots')

  return (
    <nav className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-btn min-w-[120px] ${
                activeCategory === category.id ? 'active' : ''
              }`}
              aria-pressed={activeCategory === category.id}
            >
              <span className="text-3xl" aria-hidden="true">
                {category.icon}
              </span>
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
