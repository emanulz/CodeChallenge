import request from 'superagent/lib/client';

export function getLogin(url, username, password) {

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

