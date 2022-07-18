import { Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { UIUXLIST } from "../../shared/UIUXLIST";

const UiUxDisplay = () => {
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
        UIUXLIST.map((card) => {
            return (
                <animated.div style={animatedPage} key={card.index.toString()}>
                    <Row className='illustrationDisplayRow'>
                        <Col xs='12' className='illustrationTextDisplayCol'>
                            <h4 style={{ color: '#FFCE00' }}>{card.project}</h4>
                            <h5>{card.description}</h5>
                        </Col>
                        <Col className='illustrationTextDisplayCol'>
                            <img src={card.image} alt={card.project} className='illustrationImg' />
                        </Col>
                    </Row>
                </animated.div>
            )
        })
    )
};

export default UiUxDisplay;