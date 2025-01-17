# Calculator Project Breakdown

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

    Creating a simple keyboard that can add / subtract / multiply / divide

## HTML / SCSS

-   [ ] We need a display for the values
-   [ ] We need a set of buttons

    -   [ ] Number buttons from 0 to 9
    -   [ ] Operator buttons (+, - [ ], \* x, / or symbol, =)
    -   [ ] Decimal (.)
    -   [ ] Clear AC
    -   [ ] Delete DEL

-   [ ] We want the button to have spacing around them
-   [ ] the numbers be arranged together
-   [ ] Operators should be on the right hand side
-   [ ] AC and DEL on the top
-   [ ] Buttons should have a different colour than the background
-   [ ] Operator buttons should have a different styling than the number button
-   [ ] Button (0) is double the width of all the other buttons

## TypeScript Logic

-   [ ] eventListeners will need to look out for clicks
    -   [ ] listen for click on numbers, dot, operator => should concatenate value of button on display
    -   [ ] listen for click on AC => should remove everything from display
    -   [ ] listen for click on (=) => should trigger the calculation with the values that were inputted in the display
    -   [ ] list for click on DEL => remove the last char/value from the display

<!-- <!- [ ]- [ ] elementToTarget.addEventListener("click", handler) - [ ]- [ ]> -->

-   [ ] we need a function that handles (= click) i.e. the calculation of our operation
    -   [ ] have one handleEquals()
    -   [ ] have one calculate()
        -   [ ] When dividing by 0 we want to return Not a number
        -   [ ]
-   [ ] we need a function that handles clicks on numbers, dot, operators (handleClick, registerClick)
    -   [ ] we will only allow one decimal point to be added in the same number
    -   [ ] set up a limit on the max number length in the display
    -   [ ] not allowing two operators in a row
    -   [ ] we will need to handle a fresh input after the equal has been pressed
-   [ ] all my functions should handle error state