$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/senth/eclipse-workspace1/CucumberProject/src/test/java/com/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User Login The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTesting"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-web-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;1"
    },
    {
      "cells": [
        "gngjj",
        "gytjhh"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;2"
    },
    {
      "cells": [
        "SenthikumarParamesh",
        "1234567"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;3"
    },
    {
      "cells": [
        "srgwerty",
        "12345678"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;4"
    },
    {
      "cells": [
        "SenthikumarParamesh",
        "12345678"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "User Login The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTesting"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"gngjj\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"gytjhh\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 5267547100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gngjj",
      "offset": 16
    }
  ],
  "location": "stepdefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 91271201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gytjhh",
      "offset": 16
    }
  ],
  "location": "stepdefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 75222400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Login_Button_And_It_Navigates_Search_Hotel_Page()"
});
formatter.result({
  "duration": 360421800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Login The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTesting"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"SenthikumarParamesh\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"1234567\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 300801501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SenthikumarParamesh",
      "offset": 16
    }
  ],
  "location": "stepdefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 104340700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567",
      "offset": 16
    }
  ],
  "location": "stepdefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 76271900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Login_Button_And_It_Navigates_Search_Hotel_Page()"
});
formatter.result({
  "duration": 383820601,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Login The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTesting"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"srgwerty\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"12345678\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 326291300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srgwerty",
      "offset": 16
    }
  ],
  "location": "stepdefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 77248100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 16
    }
  ],
  "location": "stepdefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 73091200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Login_Button_And_It_Navigates_Search_Hotel_Page()"
});
formatter.result({
  "duration": 361679700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Login The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-the-web-application;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTesting"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"SenthikumarParamesh\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"12345678\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 359806399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SenthikumarParamesh",
      "offset": 16
    }
  ],
  "location": "stepdefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 116284000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 16
    }
  ],
  "location": "stepdefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 80574300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Login_Button_And_It_Navigates_Search_Hotel_Page()"
});
formatter.result({
  "duration": 935580000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Search Hotel Page The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-hotel-page-the-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user Login The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user Select The Location In Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user Select The Hotel Name In Hotel Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The Roomtype In Roomtype Field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select The Room Number In Room Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Enter The Checkin Date In Checkin Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Enter The Checkout Date In Checkout Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select The Adultper Room In Adultper Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Select The Childrenper Room In Chidrenper Room In Childrenper Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Click The Search Button  And It Navigates Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Login_The_Adactin_Application()"
});
formatter.result({
  "duration": 2011141800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Location_In_Location_Field()"
});
formatter.result({
  "duration": 112421500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Hotel_Name_In_Hotel_Name_Field()"
});
formatter.result({
  "duration": 111761599,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Roomtype_In_Roomtype_Field()"
});
formatter.result({
  "duration": 94999100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Room_Number_In_Room_Number_Field()"
});
formatter.result({
  "duration": 112211300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Checkin_Date_In_Checkin_Date_Field()"
});
formatter.result({
  "duration": 101938900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Checkout_Date_In_Checkout_Date_Field()"
});
formatter.result({
  "duration": 119604899,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Adultper_Room_In_Adultper_Room_Field()"
});
formatter.result({
  "duration": 73390501,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Childrenper_Room_In_Chidrenper_Room_In_Childrenper_Room_Field()"
});
formatter.result({
  "duration": 114638901,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Search_Button_And_It_Navigates_Select_Hotel_Page()"
});
formatter.result({
  "duration": 846124300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User Select The Hotel Page The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-page-the-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user Select Hotel The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user Select The Radio Button In The Select Hotel Page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user Click The Continue Button And  It Navigates Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Select_Hotel_The_Adactin_Application()"
});
formatter.result({
  "duration": 2002421301,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Radio_Button_In_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 85507601,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Continue_Button_And_It_Navigates_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 1139785101,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Book A Page Functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-page-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user Select The Hotel Name In Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "user Enter The Firstname In Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user Enter The Lastname In Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Enter The Billing Address In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Enter The Credit Card Number In Credit Card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Select The Credit Card Type In Credit Card Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Select The Month Year In Expirydate Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Enter The Cvv Number In Cvv Field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Click The Booknow Button And It Navigates Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Hotel_Name_In_Adactin_Application()"
});
formatter.result({
  "duration": 2000379999,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Firstname_In_Firstname_Field()"
});
formatter.result({
  "duration": 109302300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Lastname_In_Lastname_Field()"
});
formatter.result({
  "duration": 85168200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Billing_Address_In_Billing_Address_Field()"
});
formatter.result({
  "duration": 89505400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Credit_Card_Number_In_Credit_Card_Number_Field()"
});
formatter.result({
  "duration": 111327800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Credit_Card_Type_In_Credit_Card_Type_Field()"
});
formatter.result({
  "duration": 105050900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Select_The_Month_Year_In_Expirydate_Field()"
});
formatter.result({
  "duration": 265799001,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Enter_The_Cvv_Number_In_Cvv_Field()"
});
formatter.result({
  "duration": 82328700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Click_The_Booknow_Button_And_It_Navigates_Logout_Page()"
});
formatter.result({
  "duration": 8058007200,
  "status": "passed"
});
});