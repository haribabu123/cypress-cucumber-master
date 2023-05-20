Feature: Login to system
As a valid user I want to log in to the Application

@Staging
Scenario: Login to system
    Given Open the AUT URL on browser
    When user enter a username "<userName>"
    And user enter a password "<password>"
    And user click on the login button
    Then user will be able to login to the AUT application

Examples:
| userName                                    | password                |
| infrastructure+candidate1@arthuronline.com  | vhz!jbe9pfj3qgm!UVR |


