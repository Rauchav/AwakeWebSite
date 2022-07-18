import { Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { LOGODESIGNLIST } from "../../shared/LOGODESIGNLIST";

const LogosDisplay = () => {
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
        LOGODESIGNLIST.map((logo) => {
            return (
                <animated.div style={animatedPage} key={logo.index.toString()}>
                    <Row className='logoDisplayRow'>
                        <Col xs='12' className='logoTextDisplayCol'>
                            <h4 style={{ color: '#FFCE00' }}>{logo.client}</h4>
                            <h5>{logo.description}</h5>
                        </Col>
                        <Col xs='12'>
                            <img src={logo.image} alt={logo.name} className='logoImg' />
                        </Col>
                    </Row>
                </animated.div>
            )
        })
    )
};

export default LogosDisplay;