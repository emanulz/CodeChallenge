## Documentation

### 1. Executing the App

#### 1.1 Running the frontend

* Download as ZIP or Clone this repository from Github.

* Open a new console window and navigate to project folder.

* If you don't have NodeJS installed, please go ahead and download it from 
  https://nodejs.org/

* Run 'npm install' on console.

* Run 'npm run dev' on console.

* Go to http://localhost:8080/

* Now you have the frontend section of the app running on your browser.


#### 1.2 Running the 'Backend'

* An express server was implemented in order to simulate a backend server in charge of the login action.

* Open a new console window and navigate to project folder.

* Navigate to /server folder.

* Run 'npm install' on console.

* Run node start.

* 'Backend' login server is running on port 8000.

* This server allows only post requests, passing username and password for login.

* There are 3 users by default, 1st username: store, password: 123456; 
2nd username ezuniga, password: 123456; 3rd username: jdoe, password 123456.

* There is one user hardcoded in the frontend, this was done in case backend server is not available, 
if you login with this user credentials backend login will be bypassed, and app will work, 
username: admin, password: admin.


### 2. Selected technologies

#### 2.1 ReactJS

* The frontend technology is ReactJS, version 15.4.1. 

* The app was written using ES2015 or ES6, transpiled by babel library.
* All dependencies can be found on the package.json file included.


#### 2.2 Flux architecture

* Flux architecture was used on the development, this is a design pattern that helps to organize the code
and access actions and data from the different components used in the project.

* Why use Flux and not Redux? Because we think that for the needs of this project Flux was more than
enough, of course we know Redux is an industry standard nowadays, but for a small project like this one,
sticking with Flux is the best opinion in our opinion.


### 3. Contact

* In case of any doubt please feel free to contact me directly via email: emanuelziga@gmail.com, 
or contact me on twitter @emanulz.