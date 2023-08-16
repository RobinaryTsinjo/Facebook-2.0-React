import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/NotFound'
import Login from './pages/login/Login'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    )
}

export default Router