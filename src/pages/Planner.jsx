import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Day from '../day';
import '../custom.scss';

function Planner() {     
    return (         
        <>
        <div style={{ display: 'block', width: '100%', padding: 45}} class="bg-mygreen"></div>
        <div style={{ display: 'block', width: '100%', padding: 15}} class="bg-mygreen">
            <h1>Study Planner</h1>
        </div>
        <div style={{ display: 'block', width: '100%', paddingBottom: 15}} class="bg-mygreen">
            <Row>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Sun</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Mon</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Tue</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Wed</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Thu</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Fri</h4></div></Col>
            <Col><div class="classWithPad bg-mylightgreen pb-1"><h4>Sat</h4></div></Col>
            </Row>
        </div>
        <div style={{ display: 'block', width: '100%'}} class="bg-mygreen">
            <Row>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            <Col><div class="classWithPad bg-mylightgreen"><Day /></div></Col>
            </Row>
        </div>
        <div style={{ display: 'block', width: '100%', padding: 30}} class="bg-mygreen">
            <Row>
            <Col>
                <h2 class="text-danger bg-mylightgreen mx-5 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-fill me-2 mb-1" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                </svg>
                Test Date
                </h2>
            </Col>
            <Col>
                <h2 class="text-info bg-mylightgreen mx-3 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill me-2 mb-1" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
                Tutoring Session
                </h2>
            </Col>
            <Col>
                <h2 class="text-warning bg-mylightgreen mx-5 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-text-fill me-2 mb-1" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                </svg>
                Due Date
                </h2>
            </Col>
            </Row>
        </div>
        </>
    ); 
} 

export default Planner;