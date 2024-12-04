import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import AboutUs from '../Components/AboutUs'
import Layout from './Layout'
import User from '../Components/User'
import Github from '../Components/Github'


const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='home' element={<Home />} />
                        <Route path='aboutUs' element={<AboutUs />} />
                        <Route path='user/:id' element={<User />} />
                        <Route path='github' element={<Github />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter
