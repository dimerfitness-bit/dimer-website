# 🚀 DEPLOYMENT GUIDE - Get Your Site Live in 30 Minutes

## What You're Deploying

- **Main site**: `dimer.app` (B2B pitch to gym owners)
- **Gym pages**: 
  - `dimer.app/gym/midwest-method`
  - `dimer.app/gym/link-fitness`
  - `dimer.app/gym/anytime-fitness-platte-city`

---

## STEP 1: Download Your Website Files

I've created everything in `/home/claude/dimer-landing/`

**You need to download this entire folder to your Mac.**

---

## STEP 2: Create GitHub Account (if you don't have one)

1. Go to https://github.com/signup
2. Create account (use dimer.fitness@gmail.com)
3. Verify email

---

## STEP 3: Upload Code to GitHub

### Option A: Using GitHub Desktop (EASIEST)

1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account
3. Click "Create New Repository"
   - Name: `dimer-landing`
   - Local Path: Choose the folder you downloaded
   - Click "Create Repository"
4. Click "Publish Repository" (top right)
5. Make it **Public**
6. Click "Publish"

### Option B: Using Terminal (if you're comfortable with command line)

```bash
cd /path/to/dimer-landing
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dimer-landing.git
git push -u origin main
```

---

## STEP 4: Deploy to Vercel (FREE HOSTING)

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Click "New Project"
5. Find `dimer-landing` and click "Import"
6. Click "Deploy" (don't change any settings)
7. Wait 2 minutes for deployment

**You'll get a URL like:** `dimer-landing.vercel.app`

✅ Your site is now LIVE!

---

## STEP 5: Connect Your Domain (dimer.app)

### In Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Type `dimer.app` and click "Add"
4. Vercel will show you DNS settings

### At Your Domain Registrar (where you bought dimer.app):

1. Log in to your domain registrar
2. Find DNS settings
3. Add these records:

**For root domain (dimer.app):**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `76.76.21.21`
- TTL: 3600

**For www:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: 3600

4. Click Save

**Wait 5-60 minutes** for DNS to update globally.

---

## STEP 6: Print QR Codes

I've generated 3 QR code posters for you:

- `qr_midwest_method.png`
- `qr_link_fitness.png`
- `qr_anytime_fitness.png`

### To Print:

1. Open file in Preview (Mac) or any photo app
2. File → Print
3. Select 8.5" x 11" paper
4. Print at **highest quality**
5. Laminate at FedEx/UPS Store (optional but recommended)

### Where to Display:

- Front desk
- Locker rooms
- Near free weights
- Cardio area
- Bulletin boards

---

## STEP 7: Start Pitching Gyms!

### Your Pitch (In-Person):

"Hi, I'm Jo. I built a workout partner matching app specifically for gym communities. It helps your members connect, increases retention, and builds community. Can I show you a quick 5-minute demo?"

**Then pull up their branded page on your phone:**
- Midwest Method: `dimer.app/gym/midwest-method`
- Link Fitness: `dimer.app/gym/link-fitness`
- Anytime Fitness: `dimer.app/gym/anytime-fitness-platte-city`

### Your Pitch (Email):

```
Subject: Free Member Engagement Tool for [Gym Name]

Hi [Owner Name],

I'm Jo, a developer from Atchison building a workout partner 
matching platform specifically for gym communities.

I'd love to offer [Gym Name] a FREE pilot of Dimer - it helps 
your members find workout partners, which increases retention 
and builds community.

Check out what your members would see: 
dimer.app/gym/[gym-slug]

Can I show you a 5-minute demo this week?

Best,
Jo
Dimer Fitness
dimer.fitness@gmail.com
```

---

## TROUBLESHOOTING

### Site not loading?
- Check DNS propagation: https://www.whatsmydns.net
- Wait up to 1 hour for DNS to update

### Want to add a new gym?
1. Edit `app/gym/[slug]/page.js`
2. Add gym to `GYMS` object
3. Commit and push to GitHub (Vercel auto-deploys)

### QR codes not working?
- Make sure you're using `https://dimer.app/gym/...` (not http)
- Test by scanning with your phone first

---

## NEXT STEPS

1. ✅ Deploy site (you're doing this now!)
2. ✅ Print QR codes
3. 📧 Email all 3 gyms
4. 🚶 Walk into gyms this week
5. 🎯 Close your first gym partner
6. 💰 Offer them 3 months FREE trial
7. 📊 Track signups
8. 💵 Convert to paid after trial

---

## PRICING STRATEGY

- **Pilot**: FREE for 3 months
- **After pilot**: $99/month for unlimited users
- **You keep**: 100% of revenue initially
- **Scaling**: As you add more gyms, consider:
  - $79/mo for gyms under 500 members
  - $149/mo for gyms 500-1000 members
  - $299/mo for gyms over 1000 members

---

## Questions?

Email me (Claude) via Jo at dimer.fitness@gmail.com

**YOU'VE GOT THIS! 🚀**
