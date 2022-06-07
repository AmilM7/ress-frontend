# RESSProject

The Application is used to reserve a table at restaurant, club, bar, etc. This gives many benefits both to restaurants and consumers. It gives ability to reserve table at place without calling people that oversee reservations and without using social media. This repository is used to build front-end side of application. The front-end is built in Angular. 


To install Angular on local system, following requirements are needed:\
*Node.js* - since Angular requires  an active LTS or maintenance LTS version of Node.js.\
*npm package manager* - Angular, the Angular CLI, and Angular applications depend on npm packages for many features and functions. To download and install npm packages, npm package manager is required. 

 **Installation of Angular CLI**
 
Angular CLI is tool which is used to create projects, generate application and maintain Angular application and perform several development tasks such as testing, or  deployment.\
In order to install Angular CLI, run the following command: npm install -g @angular/cli
  
 **Run the application**
 
 After clonning this repository, run the command: npm install or npm i\
 In order to run application on the browser, run the following command: ng serve\
 If command is compiled succesfully, navigate to http://localhost:4200/ on browser.\
 Run command ng serve --open which does the same thing, but automatically opens http://localhost:4200/ on browser.
 
 **Enviroments**
 
 There is enviroments folder in this application which can be replaced during build by using the `fileReplacements` array.\
 Command ng build replaces "environment.ts" with "environment.prod.ts".\
 The list of file replacements can be found in angular.json.\
 For easier debugging in development mode, import the following file: import 'zone.js/plugins/zone-error'.\
 This import should be commented out in production mode because it will have a negative impact on performance if an error is thrown.\
 
 **Deployment**
 
 Find this application deployed on Netlify : https://ress-application.netlify.app

 **Other requirements**
 
 In order to run application, the Bootstrap is required.

Please before running app, type these commands:
1. npm install bootstrap
2. In angular.json in styles please add:  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
                                          "node_modules/bootstrap/dist/css/bootstrap.min.css",
3. In angular.json in scripts please add: "node_modules/bootstrap/dist/js/bootstrap.min.js"

(Optional)
In order to fully expirience our app please install AOS (Animate on scroll) library by running the command:
1. npm install aos --save
2. In angular.json in styles please add: "node_modules/aos/dist/aos.css"

To initialize AOS you must add AOS.init() function inside NgOnInit of the typescript file that is connected to the template that displayes the animation.
  
