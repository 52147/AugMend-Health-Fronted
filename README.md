# Patient Feedback Form - Frontend

This is the frontend component for the Patient Feedback Form application. The purpose of this application is to collect patient feedback, ensuring data validation both on the client and server sides.

## Technologies Used

- **React.js:** For building the user interface.
- **Material-UI:** For modern UI components.
- **Axios:** For making HTTP requests.
- **Firebase Hosting:** For deploying the frontend.
- **JavaScript (ES6+):** Main programming language.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Version 14.x or later.
- **npm:** Version 6.x or later.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/patient-feedback-form-frontend.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd patient-feedback-form-frontend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Environment Configuration:**

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   REACT_APP_API_BASE_URL=http://localhost:3000/api
   ```

   Adjust the `REACT_APP_API_BASE_URL` as necessary.

## Running the Application

1. **Start the Development Server:**

   ```bash
   npm start
   ```

2. **Access the Application:**

   Visit `http://localhost:3000` in your web browser.

## Project Structure

Here's an overview of the project's directory structure:

```
form
├── .eslintrc.cjs          # ESLint configuration
├── .firebaserc            # Firebase project configuration
├── .gitignore             # Git ignore rules
├── firebase.json          # Firebase hosting configuration
├── index.html             # Main HTML file
├── package-lock.json      # Auto-generated dependency lock file
├── package.json           # Project dependencies
├── README.md              # Project documentation
├── vite.config.js         # Vite configuration file
│
├── 📁.firebase            # Firebase deployment files
│   └── 📁augmend-4e43b
│       └── 📁hosting
│           └── 📁assets
│               ├── index-DiwrgTda.css
│               ├── index-vjQE5Jz2.js
│           ├── index.html
│           ├── vite.svg
│       └── hosting.LmZpcmViYXNlL2F1Z21lbmQtNGU0M2IvaG9zdGluZw.cache
│
├── 📁.github              # GitHub CI/CD workflows
│   └── 📁workflows
│       ├── firebase-hosting-merge.yml
│       └── firebase-hosting-pull-request.yml
│
├── 📁public               # Public assets
│   └── vite.svg
│
└── 📁src
    ├── App.css           # Main CSS for the app
    ├── App.jsx           # Main application component
    ├── firebase.js       # Firebase SDK configuration
    ├── index.css         # Global styles
    ├── main.jsx          # Application entry point
    │
    ├── 📁assets          # Project assets
    │   └── react.svg
    │
    ├── 📁component       # Reusable components
    │   └── 📁footer
    │       └── Footer.jsx
    │   └── 📁form
    │       └── FeedbackForm.jsx
    │   └── 📁login
    │       ├── Login.jsx
    │       └── LoginUserNamePassword.jsx
    │   └── 📁nav-bar
    │       └── NavBar.jsx
    │
    └── 📁page            # Pages of the application
        └── FormPage.jsx
```

### Key Files and Directories:

- **`App.jsx`**:
  - The main application component.

- **`App.css`**:
  - Main CSS file for the application.

- **`firebase.js`**:
  - Firebase SDK configuration file.

- **`FeedbackForm.jsx`**:
  - Component that handles patient feedback form.

- **`.firebaserc`**:
  - Firebase project configuration.

- **`firebase.json`**:
  - Firebase hosting configuration.

- **`.github/workflows`**:
  - Contains GitHub Actions workflows for Firebase hosting.

## Deployment

To deploy this project to Firebase Hosting:

1. **Login to Firebase CLI:**

   ```bash
   firebase login
   ```

2. **Deploy the Application:**

   ```bash
   firebase deploy
   ```

