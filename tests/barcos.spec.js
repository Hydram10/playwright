import { test, expect } from '@playwright/test';

test('test básico 1 usuario crea una partida', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Introduce tu nick (max 6 letras)').click();
    await page.getByPlaceholder('Introduce tu nick (max 6 letras)').fill('maria');
    await page.getByRole('button', { name: 'Entrar' }).click();
    await page.getByRole('button', { name: 'Crear partida' }).click();
    await page.getByRole('button', { name: 'Abandonar partida' }).click();
    await page.getByRole('button', { name: 'Cerrar' }).click();
    await page.getByRole('button', { name: 'Salir' }).click();
});

test('test con dos usuarios', async ({ browser }) => {

    const pepeContext = await browser.newContext();
    const juanContext = await browser.newContext();

    const pepePage = await pepeContext.newPage();
    const juanPage = await juanContext.newPage();

    await pepePage.goto('http://localhost:3000/');
    await juanPage.goto('http://localhost:3000/');

    await pepePage.getByPlaceholder('Introduce tu nick (max 6 letras)').click();
    await pepePage.getByPlaceholder('Introduce tu nick (max 6 letras)').press('CapsLock');
    await pepePage.getByPlaceholder('Introduce tu nick (max 6 letras)').fill('Pepe');

    await pepePage.getByRole('button', { name: 'Entrar' }).click();
    await pepePage.getByRole('button', { name: 'Crear partida' }).click();

    await juanPage.getByPlaceholder('Introduce tu nick (max 6 letras)').click();
    await juanPage.getByPlaceholder('Introduce tu nick (max 6 letras)').press('CapsLock');
    await juanPage.getByPlaceholder('Introduce tu nick (max 6 letras)').fill('Juan');

    await juanPage.getByRole('button', { name: 'Entrar' }).click();
    await juanPage.getByRole('link', { name: 'Nick propietario: Pepe' }).click();

    //CERRAR MODAL A DESPLEGAR
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();


    //COLOCAR BARCOS
    //PEPE
    await pepePage.getByText('Barco 2').click();
    await pepePage.locator('.grid-cell').first().click();
    await pepePage.getByText('Barco 3').click();
    await pepePage.locator('div:nth-child(12)').first().click();
    await pepePage.locator('div:nth-child(12)').first().click();
    await pepePage.locator('div:nth-child(12)').first().click();
    await pepePage.getByText('Barco 4').click();
    await pepePage.locator('div:nth-child(41)').first().click();
    await pepePage.getByText('Barco 5').click();
    await pepePage.locator('div:nth-child(51)').first().click();
    await pepePage.getByText('Barco 6').click();
    await pepePage.locator('div:nth-child(61)').first().click();

    //BOTÓN A JUGAR
    await pepePage.getByRole('button', { name: '!A JUGAR!' }).click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();


    //JUAN
    await juanPage.getByText('Barco 2').click();
    await juanPage.locator('.grid-cell').first().click();
    await juanPage.getByText('Barco 3').click();
    await juanPage.locator('div:nth-child(12)').first().click();
    await juanPage.locator('div:nth-child(12)').first().click();
    await juanPage.locator('div:nth-child(12)').first().click();
    await juanPage.getByText('Barco 4').click();
    await juanPage.locator('div:nth-child(41)').first().click();
    await juanPage.getByText('Barco 5').click();
    await juanPage.locator('div:nth-child(51)').first().click();
    await juanPage.getByText('Barco 6').click();
    await juanPage.locator('div:nth-child(61)').first().click();


    //BOTÓN A JUGAR
    await juanPage.getByRole('button', { name: '!A JUGAR!' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();
    //CERRAR MODAL ¡A JUGAR!
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();


    //DISPARAR
    await pepePage.locator('div:nth-child(2) > .grid > div').first().click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(2)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(12)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(23)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(34)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(41)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(42)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(43)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(44)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(51)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(52)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(53)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(54)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(55)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(61)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(62)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(63)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(64)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(65)').click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(66)').click();

    //CERRAR MODAL FINAL PARTIDA
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();

    await pepePage.getByRole('button', { name: 'Salir' }).click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByRole('button', { name: 'Salir' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();
});