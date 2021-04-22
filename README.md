# Nominations API
Welcome to our new fantastic API :)  
## How to use the API
A json is always returned with param :  
* **Status** : Success / Error.  
* **Message**: Message Error in case there's any.  
* **Data**   : The subscriptions / subscription added or listed.   
  
Please follow the instructions on how to use this methods:   
  
### Get /nominations
  
This call is restricted to Admin only, if you are an Admin, then you should know that you need to use basic Authentication with the following parameters:  
User : admin  Password : supersecret  
  
### Post /nominate
  
You can nominate your peers! Take in considerations that all this fields are mandatory :   
* **emailNominator**  : Max length 50, email format  
* **emailNominated**  : Max length 50, email format, unique (a candidate must only be nominated once)  
* **comment**         : Unlimited, fill our DDBB with as much info as you want ;)  
* **involvement**     : 0-10 number  
* **talent**          : 0-10 number  


