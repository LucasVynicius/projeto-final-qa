describe("API Products Endpoint", () => {
    it("01- Should fetch products successfully from the API", () => {
        cy.request("GET", "https://automationexercise.com/api/productsList").then((response) => {
            // Valida o status HTTP
            expect(response.status).to.eq(200);

            // Converte response.body para objeto caso seja string
            const data = typeof response.body === "string" ? JSON.parse(response.body) : response.body;

            // Valida que existe a propriedade 'products'
            expect(data).to.have.property("products");

            // Valida que 'products' é um array e não está vazio
            expect(data.products).to.be.an("array").that.is.not.empty;

            // (Opcional) valida que cada produto possui as propriedades básicas
            data.products.forEach(product => {
                expect(product).to.have.all.keys(
                    "id",
                    "name",
                    "price",
                    "brand",
                    "category"
                );
                expect(product.category).to.have.all.keys("usertype", "category");
            });
        });
    });
});
