import { TravelService } from './travel.service';
export declare class TravelController {
    private readonly travelService;
    constructor(travelService: TravelService);
    findAll(): {
        id: number;
        name: string;
        price: number;
    }[];
    createTravel(): string;
}
