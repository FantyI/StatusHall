import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

function Card({ data }) {
   const {title} = data;
   // useEffect(() => {
   //    localStorage.setItem(title, num)

   //    return () => {
   //    }
   // }, [])

   const [num, setNum] = useState(parseInt(localStorage.getItem(title)) || 0)

   const conservation = (value) => {
      localStorage.setItem(title, value)
      setNum(value)
   }

   const changeValue = (value) => {
      const parseValue = parseInt(value)

      if (typeof value === 'string'){
         conservation(0)
      }

      if (!isNaN(parseValue)) {
         // if (parseValue > 300) {
         //    return conservation('врешь')
         // }

         conservation(parseValue)
      } else if (value === '') {
         conservation(0)
      }
   }

   const Minus = () => {
      if(num <= 0){         
         return
      }

      conservation(num - 1)
   }

   const Plus = () => {
      conservation(num + 1)
   }
   

   return (
      <div className='w-[97%] border p-[10px] m-auto rounded-2xl flex justify-between items-center  border-[#454545] text-main-white'>
         <NavLink to={`/page/${data}`} state={data} className='text-[20px] w-[65%]'>{title}</NavLink>

         <div className='text-2xl flex items-center gap-3 !font-daysOne !font-normal'>
            <button onClick={Minus} className='counter'>-</button>
            <input
               type="text"
               value={num}
               className='border-0 w-11 text-center outline-0'
               onChange={e => changeValue(e.target.value)} />
            <button onClick={Plus} className='counter'>+</button>
         </div>
      </div>
   )
}

export default Card