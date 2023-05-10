# Welcome to Live Chat

## Overview

This is a project built around chatengine, this allow for live chat communication that can be integrated on any app. It consists of two main views:

1. Landing Page

Write the Username you want to use, a user is created for every new username, a free account allows up to ten users.

<p align="center">
  <img height="200" src="https://user-images.githubusercontent.com/104910559/237486172-ad45a9c3-7ea4-4efc-9b40-602b2ba1b410.PNG" />
</p>

2. Main Page - Chat Page

A chat page where you can search for the other users, you can exchange messages and send files.

<p align="center">
  <img height="200" src="https://user-images.githubusercontent.com/104910559/237486010-7c2e24d5-5a6c-412f-8ca0-94230a87ae30.PNG" />
</p>

## Local Set Up

You'll need to have a modern Browser, Git and NodeJS installed in your machine for this app to work locally. When you meet those requirements proceed with the steps bellow.

1. Clone this repo to your local machine using the terminal, i used the git bash.

```sh
git clone https://github.com/Razgrizsx/LiveChat.git
```

2. Create an account on https://chatengine.io so you have access to a private and public key.

3. On a terminal window of your preference navigate to the path where you cloned the repo.

4. Replace in Front/Live_Chat/src/ChatPage.jsx projectId='PUBLICID' with your own public id. Also replace in Back/index.js "private-key": "PRIVATEKEY" with your own private key.

5. Open a terminal for each of the folders in the repo -- Back and Front/Live_Chat.

6. On each prompt run the command "npm install" to set up the project dependicies.

```sh
npm install
```

7. On the terminal prompt in the Back folder run the command

```sh
npm start
```

8. On the terminal prompt in the Front/Live_Chat folder run the command

```sh
npm run dev
```

The app will launch on your default browser.
