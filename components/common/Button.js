import React from 'react'
import Link from 'next/link'

import styles from '../../styles/common/Button.module.scss'

function Button(props) {
    const { type, href, children } = props

    switch (type) {
        case 'anchor':
            return (
                <Link className={styles.button} href={href || '/'}>
                    {children}
                </Link>
            )
        case 'button':
            return (
                <button className={styles.button} {...props}>
                    {children}
                </button>
            )
        default:
            return null
    }
}

export default Button
