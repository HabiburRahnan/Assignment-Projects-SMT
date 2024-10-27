import Banner from "./Banner/Banner"
import HeroSection from "./Banner/HeroSction/HeroSection"
import Benefits from "./Benefits/Benefits"
import OthrBenefits from "./OtherBenefits/OthrBenefits"
import Process from "./Process/Process"
import Services from "./Services/Services"

function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="bg-[#F5F5F5]">
        <HeroSection></HeroSection>
        <Services></Services>
        <Benefits></Benefits>
        <Process></Process>
        <OthrBenefits></OthrBenefits>
      </div>
    </div>
  )
}

export default Home