Feature: Corporate Gear SignUp
    
    @SignUp @Requiredfields
  Scenario: Registration failure with missing required fields
    Given The user is on the "Sign Up" page.
    When The user leaves all required fields empty and clicks "Sign Up" button.
    Then An error message "Enter your First Name." is displayed.

    @SignUp @Invalidemail
 Scenario: Registration failure with invalid email format
    Given The user is on the "Sign Up" page.
    When The user enters an invalid email format and clicks "Sign Up"
    Then An error message "Email is not valid" is displayed.