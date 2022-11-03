import { Open_Sans } from '@next/font/google'
import '../styles/globals.scss'
import Navbar from '../components/common/Navbar'

const openSans = Open_Sans()

export default function RootLayout({ children }) {
    return (
        <html lang='pl' className={openSans.className}>
            <head>
                <title>Piwegro</title>
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
