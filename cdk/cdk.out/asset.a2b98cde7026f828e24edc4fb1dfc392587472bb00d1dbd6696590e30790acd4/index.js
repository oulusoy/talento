const AWS = require("aws-sdk");
AWS.config.update({
    region: 'eu-central-1'
})
const dynamo = new AWS.DynamoDB.DocumentClient();
const dynamoSeekerTableName = 'seeker';


exports.handler = async (event) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };

    console.log('the raw event body: ',event.body)

    let requestJSON = JSON.parse(event.body);

    console.log('the request json object: ',requestJSON)

    body = {}

    return {
        statusCode,
        body,
        headers
    };
};