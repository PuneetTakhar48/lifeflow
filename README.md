# LifeFlow+ - MERN Stack Web Application

## 📋 Project Proposal
LifeFlow+ is a full-stack MERN web application featuring user authentication with JWT tokens, password hashing, and MongoDB Atlas integration. This project demonstrates modern web development practices with React.js frontend and Node.js/Express backend.

## 🚀 Tech Stack
- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT with bcryptjs password hashing
- **Deployment**: Frontend (Vercel/Netlify), Backend (Render)

## 📁 Project Structure
```
LifeFlowPlus/
├── backend/
│   ├── models/User.js
│   ├── routes/auth.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── Login.js
    │   ├── Signup.js
    │   └── index.js
    ├── public/index.html
    └── package.json
```

## 🛠️ Setup Instructions

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   npm install
   ```

2. Create `.env` file from `.env.example`:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/lifeflow
   JWT_SECRET=your_jwt_secret_key_here
   ```

3. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   npm install
   ```

2. Start the React app:
   ```bash
   npm start
   ```

## 🌐 Deployment Instructions

### Backend Deployment (Render)
1. Create new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your JWT secret key
6. Deploy and note the backend URL

### Frontend Deployment (Vercel/Netlify)
1. Update API URLs in `Signup.js` and `Login.js`:
   ```javascript
   // Replace with your actual backend URL
   const API_URL = 'https://your-backend.onrender.com';
   ```

2. **For Vercel**:
   - Connect GitHub repository
   - Set root directory to `frontend`
   - Deploy

3. **For Netlify**:
   - Drag and drop `frontend/build` folder
   - Or connect GitHub and set publish directory to `frontend/build`

## ✅ Features
- User registration with password hashing
- User login with JWT authentication
- Token storage in localStorage
- Responsive design with inline CSS
- MongoDB Atlas integration
- CORS enabled for cross-origin requests

## 🔗 Live Links
- **Frontend**: [Add your Vercel/Netlify URL here]
- **Backend**: [Add your Render URL here]

## 🧪 Testing
1. Visit the frontend URL
2. Test user registration on `/signup`
3. Verify new users appear in MongoDB Atlas
4. Test login functionality on `/login`
5. Check JWT token in browser localStorage
6. Verify token on [jwt.io](https://jwt.io)

## 📝 API Endpoints
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /` - Backend health check

## 🔒 Security Features
- Password hashing with bcryptjs
- JWT token authentication
- Input validation
- CORS protection
- Environment variables for sensitive data