const { handler } = require('./index');

const event = {
    userName: "sushil",
    password: "1234",
    userEmailId: "sushilsingh8853@gmail.com"
}

let context = { callbackWaitsForEmptyEventLoop: true };

handler(event, context).then(res => console.log(res));