import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MainHeaderBackground from './main-header-background'
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
                        <Link href='/meals'>Brows Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default MainHeader
