import { extendTheme } from '@chakra-ui/react'

const colors = {
    text: {
        900: '#0f2338',
        800: '#0F23384B',
    },
    brand: {
        900: '#556FF6',
    },
}

const fonts = {
    body: `'Open Sans', sans-serif`,
}

const theme = extendTheme({ colors, fonts })
export default theme
