class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0) throw new ValidationError('Age must be positive');
  return age;
}

console.log(validateAge(25));

try {
  validateAge(-3);
} catch (err) {
  console.log(err.name);    
  console.log(err.message); 
}