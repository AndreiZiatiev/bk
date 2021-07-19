import { Test, TestingModule } from '@nestjs/testing';
import { UserslistResolver } from './userslist.resolver';

describe('UserslistResolver', () => {
  let resolver: UserslistResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserslistResolver],
    }).compile();

    resolver = module.get<UserslistResolver>(UserslistResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
