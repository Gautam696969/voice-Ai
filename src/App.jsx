import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import FeatureSection from './components/FeatureSection/FeatureSection.jsx'
import QuickstartSection from'./components/QuickstartSection/QuickstartSection.jsx'
import UseCasesSection from './components/UseCasesSection/UseCasesSection.jsx'
import IntegrationsSection from './components/IntegrationsSection/IntegrationsSection.jsx' 
import LiveDemoSection from './components/LiveDemoSection/LiveDemoSection.jsx'
import SecuritySection from './components/SecuritySection/SecuritySection.jsx'
import DevSupportSection from './components/DevSupportSection/DevSupportSection.jsx'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection.jsx'
import PerformanceSection from './components/PerformanceSection/PerformanceSection.jsx'
import CTASection from './components/CTASection/CTASection.jsx'
import MobileSDKSection from './components/MobileSDKSection/MobileSDKSection.jsx'

import './App.css'

function App() {
 

  return (
    <>
      <div>
      <Navbar/>


        <HeroSection/>
        <FeatureSection/>
        <QuickstartSection/>
        <UseCasesSection/>
        <IntegrationsSection/>
        <LiveDemoSection/>
        <SecuritySection/>
        <DevSupportSection/>
        <TestimonialsSection/>
        <PerformanceSection/>
        <CTASection/>
        <MobileSDKSection/>
        
      </div>
     
    </>
  )
}

export default App
