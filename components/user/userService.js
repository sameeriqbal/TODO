const auth = require('../../helpers/firebase').auth
const userDAL = require('./userDAL')
class usersService {
    Create(email, password, firstname, lastname, phone) {
        return new Promise(async (resolve, reject) => {
            try {
                let signup = await auth.createUserWithEmailAndPassword(email, password);
                let uid=signup.user.uid
                await userDAL.Save(uid, firstname, lastname, phone)
                resolve(signup)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    Login(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const loggedinUser = await auth.signInWithEmailAndPassword(email, password)
                resolve(loggedinUser)
            }
            catch (error) {
                reject(error)
            }
        })
    }
}
module.exports = new usersService();