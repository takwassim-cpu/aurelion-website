@echo off
echo Staging changes...
git add .
set /p commit_msg="Enter commit message (default: 'update'): "
if "%commit_msg%"=="" set commit_msg=update
echo Committing changes...
git commit -m "%commit_msg%"
echo Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed. Check your connection or Git configuration.
    pause
) else (
    echo.
    echo [SUCCESS] Changes pushed to GitHub!
    timeout /t 3
)
