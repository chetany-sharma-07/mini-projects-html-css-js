let scoreStr=localStorage.getItem('Score');
       let score;
       resetResult(scoreStr);
       function resetResult(scoreStr){

           score =scoreStr?JSON.parse(scoreStr):{
                    win:0,
                    lose:0,
                    tie:0,
                } ;
            score.displayScore = function(){
                 return `Win:${score.win} Lost:${score.lose} Tie:${score.tie}`;
             }
       }

        
        function computerMove()
        {
            let randomNumber = Math.random()*3;
            if(randomNumber>0 && randomNumber<=1){
                return 'Bat';
            }
            else if(randomNumber>1 && randomNumber<=2){
                return 'Ball';
            }
            else{
                return 'Stump';
            }
        }

        function resultGet(userMove,computerMove)
        {   
            if(computerMove==userMove){
                score.tie++;
                return`It's a Tie`;
            }
            else if(userMove=='Bat'){
                if(computerMove=='Ball'){
                    score.win++;
                    return `You win`;
                }
                else{
                    score.lose++;
                    return'You lose';
                }               
            }
            else if(userMove=='Ball'){
                if(computerMove=='Stump'){
                    score.win++;
                    return `You win`;
                }
                else{
                    score.lose++;
                    return'You lose';
                }               
            }
            else{
                if(computerMove=='Bat'){
                    score.win++;
                    return `You win`;
                }
                else{
                    score.lose++;
                    return'You lose';
                }               
            }
        }

        function displayResult(userMove,computerMove,result){
            localStorage.setItem('Score',JSON.stringify(score));

            document.querySelector('.user-move').innerText=userMove?`Your choice is ${userMove}`:'';
            document.querySelector('.computer-move').innerText=computerMove?`Computer choice is ${computerMove}`:'';
            document.querySelector('.result').innerText=result||'';
            document.querySelector('.score').innerText=`Score:${score.displayScore()}`

            // alert(`Your choice is ${userMove}.Computer choice is ${computerMove}.${result}\n${score.displayScore()}`);
        }