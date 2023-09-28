# The Social Network API

## Description
This application is the back-end of a social networking site. It was built in MongoDB but mimics a relational database. It is able to store and track users, thoughts, and reactions, with the reactions being built off of a user's published thoughts.  

Future iterations could include a front-end for users to utilize as well as an expanded DB for further referencing and expanded functionality. 

## Installation
The user will need to install node packages locally to run this application. 

The user will also need to have a valid MongoDB login in order to access the database. 

## Usage
This application routes out to the database to bring back various queries. To test these routes, we utilized the Insomnia desktop application, as can be seen in the linked video and in the screenshot below. 

Here's an example of a query and its results in the Insomnia application: 

![the Insomnia window showing the results of accessing the URL to get all users](/assets/allUsers.jpg)

A GET request has been made at the url for all users, thus all current users from the socialNetwork database are returned. Also visible within this response are the ids for any thoughts that the user has authored, the ids for any friends that they have in the system, and a count of the total number of friends each user has in the database. 

This is just one of several queries that can be completed. Others include:

- **Viewing all** existing thoughts
- **Viewing any individual** existing thoughts or users. 
- **Adding** a new thought, user, reaction, or friend connection. 
- **Updating** any existing thought or user. 
- **Deleting** any existing thought, user, reaction, or removing a friend connection. 

_______________________________________

You can see a full video walkthrough of this application's functionality [here](https://drive.google.com/file/d/1EYQcvrG7j9Kk_HMj2jH5VR_LZhJ30Ktt/view). 

## Credits
The express and mongoose node packages were utilized in this project. 

## License
A [MIT license](https://github.com/aomaits/socialNetworkAPI/blob/main/LICENSE) was used for this project.
