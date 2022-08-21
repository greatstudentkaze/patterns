import { CondimentDecorator } from '../condiment-decorator';

import type { Beverage } from '../beverage';

export class Mocha extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Mocha`;
    }

    cost(): number {
        return this.beverage.cost() + 0.2;
    }
}
