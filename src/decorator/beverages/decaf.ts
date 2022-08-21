import { Beverage } from '../beverage';

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = 'Decaf Coffee';
    }

    cost(): number {
        return 1.05;
    }
}
