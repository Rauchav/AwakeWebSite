import { useRef } from 'react';
import { DEVTOOLSLIST } from '../../shared/DEVTOOLSLIST';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';


const DevToolsCarrousel = () => {
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
                        <img src={DEVTOOLSLIST[0].image} alt={DEVTOOLSLIST[0].logo} className='brandImage' key={DEVTOOLSLIST[0].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[1].image} alt={DEVTOOLSLIST[1].logo} className='brandImage' key={DEVTOOLSLIST[1].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[2].image} alt={DEVTOOLSLIST[2].logo} className='brandImage' key={DEVTOOLSLIST[2].index.toString()} />
                    </Col>
                </Row>
                <Row className='CarouselRow'>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[3].image} alt={DEVTOOLSLIST[3].logo} className='brandImage' key={DEVTOOLSLIST[3].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[4].image} alt={DEVTOOLSLIST[4].logo} className='brandImage' key={DEVTOOLSLIST[4].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[5].image} alt={DEVTOOLSLIST[5].logo} className='brandImage' key={DEVTOOLSLIST[5].index.toString()} />
                    </Col>
                </Row>
                <Row className='CarouselRow'>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[6].image} alt={DEVTOOLSLIST[6].logo} className='brandImage' key={DEVTOOLSLIST[6].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[7].image} alt={DEVTOOLSLIST[7].logo} className='brandImage' key={DEVTOOLSLIST[7].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[8].image} alt={DEVTOOLSLIST[8].logo} className='brandImage' key={DEVTOOLSLIST[8].index.toString()} />
                    </Col>
                </Row>
                <Row className='CarouselRow'>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[9].image} alt={DEVTOOLSLIST[9].logo} className='brandImage' key={DEVTOOLSLIST[9].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[10].image} alt={DEVTOOLSLIST[10].logo} className='brandImage' key={DEVTOOLSLIST[10].index.toString()} />
                    </Col>
                    <Col xs='4' className='CarouselCol'>
                        <img src={DEVTOOLSLIST[11].image} alt={DEVTOOLSLIST[11].logo} className='brandImage' key={DEVTOOLSLIST[11].index.toString()} />
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

export default DevToolsCarrousel;