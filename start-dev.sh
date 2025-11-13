#!/bin/bash

echo "🚀 Starting LifeFlow+ Development Environment..."

# Kill any existing processes
echo "🧹 Cleaning up existing processes..."
pkill -f "node server.js" 2>/dev/null
pkill -f "react-scripts" 2>/dev/null

# Start backend
echo "🔧 Starting Backend on port 5003..."
cd backend
npm run dev &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start frontend
echo "🎨 Starting Frontend on port 3000..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo "✅ Development servers started!"
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend: http://localhost:5003"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
wait