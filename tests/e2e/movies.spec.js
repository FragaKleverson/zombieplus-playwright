import { test } from '../support';

const data = require('../support/fixtures/movies.json');
const { executeSQL } = require('../support/database.js');


test.beforeAll(async () => {
    await executeSQL(`DELETE FROM movies`)
})

test('Deve poder cadastrar um novo filme', async ({ page }) => {
    const movie = data.create
    
    await page.login.do('admin@zombieplus.com', 'pwd123', 'Admin')
    await page.movies.create(movie)
    await page.toast.containText('Cadastro realizado com sucesso!')
})

test('Não deve cadastrar quando o titulo já existe', async ({ page }) => {
    const movie = data.duplicate
    
    await page.login.do('admin@zombieplus.com', 'pwd123', 'Admin')
    await page.movies.create(movie)
    await page.toast.containText('Cadastro realizado com sucesso!')
    await page.movies.create(movie)
    await page.toast.containText('Este conteúdo já encontra-se cadastrado no catálogo')
})

test('Não deve cadastrar quando os campos obrigatórios não forem preenchidos', async ({ page }) => {
    await page.login.do('admin@zombieplus.com', 'pwd123', 'Admin')
    await page.movies.goForm()
    await page.movies.submit()
    await page.movies.alertHaveText([
        'Por favor, informe o título.',
        'Por favor, informe a sinopse.',
        'Por favor, informe a empresa distribuidora.',
        'Por favor, informe o ano de lançamento.'
    ])

})
