import React, { useState, useEffect } from 'react';
import { ProgressBar, Form, Alert, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import pic5 from '../src/assets/tree1.jpg';
import pic4 from '../src/assets/tree2.jpg';
import pic3 from '../src/assets/tree3.jpg';
import pic2 from '../src/assets/tree4.jpg';
import pic1 from '../src/assets/tree5.jpg';

const Time = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    if (timerRunning && !timerPaused) {
      const interval = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            clearInterval(interval);
            setTimerRunning(false);
            setTimerEnded(true);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerRunning, timerPaused]);

  useEffect(() => {
    const percentage = (timeLeft / totalTime) * 100;
    setProgress(percentage);
  }, [timeLeft, totalTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleStartTimer = () => {
    if (!timerRunning) {
      if (timeLeft === 0) {
        setTimeLeft(totalTime);
      }
      setTimerRunning(true);
      setTimerPaused(false);
      setTimerEnded(false);
    } else {
      setTimerPaused(!timerPaused);
    }
  };

  const handleResetTimer = () => {
    clearInterval();
    setTimerRunning(false);
    setTimerPaused(false);
    setTimeLeft(0);
    setTimerEnded(false);
  };

  let pic;
  if (progress < 20) {
    pic = pic1;
  } else if (progress >= 20 && progress < 40) {
    pic = pic2;
  } else if (progress >= 40 && progress < 60) {
    pic = pic3;
  } else if (progress >= 60 && progress < 80) {
    pic = pic4;
  } else {
    pic = pic5;
  }

  return (
    <div className="container my-5 p-4">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-6 bg-white p-4">
          <div className="mx-5 mb-2">
            <Row>
              <Col></Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label><h3>Select Time:</h3></Form.Label>
                  <Form.Control
                    as="select"
                    value={totalTime / 60}
                    onChange={(e) => setTotalTime(parseInt(e.target.value, 10) * 60)}
                  >
                    <option value="0">Time (in minutes)</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col></Col>
            </Row>
          </div>

          <button className="custom-start mx-2" onClick={handleStartTimer} disabled={totalTime === 0}>
            {timerRunning && !timerPaused ? 'Pause' : 'Start Timer'}
          </button>

          <button className="custom-reset mx-2" onClick={handleResetTimer} disabled={!timerRunning && !timerEnded}>
            Reset
          </button>

          <h5 className="mt-4 mb-2">Time Remaining: {formatTime(timeLeft)}</h5>
          <ProgressBar animated now={100 - progress} label={`${100 - Math.round(progress)}%`} className="mb-4" variant='success'/>

          {timerEnded && (
            <Alert variant="success" style={{ marginTop: "10px", padding: "5px", marginLeft: "100px", marginRight: "100px"}}>
              <Alert.Heading className='m-0 p-0'>Timer Ended!</Alert.Heading>
              <p className='m-0 p-0'>You finished your study period</p>
            </Alert>
          )}
        </div>

        <div className="col-sm-4 bg-white m-0 p-0">
          <img src={pic} width="80%" alt="Progress Image"/>
        </div>

        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default Time;
