import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link';
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

const MainHeader = () => {

  return (
    <>
        <MainHeaderBackground />

        <header className={classes.header}>
            <Link href='/' className={classes.logo}>
                <Image src={logoImg} alt="A plate with food on it" priority />
                Next Level Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Explore Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>Join the Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default MainHeader
