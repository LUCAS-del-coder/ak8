export default function PromotionsSection() {
  const promotions = [
    {
      icon: '🎁',
      title: '歡迎獎金',
      description: '首次存款可獲得 100% 獎金，最高 NPR 50,000'
    },
    {
      icon: '🔄',
      title: '每日返水',
      description: '所有遊戲均享 0.8% 無上限返水，每日自動派發'
    },
    {
      icon: '👑',
      title: 'VIP 專屬',
      description: 'VIP 會員享受專屬獎金、生日禮金和專人客服'
    },
    {
      icon: '🎰',
      title: '免費旋轉',
      description: '每週三獲得 50 次免費旋轉機會'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-dark-gray" id="promotions">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gradient mb-12">
          最新優惠活動
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-background-dark p-6 rounded-2xl text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-red/20 transition-all duration-300 cursor-pointer"
            >
              <div className="text-6xl mb-4">{promo.icon}</div>
              <h3 className="text-xl font-bold text-secondary-gold mb-3">
                {promo.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {promo.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            查看所有優惠
          </button>
        </div>
      </div>
    </section>
  )
}
