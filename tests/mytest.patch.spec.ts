import { test, expect } from "@playwright/test"

test("api patch", async ({ request }) => {

    const response = await request.patch("https://reqres.in/api/users/2", {
        data: {
            "job": "zion resident"
        }
    })
    expect (response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('zion resident');
    console.log(await response.json());
})