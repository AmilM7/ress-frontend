# RESSProject

The Application is used to reserve a table at restaurant, club, bar, etc. This gives many benefits both to restaurants and consumers. It gives ability to reserve table at place without calling people that oversee reservations and without using social media. This repository is used to build front-end side of application. The front-end is built in Angular. 

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
