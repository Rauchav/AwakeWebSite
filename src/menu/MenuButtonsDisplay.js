import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { MENUBUTTONS } from '../shared/MENUBUTTONS';
import MenuButton from './MenuButton';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';



const MenuButtonsDisplay = () => {
    const [ toggle, setToggle ] = useState(false);

    const animatedButton0 = useSpring({
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        opacity: toggle ? 1 : 0,
        config: { duration: 300 }
    });
    const animatedButton1 = useSpring({
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        opacity: toggle ? 1 : 0,
        delay: 150,
        config: { duration: 300 }
    });
    const animatedButton2 = useSpring({
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        opacity: toggle ? 1 : 0,
        delay: 300,
        config: { duration: 300 }
    });
    const animatedButton3 = useSpring({
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        opacity: toggle ? 1 : 0,
        delay: 450,
        config: { duration: 300 }
    });
    const animatedButton4 = useSpring({
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        opacity: toggle ? 1 : 0,
        delay: 600,
        config: { duration: 300 }
    });
    const animatedButton5 = useSpring({
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        opacity: toggle ? 1 : 0,
        delay: 750,
        config: { duration: 300 }
    });

    useEffect(() => {
        setToggle(true);
        window.scrollTo(0, 0)
    }, []);

    return (
        <Row>
            <Col xs='12' md='6' lg='4' className='align-button'>
                <Link to={'/logos'}>
                    <animated.div style={animatedButton0}>
                        <MenuButton menubutton={MENUBUTTONS[0]} />
                    </animated.div>
                </Link>
            </Col>
            <Col xs='12' md='6' lg='4' className='align-button'>
                <Link to={'/advertising'}>
                    <animated.div style={animatedButton1}>
                        <MenuButton menubutton={MENUBUTTONS[1]} />
                    </animated.div>
                </Link>
            </Col>
            <Col xs='12' md='6' lg='4' className='align-button'>
                <Link to={'/illustrations'}>
                    <animated.div style={animatedButton2}>
                        <MenuButton menubutton={MENUBUTTONS[2]} />
                    </animated.div>
                </Link>
            </Col>
            <Col xs='12' md='6' lg='4' className='align-button'>
                <Link to={'/videos'}>
                    <animated.div style={animatedButton3}>
                        <MenuButton menubutton={MENUBUTTONS[3]} />
                    </animated.div>
                </Link>
            </Col>
            <Col xs='12' md='6' lg='4' className='align-button'>
                <Link to={'/uiux'}>
                    <animated.div style={animatedButton4}>
                        <MenuButton menubutton={MENUBUTTONS[4]} />
                    </animated.div>
                </Link>
            </Col>
            <Col xs='12' md='6' lg='4' className='align-button'>
                <Link to={'/webapp'}>
                    <animated.div style={animatedButton5}>
                        <MenuButton menubutton={MENUBUTTONS[5]} />
                    </animated.div>
                </Link>
            </Col>
        </Row>
    );
};

export default MenuButtonsDisplay;