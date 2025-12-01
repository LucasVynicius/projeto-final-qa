describe("Checkout Process", () => {
    
    const email = "lucas.albuquerque23@gmail.com";
    const password = "senha123";

    beforeEach(() => {
        // Mantém o login automaticamente entre testes
        cy.session([email, password], () => {
            cy.visit("https://automationexercise.com/login");
            cy.get("input[data-qa='login-email']").type(email);
            cy.get("input[data-qa='login-password']").type(password);
            cy.get("button[data-qa='login-button']").click();
            cy.contains("Logged in as").should("be.visible");
        });
    });
    
    it("01- Should complete the checkout process successfully", () => {
        cy.visit("https://automationexercise.com/products");

        // Add a product to the cart
        cy.get("a[href='/products']").should("be.visible").click();
        cy.get(".features_items .product-image-wrapper").first().find("a[href='/product_details/1']").click();
        cy.get("button[class='btn btn-default cart']").should("be.visible").click();
        cy.get(".modal-content .btn-success").should("be.visible").and("have.text", "Continue Shopping").click();
        cy.get(".nav a[href='/view_cart']").click();

        // Fill in checkout details
        cy.get(".check_out").should("be.visible").click();

        cy.get("a[href='/payment']").should("be.visible").click();

        cy.get("input[name='name_on_card']").should("be.visible").type("Lucas Albuquerque");
        cy.get("input[name='card_number']").should("be.visible").type("4111111111111111");
        cy.get("input[name='cvc']").should("be.visible").type("123");
        cy.get("input[name='expiry_month']").should("be.visible").type("12");
        cy.get("input[name='expiry_year']").should("be.visible").type("2025");

        cy.get("button[id='submit']").should("be.visible").click();

        cy.get(".pull-right a[data-qa='continue-button']").should("be.visible").click();

    });
});