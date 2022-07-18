import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button, Label, Col, Row, FormGroup, Container, Modal } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactMeForm } from '../utils/validateContactMeForm';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [toggle, setToggle] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const form = useRef();

    const sendEmail = () => {
        
        emailjs.sendForm('gmail', 'template_1d0rj4q', form.current, 'jRI_scWPa9Qh_EEyF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setModalOpen(true);
    }

    const animatedText = useSpring({
        opacity: toggle ? 1 : 0,
        config: { duration: 1200 }
    });

    const animatedFormGroup1 = useSpring({
        marginLeft: toggle ? 0 : 4000,
        config: { duration: 1200 }
    });
    const animatedFormGroup2 = useSpring({
        marginLeft: toggle ? 0 : 4000,
        delay: 200,
        config: { duration: 1200 }
    });
    const animatedFormGroup3 = useSpring({
        marginLeft: toggle ? 0 : 4000,
        delay: 400,
        config: { duration: 1200 }
    });
    const animatedFormGroup4 = useSpring({
        marginLeft: toggle ? 0 : 4000,
        delay: 600,
        config: { duration: 1200 }
    });
    const animatedFormGroup5 = useSpring({
        marginLeft: toggle ? 0 : 4000,
        delay: 800,
        config: { duration: 1200 }
    });
    const animatedButton = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 1600,
        config: { duration: 1200 }
    });

    useEffect(() => {
        setToggle(true);
        window.scrollTo(0, 0)
    }, []);

    return (
        <Container className='contactForm'>
            <animated.div style={animatedText}>
                <h5>- Fill out your contact information and send me a message, I'll reach out to you as soon as possible.</h5><br />
            </animated.div>
            <Formik
                initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNum: '',
                contactType: 'By Email',
                feedback: ''
                }}
                validate={validateContactMeForm}
                onSubmit={sendEmail}
                
            >
                <Form ref={form}>
                    <animated.div style={animatedFormGroup1}>
                        <FormGroup row>
                            <Label htmlFor='firstName'>
                                First Name
                            </Label>
                            <Col xs='12'>
                                <Field name='firstName' placeholder='Type your first name here...' className='form-control' />
                            </Col>
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </animated.div>
                    <animated.div style={animatedFormGroup2}>
                        <FormGroup row>
                            <Label htmlFor='lastName'>
                                Last Name
                            </Label>
                            <Col xs='12'>
                                <Field name='lastName' placeholder='Type your last name here...' className='form-control' />
                            </Col>
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </animated.div>
                    <animated.div style={animatedFormGroup3}>
                        <FormGroup row>
                            <Col>
                                <Label htmlFor='email'>Email</Label>
                                <Col xs='12'>
                                    <Field name='email' type='email' placeholder='Type your email here...' className='form-control' />
                                </Col>
                            </Col>
                            <ErrorMessage name='email'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                            <Col>
                                <Label htmlFor='phoneNum'>Phone Number</Label>
                                <Col xs='12'>
                                    <Field name='phoneNum' placeholder='Type your number here...' className='form-control' />
                                </Col>
                            </Col>
                            <ErrorMessage name='phoneNum'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </animated.div>
                    <animated.div style={animatedFormGroup4}>
                            <FormGroup row>
                                <Label htmlFor='contactType'>
                                    How may I contact you?
                                </Label>
                                <Col xs='4'>
                                    <Field name='contactType' as='select' className='form-control'>
                                        <option className='contactOption'>By Email</option>
                                        <option className='contactOption'>By Phone Call</option>
                                        <option className='contactOption'>By Text Message</option>
                                        <option className='contactOption'>By Whats App</option>
                                    </Field>
                                </Col>
                            </FormGroup>
                    </animated.div>
                    <animated.div style={animatedFormGroup5}>
                        <FormGroup row>
                            <Label htmlFor='message'>
                                Your Message
                            </Label>
                            <Col md='12'>
                                <Field name='message' as='textarea' rows='5' className='form-control' />
                            </Col>
                            <ErrorMessage name='message'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </animated.div>
                    <animated.div style={animatedButton}>
                        <FormGroup row>
                            <Col className='align-button'>
                                <Button type='submit' color='warning' className='buttonSend'>
                                    SEND
                                </Button>
                            </Col>
                        </FormGroup>
                    </animated.div>
                </Form>
            </Formik>
            <Modal isOpen={modalOpen}>
                <Container className='sendEmailModal'>
                    <Row>
                        <h3 className='modalTitle'>Message sent succesfully</h3>
                    </Row>
                    <Row className='modalText'>
                        <h5>Thanks for reaching out!</h5>
                        <h5>I'll contact you back as soon as possible.</h5>
                    </Row>
                    <Row>
                        <Col>
                            <Link to={'/'}>
                                <button type='submit' className='modalButton'>OK</button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </Container>
    )
};

export default ContactForm;