import { Beverage } from './beverage';

export abstract class CondimentDecorator extends Beverage {
    abstract beverage: Beverage;

    public abstract getDescription(): string;
}
