import Link from 'next/link'

export default function Footer() {
  const paymentMethods = ['VISA', 'MC', 'eSewa', 'Khalti', 'IME', 'BTC', 'USDT', 'ETH']

  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Games */}
          <div>
            <h3 className="text-secondary-gold font-bold text-lg mb-4">遊戲</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/games/slots" className="text-gray-400 hover:text-white transition-colors">
                老虎機
              </Link>
              <Link href="/games/live-casino" className="text-gray-400 hover:text-white transition-colors">
                真人娛樂場
              </Link>
              <Link href="/games/sports" className="text-gray-400 hover:text-white transition-colors">
                體育博彩
              </Link>
              <Link href="/games/cricket" className="text-gray-400 hover:text-white transition-colors">
                板球博彩
              </Link>
              <Link href="/games/fishing" className="text-gray-400 hover:text-white transition-colors">
                捕魚遊戲
              </Link>
              <Link href="/games/esports" className="text-gray-400 hover:text-white transition-colors">
                電子競技
              </Link>
            </nav>
          </div>

          {/* Promotions */}
          <div>
            <h3 className="text-secondary-gold font-bold text-lg mb-4">優惠活動</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/promotions/welcome" className="text-gray-400 hover:text-white transition-colors">
                歡迎獎金
              </Link>
              <Link href="/promotions/daily" className="text-gray-400 hover:text-white transition-colors">
                每日獎勵
              </Link>
              <Link href="/promotions/cashback" className="text-gray-400 hover:text-white transition-colors">
                返水優惠
              </Link>
              <Link href="/vip" className="text-gray-400 hover:text-white transition-colors">
                VIP 計劃
              </Link>
            </nav>
          </div>

          {/* About */}
          <div>
            <h3 className="text-secondary-gold font-bold text-lg mb-4">關於我們</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                關於 AK8
              </Link>
              <Link href="/license" className="text-gray-400 hover:text-white transition-colors">
                營業執照
              </Link>
              <Link href="/responsible-gaming" className="text-gray-400 hover:text-white transition-colors">
                負責任博彩
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                條款與條件
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                隱私政策
              </Link>
            </nav>
          </div>

          {/* Affiliate */}
          <div>
            <h3 className="text-secondary-gold font-bold text-lg mb-4">聯盟計劃</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/affiliate/program" className="text-gray-400 hover:text-white transition-colors">
                聯盟計劃
              </Link>
              <Link href="/affiliate/commission" className="text-gray-400 hover:text-white transition-colors">
                佣金結構
              </Link>
              <Link href="/affiliate/partners" className="text-gray-400 hover:text-white transition-colors">
                合作夥伴
              </Link>
            </nav>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-secondary-gold font-bold text-lg mb-4">支付方式</h3>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="bg-white text-black text-xs font-bold px-3 py-2 rounded"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 mb-2">
            &copy; 2025 AK8 - Trusted Online Casino Nepal. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            18+ 僅限成年人 | 負責任博彩 | 受尼泊爾博彩監管機構許可
          </p>
        </div>
      </div>
    </footer>
  )
}
