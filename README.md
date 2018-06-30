# Akaflieg Köln e.V

## Description

This is the new web appearance of the Akaflieg Köln e.V. 

This project is build with the Angular 6 as Frontend and Java Spring Boot as Backend.

## Development

### Prerequisites

* nodejs 8.x or newer
* npm
* Maven 2
* Java 1.8

Switch to the correct dev-branch!

## Frontend (akaflieg-client)

### How to setup
    npm install
    
### Run locally
    npm start
    
### Build correct dist for deployment
    npm run build
Check if base-href option is correct in package.json 
    
## Backend (akaflieg-server)

### How to setup
    adapt application.properties

### Run locally
    just run the from IDE or run JAR

### Build for deployment
    mvn clean validate package
