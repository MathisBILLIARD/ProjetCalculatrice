import { Test, TestingModule } from '@nestjs/testing';
import { SuccesController } from './succes.controller';

describe('SuccesController', () => {
  let controller: SuccesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuccesController],
    }).compile();

    controller = module.get<SuccesController>(SuccesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
