const { test, expect } = require('@playwright/test')

test('should redirect to search page', async ({ page }) => {
    await page.goto('/')
    const searchBox = page.getByPlaceholder('Czego szukasz?')

    await searchBox.fill('test')
    await searchBox.press('Enter')

    await expect(page).toHaveURL('/search/test')
})
