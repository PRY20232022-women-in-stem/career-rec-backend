import { Test, TestingModule } from '@nestjs/testing';
import { PreTestController } from './pre-test.controller';

describe('PreTestController', () => {
  let controller: PreTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreTestController],
    }).compile();

    controller = module.get<PreTestController>(PreTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
