() => {
    // Using TS inbuilt immutability
    // Some libraries - prelude.ts, immutable.js etc - offer some nice higher level abstractions

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

    customers[0].name = 'Bob';

    customers.push({
        name: 'Bob',
        beverages: ['chai']
    });
};