import React from 'react'
import Link from 'next/link'
import openSans from '../../styles/common/Font'

import styles from '../../styles/common/Button.module.scss'

function Button(props) {
    const { element, href, children } = props

    switch (element) {
        case 'anchor':
            return (
                <Link
                    className={`${styles.button} ${openSans.className}`}
                    href={href || '/'}
                    {...props}>
                    {children}
                </Link>
            )
        case 'button':
            return (
                <button className={`${styles.button} ${openSans.className}`} {...props}>
                    {children}
                </button>
            )
        default:
            return null
    }
}

export default Button
