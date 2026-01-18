# Dimer Fitness - B2B Landing Page

White-label fitness community platform for gyms. This landing page system includes:

- Main B2B page at `dimer.app`
- Gym-specific landing pages at `dimer.app/gym/[gym-name]`
- Email capture for waitlist
- QR code generation

## Your Target Gyms

1. **Midwest Method** - `dimer.app/gym/midwest-method`
2. **Link Fitness** - `dimer.app/gym/link-fitness`
3. **Anytime Fitness Platte City** - `dimer.app/gym/anytime-fitness-platte-city`

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the main page.
Visit `http://localhost:3000/gym/midwest-method` to see a gym page.

## Deploy to Vercel (FREE - 5 minutes)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Name it: `dimer-landing`
3. Make it Public
4. Click "Create repository"

### Step 2: Upload Your Code

In your terminal (on your Mac):

```bash
# Navigate to the project folder
cd /path/to/dimer-landing

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/dimer-landing.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/signup
2. Sign up with GitHub
3. Click "New Project"
4. Import your `dimer-landing` repository
5. Click "Deploy"

**That's it!** Vercel will give you a URL like `dimer-landing.vercel.app`

### Step 4: Connect Your Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `dimer.app`
4. Follow the instructions to update your DNS settings

**DNS Settings (at your domain registrar):**
- Type: `A` → Value: `76.76.21.21`
- Type: `CNAME` → Name: `www` → Value: `cname.vercel-dns.com`

Wait 5-60 minutes for DNS to propagate.

## QR Codes for Gym Demos

Create QR codes for each gym landing page:

1. Go to https://qr-code-generator.com
2. Enter URL: `dimer.app/gym/midwest-method`
3. Customize with gym colors/logo
4. Download high-resolution PNG
5. Print 8.5"x11" posters

**Repeat for:**
- `dimer.app/gym/link-fitness`
- `dimer.app/gym/anytime-fitness-platte-city`

## Email Capture Integration

Currently, form submissions are logged to console. To save emails to Supabase:

1. Create a Supabase project at https://supabase.com
2. Create a `waitlist` table with columns: `id`, `gym`, `name`, `email`, `created_at`
3. Get your Supabase URL and API key
4. Add to `app/gym/[slug]/page.js`:

```javascript
const { data, error } = await supabase
  .from('waitlist')
  .insert([{ gym: gymSlug, name, email }]);
```

## Customization

### Add New Gym

Edit `app/gym/[slug]/page.js` and add to the `GYMS` object:

```javascript
'new-gym-slug': {
  name: 'NEW GYM NAME',
  location: 'City, State',
},
```

URL will be: `dimer.app/gym/new-gym-slug`

### Change Colors

Edit `app/page.js` and `app/gym/[slug]/page.js` - search for:
- `from-cyan-400 to-cyan-600` (gradient text)
- `from-cyan-500 to-cyan-600` (buttons)
- `border-cyan-500` (borders)

Replace `cyan` with your color choice.

### Add App Screenshots

Replace files in `/public`:
- `screenshot1.png`
- `screenshot2.png`
- `screenshot3.png`

## Pitch Strategy

### For Midwest Method (Saint Joseph, MO):

**Email:**
```
Subject: Free Member Engagement Tool for Midwest Method

Hi [Owner Name],

I'm Jo, a developer from Atchison building a workout partner matching 
platform specifically for gym communities.

I'd love to offer Midwest Method a FREE pilot of Dimer - a white-label 
app that helps your members connect with workout partners.

Benefits:
• Increase member retention (partners = accountability)
• Build gym community & engagement
• Zero setup - just display QR codes
• Fully branded with your colors/logo

Can I show you a 5-minute demo this week?

Check out what your members would see: dimer.app/gym/midwest-method

Best,
Jo
Dimer Fitness
dimer.fitness@gmail.com
```

**In-Person Approach:**

1. Walk in and ask for the owner/manager
2. "Hi, I'm Jo. I built an app that helps gym members find workout partners. 
   It increases retention and builds community. Can I show you a quick demo?"
3. Pull up `dimer.app/gym/midwest-method` on your phone
4. Show them THEIR branded page
5. "This is what your members see when they scan the QR code. They can find 
   partners who match their schedule and workout style."
6. Offer FREE pilot for 3 months

### Pricing (After Pilot):

- **Free**: Up to 50 active users
- **Pro**: $99/month for unlimited users
- **Enterprise**: $299/month with analytics dashboard

## Contact

Questions? Email dimer.fitness@gmail.com

---

Built with Next.js, React, and Tailwind CSS
