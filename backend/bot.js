/**
 * Esse bot serve para fazer o web scraping dentro do suap.
 * Devido o desenvolvedor não saber como fazer isso via php,
 * houve uma opção de fazer isso via simulação de usuário
 * via puppeteer (o qual é o bot responsável por isso)
 * @Autor Lucas Mateus (estagiário)
 */

const puppeteer = require('puppeteer');
const fileSystem = require('fs');

(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    //etapa de login
    await page.goto('https://suap.ifrn.edu.br/');
    await page.type('[name="username"]', '3231225');
    await page.waitForTimeout(2000);
    await page.type('[name="password"]', 'Hulkdeterno26#');
    await page.waitForTimeout(3542);
    await page.click('[class="btn success"]');
    await page.waitForNavigation();

    //etapa de ir página de documentos
    await page.goto('https://suap.ifrn.edu.br/admin/documento_eletronico/documentotexto/?nivel_acesso__exact=3&o=-3&setor_donouo=9&status__exact=7&tipo=3');

    //etapa de pegar os os links dos documentos no
    //no frontend
    const iconViewList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('.icon-view');
        const iconViewArray = [...nodeList];

        // retorna um json com os campos de link e titulo
        return iconViewArray.map(iconView => ({
            href: iconView.href,
            title: iconView.title
        }));
    });

    fileSystem.writeFile('suap.json', JSON.stringify(iconViewList, null, 2), err => {
        if (err) throw new Error('something ment wrong');
        console.log('well done!');
    });

    await browser.close();
})();