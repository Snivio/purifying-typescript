() => {
    ///////////////////////////////////////////////////////////////
    // Untyped
    ///////////////////////////////////////////////////////////////
    
    const orderCoffeeUntyped = (name, wouldLikeSugar) => {
        if (wouldLikeSugar) {
            return `Your ${name} with sugar is coming right up!`;
        } else {
            return `Your ${name} is coming right up!`;
        }
    };

    orderCoffeeUntyped("Cappucino", true);

    // orderCoffeeUntyped(123, null);

    ///////////////////////////////////////////////////////////////
    // Typed
    ///////////////////////////////////////////////////////////////

    const orderCoffeeTyped = (name: string, wouldLikeSugar: boolean): string  => {
        if (wouldLikeSugar) {
            return `Your ${name} with sugar is coming right up!`;
        } else {
            return `Your ${name} is coming right up!`;
        }
    };

    orderCoffeeTyped("Cappucino", true);

    // orderCoffeeTyped(123, true);
};