const auth = require('../../helpers/firebase').auth
class usersService {
    Create(email, password, firstname, lastname, phone, userDalSave) {
        return new Promise(async (resolve, reject) => {
            try {
                let signup = await auth.createUserWithEmailAndPassword(email, password);
                let uid = signup.user.uid
                await userDalSave(uid, firstname, lastname, phone)
                resolve("success")
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
    Reset(email) {
        return new Promise(async (resolve, reject) => {
            try {
                await auth.sendPasswordResetEmail(email)
                resolve("success")
            }
            catch (error) {
                reject(error)
            }
        })
    }
}
module.exports = new usersService();