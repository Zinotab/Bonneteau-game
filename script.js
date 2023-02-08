getHighScores();
let score = 1;
let attempt = 1;
function randChose(index){
    
    document.querySelector('.C0').disabled = true;
    document.querySelector('.C1').disabled = true;
    document.querySelector('.C2').disabled = true;
    document.querySelector('.Maincontainer').style.backgroundColor = '#480ca8';
    let rand = Math.trunc(Math.random()*3);
    let CurrentAttempt = attempt++;
    document.querySelector('.attempts').value = CurrentAttempt;

    if(index == rand){
        document.querySelector('.C'+index).style.backgroundColor = 'green';
        let CurrentScore = score++;
        document.querySelector('.Score').value = CurrentScore;
        
    }else{
        document.querySelector('.C'+rand).style.backgroundColor = 'green';
        document.querySelector('.C'+index).style.backgroundColor = 'red';
    }
    let countDown = setInterval(counter, 1000);
    setTimeout(disablebtns,4000,countDown);
}
function reset(){
    document.querySelector('.C0').style.backgroundColor = '#1b073b';
    document.querySelector('.C1').style.backgroundColor = '#1b073b';
    document.querySelector('.C2').style.backgroundColor = '#1b073b';
    document.querySelector('.timeout').value = 3;
    document.querySelector('.Maincontainer').style.backgroundColor = '#480ca8';
    
}
function disablebtns(countDown){
    document.querySelector('.C0').disabled = false;
    document.querySelector('.C1').disabled = false;
    document.querySelector('.C2').disabled = false;
    clearInterval(countDown);
    reset(); 
}
function counter(){
    document.querySelector('.timeout').value -= 1;
}
function RestAll(){
    document.querySelector('.Score').value = 0;
    document.querySelector('.attempts').value = 0;
    document.querySelector('.C0').disabled = false;
    document.querySelector('.C1').disabled = false;
    document.querySelector('.C2').disabled = false;
    document.querySelector('.timeout').value = 3;
    document.querySelector('.Maincontainer').style.backgroundColor = '#480ca8';
    setHighScores(score-1);
    score = 1;
    attempt = 1;
    getHighScores();
}


const Scores = [null,null,null,null,null];

function setHighScores(TheScore){
    
    if(localStorage.getItem('Score') == null){
        
        console.log('Old data: '+Scores);
        Scores.push(TheScore);
        console.log('New data: '+Scores);
        Scores.sort((a,b)=>b-a);
        console.log('final data (sorted): '+Scores);
        localStorage.setItem('Score',JSON.stringify(Scores));
        console.log('Iam from if')
    }else{
        let OldData = JSON.parse(localStorage.getItem('Score'));
        console.log('Old data: '+OldData);
        OldData.push(TheScore);
        console.log('New data: '+OldData);
        OldData.sort((a,b)=>b-a);
        console.log('final data (sorted): '+OldData);
        localStorage.setItem('Score',JSON.stringify(OldData));
        console.log('Iam from else')
    
    }
}

function getHighScores(){
    const arr = JSON.parse(localStorage.getItem('Score'));
    const ranks = document.querySelectorAll('.ranks');

    let i = 0;
    ranks.forEach(e =>{
        if(arr[i] != 0 && arr[i] != null){
            e.innerHTML = '<h3> '+arr[i]+' Point </h3>';
        }

        i++;
    });
}
