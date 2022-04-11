const AWS = require("aws-sdk");
AWS.config.update({
    region: 'eu-central-1'
})

exports.handler = async (event) => {

    console.log('!!!!!!!!!!!!! STREAM triggered by Event(Body): ', event.body)
    console.log('!!!!!!!!!!!!! STREAM triggered by Event: ', event)

};