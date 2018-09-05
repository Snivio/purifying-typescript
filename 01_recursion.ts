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

    // Looping

    const getCoffeeLoversLooped = (customers: Array<Customer>): Array<string> => {
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

    const loopResult: Array<string> = getCoffeeLoversLooped(customers);

    // Recursion

    const getCustomerName = (customer: Customer): string => customer.name;

    const isCoffeeDrinker = (customer: Customer): boolean => customer.beverages.includes('coffee');

    const getCoffeeLoversRecursion = (customers: Array<Customer>): Array<string> => 
        customers.filter(isCoffeeDrinker).map(getCustomerName);

    const recursionResult: Array<string> = getCoffeeLoversRecursion(customers);
};