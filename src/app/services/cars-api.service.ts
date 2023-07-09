import { Car, CreateCarDto } from "../types/car";
import { ApiService } from "./api.service";

export class CarsApiService {
    public static getCars(): Promise<Car[]> {
        return ApiService.get('/garage');
    }

    public static getCar(id: number): Promise<Car> {
        return ApiService.get(`/garage/${id}`);
    }

    public static createCar(dto: CreateCarDto): Promise<Car> {
        return ApiService.post('/garage', dto);
    }

    public static deleteCar(id: number): Promise<void> {
        return ApiService.delete(`/garage/${id}`);
    }

    public static updateCar(id: number, dto: CreateCarDto): Promise<Car> {
        return ApiService.put(`/garage/${id}`, dto);
    }
}