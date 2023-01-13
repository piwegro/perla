import { render, screen } from '@testing-library/react'
import Notification from '../../../components/auth/Notification'

test('should render notification with correct text', () => {
    render(<Notification type={'error'}>Wystąpił błąd</Notification>)
    const notificationElement = screen.getByText('Wystąpił błąd')
    expect(notificationElement).toBeInTheDocument()
})
