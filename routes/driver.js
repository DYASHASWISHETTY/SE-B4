// getRoutePointsById
const express = require('express');
const driverRouter = express.Router();
const { getRoutePointsById, completedTrip } = require('../controllers/driver');

driverRouter.get('/getRoutePointsById', (req, res, next) => {
    getRoutePointsById(req.query.id)
    .then(locations => {
        res.send(locations).status(200);
    })
    .catch(err => {
        console.log(err)
        res.send().status(503);
    });
});


driverRouter.put('/completedTrip', (req, res, next) => {
    completedTrip(req.body)
    .then(responseUser => {
        if(responseUser != null) {
            res.render('driver/driverui.html',{
            user:responseUser
            })
            
        }
        else {
            exist= false;
            res.send(exist).status(204);
        }
    })
    .catch(err => console.log(err));

});

module.exports = driverRouter;