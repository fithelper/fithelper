import { Test } from '@nestjs/testing';
import { FitHelperApiAuthController } from './fit-helper-api--auth.controller';
import { FitHelperApiAuthService } from './fit-helper-api--auth.service';

describe('FitHelperApiAuthController', () => {
  let controller: FitHelperApiAuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FitHelperApiAuthService],
      controllers: [FitHelperApiAuthController],
    }).compile();

    controller = module.get(FitHelperApiAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
