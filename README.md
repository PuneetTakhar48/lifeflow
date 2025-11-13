# LifeFlow+ - MERN Stack Web Application

## 🚀 Quick Start (Local Development)

### Option 1: Use the startup script
```bash
./start-dev.sh
```

### Option 2: Manual startup
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

## 📱 Access the Application
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5003

## 🛠️ Tech Stack
- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT with bcryptjs
- **Database**: MongoDB Atlas

## ✨ Features
- 🔐 User Authentication (Signup/Login)
- 📊 Dashboard with profile dropdown
- 👤 User profile with welcome message
- 🎨 Modern UI with responsive design
- 🔒 JWT token management
- 📱 Mobile-friendly interface

## 🔧 Environment Setup

### Backend (.env)
```
PORT=5003
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5003/api/auth
PORT=3000
```

## 🧪 Testing Signup/Login
1. Start both servers
2. Go to http://localhost:3000
3. Click "Sign Up" to create account
4. Use "Sign In" to login
5. Check profile dropdown after login

## 🌐 Deployment
- **Frontend**: Vercel/Netlify
- **Backend**: Render/Railway
- **Database**: MongoDB Atlas

## 📝 API Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /` - Health check