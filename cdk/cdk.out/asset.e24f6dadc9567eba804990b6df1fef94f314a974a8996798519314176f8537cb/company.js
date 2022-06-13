const AWS = require("aws-sdk");
AWS.config.update({
    region: 'eu-central-1'
})
const dynamo = new AWS.DynamoDB.DocumentClient();
const dynamoSeekerTableName = 'company';

exports.handler = async (event) => {

    let requestJSON = JSON.parse(event.body);

    let date = new Date().toISOString();
    let params = {
        TableName: dynamoSeekerTableName,
        Item: {
            'companyID': AWS.util.uuid.v4(),
            'date' : date,
            'sector' : requestJSON.sector,
            'workerExperienceInYears' : requestJSON.workerExperienceInYears,
            'workerCitizen' : requestJSON.workerCitizen,
            'workerDiploma' : requestJSON.workerDiploma,
            'workerLanguage' : requestJSON.workerLanguage,
            'selectedLicence' : requestJSON.workerSelectedLicence,
            'companyEmail' : requestJSON.companyEmail,
            'companyFirstname' : requestJSON.companyFirstname,
            'companyLastname' : requestJSON.companyLastname,
            'companyPhone' : requestJSON.companyPhone,
            'companyCountry' : requestJSON.companyCountry,
            'companyCity' : requestJSON.companyCity,
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