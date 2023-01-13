import { render, screen } from '@testing-library/react'
import Footer from '../../../components/common/Footer'

test('should render with correct year', () => {
    render(<Footer />)
    const footerElement = screen.getByText(`© ${new Date().getFullYear()} Piwegro`)
    expect(footerElement).toBeInTheDocument()
})
