/**
 * Esse bot serve para fazer o web scraping dentro do suap.
 * Devido o desenvolvedor não saber como fazer isso via php,
 * houve uma opção de fazer isso via simulação de usuário
 * via puppeteer (o qual é o bot responsável por isso)
 * @Autor Lucas Mateus (estagiário)
 */

const puppeteer = require('puppeteer');
const fileSystem = require('fs');

const cors = require('cors');
const express = require('express');
const server = express();

server.use(cors());

server.get('/', async(request, response) => {
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

        // retorna uma lista com os campos de link e titulo
        return iconViewArray.map(({ href }) => ({ href }));
    });


    //pegar os src dos iframes
    //to com problemas nesse etapa
    let srcList;
    for (let iconView of iconViewList) {
        await page.goto(iconView.href);
        const srcIframe = await page.evaluate(() => {
            const nodeList = document.querySelectorAll('iframe');
            const iframeArray = [...nodeList];

            return iframeArray.map(({ src }) => ({ src }))
        });

        console.log(srcIframe.src);

        await page.goBack();
    }

    //cria um arquivo json partindo-se de uma lista de objetos
    fileSystem.writeFile('suap.json', JSON.stringify(iconViewList, null, 2), err => {
        if (err) throw new Error('something ment wrong');
        console.log('well done!');
    });

    await browser.close();
    response.send(JSON.stringify(iframe, null, 2));
});

const port = 3122
server.listen(port, () => {
    console.log(`
        Servidor subiu com sucessinhos
        acesse em http://localhost:${port}
    `);
})

// ;
// (async() => {

// })();