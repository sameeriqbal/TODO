//This file will be used for in-process API testing.
const superagent = require('superagent');
superagent
    .post('/users/signIn')
    .send({ "email": "sameeriqbal72@yahoo.com", "password": "123456" }) // sends a JSON post body
    .set('accept', 'json')
    .end((err, res) => {
        // Calling the end function will send the request
        if (err) {
            console.log(res)
        }
        else {
            console.log(res);
        }
    });