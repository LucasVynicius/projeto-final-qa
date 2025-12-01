describe("Teste de login de usuário", () => {
      it("01- Deve fazer login com um usuário existente com sucesso", () =>{
        cy.visit("https://automationexercise.com/");

        const email = "lucas.albuquerque23@gmail.com";
        const password = "senha123";

        cy.get("a[href='/login']").should("be.visible").click();
        cy.get("input[data-qa='login-email']").should("be.visible").type(email);
        cy.get("input[data-qa='login-password']").should("be.visible").type(password);
        cy.get("button[data-qa='login-button']").should("be.visible").click();
        cy.get("a[href='/logout']").should("be.visible");
    },)
});
  
  
