import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.pioneerdj.com/-/media/pioneerdj/images/products/player/cdj-3000/cdj-3000-video-thumbnail-1420x650-dt.jpg"
          alt="First slide"
          style={{height: '650px', width: '100%'}}
        />
        <Carousel.Caption>
          <h3>CDJ 3000</h3>
          <p>Una nueva dimensión</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.pioneerdj.com/-/media/pioneerdj/images/landing/djm-v10/mvimage012x.jpg"
          alt="Second slide"
          style={{height: '650px', width: '100%'}}
        />

        <Carousel.Caption>
          <h3>DJM V10</h3>
          <p>Crea tu propio sonido</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.pioneerdj.com/-/media/project/pioneer/pioneerdj/home/carousel/2022/ddj-flx4_web_home-crousel-2_1440x600b.jpg"
          alt="Third slide"
          style={{height: '650px', width: '100%'}}
        />

        <Carousel.Caption>
          <h3>DDJ FLX4</h3>
          <p>
            Simple y profesional
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
