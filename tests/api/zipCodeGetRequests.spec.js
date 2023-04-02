import { test, expect} from "@playwright/test";

test.describe("Zip Code GET Requests", () => {
  let apiContext;

  test.beforeEach(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
      baseURL: "https://viacep.com.br",
    });
  });

  test("Should return data from Jardinópolis", async ({}) => {
    const response = await apiContext.get("/ws/14680000/json/");
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(
      expect.objectContaining({
        cep: "14680-000",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "Jardinópolis",
        uf: "SP",
        ibge: "3525102",
        gia: "3992",
        ddd: "16",
        siafi: "6603",
      })
    );    
  });

  test("Should return data from Brodowski", async ({}) => {
    const response = await apiContext.get("/ws/14340000/json/");
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(
      expect.objectContaining({
        cep: "14340-000",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "Brodowski",
        uf: "SP",
        ibge: "3507803",
        gia: "2276",
        ddd: "16",
        siafi: "6257",
      })
    );
  });

  test("Should return data from Altinópolis", async ({}) => {
    const response = await apiContext.get("/ws/14350000/json/");
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(
      expect.objectContaining({
        cep: "14350-000",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "Altinópolis",
        uf: "SP",
        ibge: "3501004",
        gia: "1594",
        ddd: "16",
        siafi: "6119",
      })
    );
  });
});