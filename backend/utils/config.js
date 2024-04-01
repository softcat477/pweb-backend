const AWS = require('aws-sdk');

const ssm = new AWS.SSM({region: 'ca-central-1'});

const getParameter = async(name, decrypt) => {
    const parameter = await ssm.getParameter({
        Name: name,
        WithDecryption: decrypt
    }).promise();
    return parameter.Parameter.Value;
};

module.exports = {
    PORT: getParameter('PORT', false),
    DB_URL: getParameter('MONGODB_URL', true)
};
