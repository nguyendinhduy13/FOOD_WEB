import React, { useEffect } from 'react'
import {Route,Routes} from "react-router-dom"
import { CreateContainer, Header, MainContainer } from './components'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './ultils/firebaseFunctions'
import { actionTypes } from './context/reducer'
export default function App() {
  const [{},dispatch]=useStateValue()

  const fetchData=async()=>{
    await getAllFoodItems().then((data)=>{
      dispatch({
        type: actionTypes.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }
  
useEffect(()=>{
  fetchData();
},[])
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full '>
        <Routes>
          <Route path="/*" element={<MainContainer/>} />
          <Route path="/createItem" element={<CreateContainer/>} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  )
}