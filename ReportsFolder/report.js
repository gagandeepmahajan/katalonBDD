$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Navigates to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User navigates to Login page Homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "hUKwJTbofgPU9eVlw/CnDQ\u003d\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Navigates to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Admin and hUKwJTbofgPU9eVlw/CnDQ\u003d\u003d",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.EnterCredentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.ClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Login page Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.navigateToLoginPageHomepage()"
});
formatter.result({
  "status": "passed"
});
});