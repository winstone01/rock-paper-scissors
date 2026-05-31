# Rock Paper Scissors Game

A simple browser-based **Rock Paper Scissors** game built with HTML, CSS, and JavaScript.

The player chooses rock, paper, or scissors, and the computer randomly selects its move. The game then compares both choices, displays the result, and updates the score.

## Live Preview

Add your GitHub Pages link here once published:

```text
https://winstone.github.io/rockpaper-scissor-game/
```

## Screenshot

Add a screenshot of the finished project here:
<img width="1896" height="943" alt="Screenshot 2026-05-31 at 03 38 08" src="https://github.com/user-attachments/assets/cf221cc6-270a-4fdd-8788-41379a8f44e9" />


```markdown
![Rock Paper Scissors Game Screenshot](./screenshot.png)
```

## Features

- Player can choose **rock**, **paper**, or **scissors**
- Computer randomly selects a choice
- Win, lose, and tie results are displayed clearly
- Score tracking for both player and computer
- Responsive game card layout
- Font Awesome icons for the hand symbols
- Hover animation on game buttons
- Clean gradient background and centered UI

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## How It Works

The game uses a JavaScript object to store the possible outcomes:

```js
let choices_object = {
  rock: { rock: "tie", paper: "lose", scissors: "win" },
  paper: { rock: "win", paper: "tie", scissors: "lose" },
  scissors: { rock: "lose", paper: "win", scissors: "tie" }
};
```

When the player clicks a button, the `checker()` function runs. It:

1. Stores the player's choice
2. Generates a random computer choice
3. Compares both choices
4. Displays the result
5. Updates the score

## Project Structure

```text
rock_paper_scissor_game/
├── index.html
├── style.css
├── script.js
└── README.md
```

## What I Learned

This project helped me practise:

- DOM selection and updates
- JavaScript objects for game logic
- Conditional logic with `switch`
- Random selection using `Math.random()`
- Updating scores dynamically
- Styling buttons and layout with CSS
- Using external icon and font libraries

## Possible Future Improvements

- Add a reset button
- Add a “first to 10 wins” mode
- Add sound effects
- Add button active states after each choice
- Improve mobile responsiveness
- Add localStorage to save the score
- Add a short countdown before showing the computer choice

## Author

**Winstone Anderson**

- GitHub: [[@winstone01](https://github.com/winstone01)](https://github.com/winstone01/)
- Portfolio: winstoneanderson.com
