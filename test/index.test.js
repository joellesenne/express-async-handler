const chai = require('chai');
const asyncHandler = require('../index');

const { expect } = chai;

describe('asyncHandler', () => {
  it('should catch exceptions of a function passed into it', async () => {
    const error = new Error('catch me!');
    const foo = asyncHandler(() => {
      throw error;
    });
    expect(foo).to.throw(error);
  });
});
