import { Container, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import AboutMeDisplay from '../features/AboutMe/AboutMeDisplay';
import GeneralEducation from '../features/AboutMe/GeneralEducation';
import ProExperience from '../features/AboutMe/ProExperience';
import TREducation from '../features/AboutMe/TREducation';
import BrandsCarousel from '../features/AboutMe/BrandsCarousel';
import DesignSoftwareCarousel from '../features/AboutMe/DesignSoftwareCarousel';
import DevToolsCarrousel from '../features/AboutMe/DevToolsCarrousel';
import Certifications from '../features/AboutMe/Certifications';

const AboutMePage = () => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);

    const handleToggle1 = () => {
        setToggle1(!toggle1);
    }

    const handleToggle2 = () => {
        setToggle2(!toggle2);
    }

    const handleToggle3 = () => {
        setToggle3(!toggle3);
    }

    const handleToggle4 = () => {
        setToggle4(!toggle4);
    }

    const animatedBlock1 = useSpring({
        opacity: toggle1 ? 1 : 0,
        config: { duration: 1000 }
    })

    const animatedBlock2 = useSpring({
        opacity: toggle2 ? 1 : 0,
        config: { duration: 1000 }
    })

    const animatedBlock3 = useSpring({
        opacity: toggle3 ? 1 : 0,
        config: { duration: 1000 }
    })

    const animatedBlock4 = useSpring({
        opacity: toggle4 ? 1 : 0,
        config: { duration: 1000 }
    })

    const animatedTitle1 = useSpring({
        opacity: toggle5 ? 1 : 0,
        delay: 900,
        config: { duration: 300 }
    })

    const animatedTitle2 = useSpring({
        opacity: toggle5 ? 1 : 0,
        delay: 1000,
        config: { duration: 300 }
    })

    const animatedTitle3 = useSpring({
        opacity: toggle5 ? 1 : 0,
        delay: 1100,
        config: { duration: 300 }
    })

    const animatedTitle4 = useSpring({
        opacity: toggle5 ? 1 : 0,
        delay: 1200,
        config: { duration: 300 }
    })

    const animatedBlock5 = useSpring({
        opacity: toggle5 ? 1 : 0,
        config: { duration: 1000 }
    })

    useEffect(() => {
        window.scrollTo(0, 0);
        setToggle5(true);
    }, []);

    return(
        <Container>
            <AboutMeDisplay />
            <animated.div style={animatedBlock1} className='animateBlock'>
                {toggle1 ? <GeneralEducation /> : null}
            </animated.div>
            <animated.div style={animatedTitle1}>
                <Col className='titleAboutMeCol'>
                    <h6 className='titleAboutMe' style={toggle1 ? { borderBottom: 'solid' } : { borderTop: 'solid' }}>
                        General education
                        <i className={toggle1 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
                            onClick={handleToggle1} />
                    </h6>
                </Col>
            </animated.div>
            <animated.div style={animatedBlock2} className='animatedBlock'>
                {toggle2 ? <TREducation /> : null}
            </animated.div>
            <animated.div style={animatedTitle2}>
                <Col className='titleAboutMeCol'>
                    <h6 className='titleAboutMe' style={toggle2 ? { borderBottom: 'solid' } : { borderTop: 'solid' }}>
                        Tech related education
                        <i className={toggle2 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
                            onClick={handleToggle2} />
                    </h6>
                </Col>
            </animated.div>
            <animated.div style={animatedBlock3} className='animatedBlock'>
                {toggle3 ? <ProExperience /> : null}
            </animated.div>
            <animated.div style={animatedTitle3}>
                <Col className='titleAboutMeCol'>
                    <h6 className='titleAboutMe' style={toggle3 ? { borderBottom: 'solid' } : { borderTop: 'solid' }}>
                        Professional experience
                        <i className={toggle3 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
                            onClick={handleToggle3} />
                    </h6>
                </Col>
            </animated.div>
            <animated.div style={animatedBlock4} className='animatedBlock'>
                {toggle4 ? <Certifications /> : null}
            </animated.div>
            <animated.div style={animatedTitle4}>
                <Col className='titleAboutMeCol'>
                    <h6 className='titleAboutMe' style={toggle3 ? { borderBottom: 'solid' } : { borderTop: 'solid' }}>
                        Certifications
                        <i className={toggle4 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
                            onClick={handleToggle4} />
                    </h6>
                </Col>
            </animated.div>
            <animated.div style={animatedBlock5}>
                <h6 className='subTitleAboutMeCol'>Some Brands I've worked for:</h6>
                <BrandsCarousel />
                <h6 className='subTitleAboutMeCol'>Digital Product Design tools I use:</h6>
                <DesignSoftwareCarousel />
                <h6 className='subTitleAboutMeCol'>Digital Product Development tools I use :</h6>
                <DevToolsCarrousel />
            </animated.div>
        </Container>
    )
};

export default AboutMePage;