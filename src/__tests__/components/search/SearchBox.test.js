import { render, screen } from '@testing-library/react'
import SearchBox from '../../../components/search/SearchBox'
import mockRouter from 'next-router-mock'

test('should render hero component of home page', () => {
    mockRouter.push('/')
    render(<SearchBox />)
    const searchElement = screen.getByRole('textbox')
    expect(searchElement).toBeInTheDocument()
})
