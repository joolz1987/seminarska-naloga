"use client"

import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
import { useState } from 'react'

export default function Navbar() {

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu =() => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="container mx-auto text-slate-50  font-semibold">
             <nav className={styles.navbar}>
                {/* Logo link */}
                <Link href="/" className={styles.logo}>Logo</Link>

                {/* Hamburger gumb na mobilnih napravah */}
                <button className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                {/* Linki v meniju */}
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <li>
                        <Link href="/games">Igre</Link>
                    </li>
                    <li>
                        <Link href="/about">O nas</Link>
                    </li>
                    <li>
                        <Link href="/">Domov</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}