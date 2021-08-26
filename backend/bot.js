/**
 * Esse bot serve para fazer o web scraping dentro do suap.
 * Devido o desenvolvedor não saber como fazer isso via php,
 * houve uma opção de fazer isso via simulação de usuário
 * via puppeteer (o qual é o bot responsável por isso)
 * 
 * @Autor Lucas-dev-back
 */
require('dotenv').config();
const puppeteer = require('puppeteer');
const fs = require('fs');

const cors = require('cors');
const express = require('express');
const server = express();

server.use(cors());

server.get('/', async(request, response) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //etapa de login
    await page.goto('https://suap.ifrn.edu.br/');
    await page.type('[name="username"]', process.env.USER);
    await page.waitForTimeout(2000);
    await page.type('[name="password"]', process.env.PASSWORD);
    await page.waitForTimeout(3542);
    await page.click('[class="btn success"]');
    // await page.waitForNavigation();

    //etapa de ir na página de documentos
    await page.goto('https://suap.ifrn.edu.br/admin/documento_eletronico/documentotexto/?nivel_acesso__exact=3&o=-8&setor_donouo=9&status__exact=7&tipo=3');

    /**etapa de pegar os os links da aba 
     * de visualzação dos documentos no 
     * iframe (frontend)
     */
    const iconViewList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('.icon-view');
        const iconViewArray = [...nodeList];
        return iconViewArray.map(({ href }) => ({ href }));
    });


    //pegar os src dos iframes
    const maxInfo = 6;

    for (let i = 0; i < maxInfo; i++) {
        await page.goto(iconViewList[i].href);
        const srcIframe = await page.evaluate(() => {
            const nodeList = document.querySelectorAll('iframe');
            const iframeArray = [...nodeList];
            return iframeArray.map(({ src }) => ({ src }));
        });

        /**etapa de pegar o conteúdo 
         * de cada objeto e armazenar
         * em um array
         */
        let maxSrc = srcIframe.length;

        for (let index = 0; index < maxSrc; index++) {
            await page.goto(srcIframe[index].src);
            const htmlContent = await page.evaluate(() => {
                const nodeList = document.querySelectorAll('html');
                const htmlArray = [...nodeList];
                return htmlArray[0].innerHTML;
            });

            fs.writeFile(
                './frontend/pages/downloads/file' + index + '.html',
                '<html>' + htmlContent + '</html>',
                err => {
                    if (err) throw new Error('something ment wrong');
                    console.log('saved');
                }
            );

        }


    }

    await browser.close();
    response.send("processado com sucesso!")
});

const port = 3122
server.listen(port, () => {
    console.log(`
        Servidor subiu com sucessinhos
        acesse em http://localhost:${port}
    `);
});