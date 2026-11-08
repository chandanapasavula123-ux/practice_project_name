import { test, expect } from '@playwright/test';

test('API post call', async({request})=> {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'morpheus'
        }
    })   

    expect(response.status()).toBe(201);
    const responseBody = await response.json();


    console.log(responseBody);
    expect(responseBody.name).toBe('morpheus');

    console.log(await response.json());
})



