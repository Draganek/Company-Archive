# Company Service API

This is a **Node.js-based RESTful API** service for managing information about companies. It provides full **CRUD (Create, Read, Update, Delete)** functionality for company profiles and allows searching and filtering based on various criteria.

## 🚀 Features

- ✅ Create new company profiles
- 🔍 Get details of a single company
- ✏️ Update existing company information
- ❌ Delete company profiles
- 📋 List and search companies with filter

## 🛠 Technologies Used

- **Node.js** and **Express** for backend development
- **MongoDB** for database management
- **Mongoose** for object data modeling (ODM)
- **dotenv** for environment variable management
- **Joi** for request validation
- **Swagger** for API documentation (optional)

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Draganek/Company-Archive.git
   cd Company-Archive
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a **.env** file and add the necessary environment variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb+srv://your-db-uri
   ```
4. Start the development server:
   ```bash
   npm run watch
   ```

## 🔧 API Endpoints

### 📌 Company Endpoints

| Method     | Endpoint             | Description                       |
| ---------- | -------------------- | --------------------------------- |
| **POST**   | `/api/companies`     | Create a new company              |
| **GET**    | `/api/companies`     | Get a list of all companies       |
| **GET**    | `/api/companies/:id` | Get details of a specific company |
| **PUT**    | `/api/companies/:id` | Update a company profile          |
| **DELETE** | `/api/companies/:id` | Delete a company profile          |


## 🏗 Project Structure

```
company-service-api/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   ├── utils/
│   ├── app.js
├── .env
├── .gitignore
├── package.json
├── README.md
```

## 🛡 Security & Best Practices

- 🔒 Use **Helmet.js** for securing HTTP headers
- ✅ Validate input using **Joi** to prevent bad requests


