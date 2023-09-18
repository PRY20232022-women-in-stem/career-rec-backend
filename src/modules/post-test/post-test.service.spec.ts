import { Test, TestingModule } from '@nestjs/testing';
import { PostTestService } from './post-test.service';

describe('PostTestService', () => {
  let service: PostTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostTestService],
    }).compile();

    service = module.get<PostTestService>(PostTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
