import { InterviewPrepQuestionController } from './controller';
import { InterviewPrepQuestionService } from './service';

describe('InterviewPrepQuestionController', () => {
  let interviewPrepQuestionController: InterviewPrepQuestionController;
  let interviewPrepQuestionService: InterviewPrepQuestionService;

  beforeEach(() => {
    interviewPrepQuestionService = {
      updateInterviewPrepQuestion: jest.fn(),
    } as any;
    interviewPrepQuestionController = new InterviewPrepQuestionController(
      interviewPrepQuestionService,
    );
  });

  describe('updateInterviewPrepQuestion', () => {
    it('should update and return an interview prep question', async () => {
      const interviewPrepQuestionData = {
        id: 1,
        question: 'Updated Question',
        answer: 'Updated Answer',
      };
      const result = { ...interviewPrepQuestionData } as any;
      jest
        .spyOn(interviewPrepQuestionService, 'updateInterviewPrepQuestion')
        .mockResolvedValue(result);

      expect(
        await interviewPrepQuestionController.updateInterviewPrepQuestion(
          interviewPrepQuestionData,
        ),
      ).toBe(result);
    });

    it('should throw an error if ID is not provided', async () => {
      const interviewPrepQuestionData = { question: 'No ID Question' };
      await expect(
        interviewPrepQuestionController.updateInterviewPrepQuestion(
          interviewPrepQuestionData,
        ),
      ).rejects.toThrow('InterviewPrepQuestion ID is required for update');
    });

    it('should throw an error if answer is not provided', async () => {
      const interviewPrepQuestionData = { id: 1 };
      await expect(
        interviewPrepQuestionController.updateInterviewPrepQuestion(
          interviewPrepQuestionData,
        ),
      ).rejects.toThrow('InterviewPrepQuestion answer is required for update');
    });
  });
});
