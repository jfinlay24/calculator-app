export const parseInput = (calcText: string): number => {
    return parseInt(calcText, 10);
}  

export const isOperand = (calcText: string): boolean => {
    const operands = ["+", "-", "*", "/"];
    if (operands.includes(calcText)) {
        return true;
    }
    return false;
} 

export const CalculateSum = (current: string, calcText: string,  operand: string ) => {
    let res = parseInt('');
    console.log(operand);
    switch(operand) {
        case '+':
                res = (parseFloat(current) + parseFloat(calcText));  
                return res;                      
        case '-':
                res = (parseFloat(current) - parseFloat(calcText));
                return res;
        case '*':
                res = (parseFloat(current) * parseFloat(calcText));
                return res;
        case '/':
                res = (parseFloat(current) / parseFloat(calcText));
                return res;
        default:
            break;
    }
}

export default parseInput;