const userDAL = require('./userDAL')
const userService = require('./userService')
describe('User Component Testing', () => {
    describe.skip('User DAL Testing', () => {
        it('Test for User DB Save', async () => {
            await expect(userDAL.Save("testuid", "fistname", "lastname", "phone")).resolves.toBe('success');
        })
    })
    describe('User Service Testing', () => {
        it.skip('Test for User Create', async () => {
            const mockSave = jest.fn(() => "success"); //mock function
            let random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            await expect(userService.Create(`test${random}@test.com`, "password", "fistname", "lastname", "phone", mockSave)).resolves.toBe('success');
        })
        it.skip('Test for User Login', async () => {
            await expect(userService.Login(`sameeriqbal72@yahoo.com`, "123456")).resolves.toHaveProperty('user');
        })
        it('Test for Reset Email', async () => {
            await expect(userService.Reset(`sameeriqbal72@yahoo.com`)).resolves.toBe('success');
        })
    })
})