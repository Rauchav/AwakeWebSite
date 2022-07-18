import { Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { ILLUSTRATIONLIST } from "../../shared/ILLUSTRATIONLIST";

const IllustrationsDisplay = () => {
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
        ILLUSTRATIONLIST.map((piece) => {
            return (
                <animated.div style={animatedPage} key={piece.index.toString()}>
                    <Row className='illustrationDisplayRow'>
                        <Col xs='12' className='illustrationTextDisplayCol'>
                            <h4 style={{ color: '#FFCE00' }}>{piece.client}</h4>
                            <h5>{piece.description}</h5>
                        </Col>
                        <Col className='illustrationTextDisplayCol'>
                            <img src={piece.image} alt={piece.name} className='illustrationImg' />
                        </Col>
                    </Row>
                </animated.div>
            )
        })
    )
};

export default IllustrationsDisplay;