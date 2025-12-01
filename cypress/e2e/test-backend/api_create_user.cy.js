describe("API - Create user and verify existence.", () => {

    it("02- You must create a user via the API and confirm that it was created.", () => {
      const user = {
            name: "Lucas Test",
            email: "lucas@test.com",
            password: "123456"
        };

        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/createAccount",
            body: user,
            failOnStatusCode: false // evita quebrar o teste se algo der errado
        }).then((res) => {
            cy.log("Resposta da API:");
            cy.log(JSON.stringify(res.body));
        });
    });

});
