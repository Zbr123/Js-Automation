Feature: Register flow
    As a father wanting to register his soon
    I want to complete the register process
    So that he can start learning english

    Scenario: An existing email can not be registered

        Given I started the register process
        When I complete the register with an existing email
            | Level | Year | Month | Name  | Email          |
            | 1     | 2017 | FEB   | Marti | test@gmail.com |
        Then I should be informed that the email is in use