 const choices = ['rock', 'paper', 'scissors'];

        let playerDisplay = document.querySelector('.player');
        let computerDisplay = document.querySelector('.computer');
        let resultDisplay = document.querySelector('.result');
        let playerScoreDisplay = document.querySelector('.p-score');
        let computerScoreDisplay = document.querySelector('.c-score');

        let playerChoice = 0;
        let playerScore = 0;
        let computerScore = 0;
        let reuslt = "";


        let rock = document.querySelector('.rock');
        let paper = document.querySelector('.paper')[1];
        let scissors = document.querySelector('.scissors')[2];

        function playGame(playerChoice) {
            const randNum = Math.floor(Math.random() * 3);
            const computerChoice = choices[randNum];
            let result = "";

            if (playerChoice === computerChoice) {
                result = "IT'S A TIE";
            } else {
                switch (playerChoice) {

                    case 'rock':
                        result = (computerChoice === 'scissors') ? 'YOU WIN!' : 'YOU LOOSE'
                        break;

                    case 'paper':
                        result = (computerChoice === 'rock') ? 'YOU WIN!' : 'YOU LOOSE'
                        break;

                    case 'scissors':
                        result = (computerChoice === 'paper') ? 'YOU WIN!' : 'YOU LOOSE'
                        break;
                }
            }


            playerDisplay.textContent = `PLAYER: ${playerChoice}`;
            computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
            resultDisplay.textContent = result;

            resultDisplay.classList.remove('green-win', 'red-loose');

            switch (result) {
                case 'YOU WIN!':
                    resultDisplay.classList.add('green-win');
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    break;
                case 'YOU LOOSE':
                    resultDisplay.classList.add('red-loose');
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    break;
            }
        }
