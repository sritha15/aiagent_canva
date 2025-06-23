# AI Data Analysis Agent for Canva

An AI-powered Data Analysis Agent for Canva that transforms any CSV into polished charts and actionable reports—no data science skills required. Seamlessly integrated with Canva, it automates data cleaning, advanced analytics, and visualization, making professional insights accessible to everyone.

**Demo Video:** [Watch here](https://vimeo.com/1095499273/f47f548583?share=copy)

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sritha15/aiagent_canva.git
   cd aiagent_canva
   ```
2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.template` to `.env`:
     ```bash
     cp .env.template .env
     ```
   - Edit `.env` and fill in the following:

## Required Environment Variables

| Variable              | Description                                      | Required |
|-----------------------|--------------------------------------------------|----------|
| `CANVA_APP_ID`        | Your Canva app ID from Developer Portal           | Yes      |
| `CANVA_APP_ORIGIN`    | Your app's origin URL (from Developer Portal)     | Yes      |
| `OPENAI_API_KEY`      | OpenAI API key for AI features (**secret**)       | Yes      |
| `CANVA_BACKEND_HOST`  | Backend URL (e.g., http://localhost:3001)        | Yes      |
| `CANVA_FRONTEND_PORT` | Frontend port (default: 8080)                    | No       |
| `CANVA_BACKEND_PORT`  | Backend port (default: 3001)                     | No       |
| `CANVA_HMR_ENABLED`   | Enable Hot Module Replacement (TRUE/FALSE)        | No       |

> **Note:** Your `OPENAI_API_KEY` is a secret key and should never be shared or committed to version control.

4. **Install Python dependencies:**
   - Make sure you have Python 3.8+ installed
   - Install required packages:
     ```bash
     pip install pandas matplotlib seaborn scikit-learn numpy
     ```
5. **Set up your Canva App for local testing:**
   - Go to the [Canva Developer Portal](https://www.canva.com/developers/)
   - Create a new app or open your existing app
   - Set the Development URL to `http://localhost:8080`
   - Copy your App ID and App Origin from the portal and paste them into your `.env` file

6. **Start the development server:**
   ```bash
   npm start
   ```
   - The app will be available at `http://localhost:8080`

## Features
- Upload CSV data
- Chat with AI to generate charts
- Add charts to Canva designs 
