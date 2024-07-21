import React, { useState } from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';

const profilePics = {
    "Daniel Miller": require('../src/assets/pic/pic1.png'),
    "David Smith": require('../src/assets/pic/pic9.webp'),
    "Emma Davis": require('../src/assets/pic/pic5.jpg'),
    "Grace Allen": require('../src/assets/pic/pic2.jpg'),
    "Hannah Lee": require('../src/assets/pic/pic3.jpeg'),
    "Jackie Thompson": require('../src/assets/pic/pic4.png'),
    "Lily Martin": require('../src/assets/pic/pic11.webp'),
    "Michael White": require('../src/assets/pic/pic7.png'),
    "Olivia Green": require('../src/assets/pic/pic10.webp'),
    "Peter Wilson": require('../src/assets/pic/pic8.png'),
    "Rachel Carter": require('../src/assets/pic/pic13.webp'),
    "Ryan Harris": require('../src/assets/pic/pic12.webp'),
    "Samuel Clark": require('../src/assets/pic/pic6.webp'),
    "Sarah Johnson": require('../src/assets/pic/pic14.jpg'),
    "Sophia Brown": require('../src/assets/pic/pic15.webp')    
};

function Tutor(props) {
    const { name, subjects, price, description, lvl } = props;
    const profilePic = profilePics[name] || require('../src/assets/profile.jpg');

    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setShowAlert(true);
        }

        setValidated(true);
    };

    const handleReset = () => {
        setValidated(false);
        setShowAlert(false);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <div className="row mt-2">
                <div className="col-sm-2 bg-mylightgreen pt-3 pe-1">
                    <img src={profilePic} alt="Profile" width="100%" />
                </div>
                
                <div className="col-sm-10 bg-mylightgreen text-start pt-1">
                    <Row>
                        <Col xs={10}>
                            <a className="nav-link" onClick={toggleForm}>
                                <h3 className='m-0 p-0'>
                                    {name}

                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`bi bi-envelope ms-2`} viewBox="0 0 16 20">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-caret-up-fill mb-2 ${showForm ? 'd-none' : ''}`} viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg> 

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-caret-down-fill mb-2 ${showForm ? '' : 'd-none'}`} viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>

                                </h3>
                            </a>
                        </Col>
                        <Col>
                            <p className='m-0 p-0'>${price}</p>
                        </Col>
                    </Row>
                    <p className='description m-0 p-0'>{lvl}</p>
                    <p className='description m-0 p-0'>{subjects.join(' - ')}</p>
                    <p className='description m-0 p-0'>{description}</p>
                </div>

                {showForm && (
                    <div className="row py-2 ms-0 bg-mylightgreen text-start">
                        <Form noValidate validated={validated} onSubmit={handleSubmit} onReset={handleReset}>
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a name.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email address.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a message to send.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Col md="3 mt-4 py-3">
                                    <button type="submit" className='custom-send-button ms-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up pb-1" viewBox="0 0 20 16">
                                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                                        </svg>
                                        Send
                                    </button>
                                </Col>

                                <Col md="3 mt-4">
                                    {showAlert &&
                                        <Alert variant="success" className='h5 text-center mt-3 p-2 mb-0'>
                                            Message sent!
                                        </Alert>
                                    }
                                </Col>
                            </Row>
                        </Form>
                    </div>
                )}
            </div>
        </>
    );
}

export default Tutor;
