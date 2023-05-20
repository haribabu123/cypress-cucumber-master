Feature: Add multiple Property
    As a user I want to add properties of mulitble rentals


@Staging
Scenario: Add a property with a multiple rentable units
   Given I am logged into the AUT applicaiton with valid credentials
   When I click on Properties dropdown on the left-hand panel
   And I click on the Add property button on the property index page
   And I select Property with a multiple rentable unit option
   And I enter all the required fields in the input text boxes
   And I make sure that the “I manage this Property” checkbox is ticked
   And I select the number of rentable units to be any number more than 1
   And I click on the “Next, Units Settings” button
   And I select all fields under Unit Settings section and click on add property button
   Then I have successfully added a property with a multiple unit
   When I re-click on Properties dropdown from the left-hand panel
   Then I validate that the property I have just created is visible on the property index page
