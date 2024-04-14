class ErrorRepository {
    constructor() {
      this.errors = new Map();
    }
  
    translate(code) {
      return this.errors.get(code) || 'Unknown error';
    }
  
    addError(code, description) {
      this.errors.set(code, description);
    }
  }
  
  module.exports = ErrorRepository;