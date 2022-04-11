const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };

    console.log(event.body)

    let requestJSON = JSON.parse(event.body);
    await dynamo
        .put({
            TableName: "seeker",
            Item: {
                seekerID: requestJSON.id,
                test: requestJSON.test,
            }
        })
        .promise();
    body = `Put item ${requestJSON.id}`;

    return {
        statusCode,
        body,
        headers
    };
};