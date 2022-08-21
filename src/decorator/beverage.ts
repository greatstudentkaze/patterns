export enum Size {
    Tall,
    Grande,
    Venti
}

export abstract class Beverage {
    description: string = 'Unknown Beverage';
    _size: Size = Size.Tall;

    public getDescription(): string {
        return this.description;
    }
    
    set size(size: Size) {
        this._size = size;
    }

    get size(): Size {
        return this._size;
    }

    public abstract cost(): number;
}
