Feature: Login
     Feature Login page will work depending on the user credentials.

  @Login_Test
  Scenario: Successful Login with Valid Credentials
    Given A web browser is at the saucelabs login page
    When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
    Then the url will contains the inventory subdirectory

  @Login_Test
  Scenario: Unsuccessful Login with Incorrect Username
    Given A web browser is at the saucelabs login page
    When A user enters the wrong username "standard_use", the password "secret_sauce", and clicks on the login button
    Then the login should fail with an error message
