import { YouAreReady } from '@/components/sections/YouAreReady'
import './App.css'
import { Limiter } from './components/Limiter'
import { MainBanner } from './components/sections/MainBanner'
import { WhatYouWillGain } from '@/components/sections/WhatYouWillGain'

function App() {
  return (
  <main className='bg-black'>
    <MainBanner/>
    <YouAreReady/>
    <WhatYouWillGain/>
  </main>
  )
}

export default App
