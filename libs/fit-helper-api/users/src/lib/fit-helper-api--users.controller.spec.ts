import { Test } from '@nestjs/testing';
import { FitHelperApiUsersController } from './fit-helper-api--users.controller';
import { FitHelperApiUsersService } from './fit-helper-api--users.service';

describe('FitHelperApiUsersController', () => {
  let controller: FitHelperApiUsersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FitHelperApiUsersService],
      controllers: [FitHelperApiUsersController],
    }).compile();

    controller = module.get(FitHelperApiUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
