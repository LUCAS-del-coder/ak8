import TopBar from '@/components/TopBar'
import CategoryNav from '@/components/CategoryNav'
import GamesSection from '@/components/GamesSection'
import AppDownload from '@/components/AppDownload'
import AboutSection from '@/components/AboutSection'
import PromotionsSection from '@/components/PromotionsSection'

export default function Home() {
  return (
    <>
      <TopBar />
      <CategoryNav />
      <GamesSection />
      <AppDownload />
      <AboutSection />
      <PromotionsSection />
    </>
  )
}
