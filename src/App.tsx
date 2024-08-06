import { YouAreReady } from '@/components/sections/YouAreReady'
import { MainBanner } from './components/sections/MainBanner'
import { WhatYouWillGain } from '@/components/sections/WhatYouWillGain'
import { WhyChoseUs } from '@/components/sections/WhyChoseUs'
import { TransformYourLife } from '@/components/sections/TransformYourLife'
import './App.css'

function App() {
  return (
  <main className='bg-black'>
    <MainBanner/>
    <YouAreReady/>
    <WhatYouWillGain/>
    <WhyChoseUs/>
    <TransformYourLife/>
  </main>
  )
}

export default App
