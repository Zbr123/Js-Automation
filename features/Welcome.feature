Feature: Welcome Screen Onboarding

    Scenario: Verify User should be able to view all welcome screens before create account screen
        Given I install and open the android app
        When I click on Get Started Button
        And  I select the language
        And  I press the next button on Earn Rewards screen
        And  I press the next button on Get Special Discounts
        Then I should see Create Account Screen