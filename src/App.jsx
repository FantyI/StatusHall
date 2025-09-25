import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { cardsData } from './data'
import ListCards from './components/ListCards'


function App() {

  

  return (
    <>
      <div className='styleDefaultPages' >
        <div className='initialBackground' ></div>
        {cardsData.map(listData => (
          <>
            <ListCards listData={listData} />
          </>
        ))}
      </div>
    </>
  )
}

export default App

              {/* <Card
                img={data.img}
                title={data.title}
                weight={data.weight}
                storageKey={data.storageKey}
              /> */}