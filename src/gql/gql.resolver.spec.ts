import { Test, TestingModule } from '@nestjs/testing';
import { GqlResolver } from './gql.resolver';
import { GqlService } from './gql.service';

describe('GqlResolver', () => {
  let resolver: GqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqlResolver, GqlService],
    }).compile();

    resolver = module.get<GqlResolver>(GqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
