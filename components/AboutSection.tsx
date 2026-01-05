export default function AboutSection() {
  const features = [
    {
      icon: '🔒',
      title: '安全可靠',
      description: '採用最先進的加密技術，確保您的資金和個人資訊絕對安全'
    },
    {
      icon: '🎮',
      title: '2000+ 遊戲',
      description: '來自 20+ 頂級供應商的海量遊戲選擇，滿足所有玩家需求'
    },
    {
      icon: '💰',
      title: '豐厚獎金',
      description: '新會員可獲得高達 NPR 50,000 的歡迎獎金，還有每日返水優惠'
    },
    {
      icon: '⚡',
      title: '快速提款',
      description: '支持 eSewa、Khalti、IME Pay 等本地支付方式，提款即時到賬'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="container mx-auto max-w-6xl">
        <article className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-8">
            AK8 - 尼泊爾最值得信賴的線上賭場
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            歡迎來到 AK8，您在尼泊爾的終極線上遊戲目的地。作為業界最值得信賴的品牌，AK8 為您帶來多樣化的頂級遊戲集合，從刺激的老虎機遊戲到身臨其境的真人娛樂場體驗。與我們一起探索捕魚遊戲的樂趣，深入體驗令人腎上腺素飆升的體育博彩世界，並發現無數其他引人入勝的選擇。
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background-dark-gray p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary-gold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Game Categories */}
          <div className="text-left bg-background-dark-gray p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">我們的遊戲類別</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-secondary-gold mr-3">▸</span>
                <div>
                  <strong className="text-white">老虎機遊戲：</strong>
                  超過 1500 款老虎機，包括 Pragmatic Play、Jili、PG Soft 等知名品牌，RTP 高達 98%
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-3">▸</span>
                <div>
                  <strong className="text-white">真人娛樂場：</strong>
                  真人荷官百家樂、輪盤、二十一點，24/7 全天候營業
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-3">▸</span>
                <div>
                  <strong className="text-white">體育博彩：</strong>
                  涵蓋足球、板球、籃球等 30+ 種體育項目，賠率業界領先
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-3">▸</span>
                <div>
                  <strong className="text-white">板球博彩：</strong>
                  專為尼泊爾玩家設計，支持 IPL、PSL、CPL 等熱門聯賽投注
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-3">▸</span>
                <div>
                  <strong className="text-white">捕魚遊戲：</strong>
                  刺激有趣的捕魚機台，高爆分機會，輕鬆贏取大獎
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-3">▸</span>
                <div>
                  <strong className="text-white">電子競技：</strong>
                  Dota 2、CS:GO、LOL 等熱門電競賽事投注
                </div>
              </li>
            </ul>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed mt-12">
            在 AK8，我們優先考慮您的享受和滿意度，提供安全無縫的遊戲環境。加入我們，開啟前所未有的娛樂冒險之旅，只有在 AK8——值得信賴的尼泊爾線上賭場典範。
          </p>
        </article>
      </div>
    </section>
  )
}
