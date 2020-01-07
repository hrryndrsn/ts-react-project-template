const result = require("dotenv").config();

exports.handler = async event => {
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: `hello zord`
  };
};
