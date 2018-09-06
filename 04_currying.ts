import * as R from "ramda";

() => {
    ///////////////////////////////////////////////////////////////
    // Normal
    ///////////////////////////////////////////////////////////////
    
    const updateBankBalance = (currentBalance: number, salary: number, fees: number): number => currentBalance + salary - fees;

    updateBankBalance(500, 200, 2);

    ///////////////////////////////////////////////////////////////
    // Currying - breaks function with multiple arguments into a sequence of functions - 1 per argument
    // Allows you to manage how arguments are passed to functions
    // Arguments can be given at different points, functions can be passed around
    ///////////////////////////////////////////////////////////////

    const updateBankBalanceCurried = R.curry(updateBankBalance);
    
    // Calculate current bank balance
    
    const withBankBalance = updateBankBalanceCurried(500);
    
    // Calculate salary

    const withBankBalanceAndSalary = withBankBalance(200);

    // Calculate fees

    withBankBalanceAndSalary(2);
};