describe("the Home Page", () => {
    beforeEach(()=>{
        cy.visit("http://localhost:3000/pizza")
    })
    it("navigates to order page", ()=>{
        cy.get(`button[class="order"]`)
    })
    it("adds text to text box", ()=>{
        cy.get('input[name=name]')
        .should("have.value", "")
        .type("george")
        .should("have.value", "george")
    })
    // it("selects multiple toppings", ()=>{
    //     cy.get("input[name=pepperoni]")
    //     .should("have.value", false)
    //     .click()
    //     .should("have.value", "on")
    // })
    it("places an order", ()=>{
        cy.get(`button[class="placeOrder"]`)
        .click()

    })

})