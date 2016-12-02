import request from 'superagent/lib/client';

export function getLogin(url) {

    return new Promise((resolve, reject) => {
        request
            .get(url)
            .end((err, response) => {
                if (err) reject(err);
                console.log(response);
                resolve(response.body);
            })
    });
}

