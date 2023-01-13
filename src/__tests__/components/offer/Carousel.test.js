import { render, screen, fireEvent } from '@testing-library/react'
import Carousel from '../../../components/offer/Carousel'

test('should carousel', () => {
    const offerData = {
        images: [
            {
                image_id: 0,
                original: 'https://dummyimage.com/1920x1080/000/fff.jpg&text=original',
                preview: 'https://dummyimage.com/200x113/000/fff.jpg&text=preview',
                thumbnail: 'https://dummyimage.com/96x96/000/fff.jpg&text=thumbnail',
            },
            {
                image_id: 1,
                original: 'https://dummyimage.com/1920x1080/000/fff.jpg&text=original',
                preview: 'https://dummyimage.com/200x113/000/fff.jpg&text=preview',
                thumbnail: 'https://dummyimage.com/96x96/000/fff.jpg&text=thumbnail',
            },
            {
                image_id: 2,
                original: 'https://dummyimage.com/1920x1080/000/fff.jpg&text=original',
                preview: 'https://dummyimage.com/200x113/000/fff.jpg&text=preview',
                thumbnail: 'https://dummyimage.com/96x96/000/fff.jpg&text=thumbnail',
            },
        ],
    }
    render(<Carousel offerData={offerData} />)
    const mainImage = screen.getByRole('img', { name: 'Zdjęcie 0' })
    expect(mainImage).toBeInTheDocument()
})

test('check if button changes image', () => {
    const offerData = {
        images: [
            {
                image_id: 0,
                original: 'https://dummyimage.com/1920x1080/000/fff.jpg&text=original',
                preview: 'https://dummyimage.com/200x113/000/fff.jpg&text=preview',
                thumbnail: 'https://dummyimage.com/96x96/000/fff.jpg&text=thumbnail',
            },
            {
                image_id: 1,
                original: 'https://dummyimage.com/1920x1080/000/fff.jpg&text=original',
                preview: 'https://dummyimage.com/200x113/000/fff.jpg&text=preview',
                thumbnail: 'https://dummyimage.com/96x96/000/fff.jpg&text=thumbnail',
            },
            {
                image_id: 2,
                original: 'https://dummyimage.com/1920x1080/000/fff.jpg&text=original',
                preview: 'https://dummyimage.com/200x113/000/fff.jpg&text=preview',
                thumbnail: 'https://dummyimage.com/96x96/000/fff.jpg&text=thumbnail',
            },
        ],
    }
    render(<Carousel offerData={offerData} />)
    const nextButtonElement = screen.getAllByRole('button')[1]
    fireEvent.click(nextButtonElement)
    const mainImage = screen.getByRole('img', { name: 'Zdjęcie 1' })
    expect(mainImage).toBeInTheDocument()
})
