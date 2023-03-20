# Employee Tracker Database

## Description
This application uses mysql and nodeJS to create an employee tracking application.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Installation
This application requires: 
- nodeJS: ([download and read the documentation here](https://nodejs.org/en/download/)) 
- mysql: ([download and read the documentation here](https://dev.mysql.com/doc/))
- dotenv: ([download and read the documentation here](https://www.npmjs.com/package/dotenv))

## Usage
Clone the repository and create a '.env' file. Enter your mysql information to authenticate access to mysql.
In the terminal, type the below command:<br>
`mysql -u root -p`
<br>

Next, source the database file and seeds (or enter your own data on)<br>
`source ./db/schema.sql`
`source ./db/seeds.sql`
<br>

Once the database and tables are created and populated, quit mysql.

In the terminal, type the below command:<br>
`npm start`
<br>
Select from the menu options to interact with the employees database.<br>
![dbexample](./assets/Screen%20Shot%202023-03-20%20at%207.10.38%20PM.png)


[Click here for a demonstration video of this application!](https://drive.google.com/file/d/1zy7vwoWW9T5ScHgsyyjVLkYpxIwJs5CH/view?usp=sharing)

## Credits
N/A

## License
[![MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
This application is covered under the MIT license. To learn more, visit the link [here!](https://opensource.org/licenses/MIT)

## Questions
Questions? My Github is [here](https://github.com/phoenixouyang)
