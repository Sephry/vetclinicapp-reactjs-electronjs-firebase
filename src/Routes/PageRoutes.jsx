import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../Pages/HomeScreen'
import AddScreen from '../Pages/AddScreen'
import PetOwnerList from '../Pages/PetOwnerList'
import PetList from '../Pages/PetList'

function PageRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen />} />

        <Route path='/addPetOwnerScreen' element={<AddScreen />} />

        <Route path='/petOwnerList' element={<PetOwnerList />} />
        <Route path='/animalList' element={<PetList />} />

        
    </Routes>
  )
}

export default PageRoutes