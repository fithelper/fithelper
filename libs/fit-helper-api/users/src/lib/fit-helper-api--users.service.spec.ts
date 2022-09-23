import { Test } from '@nestjs/testing';
import { FitHelperApiUsersService } from './fit-helper-api--users.service';

describe('FitHelperApiUsersService', () => {
  let service: FitHelperApiUsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FitHelperApiUsersService],
    }).compile();

    service = module.get(FitHelperApiUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
