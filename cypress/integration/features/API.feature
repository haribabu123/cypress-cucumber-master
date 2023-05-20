Feature: API testing
    reqres api testing

@Staging
Scenario: List Users
    Given I set Get list users api endpoint
    When I send a GET HTTP request
    Then I receive Valid List users

@Staging
Scenario: Login successfull
    Given I set POST user api endpoint
    When I send a POST HTTP request with valid credentials
    Then I receive Valid response

@Staging
Scenario: Login Unsuccessfull
    Given I set POST users api endpoint
    When I send a POST HTTP request with invalid credentials
    Then I receive inValid response

