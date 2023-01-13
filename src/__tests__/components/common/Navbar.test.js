import { render, screen } from '@testing-library/react'
import Navbar from '../../../components/common/Navbar'
import mockRouter from 'next-router-mock'

test('should render navbar with links', async () => {
    await mockRouter.push('/')
    render(<Navbar />)
    const messagesLink = (await screen.findAllByRole('link', { name: 'Wiadomości' }))[0]
    expect(messagesLink).toBeInTheDocument()
})
