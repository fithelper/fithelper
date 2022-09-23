import { Test } from '@nestjs/testing';
import { FitHelperApiMacroController } from './fit-helper-api--macro.controller';
import { FitHelperApiMacroService } from './fit-helper-api--macro.service';

describe('FitHelperApiMacroController', () => {
  let controller: FitHelperApiMacroController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FitHelperApiMacroService],
      controllers: [FitHelperApiMacroController],
    }).compile();

    controller = module.get(FitHelperApiMacroController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
