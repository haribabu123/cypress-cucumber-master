import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addPropertyPage from '../pageObjects/pages/addProperty_page';
import loginPage from '../pageObjects/pages/login_page'
import { when } from 'cypress/types/jquery';

Given('I am logged into the AUT applicaiton with valid credentials', () => {
    loginPage.loginWithValidCredentials('kubeainfrastructure+candidate1@arthuronline.com', 'vhz!jbe9pfj3qgm!UVR');
    loginPage.checkLoginSuccess();
});

When('I click on Properties dropdown on the left-hand panel', () => {
  addPropertyPage.selectProperty();
    
});

And ('I click on the Add property button on the property index page', () => {
  addPropertyPage.clickAddProperty();
    
});

And ('I select Property with a multiple rentable unit option', () => {
  addPropertyPage.selectMultiRentalUnit();
    
});

And ('I enter all the required fields in the input text boxes', () => {
  addPropertyPage.enterPropertyDetails();
    
});

And ('I make sure that the “I manage this Property” checkbox is ticked', () => {
  addPropertyPage.manageCheckBox();
    
});

And ('I select the number of rentable units to be any number more than 1', () => {
  addPropertyPage.enterMoreThanOneUnit();
    
});

And ('I click on the “Next, Units Settings” button', () => {
  addPropertyPage.NextUnitSettingsButton();
    
});

And ('I select all fields under Unit Settings section and click on add property button', () => {
  addPropertyPage.enterPropertyDetails();
    
});

Then ('I have successfully added a property with a multiple unit', () => {
  addPropertyPage.unitSettingsPage();
    
});

when ('I re-click on Properties dropdown from the left-hand panel', () => {
  addPropertyPage.selectProperty();
    
});

Then ('I validate that the property I have just created is visible on the property index page', () => {
  addPropertyPage.verifyproperty();
    
});

// Given('user is at Operator Hub page with the header name {string}', (headerName) => {
//   cy.get('div[data-test-id="perspective-switcher-menu"]').find('h1').should('contain.text', 'Administrator');
//     cy.get('[data-test-id="resource-title"]').should('contain.text', headerName);
// });

// When('user searches for {string}', (operatorName) => {
//     operatorsPage.searchOperator(operatorName);
// });

// When('clicks OpenShift Pipelines Operator card on Operator Hub page', () => {
//     cy.get('[data-test="openshift-pipelines-operator-rh-redhat-operators-openshift-marketplace"]').click();
// });

// When('click install button present on the right side pane', () => {
//     cy.get('[role="dialog"]').should('be.exist');
//     cy.get('[data-test-id="operator-install-btn"]').click();
// });

// Then('OpenShift Pipeline operator subscription page will be displayed', () => {
//    operatorsPage.verifyPipelineOperatorSubscriptionPage();
// });
  
// Given('user is at OpenShift Pipeline Operator subscription page', () => {
//   operatorsPage.navigateToOperaotorHubPage();
//   cy.get('[data-test-id="resource-title"]').should('contain.text', 'OperatorHub');
//   operatorsPage.searchOperator('OpenShift Pipelines Operator');
//   cy.get('[data-test="openshift-pipelines-operator-rh-redhat-operators-openshift-marketplace"]').click();
//   cy.get('[role="dialog"]').should('be.exist');
//   cy.get('[data-test-id="operator-install-btn"]').click();
//   operatorsPage.verifyPipelineOperatorSubscriptionPage();
// });

// When('user installs the pipeline operator with default values', () => {
//     cy.get('button.pf-c-button.pf-m-primary').contains('Install').click();
// });

// Then('page redirects to Installed operators', () => {
//     cy.get('[data-test-id="resource-title"]').should('have.text', 'Installed Operators');
// });
  
// Then('Installed operators page will contain {string}', (operatorName) => {
//     operatorsPage.verifyInstalledOperator(operatorName);
// });





