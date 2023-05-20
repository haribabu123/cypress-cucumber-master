class addPropertyPage {

  static selectProperty() {
    cy.get('title'='Properties').click();
    //cy.get('.pf-c-dropdown__menu-item').contains('Administrator').click();
  }
  
  
  static clickAddProperty() {
      cy.get('.btn.btn-primary.btn-large').click();
     // cy.get('.pf-c-dropdown__menu-item').contains('Administrator').click();
  }

  static selectMultiRentalUnit() {
    cy.get('.noselect.property-description.multiple-unit.selected').click();
    //cy.get('.pf-c-dropdown__menu-item').contains( 'Developer').click();
  }

  static enterPropertyDetails() {
      cy.get('#ProfileAddressName').type('haribabu');
      cy.get('.unimportant').select('Test 1');
      cy.get('#ProfileAddress1').type('india');
      cy.get('#PropertyFullAccess').click();
      cy.get('#PropertyUnitCount').clear().type('2');
      cy.get('.next-page btn btn-default').click();
         
  }

  static manageCheckBox() {
   
    cy.get('#PropertyFullAccess').click();
    
       
}

static enterMoreThanOneUnit() {
    cy.get('#PropertyUnitCount').clear().type('2');
      
}

static NextUnitSettingsButton() {
  cy.get('#ProfileAddressName').type('haribabu');
  cy.get('.unimportant').select('Test 1');
  cy.get('#ProfileAddress1').type('india');
  cy.get('#PropertyFullAccess').click();
  cy.get('#PropertyUnitCount').clear().type('2');
  cy.get('.next-page btn btn-default').click();
     
}

  static unitSettingsPage(operatorName) {
      cy.get('//body[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/form[1]/div[3]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/select[1]').select('Test 1');
      cy.get('//tbody/tr[2]/td[3]/div[1]/select[1]').select('Test 1');
      cy.wait(4000);
      cy.get('.submit btn btn-default').click();
      
  }

  static selectProperty() {
    // cy.get('title'='Properties').click();
     cy.get('[@id="main-menui"]/li[4]/a/span').click();
    // cy.byButtonText('Install').click();
    // cy.byLegacyTestID('resource-title').should('have.text', 'Installed Operators');
  }

  static verifyproperty() {
    cy.get('.table-info').should('have.text', 'haribabu');
 
  }

}
export default addPropertyPage;
