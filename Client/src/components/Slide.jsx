import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import myImage from '/Images/green.jpg';
import myImage2 from '/Images/takingapicture.jpg';
import myImage3 from '/Images/full.png';
import myImage4 from '/Images/new3.png'
import myImage5 from '/Images/new2.png'
import myImage6 from '/Images/new1.png'
import {Container } from 'react-bootstrap';
import Footer from './Footer';
import '../App.css';

function Slide() {
  return (
    // <div >
    <div style={{backgroundColor: "#f0efab"}}>
<Container className='CarouselContinerDesktop'>
        <Carousel className="my-carousel">
          <Carousel.Item interval={1000}>
            <div className="image-container">
              <img
                className="d-block w-100"
                id="img1"
                src={myImage3}
                alt="First slide"

                style={{ height: "95vh", objectFit: 'cover'}}
              />

              <div className="overlay"></div>
            </div>
            <Carousel.Caption>
              <h2 className='AboutText'>Välkommen till Smultronstället!</h2>
              <p className='AboutInfo'>Vi på Smultronstället, är ett företag som specialiserar sig på att utforska vackra naturplatser och fånga deras skönhet genom fotografier. Med en passion för naturen och fotografi, ger Smultronstället människor möjligheten att upptäcka och dela sina favoritdestinationer genom bilderna de tar.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="image-container">
              <img
                className="d-block w-100"
                src={myImage2}
                alt="Second slide"
                style={{ height: "95vh", objectFit: 'cover'}}
              />
              <div className="overlay"></div>
            </div>
            <Carousel.Caption>
              <h3 className='AboutText'>Dela med dig</h3>
              <p className='AboutInfo'> Smultronstället en plattform där människor kan dela sina egna bilder från naturplatser de har besökt. Genom att skapa ett gemensamt digitalt galleri ger företaget möjlighet för människor att inspirera och bli inspirerade av varandras upplevelser och fotografier.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className="d-block w-100"
                src={myImage}
                alt="Third slide"
                style={{ height: "95vh", objectFit: 'cover'}}
              />
              <div className="overlay"></div>
            </div>
            <Carousel.Caption>
              <h3 className='AboutText'>Om Oss</h3>
              <p className='AboutInfo'>
                Smultronstället grundades år 2010 av Helena Nilsson och Sven Nygren med en stark gemensam vision. De ville skapa en plattform där människor kunde samlas och dela sina resor genom att lägga upp bilder om de platser de hade besökt. Deras ambition var att skapa en community av resenärer och naturälskare som kunde inspirera och dela sina erfarenheter med varandra.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Container>

        {/* Mobile */}

        <Container className='CarouselContinerMobile' style={{backgroundColor: "#f0efab"}}>
        <Carousel className="my-carousel" style={{backgroundColor: '#f0efab'}}>
          <Carousel.Item interval={1000}>
            <div className="image-container">
              <img
                className="d-block w-100"
                id="img1"
                src={myImage4}
                alt="First slide"
                // style={{ height: "100vh", objectfit: "cover" }}
              />

              <div className="overlay"></div>
            </div>
            <Carousel.Caption>
              <h3 className='AboutText1'>Välkommen till Smultronstället!</h3>
              <p className='AboutInfo1'>Vi på Smultronstället, är ett företag som specialiserar sig på att utforska vackra naturplatser och fånga deras skönhet genom fotografier. Med en passion för naturen och fotografi, ger Smultronstället människor möjligheten att upptäcka och dela sina favoritdestinationer genom bilderna de tar.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="image-container">
              <img
                className="d-block w-100"
                src={myImage5}
                alt="Second slide"
                // style={{ height: "100vh", objectfit: "cover" }}
              />
              <div className="overlay"></div>
            </div>
            <Carousel.Caption>
              <h3 className='AboutText1'>Dela med dig</h3>
              <p className='AboutInfo1'> Smultronstället en plattform där människor kan dela sina egna bilder från naturplatser de har besökt. Genom att skapa ett gemensamt digitalt galleri ger företaget möjlighet för människor att inspirera och bli inspirerade av varandras upplevelser och fotografier.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className="d-block w-100"
                src={myImage6}
                alt="Third slide"
                // style={{ height: "100vh", objectfit: "cover" }}
              />
              <div className="overlay"></div>
            </div>
            <Carousel.Caption>
              <h3 className='AboutText1'>Om Oss</h3>
              <p className='AboutInfo1'>
                Smultronstället grundades år 2010 av Anna och Sven Nygren med en stark gemensam vision. De ville skapa en plattform där människor kunde samlas och dela sina resor genom att lägga upp bilder om de platser de hade besökt. Deras ambition var att skapa en community av resenärer och naturälskare som kunde inspirera och dela sina erfarenheter med varandra.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Container>
        <Footer/>

      </div>
  );
}

export default Slide;
