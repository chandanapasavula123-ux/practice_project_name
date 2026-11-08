import { test, expect } from "@playwright/test";

test("API put call", async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    })
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain("morpheus");

    console.log(await response.json());

})