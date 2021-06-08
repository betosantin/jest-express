let app = require("../src/app");
let supertest = require("supertest");

let request = supertest(app);

describe("Status do servidor", () => {
    test("A aplicação deve responder na porta 3131", () => {
        return request.get("/").then(res => expect(res.statusCode).toEqual(200));
    });

    test("Deve retornar azul como cor favorita de roberto", () => {
        return request.get("/cor/roberto").then(res => expect(res.body.cor).toEqual("azul"));
    });

})
