#!/bin/bash

# Wait for the system to be ready
sleep 10

# Start Chromium in kiosk mode with the specified URL
chromium-browser --kiosk http://localhost:3000