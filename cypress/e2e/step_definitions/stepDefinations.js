import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
const locator = new locatorsPage();
const data = new allData();
const boardName = "Board_" + Date.now();
let createdBoardName = '';
const listNames = ["To Do", "In Progress"];

Given("User open demoblaze website", () => {
    cy.visit(data.demoblaze_url);
    cy.viewport(1280, 720)
});

Then("Click on the board", ()=> {
    cy.xpath(locator.boardCard).click()
})

Then("Input a board name and press enter", ()=> {
    const baseName = "Board_";
    cy.xpath(locator.boardInput)
    .type(`${baseName}{enter}`);
})

Then("Verify board created successfully", ()=> {
    cy.get('.board-title')  // adjust this selector
    .should('be.visible')
})
Then("Add two lists to the board", ()=> {
   listNames.forEach((name) => {
    cy.xpath(locator.addListButton).click(); // Replace with real selector
    cy.get('[data-testid="list-name-input"]').type(name);
    cy.get('[data-testid="save-list-button"]').click();
  });
})
Then("Click on the sign up btn", ()=> {
   cy.xpath(locator.signupButton).click()
   cy.wait(data.oneSecond)
})
Then("Click on the login tab", ()=> {
   cy.xpath(locator.loginTab).click()
   cy.wait(data.oneSecond)
})

Then("Enter the username", ()=> {
    cy.xpath(locator.loginUsernmae).click()
    cy.xpath(locator.loginUsernmae).type("momtazrasel")
    cy.wait(data.oneSecond)
})
Then("Enter the password", ()=> {
    cy.xpath(locator.loginPassword).click()
    cy.xpath(locator.loginPassword).type("Test123##")
    cy.wait(data.oneSecond)
})
Then("Click on the login button", ()=> {
    cy.xpath(locator.loginButton).click()
    cy.wait(data.oneSecond)
})
