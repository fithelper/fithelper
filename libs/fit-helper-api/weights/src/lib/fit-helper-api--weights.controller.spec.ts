import { Test } from '@nestjs/testing';
import { FitHelperApiWeightsController } from './fit-helper-api--weights.controller';
import { FitHelperApiWeightsService } from './fit-helper-api--weights.service';

describe('FitHelperApiWeightsController', () => {
  let controller: FitHelperApiWeightsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FitHelperApiWeightsService],
      controllers: [FitHelperApiWeightsController],
    }).compile();

    controller = module.get(FitHelperApiWeightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
