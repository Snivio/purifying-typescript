import * as R from "ramda";

() => {
    // Normal
    const updateBankBalance = (currentBalance: number, salary: number, fees: number): number => currentBalance + salary - fees;

    const updatedBalance: number = updateBankBalance(500, 200, 2);

    // Curried
    const curriedCalculator = R.curry(updateBankBalance);
    
    // Get balance...
    
    const withBalance = curriedCalculator(500);
    
    // Get salary...
    
    const withSalary = withBalance(200);

    // Get fees...

    const withFees: number = withSalary(2);
};