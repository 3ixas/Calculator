// Calculator class to handle all calculator logic
class Calculator {
    // Properties to store the display element and current state of the calculator
    private display: HTMLElement; // The calculator's display element
    private currentOperand: string = ""; // The number currently being typed
    private previousOperand: string = ""; // The number stored for calculation
    private operator: string | null = null; // The selected operator (+, - *, /)

    // Constructor to initialise the display element
    constructor(displayId: string) {
        this.display = document.getElementById(displayId)!;
    }

    // Append a number or decimal point to the current operand
    appendNumber(number: string) {
        // Prevent multiple decimal points
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand += number; // Add the number to the current operand
        this.updateDisplay(); // Update the display to reflect the change
    }
    
    // Set the operator and prepare for calculation
    chooseOperator(operator: string) {
        // Do nothing if there is no current operand
        if (this.currentOperand === "") return; 

        // If there is already a previous operand, calculate the result first
        if (this.previousOperand !== "") {
            this.compute();
        }

        // Set the operator and move the current operand to the previous operand
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ""; // Clear the current operand for the next input
    }

    // Perform the computation based on the selected operator
    compute() {
        // Parse the operands as numbers
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        // Return if either operand is invalid
        if (isNaN(prev) || isNaN(current)) return; 

        // Variable to store the result of the calculation
        let result: number;

        // Perform the operation based on the selected operator
        switch (this.operator) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = current !== 0 ? prev / current : 0; // This handles any division by zero
                break;
            default:
                return;
        }

        // Update the current operand with the result and reset other values
        this.currentOperand = result.toString();
        this.operator = null;
        this.previousOperand = "";
        this.updateDisplay(); // Update the display by showing the result
    }

    // Handle special functions like AC, plus/minus, %
    handleSpecialFunction(func: string) {
        switch (func) {
            case "AC": // Clear all values
                this.clear();
                break;
            case "+/-": // Toggle the sign of the current operand
                this.currentOperand = (parseFloat(this.currentOperand) * -1).toString();
                break; // Convert the current operand to a percentage
                this.currentOperand = (parseFloat(this.currentOperand) / 100).toString();
                break;
        }
        this.updateDisplay(); // This updates the display to reflect the above changes
    }

    // Clear all values in the calculator
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = null;
        this.updateDisplay(); // Reset the display back to 0
    }

    // Update the calculator display with the current operand
    updateDisplay() {
        this.display.innerText = this.currentOperand || "0"; // Show 0 if the current operand is empty
    }
}

// Initialise the calculator class with the display element
const calculator = new Calculator("display");

// Add event listeners to all buttons
document.querySelectorAll(".btn").forEach((button) => {
    const btn = button as HTMLButtonElement; // Cast the button as a HTMLButtonElement
    const value = btn.dataset.value; // Get the value of the button from the data-value attribute

    // Add functionality based on the button's value
    if (["AC", "+/-", "%"].includes(value!)) {
        // Special functions like AC, plus/minus, %
        btn.addEventListener("click", () => calculator.handleSpecialFunction(value!));
    } else if (["+", "-", "*", "/"].includes(value!)) {
        // Operators like +, -, *, /
        btn.addEventListener("click", () => calculator.chooseOperator(value!));
    } else if (value === "=") {
        // Equals button
        btn.addEventListener("click", () => calculator.compute());
    } else {
        // Number or decimal button
        btn.addEventListener("click", () => calculator.appendNumber(value!));
    }
});
