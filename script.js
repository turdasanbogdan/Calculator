class Calculator
{
    constructor(previousOperandTextElement, currentOperandTextElement)
    {
        this.currentOperandTextElement= currentOperandTextElement
        this.previousOperandTextElement= previousOperandTextElement
        this.clear()
    }

    clear()
    {
        this.currentOperand= ''
        this.previousOperand= ''
        this.opration = undefined

    }

    delete()
    {

    }

    appendNumber(number)
    {
      if(number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand= this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation)
    {

    }

    compute()
    {

    }

    updateDisplay()
    {
      this.currentOperandTextElement.innerText = this.currentOperand
    }
}
const numberButtons = document.querySelector('[data-number]')
const operationButton = document.querySelector('[data-operand]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear-all]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator= new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.foreach(button => {
    button.addEventListener('click', () => {
     calculator.appendNumber(button.innerText)
     calculator.updateDisplay()
     })
    
});