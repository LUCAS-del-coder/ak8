export default function AppDownload() {
  return (
    <section className="mx-4 sm:mx-6 lg:mx-8 my-12" id="download-app">
      <div className="bg-gradient-to-r from-primary-red to-primary-dark-red rounded-3xl p-8 sm:p-12 lg:p-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
                體驗最佳遊戲
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
                立即下載我們的應用程式！
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                {/* Google Play Badge */}
                <div className="bg-black rounded-xl p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-4xl">▶</span>
                  <div className="text-left">
                    <div className="text-xs">ANDROID APP ON</div>
                    <div className="text-lg font-bold">Google play</div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="bg-white rounded-xl p-4 w-40 h-40 flex items-center justify-center">
                  <div className="text-center text-black">
                    <div className="text-6xl mb-2">⊞</div>
                    <div className="text-xs font-semibold">
                      掃描 QR Code<br />立即下載
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="flex-1 flex items-center justify-center gap-6">
              {/* Phone Mockup */}
              <div className="w-48 h-96 bg-gradient-to-br from-background-dark-gray to-background-medium-gray rounded-[3rem] border-4 border-gray-700 shadow-2xl" />

              {/* Welcome Badge */}
              <div className="text-center">
                <div className="text-7xl sm:text-8xl mb-4">🎰</div>
                <div className="text-4xl sm:text-5xl font-bold text-yellow-400">
                  歡迎來到<br />AK8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
