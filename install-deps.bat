@echo off
cd /d "%~dp0"
echo Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
  echo npm install failed.
  pause
  exit /b 1
)
if exist node_modules\react-router-dom (
  echo react-router-dom installed successfully.
) else (
  echo react-router-dom missing after install.
)
if exist node_modules\framer-motion (
  echo framer-motion installed successfully.
) else (
  echo framer-motion missing after install.
)
echo Done. Run: npm run dev
pause
