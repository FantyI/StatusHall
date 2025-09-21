import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

function PageCard() {

  const {state: {title, info}} = useLocation()

  console.log(title);
  

  return (
    <div className='styleDefaultPages '>
      <h1 className='text-3xl'>{title}</h1>

      <div className='infoList pl-3 pt-6'>
        <div>
          <h2>Техника выполнения:</h2>
          <p>{info.technique}</p>
        </div>

        <div>
          <h2>Результат:</h2>
          <p>{info.result}</p>
        </div>

        <div>
          <h2>Задействующие мышцы:</h2>
          <p className='flex flex-wrap gap-2'>{info.areas.split(', ').map((muscle) => (
            <span className='underline underline-offset-4 '>{muscle}</span>
          ))}</p>
        </div>
      </div>
    </div>
  )
}

export default PageCard