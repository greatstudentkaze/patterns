import { Beverage, Size } from './beverage';

export abstract class CondimentDecorator extends Beverage {
    abstract beverage: Beverage;

    public abstract getDescription(): string;

    get size(): Size {
        return this.beverage.size;
    }
}
