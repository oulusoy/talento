const AWS = require("aws-sdk");
AWS.config.update({
    region: 'eu-central-1'
})
const dynamo = new AWS.DynamoDB.DocumentClient();
const dynamoSeekerTableName = 'seeker';


exports.handler = async (event) => {
    let requestJSON = JSON.parse(event.body);

    let date = new Date().toISOString().slice(0, 10);
    let params = {
        TableName: 'seeker',
        Item: {
            'seekerID' : requestJSON.seekerID,
            'test' : requestJSON.test,
            'date' : date,
        },
        ReturnConsumedCapacity: "TOTAL"
    };

    return await dynamo.put(params).promise().then(function (data) {
        return{ statusCode: 200,headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify(data)}
    }).catch(function (err) {
        console.warn("Dynamo Request failed", err);
        throw err;
    });
};