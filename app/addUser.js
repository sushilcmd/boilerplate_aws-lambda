const { userModel } = require('./user.Model');

const addNewUser = async function({ userName, userEmailId, password }) {
    const newUser = new userModel({
        userName,
        userEmailId,
        password
    });
    try {
        const saveUser = await newUser.save();
        return saveUser;
    } catch (e) {
        throw new Error({ type: e.type, msg: e.message });
    }
};

module.exports = { addNewUser };