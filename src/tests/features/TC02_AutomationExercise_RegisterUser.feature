Feature: Automation Exercise - Register User

  Scenario: Successfully register and delete a user account
    Given Navigate to url 'http://automationexercise.com'
    Then Verify that home page is visible successfully
    When Click on 'Signup / Login' button
    Then Verify 'New User Signup!' is visible
    When Enter name and email address
    And Click 'Signup' button
    Then Verify that the 'ENTER ACCOUNT INFORMATION' is visible
    When Fill details: Title, Name, Email, Password, Date of birth
    And Select checkbox 'Sign up for our newsletter!'
    And Select checkbox 'Receive special offers from our partners!'
    And Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    And Click 'Create Account' button
    Then Verify that 'ACCOUNT CREATED!' is visible
    When Click the Continue button
    Then Verify that Logged in as username is visible
    When Click Delete Account button
    Then Verify that ACCOUNT DELETED! is visible
    And Click the Continue button