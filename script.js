'use strict';

let [computer_score, user_score] = [0, 0];
let results_ref = document.getElementById( "result" );
let choices_object = {
  "rock" : { "rock" : "tie", "paper" : "lose", "scissors" : "win" },
  "paper" : { "rock" : "win", "paper" : "tie", "scissors" : "lose" },
  "scissors" : { "rock" : "lose", "paper" : "win", "scissors" : "tie" }
};


function checker ( input )
{ 
  let choices = ["rock", "paper", "scissors"];
  let num = [Math.floor(Math.random() * 3)];
  
  document.getElementById( "comp_choice" ).innerHTML = `Computer has chosen... <span> ${choices[num].toUpperCase()} </span>`;
  document.getElementById( "user_choice" ).innerHTML = `You have chosen... <span> ${input.toUpperCase()} </span>`;

  let computer_choice = choices[num];
  switch ( choices_object[input][computer_choice] )
  { 
    case "win":
      results_ref.style.cssText = 'background-color: #cefdce; color: #689f38';
      results_ref.innerHTML = "You win!";
      user_score++;
      break;
    case "lose" :
      results_ref.style.cssText = 'background-color: #ffcccc; color: #d32f2f';
      results_ref.innerHTML = "You lose!";
      computer_score++;
      break;
    default :
      results_ref.style.cssText = 'background-color: #D3D3D3; color: #696969';
      results_ref.innerHTML = "It's a tie!";
      break;
  }

  document.getElementById( "computer_score" ).innerHTML = computer_score;
  document.getElementById( "user_score" ).innerHTML = user_score;

  function resetGame() {
  userScore = 0;
  computerScore = 0;

  userScoreText.textContent = userScore;
  computerScoreText.textContent = computerScore;

  userChoiceText.textContent = "Make your move";
  computerChoiceText.textContent = "Waiting...";
  resultText.textContent = "First to 10?";
  }
  
  resetBtn.addEventListener("click", resetGame);
}