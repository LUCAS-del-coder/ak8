'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background-dark border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-4xl sm:text-5xl font-bold text-primary-red">
              AK<span className="text-secondary-gold">8</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/games" className="nav-link">
              遊戲
            </Link>
            <Link href="/promotions" className="nav-link">
              優惠活動
            </Link>
            <Link href="/vip" className="nav-link">
              VIP會員
            </Link>
            <Link href="/affiliate" className="nav-link">
              聯盟計劃
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">
              登入
            </button>
            <button className="btn-primary">
              註冊
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link href="/games" className="text-white hover:text-primary-red">
                遊戲
              </Link>
              <Link href="/promotions" className="text-white hover:text-primary-red">
                優惠活動
              </Link>
              <Link href="/vip" className="text-white hover:text-primary-red">
                VIP會員
              </Link>
              <Link href="/affiliate" className="text-white hover:text-primary-red">
                聯盟計劃
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary w-full">登入</button>
                <button className="btn-primary w-full">註冊</button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-white hover:text-primary-red transition-colors duration-300 relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-red);
          transition: width 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  )
}
