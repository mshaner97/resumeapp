import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div>MENU</div>
        <div>PROJ. 1</div>
        <div>PROJ. 2</div>
        <div>PROJ. 3</div>
        <div>SEARCHBAR</div>
      </header>
      <div>
        <div className='picturebox'>PICTURE</div>
        <div className='biobox'>BIO</div>
      </div>
      <div> 3: links and whatnot?</div>
    </>
  )
}

export default App

