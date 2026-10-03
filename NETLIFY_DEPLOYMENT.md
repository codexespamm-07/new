# Netlify Deployment Guide

## Quick Deploy (Recommended)

### Option 1: Git Integration (BEST - Use this!)
**Do NOT upload the .next folder!** Netlify will build it for you.

1. Push your ENTIRE project to GitHub/GitLab/Bitbucket
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Drag & Drop (Only for testing)
**Do NOT upload the .next folder!** Upload the project root folder instead.

1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the ENTIRE project folder (containing package.json, src, etc.)
4. Netlify will automatically build the project
5. Your site will be live!

## Configuration Files

### netlify.toml
This file is already configured with:
- Build command: `npm run build`
- Publish directory: `.next`
- Node.js version: 20
- Security headers
- Next.js plugin for optimal performance

### Environment Variables (if needed)
Add these in Netlify Dashboard → Site Settings → Environment Variables:
```
NODE_ENV=production
```

## Build Locally Before Deploying

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The output will be in the .next folder
```

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Forms work (contact form)
- [ ] Animations render properly
- [ ] Mobile responsive design works
- [ ] Add custom domain (optional)

## Custom Domain

1. Go to Site Settings → Domain Management
2. Add your custom domain
3. Update DNS records as instructed by Netlify
4. Enable HTTPS (automatic with Netlify)

## Troubleshooting

### Build Fails
- Check build logs in Netlify Dashboard
- Ensure `npm run build` works locally
- Verify Node.js version (set to 20 in netlify.toml)

### Images Not Loading
- Next.js Image Optimization requires server-side rendering
- Netlify's Next.js plugin handles this automatically

### API Routes Not Working
- Ensure API routes are in `pages/api/` or `app/api/` directory
- Check Netlify Functions logs

## Continuous Deployment

With Git integration, your site will automatically redeploy when you:
- Push to your main branch
- Open a pull request
- Merge changes

## Performance Tips

Netlify automatically:
- Optimizes images
- Enables CDN
- Provides HTTPS
- Caches static assets
- Splits code for faster loading

## Support

- [Netlify Docs](https://docs.netlify.com)
- [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/)
