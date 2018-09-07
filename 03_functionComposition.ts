import * as R from 'ramda';

() => {
    // Combining two or more functions to produce a new function
    // Creating pipelines for our data

    const addSalary = (currentBalance: number): number => currentBalance + 200;

    const subtractFees = (currentBalance: number): number => currentBalance - 2;
    
    const subtractBills = (currentBalance: number): number => currentBalance - 50;

    ///////////////////////////////////////////////////////////////
    // Sharing and mutating data
    ///////////////////////////////////////////////////////////////

    const updateBankBalance = (currentBalance: number): number => {
        currentBalance = addSalary(currentBalance);
        currentBalance = subtractFees(currentBalance);
        currentBalance = subtractBills(currentBalance);
        return currentBalance;
    }

    updateBankBalance(500);

    // Or unreadable

    subtractBills(subtractFees(addSalary(500)));

    ///////////////////////////////////////////////////////////////
    // Function composition - small, reusable functions, easier to read and test
    ///////////////////////////////////////////////////////////////
    
    const updateBankBalanceComposed = R.pipe(
        addSalary,
        subtractFees,
        subtractBills
    );

    updateBankBalanceComposed(500);
};