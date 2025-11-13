# 🚀 Deployment Instructions

## Backend Deployment (Render)

### Step 1: Render Configuration
1. Go to [render.com](https://render.com) and create account
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Use these settings:
   - **Root Directory**: Leave blank (uses root package.json)
   - **Build Command**: `npm install && cd backend && npm install`
   - **Start Command**: `cd backend && npm start`

### Step 2: Environment Variables
Add these in Render dashboard:
```
MONGO_URI=mongodb+srv://puneet123:puneet123@lifeflow.tfttyli.mongodb.net/lifeflow?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here_12345
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.netlify.app
```

## Frontend Deployment (Netlify)

### Step 1: Build Settings
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`

### Step 2: Environment Variables
Add in Netlify dashboard:
```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api/auth
```

### Step 3: Fix Routing Issues
- The `_redirects` file is already included to handle React Router
- Alternatively, use `netlify.toml` for configuration
- This prevents "Page Not Found" errors on direct URL access

## Testing Checklist
- [ ] Backend health check: `GET https://your-backend.onrender.com/`
- [ ] Signup test: Create new user
- [ ] Login test: Authenticate user
- [ ] JWT verification on jwt.io
- [ ] Database check: Verify user in MongoDB Atlas