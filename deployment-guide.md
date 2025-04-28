# MediVault Deployment Guide

This guide provides instructions for deploying your MediVault application to different hosting platforms.

## Option 1: Deploying to Vercel (Recommended for Frontend)

Vercel is ideal for React applications with seamless GitHub integration.

### Prerequisites
- A GitHub, GitLab, or Bitbucket account with your project repository
- [Vercel account](https://vercel.com/signup)

### Deployment Steps

1. **Push your code to a repository**
   - Ensure your code is pushed to GitHub, GitLab, or Bitbucket

2. **Sign up/Log in to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/log in

3. **Import your project**
   - Click "Add New" → "Project"
   - Connect your Git provider and select your repository
   - Configure project:
     - Framework Preset: React
     - Root Directory: `client` (if your frontend is in a client folder)
     - Build Command: `npm run build`
     - Output Directory: `build`
     - Install Command: `npm install`

4. **Environment Variables**
   - Add any required environment variables:
     - `REACT_APP_API_URL`: URL of your backend API
     - Any other environment variables used in your frontend

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - Once complete, you'll receive a deployment URL

## Option 2: Deploying to Netlify

Netlify is another excellent platform for React applications.

### Prerequisites
- GitHub, GitLab, or Bitbucket repository
- [Netlify account](https://app.netlify.com/signup)

### Deployment Steps

1. **Sign up/Log in to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up/log in

2. **Import your project**
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider and select your repository

3. **Configure build settings**
   - Base directory: `client` (if your frontend is in a client folder)
   - Build command: `npm run build`
   - Publish directory: `build`

4. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add required environment variables (same as Vercel above)

5. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your application

## Option 3: Deploying Backend to Render

If you have a separate backend, Render is a great option for deploying Node.js applications.

### Prerequisites
- GitHub or GitLab repository
- [Render account](https://render.com/signup)

### Deployment Steps

1. **Sign up/Log in to Render**
   - Go to [render.com](https://render.com) and sign up/log in

2. **Create a new Web Service**
   - Click "New" → "Web Service"
   - Connect your Git repository

3. **Configure your service**
   - Name: `medivault-api`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start` (or your server start command)
   - Select your plan (Free tier available)

4. **Environment Variables**
   - Add environment variables:
     - `DATABASE_URL`: Your database connection string
     - `JWT_SECRET`: Your JWT secret
     - Other required environment variables

5. **Create Database (if needed)**
   - Click "New" → "PostgreSQL"
   - Configure your database settings
   - Connect your web service to the database using the internal URL

6. **Deploy**
   - Click "Create Web Service"
   - Render will deploy your backend

## Option 4: Using Firebase Hosting

Firebase provides hosting along with authentication and database services.

### Prerequisites
- [Firebase account](https://firebase.google.com/)
- Firebase CLI installed: `npm install -g firebase-tools`

### Deployment Steps

1. **Initialize Firebase**
   ```bash
   # Login to Firebase
   firebase login
   
   # Move to your client directory
   cd client
   
   # Initialize Firebase
   firebase init
   ```
   - Select "Hosting"
   - Choose your Firebase project
   - Specify "build" as your public directory
   - Configure as a single-page app: Yes
   - Set up automatic builds: No

2. **Build your React app**
   ```bash
   npm run build
   ```

3. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

4. **Access your deployed app**
   - Firebase will provide you with a URL after deployment

## Connecting Frontend and Backend

Ensure your frontend is configured to communicate with your backend API:

1. **Using Environment Variables**
   - In your client directory, create `.env` or `.env.production` file:
   ```
   REACT_APP_API_URL=https://your-backend-url.com/api
   ```

2. **Update API Call Locations**
   - Make sure all API calls use this environment variable:
   ```javascript
   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
   
   // Use API_URL in your fetch/axios calls
   fetch(`${API_URL}/users`);
   ```

## Continuous Deployment

For automatic deployments when you push to your repository:

1. **Vercel/Netlify**: Automatic by default
2. **Render**: Automatic by default
3. **Firebase**: Set up GitHub Actions workflow

## Securing Your Application

1. **SSL/HTTPS**: All recommended platforms provide this by default
2. **Environment Variables**: Never commit sensitive info to your repository
3. **Content Security Policy**: Add appropriate headers
4. **API Rate Limiting**: Implement on your backend

## Monitoring and Performance

1. **Vercel/Netlify Analytics**: Available in paid plans
2. **Google Analytics**: Free alternative for basic tracking
3. **Performance Monitoring**: Consider Lighthouse CI
4. **Error Tracking**: Consider Sentry for monitoring errors

## Database Migration

If using a database:

1. **Create database backup** from your development environment
2. **Set up production database** on your chosen platform
3. **Restore data** to the production database
4. **Update connection string** in your backend configuration

## Domain Configuration

For a custom domain:

1. **Purchase domain** from a registrar (Namecheap, GoDaddy, etc.)
2. **Add domain** in your hosting platform settings
3. **Update DNS settings** at your domain registrar
4. **Enable HTTPS** for your custom domain

## Troubleshooting Deployment Issues

1. **Check build logs** for errors
2. **Verify environment variables** are correctly set
3. **Test locally with production settings**
4. **Check browser console** for frontend errors
5. **Review server logs** for backend issues 