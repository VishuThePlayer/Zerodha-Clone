const Joi = require("joi");

const signupSchemaValidation = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.number().min(10{
  email: 'Vishubissa@gmail.com',
  firstName: 'Vishu',
  lastName: 'Vishu',
  password: 'Skb@71076',
  phone: 8209863500,
  username: 'Vishu'
}
❌ Signup Error: MongoServerError: E11000 duplicate key error collection: ZeroDhaClone.users index: email_1 dup key: { email: null }
    at InsertOneOperation.execute (C:\Coding\Zerodha\backend\node_modules\mongodb\lib\operations\insert.js:51:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async tryOperation (C:\Coding\Zerodha\backend\node_modules\mongodb\lib\operations\execute_operation.js:207:20)
    at async executeOperation (C:\Coding\Zerodha\backend\node_modules\mongodb\lib\operations\execute_operation.js:75:16)
    at async Collection.insertOne (C:\Coding\Zerodha\backend\node_modules\mongodb\lib\collection.js:157:16) {
  errorLabelSet: Set(0) {},
  errorResponse: {
    index: 0,
    code: 11000,
    errmsg: 'E11000 duplicate key error collection: ZeroDhaClone.users index: email_1 dup key: { email: null }',
    keyPattern: { email: 1 },
    keyValue: { email: null }
  },
  index: 0,
  code: 11000,
  keyPattern: { email: 1 },
  keyValue: { email: null }
}
).integer().required().strict()
});

module.exports = signupSchemaValidation;
