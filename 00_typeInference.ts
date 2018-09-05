// JavaScript
const orderCoffeeJavaScript = function(name, wouldLikeSugar) {
    if (wouldLikeSugar) {
        return `Your ${name} with sugar is coming right up!`;
    } else {
        return `Your ${name} is coming right up!`;
    }
};

// TypeScript
const orderCoffeeTypeScript = function(name: string, wouldLikeSugar: boolean): string {
    if (wouldLikeSugar) {
        return `Your ${name} with sugar is coming right up!`;
    } else {
        return `Your ${name} is coming right up!`;
    }
};

// Tests
import { expect } from 'chai';
import 'mocha';

it('should order coffee with JavaScript', () => {
    const coffeeOrder = orderCoffeeJavaScript("Cappucino", true);
    expect(coffeeOrder).to.not.be.null;
});

it('should order coffee with TypeScript', () => {
    const coffeeOrder = orderCoffeeTypeScript("Cappucino", true);
    expect(coffeeOrder).to.not.be.null;
});