import { CondimentDecorator } from '../condiment-decorator';

import type { Beverage } from '../beverage';

export class Whip extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Whip`;
    }

    cost(): number {
        return this.beverage.cost() + 0.1;
    }
}
