# Optima Service Desk
## Author: Richard Coucoules

Optima Service Desk is an issue tracking software designed with modern web sensibility in mind.
This Github repository tracks the development of the frontend of Optima, which is built in Vue.js.
Optima Service Desk is a full-fledged solution for issue tracking and can be used for bug tracking,
maintenance requests, and other open order-based business needs.

Optima Service Desk is a personal project by Richard Coucoules. 
For more of my projects, visit [my portfolio](https://www.racoucoules.com/).

The current working requirements are shown below. Further requirements will be added as progress on these
requirements are met.

### Upon completion, the app will have the following functionality:
  - [ ] The user should be able to sign in
    - [ ] Signing in should allow the user to see the *Issue Log*.
  - [ ] Once signed in, the user should be able to sign out.
    - [ ] The user should be returned to the home page with limited functionality upon signing out
  - [ ] The user should be able to register an account to sign in with.
  
  - [ ] An authenticated user should be able to see the *Issue Log*, a list of currently open issues.
  - An issue displayed on the issue log should have the following attributes:
    - [ ] The issue should have a **status** (open, under review, closed).
    - [ ] The issue should have an **ID**, a numerical identifier unique to each issue.
    - [ ] The issue should have a **Description** of the problem it refers to.
    - [ ] The issue should have a **Author** denoting who posted it.
    - [ ] The issue should have a **Timestamp** denoting when it was posted.
  - [ ] An authenticated user should be able to submit an issue to the *Issue Log* and have it posted there.
    - [ ] Authenticated users should only have control of the description of an issue to be submitted.

  
  Along with the capabilities of an authenticated user, an administrator should have the following capabilities:
    - [ ] An administrator should have the ability to change the status of an issue.
    - [ ] An administrator should have the ability to delete an issue. 

### The following features are planned to be added to meet these functional requirements:
  - [ ] The user will be able to register a username, email, and password with which to interface with the system.
  - [ ] The user will be able to log in with their credentials generated at registration.
  - [ ] The issue log will display a list of all of the open issues, pulled from a backend server.
  - [ ] The issue log will have an "Add Issue" component at the top of the list to initiate issue generation.
  - [ ] Activating the Add Issue component will display a form allowing the user to fill in a description of the issue and submit it.
    - [ ] The system should generate the remaining properties (ID, author, timestamp, status = open) based on the context of the submission.
    - [ ] Submitting the form should submit these details for storage in the backend database.
  
  - [ ] Administrators should see buttons to mark an issue on the issue log under review or closed.
    - [ ] Performing these actions should change the state of the items in the backend database.