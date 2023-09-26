import React from 'react'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import { Buscador } from '../components/pages/Buscador'
import { PageSunglasses } from '../components/pages/PageSunglasses'
import { UserProvider } from '../context/UserProvider'
import { PageProduct } from '../components/pages/PageProduct'
import { PageCategory } from '../components/pages/PageCategory'
import { PageLaptops } from '../components/pages/PageLaptops'
import { PageFragrances } from '../components/pages/PageFragrances'


export const RouterApp = () => {
  return (
    <div>

      <UserProvider>

        <BrowserRouter>
        
          <Routes>

            <Route path='/' element={<Buscador />} />
            <Route path='/sunglasses' element={<PageSunglasses />} />
            <Route path='/laptops' element={<PageLaptops />} />
            <Route path='/fragrances' element={<PageFragrances />} />
            <Route path='/pageProduct/:id' element={<PageProduct />} />
            <Route path='/pageCategory/:category' element={<PageCategory />} />
           


            <Route path='/*' element={<Navigate to={'/'} />} />

          </Routes>

        </BrowserRouter>

      </UserProvider>
    </div>
  )
}
