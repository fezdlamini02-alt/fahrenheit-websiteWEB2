@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul
if errorlevel 1 (
  echo Python was not found. Install Python 3, then run this file again.
  pause
  exit /b 1
)

echo Starting Fahrenheit Seafood and Grill at http://127.0.0.1:8000/
echo Keep this window open while using the site. Press Ctrl+C to stop the server.
start "" powershell.exe -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:8000/'"
py -m http.server 8000 --bind 127.0.0.1

echo Website server stopped.
pause
