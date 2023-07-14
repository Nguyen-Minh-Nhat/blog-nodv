# Blog NODV

## Overview

The Blog Web is a responsive web application that allows users to read and create blog posts. It leverages React as the JavaScript library for building user interfaces, Tailwind CSS for styling, and Material-UI (MUI) for UI components.

![Home Feed](https://github.com/minhnhat165/nov-social-frontend/assets/72795828/c890f04a-a0b7-4bcc-9c0d-dfe762ec0012)

## Features
- Login by Google or Facebook: Users can log in to the platform using their Google or Facebook accounts.
- User profiles: Users can create and customize their profiles, upload profile pictures, and update their information include hobbies.
- Post creation and interaction: Users can create posts, like and comment on posts, and view posts from other users.
- Follow system: Users can follow other users and receive updates on their posts.
- Notifications: Users receive real-time notifications for likes, comments, and new followers.
- Bookmark feature: Users can save posts as bookmarks for easy access later.
- Search functionality: Users can search for other users and posts based on keywords.

## Backend

The backend source code for the social media platform can be found in the following repository: [https://github.com/minhnhat165/nov-social-backend](https://github.com/ntrungduc228/blog-nodv-be)](https://github.com/ntrungduc228/blog-nodv-be). The backend is responsible for handling user authentication, managing data storage, and providing APIs for the frontend to communicate with.

Please refer to the backend repository for more information on setting up and running the backend server.

## Technologies Used

- Frontend: React, JavaScript, Tailwind CSS, Redux toolkit.
- Backend: Springboot MongoDB
- Authentication: JSON Web Tokens (JWT)
- Image upload: Cloudinary
- Real-time: Socket.io

## Prerequisites
Make sure you have the following software installed on your machine:

* Node.js 16.8 or later.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/minhnhat165/nov-social-frontend.git
```

2. Navigate to the project directory:

```bash
cd nov-social-frontend
```

3. Install the dependencies:
```bash
yarn install
```

4. Set up environment variables:
* Make sure to set the values of these environment variables before running the app.
* Create a .env file in the root of the project.
* Define the following variables in the .env file:
  * `REACT_APP_API_URL`: The URL of the API server.
  * `REACT_APP_NAME`: The name of the app.
  * `REACT_APP_SERVER_URL`: The URL of the server.
  * `REACT_APP_CLOUDINARY_NAME`: The name of the Cloudinary account.
  * `REACT_APP_CLOUDINARY_UPLOAD_PRESET`: The upload preset for Cloudinary.
  * `REACT_APP_CLOUDINARY_API_SECRET`: The API secret for Cloudinary.
  * `REACT_APP_CLOUDINARY_API_KEY`: The API key for Cloudinary.
  * `REACT_APP_GOOGLE_CLIENT_ID`: The client ID for Google authentication.
  * `REACT_APP_FACEBOOK_APP_ID`: The app ID for Facebook authentication.
  * `REACT_APP_GOOGLE_CLIENT_SECRET`: The client secret for Google authentication.
  * `REACT_APP_SERVER_RECOMMEND_URL`:using for recoment server



```dotenv
# Example .env file
REACT_APP_API_URL=https://api.example.com
REACT_APP_NAME=Social Media Platform
REACT_APP_SERVER_URL=https://example.com
REACT_APP_CLOUDINARY_NAME=cloudname
REACT_APP_CLOUDINARY_UPLOAD_PRESET=<your-cloundinary-upload-preset>
REACT_APP_CLOUDINARY_API_SECRET=<your-cloundinary-api-secret>
REACT_APP_CLOUDINARY_API_KEY=<your-cloundinary-api-key>
REACT_APP_GOOGLE_CLIENT_ID=<your-google-client-id>
REACT_APP_FACEBOOK_APP_ID=<your-facebook-app-id>
REACT_APP_GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```
5. Run in development mode

```bash
npm run start
# or
yarn start
# or
pnpm start
```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage
Watch in [NovSocial Youtube](https://www.youtube.com)

## Contributing

* [Nguyễn Minh Nhật](https://github.com/minhnhat165)
* [Nguyễn Trung Đức](https://github.com/ntrungduc228)
* [Nguyễn Thị Khánh Vi](https://github.com/khanhvi294)
* [Trần Thị Kim Oanh](https://github.com/kimoanhxinh)
  
## License

