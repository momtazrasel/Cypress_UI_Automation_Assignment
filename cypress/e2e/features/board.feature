Feature: Automate the Demoblaze Website

    Background:
        Given User open demoblaze website

    Scenario: User able to create board successfully.
        When Click on the board
        And Input a board name and press enter
        And Verify board created successfully
    
    Scenario: Add two lists and verify they are created successfully
        When Add two lists to the board
    #     And Enter the username
    #     And Enter the password
    #     And Click on the login button