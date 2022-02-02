# Setup

## Requirements
- node 16.0.0
- json server installed globally

## Startup
- wind up the server before starting the app: `npm run server`
- start the app: `npm start`

# Developer's notes

## JSON server

Unfortunately in order to make json server work, we need to have it installed globally.

## Styled components

Back in 2015 I had a huge comission to clean up a big angularJS project's messed up stylebase.
That's when I've learned of BEM methodology, ITCSS, the specifity wars, and how these connect.
Ever since I prefer using BEM over encapsulated stylings when I can, just to practice good housekeeping.

---------------------------------------------------------------------------------------------------------

The employee have four different states including the following
- ADDED
- IN-CHECK
- APPROVED
- ACTIVE
- INACTIVE

Your task is to build a frontend application using React / Typescript including the following features.

- A simple UI listing the employees
  The application need to use an API endpoint to retrieve the employee's list, Unfortunately the API endpoint isn't developed yet, We recommend using a tool to mock your API with the following specification :
  - GET /employees/
  - POST /employees/
  - PATCH /employees/{employee_id}

- In Every employee row, there should be a component as per the provided picture which will be used to display the current state of this employee and by clicking on another state e.g. APPROVED , it should persist that change to this given employee.
---------------------------------------------------------------------------------------------------------
