
const Ajv = require('ajv')
const ajv = new Ajv()
const usersSchema = require('../schemas/users.json')
const testUser = require('../schemas/testUser.json')

const validate = ajv.compile(usersSchema)

const assert = require('assert')
describe('User', function() {
  describe('#schema validation', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(true, validate(testUser));
    });
  });
});

