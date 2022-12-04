import { test, expect } from '@playwright/test';

test('test básico 1 usuario crea una partida', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByPlaceholder('Introduce tu nick (max 6 letras)').click();
    await page.getByPlaceholder('Introduce tu nick (max 6 letras)').fill('maria');
    await page.getByRole('button', { name: 'Entrar' }).click();
    await page.getByRole('button', { name: 'Crear partida' }).click();
    await page.getByRole('button', { name: 'Cerrar' }).click();
    await page.getByRole('button', { name: 'Salir' }).click();
    await page.locator('#miModal').click();
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
    await pepePage.getByText('Barco 2').click();
    await pepePage.locator('.grid > div:nth-child(2)').first().click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await pepePage.getByText('Barco 4').click();
    await pepePage.locator('div:nth-child(12)').first().click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();

    await juanPage.getByText('Barco 2').click();
    await juanPage.locator('.grid > div:nth-child(2)').first().click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByText('Barco 4').click();
    await juanPage.locator('div:nth-child(12)').first().click();
    //await juanPage.getByRole('button', { name: 'Cerrar' }).click();

    //CERRAR MODAL A JUGAR
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();

    //DISPARAR
    await pepePage.locator('div:nth-child(2) > .grid > div').first().click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(2)').click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(11)').click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(12)').click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(13)').click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await pepePage.locator('div:nth-child(2) > .grid > div:nth-child(14)').click();

    //CERRAR MODAL FINAL PARTIDA
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();
 
    await pepePage.getByRole('button', { name: 'Salir' }).click();
    await pepePage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();
    await juanPage.getByRole('button', { name: 'Salir' }).click();
    await juanPage.getByRole('button', { name: 'Cerrar' }).click();
  });