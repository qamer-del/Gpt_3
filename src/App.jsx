import React from 'react'

import { Componies, Hero, Navbar, WGT ,Future, REA, GetStared, Blogs, Rigester, Footer } from './components'

const App = () => {
  return (
    <div className=' overflow-hidden bg-primary'>
      <Navbar/>
      <Hero/>
      <Componies/>
      <WGT/>
      <Future/>
      <Rigester/>
      <GetStared/>
      <Blogs/>
      <REA/>
      <Footer/>
    </div>
  )
}
export default App