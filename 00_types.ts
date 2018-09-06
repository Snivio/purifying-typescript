() => {
    ///////////////////////////////////////////////////////////////
    // JavaScript
    ///////////////////////////////////////////////////////////////
    
    const orderCoffeeJavaScript = (name, wouldLikeSugar) => {
        if (wouldLikeSugar) {
            return `Your ${name} with sugar is coming right up!`;
        } else {
            return `Your ${name} is coming right up!`;
        }
    };

    orderCoffeeJavaScript("Cappucino", true);

    // orderCoffeeJavaScript(123, null);

    ///////////////////////////////////////////////////////////////
    // TypeScript
    ///////////////////////////////////////////////////////////////

    const orderCoffeeTypeScript = (name: string, wouldLikeSugar: boolean): string  => {
        if (wouldLikeSugar) {
            return `Your ${name} with sugar is coming right up!`;
        } else {
            return `Your ${name} is coming right up!`;
        }
    };

    orderCoffeeTypeScript("Cappucino", true);

    // orderCoffeeTypeScript(1, true);
};