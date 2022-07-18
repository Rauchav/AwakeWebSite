import { useRef } from 'react';
import { BRANDLIST } from '../../shared/BRANDSLIST';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';


const BrandsCarousel = () => {
    const carousel = useRef(null);

    const next = () => {
        if (carousel.current.children.length > 0) {

            const firstElement = carousel.current.children[0];

            carousel.current.style.transition = '600ms ease-out all';

            const slideSize = carousel.current.children[0].offsetWidth;

            carousel.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                carousel.current.style.transition = 'none';
                carousel.current.style.transform = `translateX(0)`;
                carousel.current.appendChild(firstElement);
                carousel.current.removeEventListener('transitionend', transition);
            }

            carousel.current.addEventListener('transitionend', transition);
        }

    }

    const previous = () => {
        if (carousel.current.children.length > 0) {

            const index = carousel.current.children.length - 1;
            const lastElement = carousel.current.children[index];
            carousel.current.insertBefore(lastElement, carousel.current.firstChild);

            carousel.current.style.transition = 'none';

            const slideSize = carousel.current.children[0].offsetWidth;
            carousel.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                carousel.current.style.transition = '600ms ease-out all';
                carousel.current.style.transform = `translateX(0)`;
            }, 30);
        }
    } 

    return (
        <Container className='contSlideShow'>
            <ContSlideShow className='Carousel' ref={carousel}>
                <Row className='CarouselRow'>
                    <Col className='CarouselCol'>
                        <img src={BRANDLIST[0].image} alt={BRANDLIST[0].logo} className='brandImage' key={BRANDLIST[0].index.toString()} />
                    </Col>
                    <Col className='CarouselCol'>
                        <img src={BRANDLIST[1].image} alt={BRANDLIST[1].logo} className='brandImage' key={BRANDLIST[1].index.toString()} />
                    </Col>
                    <Col className='CarouselCol'>
                        <img src={BRANDLIST[2].image} alt={BRANDLIST[2].logo} className='brandImage' key={BRANDLIST[2].index.toString()} />
                    </Col>
                </Row>
                <Row className='CarouselRow'>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[3].image} alt={BRANDLIST[3].logo} className='brandImage' key={BRANDLIST[3].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[4].image} alt={BRANDLIST[4].logo} className='brandImage' key={BRANDLIST[4].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[5].image} alt={BRANDLIST[5].logo} className='brandImage' key={BRANDLIST[5].index.toString()} />
                    </Col>
                </Row>
                <Row className='CarouselRow'>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[6].image} alt={BRANDLIST[6].logo} className='brandImage' key={BRANDLIST[6].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[7].image} alt={BRANDLIST[7].logo} className='brandImage' key={BRANDLIST[7].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[8].image} alt={BRANDLIST[8].logo} className='brandImage' key={BRANDLIST[8].index.toString()} />
                    </Col>
                </Row>
                <Row className='CarouselRow'>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[9].image} alt={BRANDLIST[9].logo} className='brandImage' key={BRANDLIST[9].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[10].image} alt={BRANDLIST[10].logo} className='brandImage' key={BRANDLIST[10].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={BRANDLIST[11].image} alt={BRANDLIST[11].logo} className='brandImage' key={BRANDLIST[11].index.toString()} />
                    </Col>
                </Row>
            </ContSlideShow>
            <div className='controllersCont'>
                <Col className='controllerColLeft' onClick={previous}>
                    <button className='controllerButtonLeft'>
                        <i className='fa fa-angle-left fa-2x' />
                    </button>
                </Col>
                <Col className='controllerColRight' onClick={next}>
                    <button className='controllerButtonRight'>
                        <i className='fa fa-angle-right fa-2x' />
                    </button>
                </Col>
            </div>
        </Container>
    )
}

const ContSlideShow = styled.div``

export default BrandsCarousel;