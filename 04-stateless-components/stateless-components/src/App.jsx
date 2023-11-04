import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  

  
}

function Exo1(){
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  )
}
function Exo2(){
  let url = "./public/spdgar.jpg"
  return (
    <>
    <h1>SPD-GAR-002</h1>
    <img src={url} alt="" />
    </>
  )
}

export default App
export {Exo1,Exo2}
