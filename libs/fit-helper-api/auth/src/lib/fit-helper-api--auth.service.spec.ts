import { Test } from '@nestjs/testing';
import { FitHelperApiAuthService } from './fit-helper-api--auth.service';

describe('FitHelperApiAuthService', () => {
  let service: FitHelperApiAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FitHelperApiAuthService],
    }).compile();

    service = module.get(FitHelperApiAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
