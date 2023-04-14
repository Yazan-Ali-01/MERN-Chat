**Real-time Chat App with User Authentication and Group Chat Functionality using MERN Stack and ChatEngine.io**<br>
This is a real-time chat application that allows users to chat with each other using ChatEngine.io. The app was built using the MERN stack (MongoDB, Express, React, Node.js) and deployed on Heroku. The app features user authentication using JWT (JSON Web Tokens) to ensure secure access to the app, and group chat functionality that allows users to create chat rooms with multiple users.

## Table of Contents

- Features
- Tech Stack
- Installation
- Challenges
- Lessons Learned
- Future Improvements
- License

## <a name="features"></a>Features:

- Real-time chat: Users can create chat rooms and send messages in real-time using ChatEngine.io.
- User authentication: Users can sign up and log in using their email and password, ensuring that only authorized users can access the app.
- Group chat: Users can search for multiple users by name and initiate a group chat with them.
- Responsive design: The app is mobile-friendly and can be used on any device.

## <a name="tech-stack"></a>Tech Stack

- Frontend: React, React Chat Engine Pretty
- Backend: Node.js, Express.js, MongoDB, ChatEngine.io

## <a name="installation"></a>Installation

Clone the repository:

git clone https://github.com/Yazan-Ali-01/MERN-Chat.git

```

Install the dependencies:

cd MERN-Chat
npm install
```

Set up environment variables:

Create a .env file in the root directory of the project.

Add the following environment variables:

PORT = 3001<br>
PRIVATE_KEY = your_chat_engine_project_id

Run the app:<br>
in the root folder run

```
npm run dev
```

Open your browser and go to http://localhost:3000 to use the app.

## <a name="challenges"></a>Challenges

- Implementing real-time chat using ChatEngine.io required learning a new API and integrating it with the frontend and backend.
- Implementing user authentication using JWT involved creating custom API endpoints and integrating them with the frontend.
- Implementing group chat involved creating a custom API endpoint and integrating it with the frontend.

## <a name="lessons-learned"></a>Lessons Learned

- Adding group chat functionality is an important feature that allows users to communicate with multiple users at once.
- Working with JWT allowed me to build a secure authentication system that protects user data.
- Building a real-time chat app allowed me to gain a better understanding of how real-time chat works and how to use ChatEngine.io.

## <a name="future-improvements"></a>Future Improvements

- Adding private messaging and file sharing functionality to make the app more feature-rich.
- Adding more styling and animations to improve the user experience.

## <a name="contributing"></a>Contributing

Contributions are welcome! Here are some ways you can contribute:

- Submit bug reports and feature requests by opening an issue on GitHub.<br>
- Fork the repository and submit a pull request with your changes.<br>
- Improve the documentation by suggesting edits or adding new sections.
