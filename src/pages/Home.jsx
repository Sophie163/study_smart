import React from 'react';

function Home() {
    return (
        <>
            <html lang="en"></html>
            <div className="container my-5"></div>
            <div className="container my-3"></div>
            <div style={{ display: 'block', width: '100%', padding: 0 }} className="bg-mygreen pt-3">
                <h1 className='mb-3'>Start <strong>Studying Smart</strong> with our Helpful Tools</h1>
                <img src={require('../assets/group.jpeg')} width="50%" alt="Group of students studying together" aria-hidden="true" />
                <p className='mt-3'>
                    <button type="gotutors" className="custom-secondary mx-3">
                        <a className="nav-link" href="/study_smart/#/Tutors">Tutors</a>
                    </button>
                    <button type="goplanner" className="custom-secondary mx-3">
                        <a className="nav-link" href="/study_smart/#/Planner">Planner</a>
                    </button>
                    <button type="gotiming" className="custom-secondary mx-3">
                        <a className="nav-link" href="/study_smart/#/Timer">Timer</a>
                    </button>
                </p>
            </div>

            <h1 className="pt-4 my-2">Learn the Benefits of Studying Smart</h1>
            <div className="container mb-2 p-4">
                <div className="row">
                    <div className="col-sm-4 bg-white m-0 p-0">
                        <img src={require('../assets/tutor.jpg')} width="100%" alt="Tutor providing guidance to a student" />
                    </div>
                    <div className="col-sm-8 bg-white p-4 text-start">
                        <h2><strong>Tutoring</strong></h2>
                        <p>
                            Tutors can provide personalized support and guidance that is not always available in traditional classroom settings. Tutors have the ability to cater to the student’s specific learning needs and adapt their teaching methods to match the unique learning style of each student, whether they require extra explanations, practice problems, or alternative approaches to understanding complex concepts. This tailored approach not only enhances comprehension but also boosts confidence by addressing specific areas of difficulty. Overall, the personalized and supportive nature of tutoring fosters a positive learning experience that empowers students to excel academically.
                        </p>
                        <button type="gotutors" className="custom-primary m-2">
                            <a className="nav-link" href="/study_smart/#/Tutors">Find your Tutor</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container my-2 p-4">
                <div className="row">
                    <div className="col-sm-8 bg-white p-4 text-start">
                        <h2><strong>Planning</strong></h2>
                        <p>
                            Using a planner to schedule study time helps to promote organization by clearly outlining when assignments are due and when exams are scheduled, preventing last-minute cramming. This method also encourages consistency in studying, spreading out workload efficiently over time rather than overwhelming students with too much at once. Additionally, planning study sessions allows for better time management, ensuring students allocate sufficient time for each subject or task. Ultimately, using a planner helps students stay on track, reduce stress, and maintain a balanced approach to their academic responsibilities.
                        </p>
                        <button type="goplanner" className="custom-primary m-2">
                            <a className="nav-link" href="/study_smart/#/Planner">Start Planning</a>
                        </button>
                    </div>
                    <div className="col-sm-4 bg-white m-0 p-0">
                        <img src={require('../assets/planner.jpeg')} width="100%" alt="Student using a planner to organize study schedule" />
                    </div>
                </div>
            </div>
            <div className="container my-2 p-4">
                <div className="row">
                    <div className="col-sm-4 bg-white m-0 p-0">
                        <img src={require('../assets/timer.jpeg')} width="100%" alt="Student studying for a set amount of time" />
                    </div>
                    <div className="col-sm-8 bg-white p-4 text-start">
                        <h2><strong>Timing</strong></h2>
                        <p>
                            Study timers are beneficial tools for students as they promote focused and efficient study sessions. By setting a specific time limit for studying a particular subject or task, students can maintain concentration and avoid distractions. Study timers create a sense of urgency that helps in staying motivated and productive throughout the study period. Moreover, study timers break down study sessions into manageable chunks, preventing burnout and enhancing retention of information. By regularly using study timers, students develop discipline in time management and improve their overall study habits, leading to more effective learning outcomes.
                        </p>
                        <button type="gotiming" className="custom-primary m-2">
                            <a className="nav-link" href="/study_smart/#/Timer">Reach your Goals</a>
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ display: 'block', width: '100%', padding: 0 }} className="bg-mygreen my-4">
                <p className='my-4'>
                    Have any <strong>Questions</strong>? We might have already answered them!
                    <button type="gosignin" className="custom-secondary mx-4">
                        <a className="nav-link" href="/study_smart/#/FAQ">Go to FAQ</a>
                    </button>
                </p>
            </div>
            <div className="container my-4"></div>
        </>
    );
}

export default Home;