import Banner from "./Banner/Banner"
import HeroSection from "./Banner/HeroSction/HeroSection"

function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="bg-[#F5F5F5]">
        <HeroSection></HeroSection>
      </div>
    </div>
  )
}

export default Home