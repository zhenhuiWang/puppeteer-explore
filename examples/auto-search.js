const puppeteer = require('puppeteer');
(async() => {

    // 启动浏览器
    const browser = await puppeteer.launch({
        // 关闭无头模式，方便我们看到这个无头浏览器执行的过程
        headless: false,
    });
    // 打开页面
    const page = await browser.newPage();
    // 地址栏输入网页地址
    await page.goto('https://google.com/', {
        // 配置项
        waitUntil: 'networkidle2', // 等待网络状态为空闲的时候才继续执行
    });

    // 聚焦搜索框
    await page.focus('#lst-ib');

    // 输入搜索关键字
    await page.type('#lst-ib','美女', {
       delay: 1000, // 控制 keypress 也就是每个字母输入的间隔
    });

    // 回车
    await page.keyboard.press('Enter');
})();
