import React from 'react'
import { Carousel } from 'react-bootstrap';

function Slider() {
    return (
        <>
            <div className="slider">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="slider1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="slider2.jpg"
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="slider3.jpg"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>

                    </div>
        </>
    )
}

export default Slider
