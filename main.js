const secondBox = document.querySelector('#seconds'),
    tensBox = document.querySelector('#tens'),
    btnStart = document.querySelector('#start'),
    btnStopContinue = document.querySelector('#stop-continue'),
    bntReset = document.querySelector('#reset');

    console.log(btnStart,btnStopContinue,bntReset )

var currentTime = {
    second: 0,
    tens: 0,
    isRunning: false
}

var interval;

function showTime(){
    secondBox.textContent = String(currentTime.second).padStart(2,'0');
    tensBox.textContent = String(currentTime.tens).padStart(2,'0');
}

bntReset.addEventListener('click',()=>{
    clearInterval(interval);
    currentTime.second = 0;
    currentTime.tens = 0;
    currentTime.isRunning = false;
    showTime();
})

btnStart.addEventListener('click',()=>{
    if(currentTime.isRunning){
        alert('Watch is running!!!')
        return;
    }
    else{
        interval = setInterval(runTime,10);
        currentTime.isRunning = true;
        btnStopContinue.classList.add('running')
    }
})

btnStopContinue.addEventListener('click',()=>{
    if(currentTime.isRunning){
        clearInterval(interval)
        btnStopContinue.classList.remove('running')
        currentTime.isRunning= false;
    }
    else{
        interval = setInterval(runTime, 10);
        currentTime.isRunning = true;
        btnStopContinue.classList.add('running')
    }
})

const runTime = ()=>{
    currentTime.tens++;
    if(currentTime.tens>=100){
        currentTime.tens = 0;
        currentTime.second++
    }
    showTime();
}
