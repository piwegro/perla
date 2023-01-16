const { test, expect } = require('@playwright/test')

test('has title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Piwegro/)
})

test('has hero', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('h1')).toContainText(
        'Wymieniaj się z innymi studentami za walutę studencką!'
    )
})
