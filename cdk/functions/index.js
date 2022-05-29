const AWS = require("aws-sdk");
AWS.config.update({
    region: 'eu-central-1'
})
const dynamo = new AWS.DynamoDB.DocumentClient();
const dynamoSeekerTableName = 'seeker';

exports.handler = async (event) => {

    let requestJSON = JSON.parse(event.body);

    let date = new Date().toISOString();
    let params = {
        TableName: dynamoSeekerTableName,
        Item: {
            'seekerID': AWS.util.uuid.v4(),
            'date' : date,
            'business' : requestJSON.business,
            'currentJob' : requestJSON.currentJob,
            'experienceInYears' : requestJSON.experienceInYears,
            'citizen' : requestJSON.citizen,
            'diploma' : requestJSON.diploma,
            'seekerLanguage' : requestJSON.seekerLanguage,
            'selectedLicence' : requestJSON.selectedLicence,
            'seekerEmail' : requestJSON.seekerEmail,
            'seekerFirstname' : requestJSON.seekerFirstname,
            'seekerLastname' : requestJSON.seekerLastname,
            'seekerAge' : requestJSON.seekerAge,
            'seekerPhone' : requestJSON.seekerPhone,
            'seekerCountry' : requestJSON.seekerCountry,
            'seekerCity' : requestJSON.seekerCity,
        },
        ReturnConsumedCapacity: "TOTAL"
    };

    return await dynamo.put(params).promise().then(function (data) {
        return{ "statusCode": 200, "headers": { "Access-Control-Allow-Origin": "*" }, "body": JSON.stringify(data)}
    }).catch(function (err) {
        console.warn("Dynamo Request failed", err);
        throw err;
    });
};