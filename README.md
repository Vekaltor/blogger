# Blogger - Angular

A feature-rich web application built with Angular, PrimeNG, and Bootstrap 4, the Blogger platform offers users the ability to browse posts, log in, and register. Future plans involve expanding 
functionality to enable users to create, filter, and manage their posts through a user panel. Notably, the application incorporates a directive to manage restricted 
access and a global error handling system with a notification component.

## Technologies:
<p>Project is created with:</p>
<ul>
  <li>Angular</li>
  <li>RxJs</li>
  <li>TypeScript</li>
  <li>PrimeNG</li>
  <li>bootstrap-4</li>
  <li>HTML5</li>
</ul>

## Check on your own

Temporarily unavailable

![image](https://user-images.githubusercontent.com/56607344/198079891-9b02fe6e-3a19-4147-9ea7-39d4928ae11a.png)

![image](https://user-images.githubusercontent.com/56607344/203132252-a28f5c05-dbc6-46e8-91b5-7acc09424240.png)


## Setup
To run this project, install it locally using npm:
````
$ cd ../blogger-frontend

$ npm install

$ ng serve
````

## Features:

### - Post Browsing
Users can browse posts on the Blogger platform and view their content. 
In addition, each post can be read in greater detail

### - Authentication
The application provides a secure authentication system, allowing users to log in and register.

### - Restricted Access with Directive
Certain elements are visible to all users, but when clicked, a directive redirects unauthenticated users to the login page, 
ensuring that only authorized users can access specific features.

### - Global Error Handling and Notification Component
The Blogger platform offers a global system for handling HTTP errors and application events.
In case of errors, successes or information, users will be notified with a pop-up modal showing the type of event and its content.


## Future Features:

### - Post Creation
Users will have the ability to create and publish their own posts, contributing to the blogging community.

### - Post Filters
A robust filtering system will be implemented, enabling users to find posts based on various criteria.

### - User Panel
A dedicated user panel will empower users to modify, edit, add, and delete their posts with ease.
This feature enhances the user's control over their content.
