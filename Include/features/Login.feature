Feature: Login Feature

  Scenario Outline: Test Login with valid credentials
    Given User Navigates to login page
    When User enters <username> and <password>
    And Click on login button
    Then User navigates to Login page Homepage

    Examples: 
      | username | password                 |
      | Admin    | hUKwJTbofgPU9eVlw/CnDQ== |
      #|      233 |                      455 |
