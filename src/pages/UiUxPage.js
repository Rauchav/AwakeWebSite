import { Button, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import UiUxDisplay from "../features/UI:UX design/UiUxDisplay";

const UiUxPage = () => {

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
        <animated.div>
            <UiUxDisplay style={animatedPage}/>
            <Row className='backToPortafolioButtonRow'>
                <a href='/portafolio'>
                    <Button active size="lg" className='backToPortafolioButton'>BACK TO PORTAFOLIO</Button>
                </a>
            </Row>
        </animated.div>
    )
};

export default UiUxPage;