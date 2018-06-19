Feature: Create Feature
  As a user
  I want to generate the features page
  so that you see the different characteristics of the product.

  Scenario: Generate a Feature demo
    Given feature Demo
    When run app
    Then have a directory
      And the demo feature file