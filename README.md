# sandworm-project1
GA project 1 - JS

## Deployment Link
https://dune-sandworm.netlify.app/


## Timeframe & Working Team (Solo)
This project was developed over the course of a week as a solo project. It was my first project in GA having been very new to Javascript and having only just learned the fundamentals of styling and CSS. 

## Technologies Used
HTML5: Structure and layout of the game.

CSS3: Styling and visual design of the game grid and elements.

JavaScript (ES6): Game logic, including player controls, movement, collision detection, and grid wrapping using modulo arithmetic.

## Brief
### Game Requirements:
Create a grid-based game using vanilla JavaScript, HTML, and CSS.

Implement classic Snake gameplay mechanics.

Use modulo arithmetic to enable grid wrapping: when the sandworm exits one side of the grid, it reappears on the opposite side.

Style the game with a Dune theme to enhance visual appeal.

Ensure the game is playable and provides a simple user interface.


## Planning
### Planning Steps:
Conceptualization: The initial idea was to create a traditional Snake game but with a twist—set it in the Dune universe with a sandworm as the protagonist. Instead of the usual food items, the sandworm would consume the Water of Life, an iconic element from the Dune lore, to grow in size.

Wireframing: Sketched out the grid layout and planned the game elements such as the sandworm, the Water of Life, and grid borders.
<img width="1188" alt="Screenshot 2024-10-17 at 23 36 15" src="https://github.com/user-attachments/assets/6d4d1593-aab7-4be8-b5ba-e1578b58aaad">

Game Logic Design:

Designed the game to utilize a grid system, where each cell has an x, y coordinate.
Implemented the modulo arithmetic to handle grid wrapping effectively.

Development Phases:

Basic game setup with HTML and CSS.
Implementing the core game loop and sandworm movement.
Adding grid wrapping using modulo.
Styling the game with a Dune-inspired theme.


<img width="957" alt="Screenshot 2024-09-09 at 21 25 00" src="https://github.com/user-attachments/assets/a3a261ac-4ada-4144-8704-b52948ef9cff">

## Code/Build Process

### Day 1: Conceptualization and Initial Setup

Began with a detailed sketch and wireframe to establish the game structure.
Wrote comprehensive pseudo-code to outline the game's logic.
Defined HTML elements using appropriate classes and IDs to set the foundation for the UI.
Completed the initial layout design using CSS for a basic structure.
Declared all necessary variables and functions in JavaScript, laying the groundwork for the game mechanics.
Constructed the grid-based game board and introduced the snake (or "sandworm") with movement and boundary conditions in place.

### Day 2: Feature Implementation and Refactoring

Updated the project’s ReadMe file to reflect changes.
Implemented the movement of the "sandworm" using a predefined speed and direction.
Created logic for detecting when the game ends, resetting its random position upon scoring.
Developed collision detection to reset the snake when it hits the walls or itself.
Used setInterval and setTimeout to implement continuous movement and control timers.
Refactored the code to remove redundancy and improve maintainability.

### Day 3: Game Dynamics and Object Management

Further updated the ReadMe file to reflect the growing features.
Introduced looping logic that ensures the presence of only two objects (the snake and apple) on the grid at any time.
Implemented logic for spawning multiple apples or hazards on the screen for added challenge.

### Day 4: Collision Handling and Visual Design

Finalized the collision detection logic for the snake with the apple and itself.
Added basic aesthetic improvements such as textures, background colors, and visual cues in the game via CSS.
Updated the ReadMe file to document these changes.

### Day 5: Object Movement and Wrapping Logic

Added additional objects like obstacles to make the game more dynamic.
Introduced functions to control object movement across the grid, ensuring smooth transitions.
Implemented wrap-around logic, where the snake reappears on the opposite side of the grid when it moves off one edge.
Continued refining the ReadMe file with detailed descriptions of the code updates.

### Day 6: Game Loop and Collision Refinement

Built a game loop to manage object spawning, movement, and collision detection in real-time.
Refined the collision handling to work seamlessly within the game loop.
Updated and refactored game initialization functions.

### Day 7: Final Polishing

Implemented the final movement and interaction logic for the snake with obstacles and the game grid.
Applied final design touches to textures and animations via CSS for a polished look.
Made final updates to the ReadMe file to reflect the completed project.



## Challenges
Grid Wrapping Logic: Implementing the wrapping logic using modulo was initially challenging due to edge cases when the sandworm crossed the boundaries.
Collision Detection: Ensuring that the sandworm accurately detects collisions with itself as it grows required careful management of its position data.
Responsive Design: Making the game grid responsive and playable on different screen sizes was challenging, requiring adjustments to the CSS and JavaScript.
Timing: Given it was my first ever project, I found it difficult to juggle functionality and hitting MVP whilst also styling and making it visually appealing.

## Wins
Successfully implemented the grid wrapping feature using modulo arithmetic, enhancing the gameplay experience.
Achieved a visually appealing design that captured the essence of the Dune universe with a really nice retro arcade style feel.
Developed a smooth and responsive control system for the sandworm, making the game enjoyable to play.

## Key Learnings/Takeaways
JavaScript Game Development: Gained confidence in using vanilla JavaScript for creating interactive games.
Modulo Arithmetic: Learned how to effectively use modulo to create grid-wrapping mechanics in a game.
Project Planning: Improved skills in planning and executing a project from concept to completion within a short timeframe.


