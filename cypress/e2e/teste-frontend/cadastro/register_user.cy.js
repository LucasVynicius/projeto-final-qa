describe("Cadastro de Usuário", ()=>{
    it("01- Deve cadastrar um novo usuáiro com sucesso", () => {

        cy.visit("https://automationexercise.com/");

        cy.get("a[href='/login']").should("be.visible").click();

        const name = "Lucas Albuquerque";
        const email = "lucas.albuquerque23@gmail.com";
        const password = "senha123";
        const day = "11";
        const month = "December";
        const year = "1995";
        const firstName = "Lucas";
        const lastName = "Albuquerque";
        const company = "Tech Solutions";
        const address1 = "José Mesquita, 504";
        const country = "Canada";
        const state = "Paraiba";
        const city = "João Pessoa";
        const zipcode = "58025330";
        const mobileNumber = "+55 83 99999-9999";

        cy.get("input[data-qa='signup-name']").should("be.visible").type(name);
        cy.get("input[data-qa='signup-email']").should("be.visible").type(email);
        cy.get("button[data-qa='signup-button']").should("be.visible").click();
        cy.get("input[id='password']").should("be.visible").type(password);
        cy.get("select[id='days']").should("be.visible").select(day);
        cy.get("select[id='months']").should("be.visible").select(month);
        cy.get("select[id='years']").should("be.visible").select(year);
        cy.get("input[id='first_name']").should("be.visible").type(firstName);
        cy.get("input[id='last_name']").should("be.visible").type(lastName);
        cy.get("input[id='company']").should("be.visible").type(company);
        cy.get("input[id='address1']").should("be.visible").type(address1);
        cy.get("select[id='country']").should("be.visible").select(country);
        cy.get("input[id='state']").should("be.visible").type(state);
        cy.get("input[id='city']").should("be.visible").type(city);
        cy.get("input[id='zipcode']").should("be.visible").type(zipcode);
        cy.get("input[id='mobile_number']").should("be.visible").type(mobileNumber);
        cy.get("button[data-qa='create-account']").should("be.visible").click();
        cy.get("h2[data-qa='account-created']").should("be.visible").and("have.text", "ACCOUNT CREATED!");
        cy.get("a[data-qa='continue-button']").should("be.visible").click();
        
    })
})