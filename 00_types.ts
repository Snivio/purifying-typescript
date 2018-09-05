() => {
    // JavaScript
    const orderCoffeeJavaScript = function(name, wouldLikeSugar) {
        if (wouldLikeSugar) {
            return `Your ${name} with sugar is coming right up!`;
        } else {
            return `Your ${name} is coming right up!`;
        }
    };

    const implicitCoffeeOrder = orderCoffeeJavaScript("Cappucino", true);

    // TypeScript
    const orderCoffeeTypeScript = function(name: string, wouldLikeSugar: boolean): string {
        if (wouldLikeSugar) {
            return `Your ${name} with sugar is coming right up!`;
        } else {
            return `Your ${name} is coming right up!`;
        }
    };

    const explicitCoffeeOrder: string = orderCoffeeTypeScript("Cappucino", true);
};