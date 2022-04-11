import axios from "axios";
/*
export function sendLead(payload){
    return new Promise(function(resolve, reject) {
        axios({
            method: 'post',
            url: 'https://6v68gp0k8l.execute-api.eu-central-1.amazonaws.com/prod/lead',
            data: payload
        })
            .then(function (response) {
                return resolve(response.data)
            }).catch(function (error) {
                return reject(error)
            });
    });
}*/

export function sendLead(payload) {
    return axios({
            method: 'post',
            url: 'https://6v68gp0k8l.execute-api.eu-central-1.amazonaws.com/prod/lead',
            data: payload
        })
        .then((response) => {
            return response // pass to finish
        })
        .catch((error) => {
            return error // pass to finish
        });
}