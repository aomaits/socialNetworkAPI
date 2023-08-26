# The Social Network API

## Description
This application is the back-end of a social networking site. It was built to mimic a relational database. It is able to store and track users, thoughts, and reactions, with the reactions being built off of a user's published thoughts.  

Future iterations could include a front-end for users to utilize as well as an expanded DB for further referencing and expanded functionality.  

## Installation
The user will need to install node packages locally to run this application. 

The user will also need to have a valid MongoDB login in order to access the database. 

## Usage
This application routes out to the database to bring back various queries. One can view all users or any particular user and can also create new, update existing or delete existing users from the database. The same functionality is available for the user's thoughts. Additionally, there are routes to add or remove reactions from a thought as well as routes to add or remove friends from a user profile. 

To test these routes, we utilized the Insomnia desktop application, as can be seen in the video below. 

For example, when a GET request ius made at the url for all users, all current users from the socialNetwork database are returned. Also visible within each user profile are the ids for any thoughts that the user has authored, the ids for any friends that they have in the system, as well as a count of the total number each user's friends. 

![the Insomnia window showing the results of accessing the URL to get all users](/assets/allUsers.jpg)

This is just one of several queries that can be completed at this time. 

Others include:
- **Viewing all** existing thoughts
- **Viewing any individual** extisting thought or user. 
- **Adding** a new thought, user, reaction, or friend connection. 
- **Updating** any existing thought or user. 
- **Deleting** any existing thought, user, reaction, or removing a friend connection. 

_______________________________________

You can see a video walkthrough of this application's functionality [here](https://drive.google.com/file/d/15BjPWi6yQLn1VpGvwkMRuBD5iaOO9S6V/view). 

## Credits
The express and mongoose node packages were utilized in this project. 

## License
A [MIT license](https://github.com/aomaits/socialNetworkAPI/blob/main/LICENSE) was used for this project.
