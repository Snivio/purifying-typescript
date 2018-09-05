import { Maybe, maybe } from 'tsmonad';

() => {
    // Normal
    const canWithdrawMoney = (balance: number): boolean => {
        let canWithdraw = false;
        if (balance) {
            canWithdraw = balance > 0;
        }
        return canWithdraw;
    };

    const updated = canWithdrawMoney(null);

    // Pattern matching
    const canWithdrawMoneyMaybe = (balance: number): boolean => {
        return maybe(balance).caseOf({
            just: value => value > 0,
            nothing: () => false
        });
    };

    const updatedMaybe = canWithdrawMoneyMaybe(null);
};