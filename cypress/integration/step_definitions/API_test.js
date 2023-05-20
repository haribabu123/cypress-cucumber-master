
// import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
// import loginPage from "../pageObjects/pages/login_page";

// Given("I set Get list users api endpoint", () => {
//     cy.request({url :'https://reqres.in/api/users?page=2'})
//   });

// When("I send a GET HTTP request", () => {
//     cy.request({method :'get'})
    
//   });

// Then ("I receive Valid List users", () => {
//     cy.response.body.have.property('url'),
//                  expect(response.status).to.equal(200)});
  


// Given("I set POST user api endpoint", () => {
    
//   });

// When("I send a POST HTTP request with valid credentials", () => {
//     cy.request({method :'get'}),
//     body : {
//         "email": "eve.holt@reqres.in",
//          "password": "pistol"
//      }
//   });

// Then("I receive Valid response", () => {
    
//   });
// When("I send a POST HTTP request with invalid credentials", () => {
//     cy.request({method :'get'})
//   });
// Then("I receive inValid response", () => {
    
//   });





//          it('get', function () {
    
//                              cy.request({
//                              method :'post',
//                             url :'https://reqres.in/api/login',
//                              body : {
//                                 "email": "eve.holt@reqres.in",
//                                  "password": "pistol"
//                              }
//                          }).then(function (response) {
//                              expect(response.body).have.property('url');
//                             expect(response.status).to.equal(200)
//                              expect(res.status).to.eq(200)
//                          });

//                          it('get', function () {
        
//                                                  cy.request({
//                                                  method :'post',
//                                                  url :'https://reqres.in/api/login',
//                                                  body : {
//                                                      "email": "peter@klaven"
                                                    
//                                                  }
//                                              }).then(function (response) {
//                                                  expect(response.body).have.property('url');
//                                                  expect(response.status).to.equal(400)
//                                              });
                                    
//                                         });

describe('API reqres listusers', function () {
    it('get', function () {

            cy.request({
            method :'get',
            url :'https://reqres.in/api/users?page=2',
        }).then(function (response) {
            expect(response.body).have.property('url');
            expect(response.status).to.equal(200);
        });

    })
    });

    describe('API reqres login sussessfull', function () {
        it('get', function () {
    
                cy.request({
                method :'post',
                url :'https://reqres.in/api/login',
                body : {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
            }).then(function (response) {
                expect(response.body).have.property('url');
                expect(response.status).to.equal(200)
                expect(res.status).to.eq(200)
            });
    
        })
        });

        describe('API reqres login Unsussessfull', function () {
            it('get', function () {
        
                    cy.request({
                    method :'post',
                    url :'https://reqres.in/api/login',
                    body : {
                        "email": "peter@klaven"
                        
                    }
                }).then(function (response) {
                    expect(response.body).have.property('url');
                    expect(response.status).to.equal(400)
                });
        
            })
            });

