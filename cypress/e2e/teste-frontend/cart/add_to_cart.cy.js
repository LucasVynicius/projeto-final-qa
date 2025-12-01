describe("Add to Cart Functionality", () => {
    it ("01- Should add a product to the cart successfully", () => {
        cy.visit("https://automationexercise.com/");

        cy.get("a[href='/products']").should("be.visible").click();
        cy.get("h2.title.text-center").should("be.visible").and("have.text", "All Products");

        cy.get(".features_items .product-image-wrapper").first().find("a[href='/product_details/1']").click();

        cy.get("button[class='btn btn-default cart']").should("be.visible").click();
        cy.get(".modal-content").should("be.visible");
        cy.get(".modal-content .modal-body p").should("contain.text", "Your product has been added to cart.");
        cy.get(".btn-success").should("be.visible").and("have.text", "Continue Shopping").click();
        cy.get(".nav a[href='/view_cart']").click();

        

    })
});