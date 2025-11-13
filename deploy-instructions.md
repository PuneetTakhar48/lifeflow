# Deployment Instructions

## 🚀 Backend Deployment (Render)

1. **Create Render Account**: Go to render.com
2. **Create Web Service**: 
   - Connect GitHub repository
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
3. **Environment Variables**:
   ```
   MONGO_URI=mongodb+srv://PuneetCluster:Puneet@cluster.mongodb.net/lifeflow
   JWT_SECRET=your_jwt_secret_key_here_12345
   PORT=5000
   ```
4. **Deploy** and copy the backend URL

## 🌐 Frontend Deployment (Vercel)

1. **Update API URL**: Replace `your-backend-url` in `.env.production` with actual Render URL
2. **Create Vercel Account**: Go to vercel.com
3. **Import Project**:
   - Connect GitHub repository
   - Root Directory: `frontend`
   - Framework Preset: Create React App
4. **Environment Variables**:
   ```
   REACT_APP_API_URL=https://your-actual-backend-url.onrender.com/api/auth
   ```
5. **Deploy** and copy the frontend URL

## 📊 Database Setup (MongoDB Atlas)

1. **Create Atlas Account**: Go to mongodb.com/atlas
2. **Create Cluster**: Free tier cluster
3. **Database Access**: Create user with read/write permissions
4. **Network Access**: Add IP address (0.0.0.0/0 for all)
5. **Connect**: Get connection string and update in Render environment variables

## ✅ Testing Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible  
- [ ] Signup creates user in MongoDB Atlas
- [ ] Login returns JWT token
- [ ] JWT token verified on jwt.io
- [ ] Dashboard loads after login