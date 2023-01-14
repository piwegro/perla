import React from 'react'
import Link from 'next/link'
import openSans from '../../styles/common/Font'

import styles from '../../styles/common/Button.module.scss'

/** Button component */
const Button = props => {
    const { element, href, children, type } = props // Get props

    // Return button with correct element
    switch (element) {
        case 'anchor':
            return (
                <Link
                    className={`${styles.button} ${openSans.className} ${
                        type === 'light' ? styles.light : ''
                    }`}
                    href={href || '/'}
                    {...props}>
                    {children}
                </Link>
            )
        case 'button':
            return (
                <button
                    className={`${styles.button} ${openSans.className} ${
                        type === 'light' ? styles.light : ''
                    }`}
                    {...props}>
                    {children}
                </button>
            )
        default:
            return null
    }
}

export default Button
