import { CondimentDecorator } from '../condiment-decorator';

import type { Beverage } from '../beverage';

export class Soy extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Soy`;
    }

    cost(): number {
        return this.beverage.cost() + 0.15;
    }
}
