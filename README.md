# AI Study Companion - Backend

The **AI Study Companion Backend** is a robust API built with Node.js and Express. It serves as the core intelligence engine for the study companion app, leveraging Google's Gemini AI to analyze study materials and provide educational insights.

## 🚀 Features

- **AI Content Extraction**: Processes images and PDF files to extract and simplify educational content.
- **Educational Insights**: Generates simplified explanations, key learning points, and practice quizzes from uploaded materials.
- **Interactive Chat**: Provides context-aware answers to follow-up questions from students.
- **Efficient File Handling**: Uses Multer for secure and efficient file upload processing.
- **Cross-Origin Support**: Configurable CORS support for seamless integration with web and mobile frontends.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **AI Engine**: [Google Generative AI (Gemini SDK)](https://ai.google.dev/)
- **Middleware**: [Multer](https://github.com/expressjs/multer) (File Uploads), [CORS](https://github.com/expressjs/cors)
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv)
- **Development Tool**: [Nodemon](https://nodemon.io/)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn
- Google Gemini API Key

### Installation

1.  Navigate to the backend directory:
    ```bash
    cd ai-study-companion-backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    GEMINI_API_KEY=your_gemini_api_key_here
    CORS_ORIGINS=http://localhost:3001,http://localhost:3000
    ```

### Running the Project

To start the server in development mode:

```bash
npm run dev
```

The server will be available at [http://localhost:3000](http://localhost:3000).

## 📡 API Endpoints

### 1. Upload Study Material
- **URL**: `/api/upload`
- **Method**: `POST`
- **Body**: `multipart/form-data` with `file` field.
- **Description**: Extracts content from the uploaded image or PDF and returns an AI-generated explanation, key points, and quiz questions.

### 2. Ask a Question
- **URL**: `/api/ask`
- **Method**: `POST`
- **Body**: `JSON`
  ```json
  {
    "question": "What is photosynthesis?",
    "context": "Previous extracted content for context..."
  }
  ```
- **Description**: Answers follow-up questions based on the provided context using AI.

## 📁 Project Structure

- `src/controllers/`: Logic for handling API requests.
- `src/services/`: Integration with AI models and external services.
- `src/routes/`: API endpoint definitions.
- `src/utils/`: Utility functions for configuration and common tasks.
- `middlewares/`: Express middleware for file uploads and security.

## 📄 License

This project is licensed under the MIT License.
