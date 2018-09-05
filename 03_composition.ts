import * as R from "ramda";
import { expect } from 'chai';
import 'mocha';

const addInterest = (bankBalance: number): number => R.add(bankBalance, (2 / 100) * bankBalance);

const subtractFees = (bankBalance: number): number => R.subtract(bankBalance, 2);

const updateBankBalancePipe = R.pipe(
    subtractFees,
    addInterest
);

const updateBankBalanceCompose = R.compose(
    addInterest,
    subtractFees
);

// Tests
it('should update bank balance using pipe', () => {
    const updated = updateBankBalancePipe(500);
    expect(updated).to.eq(507.96);
});

it('should update bank balance using compose', () => {
    const updated = updateBankBalanceCompose(500);
    expect(updated).to.eq(507.96);
});