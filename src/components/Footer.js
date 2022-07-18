import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='site-footer'>
            <Row>
                <Col sm='12' md='6' lg='4' className='text-center'>
                        <h5>Navigation Links:</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/portafolio'>Portafolio</Link>
                            </li>
                            <li>
                                <Link to='/aboutme'>About Me</Link>
                            </li>
                            <li>
                                <Link to='/contactme'>Contact Me</Link>
                            </li>
                        </ul>
                </Col>
                <Col sm='12' md='6' lg='4' className='text-center'>
                    <h5>Social Media Links:</h5>
                    <a
                        href='https://github.com/Rauchav'
                    >
                        <i className='fa fa-github fa-2x' />
                    </a>{' '}
                    <a
                        href='https://www.facebook.com/awakewecreate'
                    >
                        <i className='fa fa-facebook fa-2x' />
                    </a>{' '}
                    <a
                        href='https://www.youtube.com/channel/UCchEBu2FUrDMXCijjrF1voA'
                    >
                        <i className='fa fa-youtube fa-2x' />
                    </a>
                      <a
                        href='https://www.instagram.com/awakewecreate/'
                    >
                        <i className='fa fa-instagram fa-2x' />
                    </a>
                </Col>
                <Col sm='12' md='12' lg='4' className='text-center'>
                    <a
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> +59168828590
                    </a>
                    <br />
                    <a
                        href='mailto:notreal@notreal.co'
                    >
                        <i className='fa fa-envelope-o' /> awakewecreate@gmail.com
                    </a>
                </Col>

            </Row>  
        </Container>
    )
};

export default Footer;