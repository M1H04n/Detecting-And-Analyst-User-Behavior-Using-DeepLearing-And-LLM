# SOC Chatbot - UEBA Analysis

<p align="center">
  <img src="https://img.shields.io/badge/Docker-Ready-blue?logo=docker" alt="Docker Ready">
  <img src="https://img.shields.io/badge/Python-3.11%2B-green?logo=python" alt="Python 3.11+">
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License MIT">
</p>

A Security Operations Center (SOC) chatbot for analyzing User and Entity Behavior Analytics (UEBA) alerts with AI-powered insights. For now only support Vietnamese.

## Note
All features are still in development. If you run into any bugs, please bear with me!

## Features

- **UEBA Alert Analysis** - Analyze security alerts with Deep Learning
- **AI Chatbot** - Natural language interaction for alert investigation
- **Interactive Dashboard** - Visualize alerts, trends, and user behaviors
- **Multi-SIEM Support** - Connect to Graylog, Wazuh(Testing), QRadar(Testing)
- **False Positive Management** - Mark and track false positives
- **Risk Scoring** - Automatic severity classification

## Quick Start
### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/M1H04n/Detecting-And-Analyst-User-Behavior.git
   cd Detecting-And-Analyst-User-Behavior
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

## Configuration

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

## Directory Structure

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

## Commands

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

## Architecture

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

## Security Notes

- Change default passwords immediately after installation
- Use strong, unique values for `MONGO_PASSWORD` and `SESSION_SECRET`
- Keep API keys secure and never commit `.env` to version control
- Consider using a reverse proxy (nginx) with HTTPS in production

## Support

For issues and feature requests, please open an issue on GitHub.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Login
<img width="825" height="806" alt="image" src="https://github.com/user-attachments/assets/201bfa94-fbec-417e-aeed-9d235c1a43c6" />

## Dashboard
<img width="1906" height="942" alt="Dashboard" src="https://github.com/user-attachments/assets/b8910b77-00eb-46ad-a961-27b3f8e2f454" />

## Chatbot
<img width="1906" height="942" alt="Chatbot" src="https://github.com/user-attachments/assets/6d0dce5b-8efd-4cca-85a4-fc3cbf132aa6" />
<img width="936" height="679" alt="Screenshot 2026-01-16 110315" src="https://github.com/user-attachments/assets/34e5778c-a948-4a8a-bbfe-30cfa4372129" />
<img width="833" height="678" alt="Screenshot 2026-01-16 110545" src="https://github.com/user-attachments/assets/c72094c3-75d8-4400-9e0e-88f424094f04" />

## User Behavior Analyst
<img width="1906" height="942" alt="Chatbot + User_Behavior_Analysis" src="https://github.com/user-attachments/assets/f382d59e-4395-4df0-8c96-b15bf6af20db" />

<img width="759" height="936" alt="image" src="https://github.com/user-attachments/assets/286f0e59-d47a-4a21-9ef7-f650c3e79501" />

