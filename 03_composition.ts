import * as R from 'ramda';

() => {
    const addSalary = (bankBalance: number): number => bankBalance + 200;

    const subtractFees = (bankBalance: number): number => bankBalance - 2;
    
    const payBills = (bankBalance: number): number => bankBalance - 50;
    
    const updateBankBalanceComposed = R.pipe(
        addSalary,
        subtractFees
    );
    
    const updated: number = updateBankBalanceComposed(500);
};