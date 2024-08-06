import './App.css'
import { Limiter } from './components/Limiter'
import { MainBanner } from './components/sections/MainBanner'

function App() {
  return (
  <Limiter>
    <MainBanner/>
  </Limiter>
  )
}

export default App
