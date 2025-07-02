import { InterviewPrepController } from './controller';
import { InterviewPrepService } from './service';

describe('InterviewPrepController', () => {
  let interviewPrepController: InterviewPrepController;
  let interviewPrepService: InterviewPrepService;

  beforeEach(() => {
    interviewPrepService = {
      getInterviewPreps: jest.fn(),
      createInterviewPrep: jest.fn(),
    } as any;
    interviewPrepController = new InterviewPrepController(interviewPrepService);
  });

  describe('getInterviewPreps', () => {
    it('should return an array of interview preps', async () => {
      const result = [{ id: 1, jobPosition: 'Test Prep' } as any];
      jest
        .spyOn(interviewPrepService, 'getInterviewPreps')
        .mockResolvedValue(result);

      expect(await interviewPrepController.getInterviewPreps()).toBe(result);
    });
  });

  describe('createInterviewPrep', () => {
    it('should create and return an interview prep', async () => {
      const interviewPrepData = {
        jobPosition: 'New Prep',
        jobRequirements: 'Requirements',
        jobResponsibilities: 'Responsibilities',
      };
      const result = { id: 2, ...interviewPrepData } as any;
      jest
        .spyOn(interviewPrepService, 'createInterviewPrep')
        .mockResolvedValue(result);

      expect(
        await interviewPrepController.createInterviewPrep(interviewPrepData),
      ).toBe(result);
    });

    it('should throw an error if required fields are missing', async () => {
      const interviewPrepData = {};
      await expect(
        interviewPrepController.createInterviewPrep(interviewPrepData),
      ).rejects.toThrow(
        'jobPosition, jobRequirements and jobResponsibilities are required to create an interview prep.',
      );
    });
  });
});
