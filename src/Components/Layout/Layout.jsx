import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Breadcrumb from './../Breadcrumb/Breadcrumb';


export function Layout() {
    return (
        <>
            <div>
                <Header />
                <main >
                    <Breadcrumb></Breadcrumb>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
