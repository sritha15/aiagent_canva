# 🚀 AI Data Visualization Agent for Canva

An intelligent Canva app that transforms data into stunning visualizations using AI-powered analysis and natural language processing. Upload your data, chat with the AI, and create professional charts that seamlessly integrate into your Canva designs.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)

## ✨ Features

### 🤖 **AI-Powered Data Analysis**
- **Natural Language Processing**: Chat with your data using plain English
- **Smart Intent Recognition**: AI understands what you want to visualize
- **Advanced Analytics**: Clustering, anomaly detection, predictive modeling
- **Data Storytelling**: AI generates insights and recommendations

### 📊 **Comprehensive Visualization Suite**
- **12+ Chart Types**: Bar, line, pie, scatter, heatmaps, box plots, and more
- **Interactive Charts**: Click to add directly to your Canva canvas
- **Advanced Analysis**: Statistical analysis, correlation matrices, trend analysis
- **Custom Styling**: Professional color schemes and layouts

### 🔗 **Seamless Integration**
- **Google Sheets Integration**: Live data sync with Google Sheets
- **CSV Upload**: Drag and drop your data files
- **Real-time Processing**: Fast Python-based data processing
- **Canva Native**: Built specifically for the Canva ecosystem

### 🧠 **Advanced AI Features**
- **Predictive Modeling**: Forecast trends and future values
- **Anomaly Detection**: Identify outliers and unusual patterns  
- **Clustering Analysis**: Group similar data points automatically
- **Statistical Insights**: Correlation analysis, significance testing

## 🚀 Quick Start

### Prerequisites

- **Node.js**: `v18` or `v20.10.0` ([Download here](https://nodejs.org/))
- **npm**: `v9` or `v10`
- **OpenAI API Key**: Required for AI features ([Get one here](https://platform.openai.com/api-keys))
- **Python**: `v3.8+` with pandas, matplotlib, seaborn, scikit-learn

**Note:** Use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions. The `.nvmrc` file ensures the correct version.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sritha15/canva_ai_agent.git
   cd canva_ai_agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
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

4. **Install Python dependencies**
   ```bash
   pip install pandas matplotlib seaborn scikit-learn numpy
   ```

### Running the Application

1. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will be available at `http://localhost:8080`

2. **Set up your Canva App**
   - Go to [Canva Developer Portal](https://www.canva.com/developers/apps)
   - Create a new app
   - Set **Development URL** to `http://localhost:8080`
   - Copy your **App ID** and **App Origin** to your `.env` file

3. **Preview in Canva**
   - Click **Preview** in the Developer Portal
   - The app will open in the Canva editor
   - Start uploading data and creating visualizations!

## 🎯 How to Use

### 1. **Upload Your Data**
- **CSV Files**: Drag and drop your CSV files
- **Google Sheets**: Connect your Google Sheets directly
- **Sample Data**: Use built-in sample datasets to get started

### 2. **Chat with Your Data**
- **Basic Charts**: "Create a bar chart of sales by region"
- **Advanced Analysis**: "Find anomalies in the sales data"
- **Predictions**: "Predict next quarter's revenue trends"
- **Insights**: "What insights can you find in this data?"

### 3. **Customize and Add to Canvas**
- Click any generated chart to add it directly to your Canva design
- Charts are automatically styled for professional presentations
- Resize and position charts within your Canva layout

## 🛠️ Advanced Features

### **Predictive Analytics**
```
"Predict sales for the next 6 months"
"Show me trend analysis for user growth"
"Forecast revenue based on historical data"
```

### **Anomaly Detection**
```
"Find outliers in my sales data"
"Detect unusual patterns in website traffic"
"Show me data points that don't fit the trend"
```

### **Clustering Analysis**
```
"Group my customers by behavior"
"Cluster products by performance"
"Find similar patterns in the data"
```

### **Statistical Analysis**
```
"Show correlation between variables"
"Perform regression analysis"
"Test statistical significance"
```

## 📁 Project Structure

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

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CANVA_APP_ID` | Your Canva app ID from Developer Portal | ✅ |
| `CANVA_APP_ORIGIN` | Your app origin for HMR | ✅ |
| `OPENAI_API_KEY` | OpenAI API key for AI features | ✅ |
| `CANVA_BACKEND_HOST` | Backend URL (localhost for dev) | ✅ |
| `CANVA_FRONTEND_PORT` | Frontend port (default: 8080) | ❌ |
| `CANVA_BACKEND_PORT` | Backend port (default: 3001) | ❌ |
| `CANVA_HMR_ENABLED` | Enable Hot Module Replacement | ❌ |

### Hot Module Replacement (HMR)

For faster development, enable HMR:

1. Set `CANVA_HMR_ENABLED=TRUE` in your `.env` file
2. Add your app origin from the Developer Portal
3. Restart the development server

## 🧪 Testing

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

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Environment Setup

1. Update `CANVA_BACKEND_HOST` to your production URL
2. Ensure all environment variables are set in production
3. Deploy both frontend and backend components

### Hosting Recommendations

- **Frontend**: Vercel, Netlify, or AWS S3 + CloudFront
- **Backend**: Heroku, Railway, or AWS Lambda
- **Database**: PostgreSQL on Heroku or AWS RDS

## 🎨 Customization

### Adding New Chart Types

1. Add chart generation logic in `backend/routers/data_to_infographic.ts`
2. Update the AI intent recognition in the frontend
3. Test with sample data

### Custom AI Prompts

Modify the AI system prompts in the backend to customize:
- Response tone and style
- Chart recommendations
- Analysis depth
- Insight generation

### Styling

- Update `styles/components.css` for UI components
- Modify chart colors and themes in the Python visualization code
- Customize Canva integration styling

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Update documentation
- Follow the existing code style

## 📚 API Reference

### Main Endpoints

- `POST /api/data-to-infographic` - Generate charts from data
- `POST /api/execute-python` - Execute Python analysis code
- `GET /api/health` - Health check endpoint

### Data Formats

The app supports:
- **CSV**: Standard comma-separated values
- **JSON**: Structured data objects
- **Google Sheets**: Live integration via Sheets API

## 🔍 Troubleshooting

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

### Getting Help

- 📖 [Canva Apps Documentation](https://www.canva.dev/docs/apps/)
- 💬 [GitHub Issues](https://github.com/sritha15/canva_ai_agent/issues)
- 📧 Email: [your-email@example.com]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Canva Apps SDK](https://www.canva.dev/) for the platform
- [OpenAI](https://openai.com/) for AI capabilities
- [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) for the frontend
- [Python](https://www.python.org/) ecosystem for data analysis

---

## 🌟 What's Next?

Check out our [Advanced Features Roadmap](ADVANCED_FEATURES_ROADMAP.md) for upcoming features including:

- 🤖 Advanced AI data storytelling
- 📊 Real-time data streaming
- 🎨 Smart design intelligence
- 🔄 Enhanced collaboration tools
- 📱 Multi-platform support

---

**Built with ❤️ for the Canva Developer Community**
