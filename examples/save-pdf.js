const puppeteer = require('puppeteer');
(async() => {

    const browser = await puppeteer.launch();
    // 打开空白页面
    const page = await browser.newPage();
    // 设置浏览器视窗
    page.setViewport({
        width: 1376,
        height: 768,
    });
    // 地址栏输入网页地址
    await page.goto('https://news.ycombinator.com', {
        waitUntil: 'networkidle2',
    });
    // 保存网页为图片
    await page.pdf({
        path: 'example.pdf',
        format: 'A4',
    });

    await browser.close();
})();
