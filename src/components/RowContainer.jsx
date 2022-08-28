import React, { useEffect, useRef, useState } from 'react'
import {MdShoppingBasket} from "react-icons/md"
import {motion} from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionTypes } from '../context/reducer'
const RowContainer = ({flag,data,scrollValue}) => {
        const RowContainer=useRef();
        const [items,setItems]=useState([])

        const [{cartItems},dispatch]=useStateValue();
        useEffect(()=>{
                RowContainer.current.scrollLeft+=scrollValue;
        },[scrollValue])

        useEffect(()=>{
                addtocart();
        },[items])

        const addtocart=(item)=>{
                dispatch({
                        type:actionTypes.SET_CARTITEMS,
                        cartItems:items
                })
                localStorage.setItem('cartItems',JSON.stringify(items))
        }
  return (
    <div
    ref={RowContainer}
    className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
    }`} >
       {data&&data.length >0 ? (data.map(item=>(
         <div key={item?.id} className='w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverplay rounded-lg py-2 px-4 my-12 backdrop-blur-lg
         hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
        <div className='w-full flex items-center justify-between'>  
               <motion.div whileTap={{scale: 1.2}} className="w-32 h-32 -mt-8 drop-shadow-2xl">
               <img 
                src={item?.imageURL}
                alt=''
                className='w-full h-full object-contain'
                />
               </motion.div>
                <motion.div 
                whileTap={{scale: 0.75}}
                className='w-8 h-8 rounded-full bg-red-600 flex items-center
                justify-center cursor-pointer hover:shadow-md'
                onClick={()=>setItems([...cartItems,item])}
                >
                        <MdShoppingBasket className='text-white' />
                </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
                <p className='text-textColor font-semibold text-base
                md:text-lg'>
                       {item?.title}
                </p>
                <p className='mt-1 text-sm text-gray-500'>
                  {item?.calories} Calories      
                </p>
                <div className='flex items-center gap-8'>
                        <p className='text-lg text-headingColor font-semibold'>
                                <span className='text-sm text-red-500'>$</span>{item?.price}
                        </p>
                </div>
        </div>
</div>
       ))): <div className='w-full flex items-center justify-center'>
        <img src={NotFound} alt='' className='h-420'/>
        <p>Items Not Alaivable</p>
        </div>}
    </div>
  )
}

export default RowContainer