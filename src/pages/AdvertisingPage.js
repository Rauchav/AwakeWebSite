import { Button, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import AdvertisingDisplay from "../features/Advertisement Design/AdvertisingDisplay";

const AdvertisingPage = () => {
    const [toggle, setToggle] = useState(false);

    const animatedPage = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 200,
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedPage}>
            <AdvertisingDisplay />
            <Row className='backToPortafolioButtonRow'>
                <a href='/portafolio'>
                    <Button active size="lg" className='backToPortafolioButton'>BACK TO PORTAFOLIO</Button>
                </a>
            </Row>
        </animated.div>
    )
};

export default AdvertisingPage;