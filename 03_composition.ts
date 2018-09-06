import * as R from 'ramda';


() => {    
    const addSalary = (currentBalance: number): number => currentBalance + 200;

    const subtractFees = (currentBalance: number): number => currentBalance - 2;
    
    const subtractBills = (currentBalance: number): number => currentBalance - 50;
    
    R.pipe(
        addSalary,
        subtractFees
    );
    
    R.compose(
        addSalary,
        subtractFees
    );
};