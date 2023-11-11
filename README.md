# Blogger - Angular

A feature-rich web application built with Angular, PrimeNG, and Bootstrap 4, the Blogger platform offers users the 
ability to browse posts, log in, and register. Future plans involve expanding functionality to enable 
users to create, filter, and manage their posts through a user panel. Notably, the application 
incorporates a directive to manage restricted access, a global error handling 
system with a notification component, and features a lazy loading mechanism 
for posts, and is designed to be fully responsive.

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

https://vekaltor.github.io/blogger/

![image](https://github.com/Vekaltor/blogger/assets/56607344/933ad00d-a09e-40f5-96f4-c4521ff2e390)

![image](https://github.com/Vekaltor/blogger/assets/56607344/ef963760-9c1c-4d30-ba7c-fe48429e3c7a)

![image](https://github.com/Vekaltor/blogger/assets/56607344/253b632f-510c-4122-8c6e-01c0c35b3a53)


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

### - Lazy Loading of Posts
Blogger platform implements lazy loading for posts. 
Instead of loading all posts at once, the application loads posts in batches, such as 5 posts at a time. 
As users scroll, additional batches of posts are dynamically loaded, providing a seamless and efficient browsing experience.


## Future Features:

### - Post Creation
Users will have the ability to create and publish their own posts, contributing to the blogging community.

### - Post Filters
A robust filtering system will be implemented, enabling users to find posts based on various criteria.

### - User Panel
A dedicated user panel will empower users to modify, edit, add, and delete their posts with ease.
This feature enhances the user's control over their content.

### - Comment System
The Blogger platform will introduce a comprehensive commenting system, allowing users 
to engage in discussions about posts. Users can leave comments and reply 
to existing ones, enhancing the sense of community and interaction.

