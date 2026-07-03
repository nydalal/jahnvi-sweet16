# 🎬 Jahnvi's Sweet Sixteen Website - Setup & Deployment Guide

## 📋 What You're Getting

A **modern, luxurious React website** with:
- ✨ **Hero Section** with video placeholder (ready for your video)
- 📸 **Photo Gallery** with 20+ photo slots (all placeholders ready)
- 🎭 **Performance Showcase** - All 12 dances listed
- 💬 **8 Speeches** section including your emotional speech
- 📅 **Event Timeline** - All key moments
- 👥 **Guest Testimonials** - Carousel of messages
- 📊 **By the Numbers** - 120 guests, 200+ photos, stats
- 💌 **Thank You** section with custom message placeholder

**All hosted FREE forever on Netlify** ✅

---

## 🚀 Quick Start (5 Steps)

### Step 1: Create GitHub Account (Free)
1. Go to **github.com**
2. Click "Sign up" and follow steps
3. Verify your email

### Step 2: Create Netlify Account (Free)
1. Go to **netlify.com**
2. Click "Sign up"
3. Choose "Sign up with GitHub"
4. Connect your GitHub account

### Step 3: Upload Website Files to GitHub
1. On GitHub, click **+** (top right) → "New repository"
2. Name it: `jahnvi-sweet16`
3. Add description: "Jahnvi's Sweet Sixteen Celebration Website"
4. Click "Create repository"
5. Follow the "quick setup" instructions (it will show you commands to paste)
6. Or: Use GitHub's web upload to add all files from `/home/claude/`

### Step 4: Connect to Netlify
1. In Netlify, click "Add new site" → "Import an existing project"
2. Select GitHub
3. Find and select `jahnvi-sweet16` repository
4. Leave default settings, click "Deploy site"
5. **Wait 2-3 minutes** for build to complete

### Step 5: Your Site is LIVE!
Netlify gives you a free URL like: `https://jahnvi-sweet16-xyz.netlify.app`
- Share this link with guests
- It's live forever, completely free

---

## 🎨 Customizing Your Website

### Add Your Meaningful Quote
**File:** `jahnvi-sweet16-website.jsx` (around line 450)

Find:
```
<p className="text-sm text-purple-400 mt-12 italic">
  [Meaningful quote placeholder - Your custom message will appear here]
</p>
```

Replace with your quote, e.g.:
```
<p className="text-sm text-purple-400 mt-12 italic">
  "ઝૂઝ કરવાની શક્તિ આપે, સુખ આપે, પણ પાછળ નહિ ફરતા દે" 
  ~ તમારી પ્રેમથી, બાપુ
</p>
```

### Customize Color Theme
The website uses **purple + gold/amber** for luxury feel.
- Purple primary: Edit lines with `from-purple-` and `to-purple-`
- Gold accents: Edit lines with `from-amber-` or `text-amber-`

Want to change to different shades?
- Search for `purple-600` / `purple-500` and replace with your Tailwind color
- Search for `amber-` and replace with your accent color

### Update Guest Stats
**File:** `jahnvi-sweet16-website.jsx` (around line 115)

```javascript
const timelineEvents = [
    { time: '6:00 PM', title: 'Guest Arrival', description: 'Guests gather for celebration' },
    { time: '6:30 PM', title: 'Avani & Nishit Entry', description: 'Grand entrance moment' },
    ...
]
```

Modify times, titles, descriptions as needed.

---

## 📸 Replacing Placeholder Images

### When Photographer Sends Photos

**EASY WAY:**

1. Organize 200+ photos into folders on your computer
2. Use **Cloudinary** (free service) to host them:
   - Go to **cloudinary.com** → Sign up (free)
   - Upload your 200+ photos
   - Get shareable links for each
   
3. In `jahnvi-sweet16-website.jsx`, find the gallery section (line ~115)

Replace this:
```javascript
const galleryPhotos = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: `Photo ${i + 1}`,
  color: `hsl(${270 + i * 5}, ${65 - i % 3 * 10}%, ${55 + i % 3 * 8}%)`
}));
```

With this:
```javascript
const galleryPhotos = [
  { id: 1, title: 'Jahnvi Entry', image: 'https://cloudinary.com/your-photo-1.jpg' },
  { id: 2, title: 'Dance Performance', image: 'https://cloudinary.com/your-photo-2.jpg' },
  // ... add all 20 photos
];
```

4. Update the gallery display HTML to use `image` instead of `color`

### Video Placeholder

**When you have your 2-3 minute celebration video:**

1. Upload to **YouTube** (unlisted/private for privacy)
2. Get the video URL
3. In `jahnvi-sweet16-website.jsx`, replace the hero section placeholder (line ~60) with:

```javascript
<iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
/>
```

---

## 🎯 Updating Guest Messages

**File:** `jahnvi-sweet16-website.jsx` (line ~250)

Current placeholder:
```javascript
const testimonials = [
  { name: 'Friend 1', message: 'Most beautiful celebration ever!' },
  { name: 'Relative', message: 'Jahnvi looked absolutely stunning.' },
  ...
]
```

Replace with actual guest messages. You can:
- Ask guests to write messages after the event
- Add them gradually as you receive them
- Include heartfelt quotes from speeches

---

## 🔄 After Making Changes

**To update your live website:**

1. Edit files locally on your computer
2. Upload changes to GitHub (drag & drop, or git commands)
3. Netlify **automatically rebuilds** within seconds
4. Your live site updates instantly

**No need to touch anything else—it's all automatic!**

---

## 📱 Mobile Preview

Your website is **fully responsive**:
- Desktop: Full cinematic experience
- Tablet: Optimized layout
- Mobile: Touch-friendly galleries and carousels

Share the link—it works perfectly on all devices!

---

## 🎁 Bonus Features

### Social Sharing
The website includes Open Graph metadata. When someone shares the link on social media, it shows:
- Beautiful preview image
- Event title & description
- Date (June 28, 2026)

### Search Engines
The site is optimized for Google search. Over time, guests searching "Jahnvi Sweet Sixteen" might find it.

### Custom Domain (Optional)
If you want a custom domain like `jahnvi-sweet16.com`:
1. Buy domain from **Godaddy.com** or **Namecheap.com** (~$10/year)
2. In Netlify settings, add custom domain
3. Follow DNS setup instructions

---

## 💡 Pro Tips

1. **Keep it private** - Don't share the link publicly if guests' photos will have privacy concerns
2. **Share selectively** - Send the link via email/WhatsApp to guests
3. **Update regularly** - Add photos/messages as they come in
4. **Backup** - Keep your files downloaded on your computer too

---

## ❓ Troubleshooting

**Site shows "Page not found"?**
- Wait 3-5 minutes for Netlify to finish deploying
- Refresh the page (Cmd+Shift+R or Ctrl+Shift+R)

**Changes not showing?**
- Make sure you uploaded files to GitHub
- Wait 1-2 minutes for Netlify to rebuild
- Clear your browser cache (Cmd+Shift+Delete)

**Photo gallery empty?**
- Make sure you replaced placeholder URLs with real image links
- Check that image URLs are public/accessible
- Use Cloudinary for reliable hosting

---

## 🎬 Your Website is Ready!

This website will:
✅ Last forever (Netlify is free + permanent)
✅ Automatically scale (millions of views won't break it)
✅ Load instantly (global CDN)
✅ Look stunning (luxury purple/gold design)
✅ Work on all devices (mobile, tablet, desktop)
✅ Be fully customizable (easy edits, no coding needed)

**Share it with pride.** This is Jahnvi's digital legacy of June 28, 2026! 🎉

---

## 📞 Need Help?

- **Netlify docs:** netlify.com/docs
- **GitHub help:** docs.github.com
- **Tailwind CSS:** tailwindcss.com/docs
- **React:** react.dev

Good luck! 🌟
