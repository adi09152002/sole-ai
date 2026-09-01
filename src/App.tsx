import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SimpleFlow } from './components/Simple flow'
import { OneRealClose } from './components/OneRealClose'
import {ReconciliationFlow} from './components/ReconciliationFlow'
import { FutureSolutions } from './components/FutureSolutions'
import { OurApproach } from './components/OurApproach'
import { FinalCtaFooter } from './components/FinalCtaFooter'
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <SimpleFlow />
      <OneRealClose />
      <ReconciliationFlow/>
      <FutureSolutions/>
      <OurApproach/>
      <FinalCtaFooter/>
      {/* Add each new section here, in page order. */}
    </>
  )
}
