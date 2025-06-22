# 📝 Keeper App (React + Node.js + MySQL)

A full-stack note-keeping application that allows users to store and manage notes with a **title** and **content**. The frontend is built with React, the backend uses Node.js and Express, and MySQL is used to store note data.

## 📁 Project Structure

    Keeper-App/
    ├── client/ # React frontend
    ├── server/ # Node.js backend with MySQL connection
    └── README.md

## 🚀 Features

    - Create and delete notes with title and content
    - Notes are stored persistently in a MySQL database
    - React frontend with dynamic rendering
    - Node.js backend API with Express
    - Fully testable RESTful API

## 🛠️ Tech Stack

    - **Frontend:** React, Axios, HTML/CSS
    - **Backend:** Node.js, Express
    - **Database:** MySQL
    - **Tools:** dotenv, nodemon (for dev), Postman (for testing)


## 🧱 MySQL Table Structure

     1. CREATE DATABSE keeper_App;
     2. USE keeper_App;
      3.CREATE TABLE notes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL
      );

📦 Installation

    1. Clone the repository
    
        git clone https://github.com/iamdeepak199/Keeper-App.git
        cd Keeper-App
    
    2. Setup MySQL Database
    
        Create a database: keeper_App
        Run the SQL schema above to create the notes table
    
    3. Backend Setup
       
        cd server
        npm install
        Create a .env file in server/:
       
          DB_HOST=localhost
          DB_USER=******      // Username
          DB_PASSWORD=*******  // Password
          DB_NAME=keeper_app
          PORT=5000
          Run the server:
    
          node index.js
       
    4. Frontend Setup
       
        cd ../client
        npm install
        npm start
       
🔌 API Endpoints

    Method	Endpoint	Description
    GET	/api/notes	Get all notes
    POST	/api/notes	Create a new note
    DELETE	/api/notes/:id	Delete a note by ID

🔍 API Testing (Postman)

      GET Notes:
      
      URL: http://localhost:5000/api/notes
      
      Method: GET
      
      POST Note:
      
      URL: http://localhost:5000/api/notes
      
      Method: POST
      
      Body (JSON):
    {
      "title": "Meeting Notes",
      "content": "Discuss project deadlines"
    }
    DELETE Note:
    
    URL: http://localhost:5000/api/notes/:id
    
    Method: DELETE
    
    Use Postman or any REST client for testing.

📄 License

    This project is licensed under the MIT License.
    Feel free to use, modify, and distribute with attribution.
    ✅ Use the code
    ✅ Modify it
    ✅ Distribute it
    ✅ Even use it commercially

📷 Screenshots

    ![pic0](https://github.com/iamdeepak199/Keeper-App/blob/main/Keeper%20App.jpg)
    ![pic1](https://github.com/iamdeepak199/Keeper-App/blob/main/database_App.jpg)

👨‍💻 Author

    Deepak Bhardwaj
    GitHub: @iamdeepak199


Let me know if you’d like a [`.env` example file](f) or a [basic CRUD Postman collection export](f).
