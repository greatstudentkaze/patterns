import { CondimentDecorator } from '../condiment-decorator';
import { Size } from '../beverage';

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
        let cost = this.beverage.cost();
        const size = this.beverage.size;

        if (size === Size.Tall) {
            cost += 0.1;
        } else if (size === Size.Grande) {
            cost += 0.15;
        } else if (size === Size.Venti) {
            cost += 0.2;
        }

        return cost;
    }
}
