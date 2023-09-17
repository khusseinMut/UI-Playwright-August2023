import {test, expect} from '../common/test'

test.describe('Authentication & Authorization', () => {

  test.beforeEach(async ({loginPage}) => {
    // await page.goto('/user/login')
    await loginPage.open()
  })

  test('Sigh in with existing credentials', async ({page, loginPage}) => {
    await loginPage.inputEmail.fill('kmutsolgov@gmail.com')
    await loginPage.inputPassword.fill('eAvevMhHwzuHgZ9')
    await loginPage.buttonSubmit.click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })
  test('Sigh in with wrong email', async ({loginPage}) => {
    await loginPage.inputEmail.fill('test@gmail.com')
    await loginPage.inputPassword.fill('eAvevMhHwzuHgZ9')
    await loginPage.buttonSubmit.click()

    await expect(loginPage.toast).toBeVisible()
    await expect(loginPage.toast).toHaveText('User login. Fail')
  })
})