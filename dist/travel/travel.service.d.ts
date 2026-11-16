export declare class TravelService {
    private trips;
    findAll(): {
        id: number;
        name: string;
        price: number;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        price: number;
    };
}
