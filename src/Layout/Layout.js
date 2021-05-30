import React from 'react'
import Navbar from '../Component/Navigationbar'
import Footer from '../Component/Footer'


const Layout = ({children}) => {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

export default Layout
