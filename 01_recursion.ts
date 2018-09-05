type Customer = {
    name: string
    beverages: Array<string>
};

const customers: Array<Customer> = [{
        name: 'Bill',
        beverages: ['tea']
    },
    {
        name: 'Ted',
        beverages: ['coffee']
    }
];

const loop = (customers: Array<Customer>): Array<string> => {
    const coffeeDrinkerNames = [];
    for (let customer of customers) {
        if (customer.beverages) {
            for (let beverage in customer.beverages) {
                if (customer.beverages[beverage] === 'coffee') {
                    coffeeDrinkerNames.push(customer.name);
                }
            }
        }
    }
    return coffeeDrinkerNames;
};

const higherOrderFunctions = (customers: Array<Customer>): Array<string> => {

    const getCustomerName = (customer: Customer): string => customer.name;

    const isCoffeeDrinker = (customer: Customer): boolean => customer.beverages.includes('coffee');

    return customers.filter(isCoffeeDrinker).map(getCustomerName);
};

// Test

import { expect } from 'chai';
import 'mocha';

it('should get the names using a loop', () => {
    const coffeeDrinkerNames = loop(customers);
    expect(coffeeDrinkerNames.length).length.to.eq(1);
    expect(coffeeDrinkerNames[0]).length.to.eq('Ted');
});

it('should get the names using higher order functions', () => {
    const coffeeDrinkerNames = higherOrderFunctions(customers);
    expect(coffeeDrinkerNames.length).length.to.eq(1);
    expect(coffeeDrinkerNames[0]).length.to.eq('Ted');
});