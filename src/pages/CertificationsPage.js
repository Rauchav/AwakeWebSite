import { Col } from "reactstrap";
import { CERTIFICATIONSLIST } from "../shared/CERTIFICATIONSLIST";
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from "react";

const CertificationsPage = () => {
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
        CERTIFICATIONSLIST.map((certificate) => {
            return(
                <animated.div style={animatedPage}>
                    <Col className='certificationCol'>
                        <img className='certificateImg' src={certificate.image} alt={certificate.name} key={certificate.index} />
                    </Col>
                </animated.div>
            )
        })
    )
}

export default CertificationsPage;