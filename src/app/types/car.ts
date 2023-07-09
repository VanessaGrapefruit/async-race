export interface Car {
    id: number;
    color: string;
    name: string;
}

export interface CreateCarDto extends Omit<Car, 'id'> {}