import { Soy } from './condiments/soy';
import { Mocha } from './condiments/mocha';
import { Whip } from './condiments/whip';
import { formatCurrency } from './utils';
import { Espresso } from './beverages/espresso';
import { Size } from './beverage';

export class StarbuzzCoffee {
    main(): void {
        // Espresso with soy, whip and double mocha
        let beverage = new Espresso();
        beverage.size = Size.Venti;
        beverage = new Whip(beverage);
        beverage = new Mocha(beverage);
        beverage = new Mocha(beverage);
        beverage = new Soy(beverage);

        console.log(beverage.getDescription(), formatCurrency(beverage.cost()));
    }
}
