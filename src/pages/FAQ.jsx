import React from 'react';

function FAQ() {     
    return (     
        <>
        <div class="container my-5"></div>
        <h1 className="pt-4 my-2">Frequently Asked Questions</h1>
        <div class="container mb-2 p-4">
            <div class="row">
                <div class="col-sm-6 bg-mydarkgreen m-0 p-0">
                <img src={require('../assets/ex_tutors.png')} width="95%" className='my-3'/>
                </div>
                <div class="col-sm-6 bg-white px-4 pt-3 text-start">
                    <h2>How do I book a tutor?</h2>
                    <p>On the <a class="link-success link-opacity-75-hover" href="/study_smart/#/Tutors">Tutors</a> page, browse different tutor options by subjects, level, and price. Once you have found a suitable tutor for your needs, click on their name to start contacting them. Enter your name, your email, and your message for the tutor sharing your request for tutoring, and they will get back to you with further details.</p>
                </div>
            </div>
        </div>
        <div class="container my-2 p-4">
            <div class="row">
                <div class="col-sm-6 bg-white px-4 pt-3 text-start">
                    <h2>How do I use the study planner?</h2>
                    <p>To effectively make use of the study planner on the <a class="link-success link-opacity-75-hover" href="/study_smart/#/Planner">Planner</a> page, you should fill out the days with all of your study related events and deadlines. Test dates, tutoring sessions, and due dates each have their own designated colours to facilitate organization. To add an event or deadline to the calendar, change the colour of the entry and add a short description.</p>
                </div>
                <div class="col-sm-6 bg-mydarkgreen m-0 p-0">
                <img src={require('../assets/ex_planner.png')} width="95%" className='my-3'/>
                </div>
            </div>
        </div>
        <div class="container my-2 p-4">
            <div class="row">
                <div class="col-sm-6 bg-mydarkgreen m-0 p-0 pt-1">
                <img src={require('../assets/ex_timer.png')} width="95%" className='my-3'/>
                </div>
                <div class="col-sm-6 bg-white px-4 pt-3 text-start">
                    <h2>How do I operate the study timer?</h2>
                    <p>The tree on the <a class="link-success link-opacity-75-hover" href="/study_smart/#/Timer">Timer</a> page grows as you study! Select a length of time to study for and click “Start Timer”. Grow your tree until the countdown ends, or use the “Pause” if you need to step away for a short moment. Use the “reset” Button to end your current timer. Aim to grow a large and healthy tree by the end of your study session!</p>
                </div>
            </div>
        </div>
        </>    
    ); 
} 

export default FAQ;