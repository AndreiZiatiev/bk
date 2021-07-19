import { Test, TestingModule } from '@nestjs/testing';
import { UserslistService } from './userslist.service';

describe('UserslistService', () => {
  let service: UserslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserslistService],
    }).compile();

    service = module.get<UserslistService>(UserslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
