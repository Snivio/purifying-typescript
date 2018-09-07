import { maybe } from 'tsmonad';

() => {
    // Monad!
    // Values have problems - may be null, may throw an error etc
    // Monad is a container around a value which defines a set of operations we can perform
    // Maybe monad allows us to specify something may not be there
    // Promise is similar to a monad - success and error
    // Typically how side effects are dealt with in FP

    ///////////////////////////////////////////////////////////////
    // Normal
    ///////////////////////////////////////////////////////////////

    const canWithdrawMoney = (balance: number): boolean => {
        let canWithdraw = false;
        if (balance) {
            canWithdraw = balance > 0;
        }
        return canWithdraw;
    };

    canWithdrawMoney(null);

    ///////////////////////////////////////////////////////////////
    // Pattern matching
    ///////////////////////////////////////////////////////////////

    const canWithdrawMoneyPatternMatching = (balance: number): boolean => {
        return maybe(balance).caseOf({
            just: b => b > 0,
            nothing: () => false
        });
    };

    canWithdrawMoneyPatternMatching(null);
};