# AI Data Visualization Agent for Canva

An intelligent Canva app that transforms data into visualizations using AI-powered analysis and natural language processing. Upload your data, chat with the AI, and create charts that integrate into your Canva designs.

## Features

### AI-Powered Data Analysis
- Natural Language Processing: Chat with your data using plain English
- Smart Intent Recognition: AI understands what you want to visualize
- Advanced Analytics: Clustering, anomaly detection, predictive modeling
- Data Storytelling: AI generates insights and recommendations

### Comprehensive Visualization Suite
- Multiple Chart Types: Bar, line, pie, scatter, heatmaps, box plots, and more
- Interactive Charts: Click to add directly to your Canva canvas
- Advanced Analysis: Statistical analysis, correlation matrices, trend analysis
- Custom Styling: Professional color schemes and layouts

### Data Integration
- CSV Upload: Drag and drop your data files
- Real-time Processing: Fast Python-based data processing
- Canva Native: Built specifically for the Canva ecosystem

### Advanced AI Features
- Predictive Modeling: Forecast trends and future values
- Anomaly Detection: Identify outliers and unusual patterns  
- Clustering Analysis: Group similar data points automatically
- Statistical Insights: Correlation analysis, significance testing

## Quick Start

### Prerequisites

- Node.js: v18 or v20.10.0
- npm: v9 or v10
- OpenAI API Key: Required for AI features
- Python: v3.8+ with pandas, matplotlib, seaborn, scikit-learn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/sritha15/canva_ai_agent.git
   cd canva_ai_agent
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.template .env
   ```
   
   Edit `.env` and add your configuration:
   ```bash
   CANVA_APP_ID=YOUR_APP_ID_HERE
   CANVA_APP_ORIGIN=YOUR_APP_ORIGIN_HERE
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE
   CANVA_BACKEND_HOST=http://localhost:3001
   CANVA_FRONTEND_PORT=8080
   CANVA_BACKEND_PORT=3001
   CANVA_HMR_ENABLED=FALSE
   ```

4. Install Python dependencies
   ```bash
   pip install pandas matplotlib seaborn scikit-learn numpy
   ```

### Running the Application

1. Start the development server
   ```bash
   npm start
   ```
   
   The app will be available at `http://localhost:8080`

2. Set up your Canva App
   - Go to Canva Developer Portal
   - Create a new app
   - Set Development URL to `http://localhost:8080`
   - Copy your App ID and App Origin to your `.env` file

3. Preview in Canva
   - Click Preview in the Developer Portal
   - The app will open in the Canva editor
   - Start uploading data and creating visualizations

## How to Use

### 1. Upload Your Data
- CSV Files: Drag and drop your CSV files
- Sample Data: Use built-in sample datasets to get started

### 2. Chat with Your Data
- Basic Charts: "Create a bar chart of sales by region"
- Advanced Analysis: "Find anomalies in the sales data"
- Predictions: "Predict next quarter's revenue trends"
- Insights: "What insights can you find in this data?"

### 3. Add to Canvas
- Click any generated chart to add it directly to your Canva design
- Charts are automatically styled for professional presentations
- Resize and position charts within your Canva layout

## Advanced Features

### Predictive Analytics
```
"Predict sales for the next 6 months"
"Show me trend analysis for user growth"
"Forecast revenue based on historical data"
```

### Anomaly Detection
```
"Find outliers in my sales data"
"Detect unusual patterns in website traffic"
"Show me data points that don't fit the trend"
```

### Clustering Analysis
```
"Group my customers by behavior"
"Cluster products by performance"
"Find similar patterns in the data"
```

### Statistical Analysis
```
"Show correlation between variables"
"Perform regression analysis"
"Test statistical significance"
```

## Project Structure

```
canva_ai_agent/
├── src/                          # Frontend React components
│   ├── components/               # UI components
│   ├── pages/                    # App pages (Generate, Results)
│   ├── context/                  # React Context for state management
│   └── utils/                    # Utility functions
├── backend/                      # Express.js backend
│   ├── routers/                  # API routes
│   └── database/                 # Database configuration
├── scripts/                      # Build and development scripts
├── styles/                       # CSS styling
└── utils/                        # Shared utilities
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CANVA_APP_ID` | Your Canva app ID from Developer Portal | Yes |
| `CANVA_APP_ORIGIN` | Your app origin for HMR | Yes |
| `OPENAI_API_KEY` | OpenAI API key for AI features | Yes |
| `CANVA_BACKEND_HOST` | Backend URL (localhost for dev) | Yes |
| `CANVA_FRONTEND_PORT` | Frontend port (default: 8080) | No |
| `CANVA_BACKEND_PORT` | Backend port (default: 3001) | No |
| `CANVA_HMR_ENABLED` | Enable Hot Module Replacement | No |

### Hot Module Replacement (HMR)

For faster development, enable HMR:

1. Set `CANVA_HMR_ENABLED=TRUE` in your `.env` file
2. Add your app origin from the Developer Portal
3. Restart the development server

## Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## Deployment

### Production Build

```bash
npm run build
```

### Environment Setup

1. Update `CANVA_BACKEND_HOST` to your production URL
2. Ensure all environment variables are set in production
3. Deploy both frontend and backend components

### Hosting Recommendations

- Frontend: Vercel, Netlify, or AWS S3 + CloudFront
- Backend: Heroku, Railway, or AWS Lambda

## API Reference

### Main Endpoints

- `POST /api/data-to-infographic` - Generate charts from data
- `GET /api/health` - Health check endpoint

### Data Formats

The app supports:
- CSV: Standard comma-separated values
- JSON: Structured data objects

## Troubleshooting

### Common Issues

**App won't load in Canva**
- Check that your development server is running on the correct port
- Verify your `CANVA_APP_ID` and `CANVA_APP_ORIGIN` are correct
- Ensure your development URL in Canva matches your local server

**Charts not generating**
- Verify your `OPENAI_API_KEY` is valid and has credits
- Check that Python dependencies are installed
- Look at browser console for error messages

**Python execution errors**
- Ensure Python 3.8+ is installed
- Install required packages: `pip install pandas matplotlib seaborn scikit-learn`
- Check that the temp directory has write permissions

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

- Canva Apps SDK for the platform
- OpenAI for AI capabilities
- React and TypeScript for the frontend
- Python ecosystem for data analysis
