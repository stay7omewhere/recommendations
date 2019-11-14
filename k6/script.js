import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 200,
    duration: '30s',
    rps: 4000,
};


export default function () {
    let id = Math.floor(Math.random() * (9999500 - 9999800));
    let res = http.get(`http://localhost:3004/api/nearbyPlaces/${id}`);

    check(res, {
        'is status 200': r => (r.status == 200 || r.status == 201 || r.status == 202),
        'is status 404': r => r.status == 404,
        'is status 500': r => r.status == 500,
        'transaction time OK': r => r.timings.duration < 2000,
    });
}

