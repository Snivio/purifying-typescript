import * as R from "ramda";

() => {
    ///////////////////////////////////////////////////////////////
    // Normal
    ///////////////////////////////////////////////////////////////
    
    const updateBankBalance = (currentBalance: number, salary: number, fees: number): number => 
        currentBalance + salary - fees;

    updateBankBalance(500, 200, 2);

    ///////////////////////////////////////////////////////////////
    // Currying - Transforming a function with many arguments into a sequence of functions each with one argument
    // Allows for creation of customised functions without having to define them
    // Arguments can be given at different times, partial functions can be passed around
    ///////////////////////////////////////////////////////////////

    const updateBankBalanceCurried = R.curry(updateBankBalance);
    
    // Calculate current bank balance
    
    const withBankBalance = updateBankBalanceCurried(500);
    
    // Calculate salary

    const withBankBalanceAndSalary = withBankBalance(200);

    // Calculate fees

    withBankBalanceAndSalary(2);
};