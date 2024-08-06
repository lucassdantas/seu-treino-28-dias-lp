import { YouAreReady } from '@/components/sections/YouAreReady'
import { MainBanner } from './components/sections/MainBanner'
import { WhatYouWillGain } from '@/components/sections/WhatYouWillGain'
import { WhyChoseUs } from '@/components/sections/WhyChoseUs'
import './App.css'

function App() {
  return (
  <main className='bg-black'>
    <MainBanner/>
    <YouAreReady/>
    <WhatYouWillGain/>
    <WhyChoseUs/>
  </main>
  )
}

export default App
