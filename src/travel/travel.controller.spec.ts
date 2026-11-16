import { Test, TestingModule } from '@nestjs/testing';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';

describe('TravelController', () => {
  let controller: TravelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelController],
      providers: [TravelService],
    }).compile();

    controller = module.get<TravelController>(TravelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a trip by id', () => {
    expect(controller.findOne(2)).toEqual({
      id: 2,
      name: 'To Morocco',
      price: 4000,
    });
  });

  it('should return all trips', () => {
    expect(controller.findAll()).toEqual([
      { id: 1, name: 'To China', price: 9000 },
      { id: 2, name: 'To Morocco', price: 4000 },
    ]);
  });

  it('should return the new travel prompt', () => {
    expect(controller.createTravel()).toBe(
      '<Planifier un nouveau voyage ici>',
    );
  });
});
