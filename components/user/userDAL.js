const db = require('../../helpers/firebase').db
class user {
    Save(uid, firstname, lastname, phone) {
        return new Promise(async (resolve, reject) => {
            try {
                await db.collection("users")
                    .add({ uid: uid, firstname: firstname, lastname: lastname, phone: phone })
                resolve("success")
            }
            catch (error) {
                reject(error)
            }
        })

    }
}
module.exports = new user();