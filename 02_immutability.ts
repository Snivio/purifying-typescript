() => {
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

    customersImmutable[0].name = 'Bob';
    customersImmutable.push();
};