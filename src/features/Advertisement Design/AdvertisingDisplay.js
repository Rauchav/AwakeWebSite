import { Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { ADVERTISINGLIST } from "../../shared/ADVERTISINGLIST";

const AdvertisingDisplay = () => {
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
        ADVERTISINGLIST.map((piece) => {
            return (
                <animated.div style={animatedPage} key={piece.index.toString()}>
                    <Row className='advertisingDisplayRow'>
                         <Col xs='12' className='advertisingTextDisplayCol'>
                            <h4 style={{ color: '#FFCE00' }}>{piece.client}</h4>
                            <h5>{piece.description}</h5>
                        </Col>
                        <Col className='advertisingTextDisplayCol'>
                            <img src={piece.image} alt={piece.name} key={piece.index.toString()} className='advertisingImg' />
                        </Col>
                    </Row>
                </animated.div>
            )
        })
    )
};

export default AdvertisingDisplay;