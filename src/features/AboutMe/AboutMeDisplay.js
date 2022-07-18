import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Row, Col } from 'reactstrap';
import profilePic from '../../app/assets/Images/ProfilePic.png';

const AboutMeDisplay = () => {
    const [ toggle, setToggle ] = useState(false);

    const animatedProfilePic = useSpring({
        marginTop: toggle ? 0 : -800,
        opacity: toggle ? 1 : 0,
        config: { duration: 1000}
    });

    const animatedTitle1 = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 200,
        config: { duration: 500}
    });

    const animatedTitle2 = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 800,
        config: { duration: 500}
    });

    const animatedParagraph = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 1200,
        config: { duration: 800}
    });

    useEffect(() => {
        setToggle(true);
    }, []);
    
    return(
        <Row>
            <Col xs='12' sm='12' md='12' lg='6' className='profilePicCol'>
                <animated.div style={animatedProfilePic}>
                    <img src={profilePic} alt='profilepic' className='profilePic'/>
                </animated.div>
            </Col>
            <Col xs='12' sm='12' md='12' lg='6' className='briefIntroCol'>
                <animated.div style={animatedTitle1}>
                    <h3>HI, MY NAME IS</h3>
                </animated.div>
                <animated.div style={animatedTitle2}>
                    <h3 className='yellowTittle'>RAUL CHAVEZ VALDIVIA VELARDE</h3>
                </animated.div>
                <animated.div style={animatedParagraph}>
                    <p className='aboutMeText'>I'm a: </p>
                    <p className='aboutMeText'>Digital Product Designer<br />Full Stack Developer<br />and Marketing Specialist,</p>
                    <p className='aboutMeText'>with a strong passion for graphic arts applied to technology. Dedicated to use digital creativity to solve day to day human problems. </p>
                </animated.div>
            </Col >
        </Row>
    )
};

export default AboutMeDisplay;