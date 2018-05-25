const request = require('request');
const express = require('express');

const punchLineController = {
    FETCH: (req, res) => {
        console.log('this is the reqbody..', req.body);
        let name = req.body.name;
        request('https://insult.mattbas.org/api/insult.txt?who=' + name, function(error, response, body) {
            console.log('error: ', error);
            console.log('statusCode: ', response && response.statusCode);
            console.log('body: ', body);
        })
        .then(data => {res.status(200).send(data); console.log('successfully fetched insult from punchLineController..', data)})
        .catch(err => {throw err; res.status(404); console.log('Could not fetch insult from insult api..', err)});
    }
}

module.exports = { punchLineController };