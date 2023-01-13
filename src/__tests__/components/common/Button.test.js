import { render, screen } from '@testing-library/react'
import Button from '../../../components/common/Button'

test('should render the same text passed as the children', () => {
    render(<Button element={'button'}>Test button</Button>)
    const buttonElement = screen.getByText('Test button')
    expect(buttonElement).toBeInTheDocument()
})

test('should render as button', () => {
    render(<Button element={'button'}>Test button</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
})

test('should render as link', () => {
    render(<Button element={'anchor'}>Test button</Button>)
    const buttonElement = screen.getByRole('link')
    expect(buttonElement).toBeInTheDocument()
})
