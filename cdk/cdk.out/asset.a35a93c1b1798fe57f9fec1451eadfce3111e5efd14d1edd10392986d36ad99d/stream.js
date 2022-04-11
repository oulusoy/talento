let aws = require("aws-sdk");
let ses = new aws.SES({ region: "eu-central-1" });
exports.handler = async function (event) {
    let params = {
        Destination: {
            ToAddresses: [ event.Records[0].dynamodb.NewImage.email.S ],
        },
        Message: {
            Body: {
                Text: { Data: "Test" },
            },

            Subject: { Data: "Test Email" },
        },
        Source: "onur-ulusoy@hotmail.de",
    };
    try {
        ses.sendEmail(params).promise()
        return {statuscode:200}
    } catch (e) {
        return {statuscode:404}
    }
};