Feature: Welcome Screen Onboarding

    Scenario: Verify User should be able to view all welcome screens before create account screen
        Given I install and open the android app
        When I click on Get Started Button
        And  I select the language
        And  I press the next button on Earn Rewards screen
        And  I press the next button on Get Special Discounts
        Then I should see Create Account Screen
        When I click on phone number field
        And  I click on Sign Up Button
        And I click on otp field
        And  I click on Verify
        And  I click on Enter Password Field 
        And  I click on Repeat Password Field
        And  I click on Next Button
        And I click on Name Field
        And I click on Surname Field 
        And I click on Birth Date Field
        And I click on Email Field 
        And I click on Next Button
        And I click on Go to Profile Button 

       







       




