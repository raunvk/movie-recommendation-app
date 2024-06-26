# movie-recommendation-app

**Description** : Web Application to Search Movies, Trailers and Add Reviews

**Tech Stack** : Spring Boot, MongoDB, ReactJS, Material UI

**Overview** :

1. **Spring Boot** : creates REST endpoints for fetching and manipulating data from a MongoDB cluster
2. **MongoDB** : Stores extensive, large scale movies and reviews data as collections in JSON format
3. **ReactJS** : Utilizes React components to build dynamic user interfaces for frontend rendering
4. **Material UI** : Employs carousel feature to display data with interactive animation and indicators

**How to Configure MongoDB** :

1. Watch this video to setup MongoDB cluster -> https://www.youtube.com/watch?v=jXgJyuBeb_o&list=PL4RCxklHWZ9vmzBP7lybE08CxbIU17PIf&index=8&ab_channel=MongoDB
2. Under Network Access, add IP Address as **0.0.0.0/0** to allow global access 
3. Open MongoDB Compass and connect to your Cluster using the Connection String
4. Create a new Database, then create a Collection called **movies** (mandatory name) inside the Database
5. Goto Dataset/ and upload **movie-dataset-small.json** (provides faster response) to the **movies** Collection
6. A sample MongoDB Connection String looks like -> **mongodb+srv://username:password@cluster**
7. Goto Backend/src/main/resources/.env and edit the .env file to add your own credentials from Steps 4 & 6

**How to Configure Ngrok (optional)** :

1. Watch this video to setup Ngrok -> https://www.youtube.com/watch?v=aFwrNSfthxU&ab_channel=ProgrammingKnowledge
2. Setup Ngrok multiple ports tunelling -> https://dev.to/ethand91/using-ngrok-to-set-up-multiple-ports-2911
3. Edit the script ngrok.yml present in the base directory to add your own Auth Token at line no. 5
4. Run the script ngrok.yaml in CMD, by using the command [**ngrok start --config ngrok.yml --all**]
5. Copy Ngrok forwarding URL for http://localhost:8080, a sample URL would look like -> https://9ca8-103-102-117-52.ngrok-free.app
6. Goto Frontend/cinemint/src/api/axiosConfig.js and paste the copied URL on line no. 4 under **baseURL** 
7. Uncomment line nos. 2 to 6 and comment line nos. 8 to 10 instead, as we won't be needing the localhost URL
8. Access the application by visiting Ngrok forwarding URL (public) for http://localhost:3000 on your Browser

**How to Run (Windows)** :

1. Goto path "Backend/" in Terminal
2. Run Backend by running the command [**mvn spring-boot:run**]
3. Goto path "Frontend/cinemint/" in Terminal
4. Run command [**npm install**] to install all necessary Node Modules
5. Run Frontend by running the command [**npm start**]
6. Goto http://localhost:3000 on your Browser to access the Application
7. If using Ngrok, goto Ngrok forwarding URL for http://localhost:3000 on your Browser

**Sample Screenshots** :

![](screenshot1.png)
![](screenshot2.png)
![](screenshot3.png)

**API Documentation** :

1. **Retrieve Movie by ID** -> GET /movie/id/{tmdbId}
2. **Retrieve All Movies** -> GET /movie/all
3. **Retrieve Movies by Keyword** -> GET /movie/all/{keyword}
4. **Create a New Review** -> POST /review
5. **Retrieve Reviews by Movie ID** -> GET /review/id/{tmdbId}
