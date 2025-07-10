# 📡 React API Fetching App

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Axios](https://img.shields.io/badge/Axios-1.6.2-5A29E4?logo=axios)](https://axios-http.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A Creative and interactive React application that demonstrates **API fetching** using **Axios**, **React Hooks** (`useState`, `useEffect`), and **pagination** for displaying data. The app fetches and renders posts from the **JSONPlaceholder API**, showcasing clean data handling, conditional rendering, and a user-friendly paginated interface styled with **Tailwind CSS**.

---

## 🖼️ Screenshot <a name="screenshot"></a>

> Here is a preview of the application UI:

![App Screenshot](./public/API%20Fetching-1.png)

![App Screenshot](./public/API%20Fetching-2.png)

> Video Explanation: https://drive.google.com/file/d/1vjN7TZLckxawKMrXh6m7rQxuVTyrRlLh/view?usp=drive_link

---

## ✨ Features

- 📡 Fetches posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)
- 📑 Displays 10 posts per page with pagination controls (`Next` and `Previous` buttons)
- 🔢 Shows the current page number
- 🧠 Utilizes React Hooks (`useState`, `useEffect`) for state management and side effects
- 📡 Uses **Axios** for efficient and clean API requests
- ✅ Implements conditional rendering for loading states, error handling, and empty data
- 💨 Styled with **Tailwind CSS** for a modern, responsive UI
- ♿ Accessible and user-friendly design

---

## 📂 Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About <a name="about"></a>

This project is designed to demonstrate modern React development practices, including:

- Fetching data from a public API using **Axios**
- Managing state and side effects with **useState** and **useEffect**
- Implementing pagination logic to display 10 posts per page
- Conditionally rendering UI based on loading, error, or data states
- Building a responsive and accessible interface with **Tailwind CSS**

> The app uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) to fetch mock blog posts for demonstration.

---

## ⚙️ Getting Started <a name="getting-started"></a>

Follow these instructions to set up and run the project locally for development and testing.

### 🧱 Prerequisites

Ensure you have the following installed:

```bash
# Node.js and npm
node -v
npm -v

# Create React App globally (optional)
npm install -g create-react-app

# Clone the repository
git clone https://github.com/your-username/react-api-fetching-app.git
cd react-api-fetching-app

# Install dependencies and axios
npm install
npm install axios

# Run server
npm start
```

## 🚀 Usage

### 🔘 Pagination Controls

- **Next Button**: Loads the next 10 posts  
  _(Disabled on the last page)_

- **Previous Button**: Loads the previous 10 posts  
  _(Disabled on the first page)_

- **Page Count**: Displays the current page number (e.g., `"Page 1"`)

### 📊 Display

- **Post List**: Shows 10 posts per page with their title and body
- **Loading State**: Displays a loading indicator while fetching data
- **Error Handling**: Shows an error message if the API request fails
- **Empty State**: Displays a message if no data is available

---

## 🤝 Contributing

Contributions are welcome and appreciated! 🙌

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed contribution guidelines.

### You can:

- Fork the repository
- Create a feature branch
- Submit a pull request

---

## 📌 License

This project is open source and available under the [MIT License](LICENSE).

You are free to use, modify, and distribute this project with proper attribution.
