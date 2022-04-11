let aws = require("aws-sdk");
let ses = new aws.SES({ region: "eu-central-1" });
exports.handler = async function (event) {
    console.log('Event::::::::', event);
    let params = {
        Destination: {
            ToAddresses: [ 'onur-ulusoy@hotmail.de' ],
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
        console.log('SUCCESS::::');
        return {statuscode:200}
    } catch (e) {
        console.log('ERROR::::', e);
        return {statuscode:404}
    }
};