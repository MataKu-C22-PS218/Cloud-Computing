//impor data di pool
const pool = require('./queries')

//handler untuk mendapatkan lokasi
const addLocation = (request,h) => {
    const place = request.payload;
    const query = {
        text: 'INSERT INTO location_history(place) VALUES ($1)',
        values: [place],
    };
    const result = pool.query(query);
    if(result) {
        const response = h.response({
            status:'success',
            data: {location_update : place},
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status:'fail'
    });
    response.code(500);
    return response;
}

//handler untuk mendapatkan lokasi
const getLocation = () => {
    const query = {
        text: 'SELECT * FROM location_history',
    };
    const result = pool.query(query);
    return result;
};

module.exports = {addLocation, getLocation};