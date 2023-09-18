import { Test, TestingModule } from '@nestjs/testing';
import { PostTestController } from './post-test.controller';

describe('PostTestController', () => {
  let controller: PostTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostTestController],
    }).compile();

    controller = module.get<PostTestController>(PostTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
