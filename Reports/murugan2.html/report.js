$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/senth/eclipse-workspace1/CucumberProject/src/test/java/com/feature/Google.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Google Application",
  "description": "",
  "id": "testing-google-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Search box fuctionality",
  "description": "",
  "id": "testing-google-application;search-box-fuctionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user Launching The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Input The Search Location In Input Field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Clicks Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "it Navigates To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Google.user_Launching_The_Url()"
});
formatter.result({
  "duration": 3270752600,
  "status": "passed"
});
formatter.match({
  "location": "Google.user_Input_The_Search_Location_In_Input_Field()"
});
formatter.result({
  "duration": 122868400,
  "status": "passed"
});
formatter.match({
  "location": "Google.user_Clicks_Search_Button()"
});
formatter.result({
  "duration": 7715397400,
  "status": "passed"
});
formatter.match({
  "location": "Google.it_Navigates_To_Next_Page()"
});
formatter.result({
  "duration": 250500,
  "status": "passed"
});
});