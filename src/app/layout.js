import '../styles/globals.scss'
import Navbar from '../components/common/Navbar'
import openSans from '../styles/common/Font'

const RootLayout = ({ children }) => {
    return (
        <html lang='pl' className={openSans.className}>
            <head>
                <title>Piwegro</title>
                <meta name='viewport' content='width=device-width' />
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
