const secondBox = document.querySelector('#seconds'),
    tensBox = document.querySelector('#tens'),
    minuteBox = document.querySelector('#minute')
    btnStopContinue = document.querySelector('#stop-continue'),
    bntReset = document.querySelector('#reset');

const alertTime = 2;

var currentTime = {
    second: 0,
    tens: 0,
    minute: 0,
    isRunning: false
}

var interval;

setInterval(notification,1000)

function notification(){
    if(alertTime === currentTime.minute*60 + currentTime.second){
        Notification.requestPermission().then(perm=>{
            // alert(perm)
            if(perm === 'granted'){
                const noti = new Notification("Complete this task",{
                    body: "This is task notification!!",
                    data: {
                        hello: 'world'
                    },
                })
                console.log(noti)
                noti.addEventListener('close',(event)=>{
                    console.log(event)
                })
                
            }
        })
    }
}

function showTime(){
    secondBox.textContent = String(currentTime.second).padStart(2,'0');
    tensBox.textContent = String(currentTime.tens).padStart(2,'0');
    minuteBox.textContent = String(currentTime.minute).padStart(2,'0')
}

bntReset.addEventListener('click',()=>{
    clearInterval(interval);
    currentTime.second = 0;
    currentTime.tens = 0;
    currentTime.isRunning = false;
    btnStopContinue.classList.remove('running')
    showTime();
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
        if(currentTime.second == 60){
            currentTime.second = 0;
            currentTime.minute++;
        }
    }
    showTime();
}
