const { makeConnection } = require('./helpers/dbconn');
const { addNewUser } = require('./app/addUser')

const handler = async function(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    const { userName, userEmailId, password } = event;
    try {
        await makeConnection();
        const addUserResult = await addNewUser({ userName, userEmailId, password });
        return sendResponse(true, 'user added', { userName, userEmailId });
    } catch (err) {
        return sendResponse(false, err.message, null);
    }
}

const sendResponse = function(status, msg, data) {
    return { status, msg, data }
};

module.exports = { handler };