const puppeteer = require('puppeteer');
(async() => {

    const browser = await puppeteer.launch({
        // 关闭无头模式，方便我们看到这个无头浏览器执行的过程
        headless: false,
    });
    // 打开空白页面
    const page = await browser.newPage();
    // 设置浏览器视窗
    page.setViewport({
        width: 1376,
        height: 768,
    });
    // 地址栏输入网页地址
    await page.goto('http://example.com');
    // 保存网页为图片
    await page.screenshot({path: 'example.png'});

    await browser.close();
})();
