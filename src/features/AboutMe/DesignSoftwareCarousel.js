import { useRef } from 'react';
import { DESIGNSOFTWARELIST } from '../../shared/DESIGNSOFTWARELIST';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';


const DesignSoftwareCarousel = () => {
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
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[0].image} alt={DESIGNSOFTWARELIST[0].logo} className='brandImage' key={DESIGNSOFTWARELIST[0].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[1].image} alt={DESIGNSOFTWARELIST[1].logo} className='brandImage' key={DESIGNSOFTWARELIST[1].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[2].image} alt={DESIGNSOFTWARELIST[2].logo} className='brandImage' key={DESIGNSOFTWARELIST[2].index.toString()} />
                    </Col>
                </Row>
                <Row className='CarouselRow'>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[3].image} alt={DESIGNSOFTWARELIST[3].logo} className='brandImage' key={DESIGNSOFTWARELIST[3].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[4].image} alt={DESIGNSOFTWARELIST[4].logo} className='brandImage' key={DESIGNSOFTWARELIST[4].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[5].image} alt={DESIGNSOFTWARELIST[5].logo} className='brandImage' key={DESIGNSOFTWARELIST[5].index.toString()} />
                    </Col>
                </Row>
                <Row className='CarouselRow'>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[6].image} alt={DESIGNSOFTWARELIST[6].logo} className='brandImage' key={DESIGNSOFTWARELIST[6].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[7].image} alt={DESIGNSOFTWARELIST[7].logo} className='brandImage' key={DESIGNSOFTWARELIST[7].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DESIGNSOFTWARELIST[8].image} alt={DESIGNSOFTWARELIST[8].logo} className='brandImage' key={DESIGNSOFTWARELIST[8].index.toString()} />
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

export default DesignSoftwareCarousel;