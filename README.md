# Art Gallery Web Application

This is a web application towards a more modern design, considering both UI and UX, and taking into consideration detaiils such ass colors, fonts, coherence,etc. displaying an interactiveart gallery. It enables users to browse artworks, register, log in, and manage artwork entries with a clean, responsive, and user-friendly interface. The project leverages tools like; **Handlebars**, **Bootstrap**,**Node**, **JavaScript**, **CSS**, **MongoDB** and **Express**.

## Features

- **CRUD Functionality**: 
  - Create, Read, Update, and Delete artworks.
  - Only authenticated users can access the management features.
- **Design**: 
  - Fully responsive layout using Bootstrap for seamless use across devices.
  - Rehusable code and coherent  themes which give a modern and nice UI
- **User Authentication**:
  - Users can register, log in, and manage their sessions using Github and Facebook.
  - Users can also register their accounts using email, which will be store in the DB .

---

## Prerequisites

Ensure you have the following installed:
- Node.js
- NPM
- MongoDB
---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/art-gallery.git
   cd art-gallery

   or

   download rhe ZIPfile from github repository.

2. Open on VSCode
3. Open terminal 
4. Run "npm start"
5. Open localhost:3000 on your browser.

## Set up environment

PORT=3000
DATABASE_URL=your_database_url
SESSION_SECRET=your_secret_key
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

Pleae note: DB must be chnaged in order to make the program work properly if you intetend to use the CRUD features.

## Oauth

This application supports OAuth-based authentication using Facebook and GitHub. OAuth allows users to log in without needing to remember passwords for your application. They can simply authenticate using their existing Facebook or GitHub credentials. Here's how it's implemented:

### Facebook & GitHub Authentication
Facebook Developer Setup:

Get the App ID and App Secret from the dashboard of your Facebook app.
Add your app's URL (e.g.http://localhost:3000) to the Facebook app settings.
Then
The user clicks the Login with Facebook button.
They are redirected to Facebook's  or GitHub's login page.
Once they authenticate, Facebook/Github redirect them back to your app with an access token.
The access token is then used to fetch user profile information.
If it's the first time logging in, the app will create a new user in the database.
Otherwise, the app will recognize the data and log you in your account previosly created.

In order to make this work, we ought to add the proper data
Obtain from the developers website of each site.\

Github: https://github.com/settings/developers

-GITHUB_CLIENT_ID
-GITHUB_CLIENT_SECRET
-GITHUB_CALLBACK_URL

Facebook: https://developers.facebook.com/?no_redirect=1

-FACEBOOK_CLIENT_ID
-FACEBOOK_CLIENT_SECRET
-FACEBOOK_CALLBACK_URL

## Usage

### Register
Fill in the form with a valid username (email) and password.
Submit the form to create an account.
### Login
Enter your credentials to log in.
Either with email, Github or Facebook
### Artworks
View a list of artworks.
Each artwork entry displays the name, author, price, and status.
### Manage Artworks (Authenticated Users Only)
Add a new artwork: Click the "Add a new artwork" button.
Edit or delete existing artworks: Use the Edit or Delete buttons.

## Added features 
- Hover effects: While hovering on login and register these will have a black background to enhance tthe contrast.
- File uploads can be added from your device
- Classes from bootstrap were added along with CSS to enhance the layout.
- Icons were added from assets folder, displaying facebook and github logos
- Middleware verifications were added to ensure the proper functionality of the website.


