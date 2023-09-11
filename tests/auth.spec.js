const { test, expect } = require('@playwright/test');

test.describe('Authentication & Authorization', () => {
    test.beforeEach(async ({page})=> {
        await page.goto('https://coding.pasv.us/user/login')
    })

    test('Sigh in with existing credentials', async ({page}) => {
        await page.locator('#normal_login_email').fill('kmutsolgov@gmail.com')
        await page.locator('#normal_login_password').fill('eAvevMhHwzuHgZ9')
        await page.locator('button[type="submit"]').click()

        await expect(page.locator('.ant-avatar-square')).toBeVisible()
    })
    test('Sigh in with wrong email', async ({page}) => {
        await page.locator('#normal_login_email').fill('test@gmail.com')
        await page.locator('#normal_login_password').fill('eAvevMhHwzuHgZ9')
        await page.locator('button[type="submit"]').click()

        const toast= page.locator('.ant-notification-notice-message')

        await expect(toast).toBeVisible()
        await expect(toast).toHaveText('User login. Fail')
    })
})