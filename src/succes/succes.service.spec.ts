import { Test, TestingModule } from '@nestjs/testing';
import { SuccesService } from './succes.service';

describe('SuccesService', () => {
  let service: SuccesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuccesService],
    }).compile();

    service = module.get<SuccesService>(SuccesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
