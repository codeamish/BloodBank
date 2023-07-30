const bcrypt = require('bcryptjs');

module.exports = async(password, userPassword) => {
    return await bcrypt.compare(password, userPassword)
}