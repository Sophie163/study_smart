import React from 'react'; 
import Time from '../time';

const totalTime = 300;

function Timer() {     
    return (     
        <>
        <div style={{ display: 'block', width: '100%', padding: 45 }} class="bg-mygreen"></div>
        <div style={{ display: 'block', width: '100%', padding: 15 }} class="bg-mygreen">
            <h1>Study Timer</h1>
        </div>
        <div style={{ display: 'block', width: '100%', padding: 0 }}>
            <Time totalTime={totalTime} />
        </div>
        </>    
    ); 
} 

export default Timer;