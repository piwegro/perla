import '@csstools/normalize.css'
import '../styles/globals.scss'
import Navbar from '../components/common/Navbar'
import openSans from '../styles/common/Font'
import Footer from '../components/common/Footer'

const RootLayout = ({ children }) => {
    return (
        <html lang='pl' className={openSans.className}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
