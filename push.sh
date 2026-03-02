#!/bin/bash
echo "Staging changes..."
git add .
read -p "Enter commit message (default: 'update'): " commit_msg
commit_msg=${commit_msg:-update}
echo "Committing changes..."
git commit -m "$commit_msg"
echo "Pushing to GitHub..."
git push origin main
if [ $? -eq 0 ]; then
    echo ""
    echo "[SUCCESS] Changes pushed to GitHub!"
else
    echo ""
    echo "[ERROR] Push failed. Check your connection or Git configuration."
fi
