() => {
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

    ///////////////////////////////////////////////////////////////
    // Looping - nesting hell, difficult to follow what's going on
    ///////////////////////////////////////////////////////////////

    const getCoffeeDrinkersByLooping = (customers: Array<Customer>): Array<string> => {
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

    getCoffeeDrinkersByLooping(customers);

    ///////////////////////////////////////////////////////////////
    // Recursion - small, reusable functions, easier to read and test
    ///////////////////////////////////////////////////////////////

    const getCustomerName = (customer: Customer): string => customer.name;

    const isCoffeeDrinker = (customer: Customer): boolean => customer.beverages.includes('coffee');

    const getCoffeeDrinkersByRecursion = (customers: Array<Customer>): Array<string> => 
        customers.filter(isCoffeeDrinker).map(getCustomerName);

    getCoffeeDrinkersByRecursion(customers);
};