'use client'

import { Menu2, X } from 'tabler-icons-react'
import { useState } from 'react'
import Link from 'next/link'

import Logo from './Logo'
import Button from './Button'

import styles from '../../styles/common/Navbar.module.scss'

const NAV_ITEMS = [
    {
        label: 'Wiadomości',
        href: '/messages',
    },
    {
        label: 'Konto',
        href: '/account',
    },
    {
        label: 'Dodaj ogłoszenie',
        href: '/add',
        type: 'button',
    },
]

export default function Navbar() {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className={styles.navbar}>
            <div className={styles.content}>
                <Logo />
                <DesktopNav />
                <ExpandButton state={{ expanded, setExpanded }} />
            </div>
            <MobileNav expanded={expanded} />
        </div>
    )
}

const DesktopNav = () => {
    return (
        <div className={styles.desktopNav}>
            {NAV_ITEMS.map(item => {
                if (item.type?.toLowerCase() === 'button')
                    return <Button type={'anchor'}>{item?.label}</Button>
                return (
                    <Link href={item.href} key={item.label}>
                        {item.label}
                    </Link>
                )
            })}
        </div>
    )
}

const MobileNav = expanded => {
    return (
        <div className={`${styles.mobileNav} ${expanded.expanded ? styles.mobileExpanded : null}`}>
            {NAV_ITEMS.map(item => {
                return (
                    <Link href={item?.href || '#'} key={item.label}>
                        {item?.label}
                    </Link>
                )
            })}
        </div>
    )
}

const ExpandButton = props => {
    console.log(props)
    return (
        <div className={styles.expandButton}>
            {props.state.expanded ? (
                <X
                    onClick={() => {
                        props.state.setExpanded(false)
                    }}
                />
            ) : (
                <Menu2
                    onClick={() => {
                        props.state.setExpanded(true)
                    }}
                />
            )}
        </div>
    )
}
