# Vercel Deployment Guide for Protoverse Labs

## 🎯 Overview
This guide will walk you through deploying your Protoverse Labs website to Vercel, from setup to going live.

## 📋 Prerequisites Checklist

Before deploying, ensure you have:

- [ ] GitHub account
- [ ] Vercel account (sign up at vercel.com)
- [ ] Supabase project created
- [ ] Stripe account configured
- [ ] Code pushed to GitHub repository

---

## 🚀 Step-by-Step Deployment

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Protoverse Labs"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/protoverse-labs.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select "Import Git Repository"
4. Choose your `protoverse-labs` repository
5. Click "Import"

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js. Verify these settings:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (leave as is)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

### Step 4: Add Environment Variables

Click on "Environment Variables" and add these one by one:

#### Supabase Variables
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

#### Stripe Variables
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_or_test_key
STRIPE_SECRET_KEY=sk_live_or_test_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

#### App Variables
```
NEXT_PUBLIC_APP_URL=https://your-site.vercel.app
NEXT_PUBLIC_SITE_NAME=Protoverse Labs
```

**Important:** Make sure to select which environments need each variable:
- Production ✅
- Preview ✅  
- Development ✅

### Step 5: Deploy!

Click **"Deploy"** and wait for the build to complete (usually 2-5 minutes).

---

## 🔧 Post-Deployment Setup

### 1. Configure Custom Domain (Optional)

1. Go to Project Settings > Domains
2. Add your custom domain: `protoverselabs.com`
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

### 2. Set Up Stripe Webhooks

1. Go to Stripe Dashboard > Developers > Webhooks
2. Click "Add Endpoint"
3. Enter your Vercel URL: `https://your-site.vercel.app/api/webhooks/stripe`
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the webhook secret
6. Update `STRIPE_WEBHOOK_SECRET` in Vercel environment variables

### 3. Configure Supabase Redirect URLs

1. Go to Supabase Dashboard > Authentication > URL Configuration
2. Add these URLs:
   - Site URL: `https://your-site.vercel.app`
   - Redirect URLs: `https://your-site.vercel.app/auth/callback`

---

## 🔍 Verify Deployment

Check these after deployment:

- [ ] Homepage loads correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] No console errors
- [ ] Mobile responsive
- [ ] API routes respond
- [ ] Database connections work

---

## 🐛 Common Issues & Solutions

### Issue: Build Fails
**Solution:** Check build logs in Vercel dashboard
- Look for TypeScript errors
- Verify all environment variables are set
- Check for missing dependencies

### Issue: Images Not Loading
**Solution:** 
- Verify image paths start with `/`
- Check Next.js Image component is configured
- Ensure images are in `/public` directory

### Issue: API Routes Return 500
**Solution:**
- Check environment variables are set
- Verify Supabase/Stripe credentials
- Check API route logs in Vercel

### Issue: Slow Load Times
**Solution:**
- Enable image optimization
- Check bundle size
- Use dynamic imports for heavy components

---

## 📊 Monitoring & Analytics

### Vercel Analytics

1. Go to Project > Analytics
2. Enable "Web Analytics" (free)
3. Monitor:
   - Page views
   - Performance metrics
   - Geographic data

### Performance Monitoring

Check regularly:
- **Lighthouse Score:** Aim for 90+
- **Core Web Vitals:** Monitor LCP, FID, CLS
- **Build Times:** Keep under 5 minutes

---

## 🔄 Continuous Deployment

Every time you push to GitHub:

1. Vercel automatically detects changes
2. Creates a preview deployment
3. Runs build and tests
4. Deploys to production (if main branch)

### Branch Deployments

- **main** branch → Production
- **develop** branch → Staging (if configured)
- **feature** branches → Preview deployments

---

## 🔐 Security Best Practices

1. **Never commit `.env.local`** to GitHub
2. **Rotate API keys** regularly
3. **Use environment-specific keys**
   - Test keys for preview
   - Live keys for production
4. **Enable Vercel Authentication** for preview deployments (optional)
5. **Set up DDoS protection** in Vercel settings

---

## 🚀 Optimizations

### Automatic Optimizations (Enabled by Default)
- Image optimization
- Code splitting
- Compression (Brotli/Gzip)
- Edge caching

### Manual Optimizations
- Use `next/image` for all images
- Implement dynamic imports for heavy components
- Enable ISR for product pages
- Configure revalidation times

---

## 📞 Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review build logs in Vercel dashboard
3. Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
4. Contact Vercel Support (Pro plans)

---

## ✅ Deployment Checklist

Final check before going live:

- [ ] All environment variables added
- [ ] Custom domain configured (if applicable)
- [ ] Stripe webhooks set up
- [ ] Supabase URLs configured
- [ ] SSL certificate active (automatic)
- [ ] Homepage loads correctly
- [ ] Test checkout flow works
- [ ] Mobile experience tested
- [ ] SEO meta tags present
- [ ] Analytics enabled
- [ ] Error tracking configured

---

## 🎉 You're Live!

Your Protoverse Labs website is now deployed and accessible worldwide!

**Production URL:** `https://your-site.vercel.app`

Share it, test it, and start innovating!

---

© 2024 Protoverse Labs
