type Customer = Readonly<{
    name: string
    beverages: ReadonlyArray<string>
}>;

const customers: ReadonlyArray<Customer> = [{
        name: 'Bill',
        beverages: ['tea']
    },
    {
        name: 'Ted',
        beverages: ['coffee']
    }
];

const immutable = (customers: ReadonlyArray<Customer>): ReadonlyArray<string> => {
    
    const getCustomerName = (customer: Customer): string => customer.name;

    const isCoffeeDrinker = (customer: Customer): boolean => customer.beverages.includes('coffee');

    return customers.filter(isCoffeeDrinker).map(getCustomerName);
}

// Test

import { expect } from 'chai';
import 'mocha';

it('should get the names using readonly', () => {
    const coffeeDrinkerNames = immutable(customers);
    expect(coffeeDrinkerNames.length).length.to.eq(1);
    expect(coffeeDrinkerNames[0]).length.to.eq('Ted');
});