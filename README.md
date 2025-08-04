# ubuntu-rtsp-viewer

## Overview
The `ubuntu-rtsp-viewer` is a software application designed for Ubuntu Desktop 24.04 that displays six RTSP feeds in the Chromium browser. It features a top banner showing the current time, a scrolling news feed from BBC, and current weather information that updates based on weather warnings. The application is set to start automatically after reboot.

## Features
- Displays six RTSP feeds in a tiled layout.
- Top banner showing the current time with color changes based on weather warnings.
- Scrolling news feed from BBC, formatted for visually impaired users.
- Current weather display with updates every ten minutes and a three-day forecast.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ubuntu-rtsp-viewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the application:
   - Update the `src/config/config.js` file with your RTSP stream addresses and OpenWeatherMap API key.

## Usage
To start the application, run:
```bash
npm start
```

## Development
```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Autostart Configuration
To ensure the application starts automatically after reboot, execute the following command:
```bash
chmod +x scripts/startup.sh
```
This script will open Chromium with the application settings.

## License
This project is licensed under the MIT License. See the LICENSE file for details.