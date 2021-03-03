const ewelink = require('ewelink-api');

async function openDoor(request, response) {

    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const region = process.env.REGION;

    const connection = new ewelink({
        email: email,
        password: password,
        region: region,
    });

    const status = await connection.setDevicePowerState('1000e4bff4', 'toggle');

    response.json({
        date: status
    });
}

export default openDoor;