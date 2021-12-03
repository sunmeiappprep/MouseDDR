# [MouseDDR](https://sunmeiappprep.github.io/MouseDDR/)

# About
- MouseDDR is game idea based on the game Osu. The point of the game should be to track the random circles that will be appearing at timing interval. The speed of how fast the circle appear and disappear will be graded on a scale of non gamer to gamer like reaction. 
- Circle appears on the canvas, you sound use your mouse to track the pattern as it continues to generate new circle while the old one disappear. So you should be fast
- Get as much combo as you can.
- Chaining combo is the easiest way to get points, combo is created by sucessfully hovering on the circles as they appear



# Functionality & MVPs
- Users will be able to start and stop the game
- Select difficulty
- Select Songs
- The game will match the song BPM and render circle according to difficulty
- Volume control is included with toggle mute , volume up , volume down


# Disclaimer
- This project is only for educational purpose only(Non-commercial);
- Shape of You by Ed Sheeran: https://www.youtube.com/watch?v=VJ2rlci9PE0;
- Kamado Tanjirou no Uta by Nami: https://www.youtube.com/watch?v=Y7YwcHbvysM;
- Rolling Star by Yui: https://www.youtube.com/watch?v=WiowHc4uc0A;
- Unravel by TK: https://www.youtube.com/watch?v=H2oWviWV9r4;
- Never Gonna Give You Up  by Rick Astley : https://www.youtube.com/watch?v=dQw4w9WgXcQ;

![Gif demo](https://github.com/sunmeiappprep/MouseDDR/blob/main/ddr.gif)
<!-- <img src="wireframe.png" style="height: 500px; width:1024px;"><br> -->

# Code Snippet

```javascript
    function changealltoWhite(menu) {
        console.log(menu)
        let z = document.querySelectorAll(`.${menu}`);
        console.log(z.length)
        for (let x = 0; x < z.length;x++){
        z[x].style.color = 'white'
        }   
    }


    function changeSelectedtored(button) {
    let p = document.querySelector(`.${button}`);
    p.style.color = 'red';
    }

```
- Had to make the user choice more obvious so after the user select a button it would 
change to red.
- Also had to change the previous selected to white so there would be only 1 given red button in 
the same category

# Technologies used
- Javascript
- HTML, CSS
- Canvas API




