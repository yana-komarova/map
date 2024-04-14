const ErrorRepository = require('./errorRepository');

describe('ErrorRepository', () => {
  let errorRepository;

  beforeEach(() => {
    errorRepository = new ErrorRepository();
  });

  test('должен переводить код ошибки в текст ошибки', () => {
    errorRepository.addError(404, 'Not Found');
    const result = errorRepository.translate(404);
    expect(result).toBe('Not Found');
  });

  test('должен возвращать "Unknown error" при отсутствии кода ошибки', () => {
    const result = errorRepository.translate(500);
    expect(result).toBe('Unknown error');
  });

  test('должен добавлять ошибку в репозиторий', () => {
    errorRepository.addError(400, 'Bad Request');
    expect(errorRepository.translate(400)).toBe('Bad Request');
  });
});