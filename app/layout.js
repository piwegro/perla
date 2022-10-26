import { Open_Sans } from '@next/font/google'
import '../styles/globals.css'

const font = Open_Sans()

export default function RootLayout({ children }) {
    return (
        <html lang='pl' className={font.className}>
            <head>
                <title>Piwegro</title>
            </head>
            <body>{children}</body>
        </html>
    )
}
