import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddAnimalScreen from '../Pages/AddAnimalScreen'
import HomeScreen from '../Pages/HomeScreen'
import AddPetOwnerScreen from '../Pages/AddPetOwnerScreen'
import PetOwnerList from '../Pages/PetOwnerList'
import PetList from '../Pages/PetList'

function PageRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen />} />

        <Route path='/addPetOwnerScreen' element={<AddPetOwnerScreen />} />
        <Route path='/petOwnerList' element={<PetOwnerList />} />


        <Route path='/addAnimal' element={<AddAnimalScreen />} />
        <Route path='/animalList' element={<PetList />} />

        
    </Routes>
  )
}

export default PageRoutes