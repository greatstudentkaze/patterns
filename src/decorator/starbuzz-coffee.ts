import { Soy } from './condiments/soy';
import { Mocha } from './condiments/mocha';
import { Whip } from './condiments/whip';
import { formatCurrency } from './utils';
import { Espresso } from './beverages/espresso';

export class StarbuzzCoffee {
    main(): void {
        // Espresso with soy, whip and double mocha
        const espresso = new Espresso();
        const espressoWithCondiments = new Soy(new Mocha(new Mocha(new Whip(espresso))));

        console.log(espressoWithCondiments.getDescription(), formatCurrency(espressoWithCondiments.cost()));
    }
}
