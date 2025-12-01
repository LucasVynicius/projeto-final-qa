describe("List and Search Products", () => {
    it("01- Should list all products successfully", () => {
        cy.visit("https://automationexercise.com/");

        cy.get("a[href='/products']").should("be.visible").click();

        cy.get("h2.title.text-center").should("be.visible").and("have.text", "All Products");
        cy.get(".features_items .product-image-wrapper").should("have.length.greaterThan", 0);
    });

    it("02- Should search for a product successfully", () => {
        cy.visit("https://automationexercise.com/");

        const searchTerm = "Jeans";

        cy.get("a[href='/products']").should("be.visible").click();
        cy.get("#search_product").should("be.visible").type(searchTerm);
        cy.get("#submit_search").should("be.visible").click();
        cy.get("h2.title.text-center").should("be.visible").and("have.text", "Searched Products");
        cy.get(".features_items .product-image-wrapper").each(($el) => {
            cy.wrap($el).find(".productinfo p").should("contain.text", searchTerm);
        });
        cy.get(".features_items .product-image-wrapper").should("have.length.greaterThan", 0);
        cy.get("a[href='/product_details/33']").first().click();
    
        
    });

});