import request from 'superagent/lib/client';

export function getProducts(url) {

    return new Promise((resolve, reject) => {
        request
            .get(url)
            .end((err, response) => {
                if (err) reject(err);
                resolve(response.body.products);
            })
    });
}

