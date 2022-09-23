import { Test } from '@nestjs/testing';
import { FitHelperApiMacroService } from './fit-helper-api--macro.service';

describe('FitHelperApiMacroService', () => {
  let service: FitHelperApiMacroService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FitHelperApiMacroService],
    }).compile();

    service = module.get(FitHelperApiMacroService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
