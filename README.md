# SOC Chatbot - UEBA Alert Analysis

<p align="center">
  <img src="https://img.shields.io/badge/Docker-Ready-blue?logo=docker" alt="Docker Ready">
  <img src="https://img.shields.io/badge/Python-3.11%2B-green?logo=python" alt="Python 3.11+">
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License MIT">
</p>

A Security Operations Center (SOC) chatbot for analyzing User and Entity Behavior Analytics (UEBA) alerts with AI-powered insights.

## ✨ Features

- 🔍 **UEBA Alert Analysis** - Analyze security alerts with machine learning
- 💬 **AI Chatbot** - Natural language interaction for alert investigation
- 📊 **Interactive Dashboard** - Visualize alerts, trends, and user behaviors
- 🔗 **Multi-SIEM Support** - Connect to Graylog, Wazuh, QRadar
- 🎯 **False Positive Management** - Mark and track false positives
- 📈 **Risk Scoring** - Automatic severity classification

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose installed
- At least 4GB RAM available
- Port 5000 available

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/m1h04n/soc-chatbot.git
   cd soc-chatbot
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and set your values:
   - `MONGO_PASSWORD` - Set a secure password
   - `GEMINI_API_KEY` or `OPENROUTER_API_KEY` - For AI features

3. **Start the application:**
   ```bash
   docker compose up -d
   ```

4. **Access the dashboard:**
   
   Open http://localhost:5000 in your browser
   
   Default login: `admin` / `admin123`
   
   ⚠️ **Change the default password after first login!**

## ⚙️ Configuration

### Log Sources

1. Go to **Settings** in the dashboard
2. Click **Log Sources** tab
3. Add your SIEM connection:
   - **Graylog**: API URL + Token
   - **Wazuh**: API URL + Username/Password
   - **QRadar**: API URL + Token

### LLM Settings

Configure AI providers in **Settings → LLM**:
- Google Gemini (recommended for free tier)
- OpenRouter (multiple models available)

## 📁 Directory Structure

```
soc-chatbot/
├── docker-compose.yml    # Container orchestration
├── .env                  # Your configuration (DO NOT COMMIT)
├── .env.example          # Configuration template
├── init-mongo.js         # Database initialization
├── config/               # Custom configurations
│   └── log_sources_config.json
├── logs/                 # Application logs
├── backup/               # Data backups
└── data/                 # Pipeline data
```

## 🔧 Commands

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f soc-chatbot

# Stop services
docker compose down

# Restart after config change
docker compose restart soc-chatbot

# Full reset (removes all data)
docker compose down -v
```

## 📊 Architecture

```
┌─────────────────┐     ┌─────────────────┐
│   Web Browser   │────▶│   SOC Chatbot   │
└─────────────────┘     │   (Flask App)   │
                        └────────┬────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
        ▼                        ▼                        ▼
┌───────────────┐      ┌─────────────────┐      ┌─────────────────┐
│    MongoDB    │      │      Redis      │      │   SOC Pipeline  │
│   (Database)  │      │   (Sessions)    │      │ (Data Crawler)  │
└───────────────┘      └─────────────────┘      └─────────────────┘
                                                         │
                                                         ▼
                                               ┌─────────────────┐
                                               │  External SIEM  │
                                               │ (Graylog/Wazuh) │
                                               └─────────────────┘
```

## 🛡️ Security Notes

- Change default passwords immediately after installation
- Use strong, unique values for `MONGO_PASSWORD` and `SESSION_SECRET`
- Keep API keys secure and never commit `.env` to version control
- Consider using a reverse proxy (nginx) with HTTPS in production

## 🤝 Support

For issues and feature requests, please open an issue on GitHub.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
