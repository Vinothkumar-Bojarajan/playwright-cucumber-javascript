Feature: Purchase a product on DemoBlaze

  @Purchase
  Scenario: Complete purchase flow for a Sony vaio i5 laptop
    Given I navigate to "https://www.demoblaze.com/"
    When I click on the link: Log in
    And I enter Username: Playwright99 and Password: Playwright99
    And I click on the button: Log in
    Then I should see the link: Welcome Playwright99
    When I click on the link: Laptops
    And I click on the link: Sony vaio i5
    And I click on the link: Add to cart
    And I handle the dialog by dismissing it
    And I click on the link: Cart
    And I click on the button: Place Order
    And I enter order details: Name: Playwright99, Country: United States, City: Houston, Credit card: 1234567890123456, Month: 09, Year: 2035
    And I click on the button: Purchase
    Then I should see the message: Thank you for your purchase!
    And I click on the button: OK
    And I click on the link: PRODUCT STORE
