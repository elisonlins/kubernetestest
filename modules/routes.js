var controller = require('./controller');

module.exports = function (app) {

    app.get({
        path: '/microservices/microservice1/teste1',
        version: ['1.0.0']
    }, controller.api1);

    app.get({
        path: '/microservices/microservice1/teste2',
        version: ['1.0.0']
    }, controller.api2);
};
