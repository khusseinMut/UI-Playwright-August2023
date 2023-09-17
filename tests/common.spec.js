import {test, expect} from '../common/test'

test.describe('Common', () => {
  test.beforeEach(async ({loginPage}) => {
    await loginPage.open()
    await loginPage.logIn('kmutsolgov@gmail.com', 'eAvevMhHwzuHgZ9')
  })
  test('Navigation', async ({page}) => {
    await page.getByTestId('topmenu-Курсы').click()
    await expect(page).toHaveURL('https://coding.pasv.us/course')
    await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible()

    await page.getByTestId('topmenu-Задачи').click()
    await expect(page).toHaveURL('https://coding.pasv.us/challenge?limit=30&page=1')
    await expect(page.getByText('Кодинг задачи')).toBeVisible()

    await page.getByTestId('topmenu-Интервью').click()
    await expect(page).toHaveURL('https://coding.pasv.us/flash')
    await expect(page.getByText('Interview practice cards')).toBeVisible()

    await page.getByTestId('topmenu-Дневник').click()
    await expect(page).toHaveURL('https://coding.pasv.us/diary?page=1')
    await expect(page.getByText('Daily reports')).toBeVisible()
  })
})
