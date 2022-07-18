import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button, Row, Col } from 'reactstrap';
import Astronaut from '../../app/assets/Images/ASTRONAUT.png'

const SplashDisplay = () => {
    const [ toggle, setToggle ] = useState(false);

    const animatedAstronaut = useSpring({
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 2000 }
    });

    const animatedText = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 800,
        config: { duration: 1200 }
    });

    const animatedButton = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 1500,
        config: { duration: 1000}
    });

    useEffect(() => {
        setToggle(true);
        window.scrollTo(0, 0)
    }, []);

    return(
        <Row>
            <Col className='splashLeft'>
                <div>
                    <animated.div style={animatedText}>
                        <h1>SOME SPACE FOR HUMAN EXPRESSION</h1>
                    </animated.div>
                </div>
                <br/>
                <div>
                    <animated.div style={animatedButton}>
                        <a href='/portafolio'>
                            <Button active size="lg" className='splashButton'>NAVIGATE</Button>
                        </a>
                    </animated.div>
                </div>
            </Col>
            <Col className='splashRight'>
                <animated.div style={animatedAstronaut}>
                    <img src={Astronaut} alt='astronaut' className='astronaut'/>
                </animated.div>
            </Col>
        </Row>
    )
};

export default SplashDisplay;