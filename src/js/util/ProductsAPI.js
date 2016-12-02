/*
 * Module dependencies
 */

// Super agent library used for get request.
import request from 'superagent/lib/client';

export function getProducts(url) {
    // returns a promise, get url, on success respond with products, or message in fail
    return new Promise((resolve, reject) => {
        request
            .get(url)
            .end((err, response) => {
                if (err) reject(err);
                resolve(response.body.products);
            })
    });
}

