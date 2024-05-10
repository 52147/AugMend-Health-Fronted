# Patient Feedback Form - Frontend

This is the frontend component for the Patient Feedback Form application. The purpose of this application is to collect patient feedback, ensuring data validation both on the client and server sides.

## Technologies Used

- **React.js:** For building the user interface.
- **Material-UI:** For modern UI components.
- **Axios:** For making HTTP requests.
- **JavaScript (ES6+):** Main programming language.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Version 14.x or later.
- **npm:** Version 6.x or later.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/AugMend-Health-Fronted.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd AugMend-Health-Fronted
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
├── .gitignore             # Git ignore rules
├── index.html             # Main HTML file
├── package-lock.json      # Auto-generated dependency lock file
├── package.json           # Project dependencies
├── README.md              # Project documentation
├── vite.config.js         # Vite configuration file
│
│
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

- **`FeedbackForm.jsx`**:
  - Component that handles patient feedback form.


