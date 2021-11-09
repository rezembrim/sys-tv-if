/**
 * Este bot serve para fazer o web scraping dentro do suap.
 * 
 * @author Lucas-dev-back
 */
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const playwright = require('playwright');
const fs = require('fs');
const { env } = require('process');

const browserPlaywrite = playwright.chromium;
const server = express();

server.use(cors());

server.get('/bot', async(request, response) => {
    const browser = await browserPlaywrite.launch();
    const page = await browser.newPage();

    // login
    await page.goto('https://suap.ifrn.edu.br/');
    await page.type('#id_username', env.USER);
    await page.waitForTimeout(2000);
    await page.type('#id_password', env.PASSWORD);
    await page.waitForTimeout(3542);
    await page.click('[class="btn success"]');

    // vai na página de documentos
    await page.goto('https://suap.ifrn.edu.br/admin/documento_eletronico/documentotexto/?nivel_acesso__exact=3&o=-8&setor_donouo=9&status__exact=7&tipo=3');

    // links de todos os documentos
    const iconViewList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('.icon-view');
        const iconViewArray = [...nodeList];
        return iconViewArray.map(({ href }) => ({ href }));
    });

    // guarda os links em um vetor
    const hrefIframes = getLinks(iconViewList);

    // percorre o vetor, pega o html de cada página e escreve o arquivo
    for (const href of hrefIframes) {
        await page.goto(href);
        const contentPage = await page.evaluate(() => {
            return document.querySelector('html').innerHTML;
        });
        writeFile(contentPage, hrefIframes.indexOf(href));
    }

    await browser.close();
    response.send('Processado com sucesso');
});

const port = 3122
server.listen(port, () => {
    console.log(`
         Servidor subiu com sucessinhos
         acesse em http://localhost:${port}
     `);
});


function getLinks(iconViewList) {
    let index = 0;
    var hrefIframes = new Array();
    iconViewList.forEach(iframe => {
        if (index < 6) {
            hrefIframes.push(iframe.href);
            index++;
        }
    });
    return hrefIframes;
}

function writeFile(content, index) {
    fs.writeFile(
        './frotend/pages/downloads/file' + index + '.html',
        '<DOCTYPE! html><html>' + content + '</html>',
        err => {
            if (err) throw new Error('something ment wrong');
            console.log('saved');
        }
    );
}