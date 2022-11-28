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
        href: '/user/account',
    },
    {
        label: 'Dodaj ogłoszenie',
        href: '/offer/add',
        type: 'button',
    },
]

const Navbar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className={styles.navbar}>
            <div className={styles.content}>
                <Link href={'/'} aria-label={'Piwegro'}>
                    <Logo />
                </Link>
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
                    return (
                        <Button
                            element={'anchor'}
                            href={item.href}
                            key={item.label}
                            data-btn-type={'nav'}>
                            {item?.label}
                        </Button>
                    )
                return (
                    <Link href={item.href} key={item.label}>
                        {item?.label}
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

export default Navbar
