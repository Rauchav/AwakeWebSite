import { Row, Col, Container } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';


const VideosDisplay = () => {
    const [toggle, setToggle] = useState(false);

    const animatedPage = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 200,
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
        window.scrollTo(0, 0)
    }, []);

    return (
        <animated.div style={animatedPage}>
            <Row className='videoDisplayRow'>
                <Col xs='12' className='videoTextDisplayCol'>
                    <h4 style={{ color: '#FFCE00' }}>Logo Animation</h4>
                    <h5>Tib Startup</h5>
                </Col>
                <Container>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/lqTwnAzckQA" title="YouTube video" allowFullScreen></iframe>
                    </div>
                </Container>
            </Row>
            <Row className='videoDisplayRow'>
                <Col xs='12'className='videoTextDisplayCol'>
                    <h4 style={{ color: '#FFCE00' }}>Logo Animation</h4>
                    <h5>Flava App</h5>
                </Col>
                <Container>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/CRQ0jG7bhBc" title="YouTube video" allowFullScreen></iframe>
                    </div>
                </Container>
            </Row>
            <Row className='videoDisplayRow'>
                <Col xs='12' className='videoTextDisplayCol'>
                    <h4 style={{ color: '#FFCE00' }}>Music Video - You Know</h4>
                    <h5>Daydream Automat</h5>
                </Col>
                <Container>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/fSXCcvU9Y24" title="YouTube video" allowFullScreen></iframe>
                    </div>
                </Container>
            </Row>
        </animated.div>
    )
};

export default VideosDisplay;