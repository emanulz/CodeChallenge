/*
 * Module dependencies
 */

// Super agent library used for post request.
import request from 'superagent/lib/client';

export function getLogin(url, username, password) {

    // returns a promise, post to backend to get login, on success respond with body of response, or message in fail
    return new Promise((resolve, reject) => {
        request
            .post(url)
            .send({username:username, password:password})
            .end((err, response) => {
                if (err) reject(err);
                resolve(response.body);
            })
    });
}

