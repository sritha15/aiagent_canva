# AI Data Visualization Agent for Canva

A Canva app that uses AI to turn your data into visual charts and insights.

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
   - Edit `.env` and fill in:
     - `CANVA_APP_ID` (from Canva Developer Portal)
     - `CANVA_APP_ORIGIN` (your app origin)
     - `OPENAI_API_KEY` (your OpenAI API key)
     - Other required fields as needed
4. **Install Python dependencies:**
   - Make sure you have Python 3.8+ installed
   - Install required packages:
     ```bash
     pip install pandas matplotlib seaborn scikit-learn numpy
     ```
5. **Start the development server:**
   ```bash
   npm start
   ```
   - The app will be available at `http://localhost:8080`
6. **(Optional) Set up Canva App for local testing:**
   - Go to Canva Developer Portal
   - Set Development URL to `http://localhost:8080`
   - Use your App ID and Origin in `.env`

## Features
- Upload CSV data
- Chat with AI to generate charts
- Add charts to Canva designs

## License
MIT 