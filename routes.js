const { addLocation } = require("./handler");
const { getLocation } = require("./handler");

const routes =[
    {
        method:'POST',
        path:'/location',
        handler:addLocation,
    },
    {
        method:'GET',
        path:'/location',
        handler:getLocation,
    }
];

module.exports=routes;