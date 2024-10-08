import { YouAreReady } from '@/components/sections/YouAreReady'
import { MainBanner } from './components/sections/MainBanner'
import { WhatYouWillGain } from '@/components/sections/WhatYouWillGain'
import { WhyChoseUs } from '@/components/sections/WhyChoseUs'
import { TransformYourLife } from '@/components/sections/TransformYourLife'
import { Footer } from '@/components/sections/Footer'
import './App.css'

function App() {
  return (
  <main className='bg-black overflow-x-hidden'>
    <MainBanner/>
    <YouAreReady/>
    <WhatYouWillGain/>
    <WhyChoseUs/>
    <TransformYourLife/>
    <Footer/>
  </main>
  )
}

export default App
