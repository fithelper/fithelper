import { Test } from '@nestjs/testing';
import { FitHelperApiWeightsService } from './fit-helper-api--weights.service';

describe('FitHelperApiWeightsService', () => {
  let service: FitHelperApiWeightsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FitHelperApiWeightsService],
    }).compile();

    service = module.get(FitHelperApiWeightsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
