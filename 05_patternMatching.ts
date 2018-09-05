import { Maybe } from 'tsmonad';

() => {
    const canWithdrawMoney = (balance: number | null): boolean => {
        let canWithdraw = false;
        if (balance) {
            canWithdraw = balance > 0;
        }
        return canWithdraw;
    };

    const canWithdrawMaybe = (balance: Maybe<number>): boolean => {
        return balance.caseOf({
            just: value => value > 0,
            nothing: () => false
        });
    };
};