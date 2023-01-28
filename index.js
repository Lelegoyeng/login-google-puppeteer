const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    const navigationPromise = page.waitForNavigation()
    await page.goto('https://accounts.google.com/')
    await page.waitForTimeout(1000) // 1s interval
    await page.waitForSelector('input[type="email"]')
    await page.focus('input[type="email"]')
    await page.keyboard.type('eveeepet@gmail.com', { delay: 50 })
    await page.waitForTimeout(1000) // 1s interval
    await page.click('#identifierNext')

    await page.waitForTimeout(3000) // 3s interval
    await page.waitForSelector('input[type="password"]')
    await page.focus('input[type="password"]')
    await page.keyboard.type('@Assasin214', { delay: 50 })
    await page.waitForTimeout(1000) // 1s interval
    await page.click('#passwordNext')
})()