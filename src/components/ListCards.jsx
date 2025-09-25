import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

function ListCards({ listData }) {

   const listRef = useRef(0);
   const buttonRef = useRef(0);

   const [isOpen, setOpen] = useState(localStorage.getItem(listData.title) === 'true' ? true : false)


   const clickButton = () => {
      setOpen(e => !e)
      localStorage.setItem(listData.title, !isOpen)
   }

   return (
      <>
         <div
            onClick={clickButton}
            className='flex w-[100%] justify-between text-main-white pt-6 pb-4 cursor-pointer'
         >
            <h2 className='text-3xl'>{listData.title}</h2>
            <button className={`transition-all cursor-pointer ${isOpen ? 'rotate-0' : 'rotate-90'}`} ref={buttonRef}><img src="/icons/arrow.svg" alt="arrow" /></button>
         </div>

         <div className={`flex flex-wrap justify-between gap-6 overflow-hidden transition-all`} ref={listRef} style={{
            maxHeight: isOpen ? `90dvh` : '0px'
         }}>
            <>
                  {listData.equipments.map((data) => (
                     <Card
                        data={data}
                     />
                  ))}
            </>
         </div>
      </>
   )
}

export default ListCards