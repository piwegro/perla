import { render, screen } from '@testing-library/react'
import Hero from '../../../components/common/Hero'
import mockRouter from 'next-router-mock'

test('should render hero component of non home page', () => {
    render(<Hero>Test hero component</Hero>)
    const heroElement = screen.getByText('Test hero component')
    expect(heroElement).toBeInTheDocument()
})

test('should render hero component of home page', () => {
    mockRouter.push('/')
    render(<Hero page={'main'}>Test hero component</Hero>)
    const heroElement = screen.getByText(/wymieniaj się/i)
    const searchElement = screen.getByRole('textbox')
    expect(heroElement).toBeInTheDocument()
    expect(searchElement).toBeInTheDocument()
})
