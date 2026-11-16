import { TravelService } from './travel.service';
export declare class TravelController {
    private readonly travelService;
    constructor(travelService: TravelService);
    createTravel(): string;
}
