# Complete Beginner's Guide to Sanity CMS for iTOP Services

> ⚠️ **IMPORTANT**: This guide is designed for someone with ZERO Sanity experience.
> Your website will remain EXACTLY the same - we're just making it editable from a dashboard.

---

## Table of Contents

1. [What is Sanity? (Simple Explanation)](#part-1-what-is-sanity-simple-explanation)
2. [All Content Types in Your Website](#part-2-all-content-types-in-your-website)
3. [Step-by-Step Safe Setup](#part-3-step-by-step-safe-setup)
4. [Creating Documents with Your Real Content](#part-4-creating-documents-with-your-real-content)
5. [Verification & Safety Checks](#part-5-verification--safety-checks)
6. [What NOT to Touch](#part-6-what-not-to-touch)

---

# Part 1: What is Sanity? (Simple Explanation)

## 🤔 What is Sanity?

**Sanity is like a Google Sheets for your website content.**

Right now, your website content (text, phone numbers, descriptions) is written directly in the code. If you want to change "17+ Years Experience" to "18+ Years Experience", you would need to:
1. Find the file in the code
2. Change the text
3. Redeploy the website

**With Sanity**, you can:
1. Open a simple dashboard (like Gmail or Google Sheets)
2. Find "Years Experience" and change 17 to 18
3. Click "Publish"
4. Your website updates automatically! ✅

## 📱 What is Sanity Studio?

**Sanity Studio is the dashboard/control panel** where you edit content.

Think of it like:
- WordPress Admin Panel
- Shopify Dashboard
- Google Docs

It's a simple website where you type in boxes and click buttons. No coding needed!

## 📄 What is a "Document"?

A **document** is like one page in a notebook.

For example:
- The "Home Hero" document contains: Main title, subtitle, description, and stats
- The "Contact" document contains: Phone numbers, email, address, service hours

Each section of your website has its own document.

## 📢 What does "Publish" mean?

When you create or edit content in Sanity Studio, it's saved as a **draft** first.

Clicking **"Publish"** makes your changes **live** on the actual website.

Think of it like:
- You write an email (draft)
- You click "Send" (publish)
- People can now see it (live on website)

**SAFE FEATURE**: Your website won't break even if you're in the middle of editing. Only published content appears on the website.

---

# Part 2: All Content Types in Your Website

Here's every content type (document type) in your website and what it controls:

## 🏠 Home Page Content

| Document Type | What It Controls | Used By Component |
|---------------|------------------|-------------------|
| `homeHero` | Main banner: title, subtitle, stats | `src/components/home/HeroSection.tsx` |
| `homeServices` | Services overview cards | `src/components/home/ServicesSection.tsx` |
| `about` | About section: achievements, features | `src/components/home/AboutSection.tsx` |
| `contact` | Contact info: phones, email, address | `src/components/home/ContactSection.tsx` |
| `blogsSection` | Blog section titles | `src/components/home/BlogsSection.tsx` |
| `blog` | Individual blog posts | `src/components/home/BlogsSection.tsx` |

## 🖨️ Printer Page Content

| Document Type | Page Key | What It Controls |
|---------------|----------|------------------|
| `pageHero` | `printers` | Printer page banner |
| `pageServices` | `printers` | Printer services list |
| `pageTypes` | `printers` | Types of printers |
| `pageBrands` | `printers` | Printer brands we service |
| `pageIndustries` | `printers` | Industries we serve |
| `pageFAQs` | `printers` | Printer FAQs |

## 📹 CCTV Page Content

| Document Type | Page Key | What It Controls |
|---------------|----------|------------------|
| `pageHero` | `cctv` | CCTV page banner |
| `pageServices` | `cctv` | CCTV services list |
| `pageTypes` | `cctv` | Types of CCTV cameras |
| `pageBrands` | `cctv` | CCTV brands we work with |
| `pageIndustries` | `cctv` | Industries we serve |
| `pageFAQs` | `cctv` | CCTV FAQs |
| `smartFeatures` | - | Smart CCTV features section |
| `pageCTA` | `cctv` | "Monitor Your Property" section |

## 🔐 Door Locks Page Content

| Document Type | Page Key | What It Controls |
|---------------|----------|------------------|
| `pageHero` | `doorlocks` | Door locks page banner |
| `pageServices` | `doorlocks` | Door lock services |
| `pageTypes` | `doorlocks` | Types of door locks |
| `pageBrands` | `doorlocks` | Lock brands we work with |
| `pageIndustries` | `doorlocks` | Industries we serve |
| `pageFAQs` | `doorlocks` | Door locks FAQs |

## 🔥 Fire Alarms Page Content

| Document Type | Page Key | What It Controls |
|---------------|----------|------------------|
| `pageHero` | `firealarms` | Fire alarms page banner |
| `pageServices` | `firealarms` | Fire alarm services |
| `pageTypes` | `firealarms` | Types of fire alarms |
| `pageBrands` | `firealarms` | Fire alarm brands |
| `pageIndustries` | `firealarms` | Industries we serve |
| `pageFAQs` | `firealarms` | Fire alarms FAQs |

## ⭐ Feedback Page Content

| Document Type | What It Controls |
|---------------|------------------|
| `feedbackHero` | Feedback page banner |
| `feedbackForm` | Feedback form labels and options |
| `feedbackTestimonials` | Testimonials section text |
| `feedbackOverview` | Rating overview and stats |

## 🗨️ Other

| Document Type | What It Controls |
|---------------|------------------|
| `footer` | Footer: company info, links |
| `chatWidget` | Chat widget: greeting, contact info |

---

# Part 3: Step-by-Step Safe Setup

## Step 1: Create a Sanity Account (5 minutes)

1. Open your browser
2. Go to: **https://www.sanity.io**
3. Click **"Get Started"** (top right corner)
4. Sign up using:
   - Google account (easiest), OR
   - GitHub account, OR
   - Email and password
5. Verify your email if asked

**✅ You now have a Sanity account!**

## Step 2: Create a New Project (3 minutes)

1. After signing in, you'll see the Sanity dashboard
2. Click **"Create new project"**
3. Fill in:
   - **Project name**: `iTOP Services CMS`
   - **Choose template**: Select **"Clean project with no predefined schemas"**
4. Click **"Create Project"**
5. Wait for it to initialize (about 30 seconds)

**✅ Your Sanity project is created!**

## Step 3: Get Your Project Credentials (2 minutes)

1. Go to: **https://www.sanity.io/manage**
2. Click on your project (**iTOP Services CMS**)
3. Look at the **Project ID** on the dashboard
   - It looks something like: `abc123xy` (8 characters)
   - **Write this down!**
4. Look at **Dataset** - it should say `production`
   - **Write this down too!**

Example:
```
Project ID: abc123xy
Dataset: production
```

## Step 4: Add Credentials to Your Website (2 minutes)

### Option A: Using Lovable (Easiest)

1. In Lovable, click the **"Cloud"** tab (left sidebar)
2. Click **"Secrets"** or **"Environment Variables"**
3. Add these two secrets:
   - Name: `VITE_SANITY_PROJECT_ID` → Value: `your-project-id`
   - Name: `VITE_SANITY_DATASET` → Value: `production`

### Option B: Using .env file (For developers)

Create a file called `.env` in your project root:

```env
VITE_SANITY_PROJECT_ID=abc123xy
VITE_SANITY_DATASET=production
```

**✅ Your website can now connect to Sanity!**

## Step 5: Set Up Sanity Studio (15 minutes)

This is the control panel where you'll edit content.

### 5.1 Create Studio Folder

1. Open a **new folder** on your computer (NOT inside your website folder)
2. Name it: `itop-sanity-studio`

### 5.2 Install Sanity CLI

Open Terminal/Command Prompt and run:

```bash
npm install -g @sanity/cli
```

### 5.3 Create the Studio

```bash
cd itop-sanity-studio
npm create sanity@latest
```

When prompted:
- **Project**: Select your `iTOP Services CMS` project
- **Dataset**: Choose `production`
- **Template**: Select **"Clean project"**
- **Package manager**: npm or yarn (your choice)

### 5.4 Add All Schemas

Copy ALL schema files from the "SANITY_SETUP_GUIDE.md" file into your `schemas` folder.

Your folder structure should look like:
```
itop-sanity-studio/
├── schemas/
│   ├── index.ts
│   ├── homeHero.ts
│   ├── homeServices.ts
│   ├── about.ts
│   ├── contact.ts
│   ├── blogsSection.ts
│   ├── blog.ts
│   ├── footer.ts
│   ├── pageHero.ts
│   ├── pageServices.ts
│   ├── pageTypes.ts
│   ├── pageBrands.ts
│   ├── pageIndustries.ts
│   ├── pageFAQs.ts
│   ├── pageCTA.ts
│   ├── smartFeatures.ts
│   ├── feedbackHero.ts
│   ├── feedbackForm.ts
│   ├── feedbackTestimonials.ts
│   ├── feedbackOverview.ts
│   └── chatWidget.ts
```

### 5.5 Start the Studio

```bash
npm run dev
```

Open: **http://localhost:3333**

**✅ Sanity Studio is running!**

---

# Part 4: Creating Documents with Your Real Content

> **IMPORTANT**: Copy-paste the EXACT content below. Do NOT modify anything.
> This ensures your website looks EXACTLY the same after setup.

---

## 📌 HOME HERO (Homepage Banner)

### Steps:
1. In Sanity Studio, click **"Home Page Hero"** in the left sidebar
2. Click **"Create"** button
3. Fill in these fields EXACTLY:

| Field | Value |
|-------|-------|
| **Main Title** | `Trusted Technology & Security Experts` |
| **Subtitle** | `Serving You Since 2008` |
| **Description** | `Your go-to specialist for reliable hardware and security solutions. For over 17 years, we've proudly supported homes, offices, and institutions across Delhi NCR.` |

4. Click **"Add item"** under Statistics (4 times) and fill:

| Stat 1 | Stat 2 | Stat 3 | Stat 4 |
|--------|--------|--------|--------|
| Value: `17+` | Value: `1000+` | Value: `24/7` | Value: `100%` |
| Label: `Years Experience` | Label: `Happy Customers` | Label: `Support Available` | Label: `Genuine Parts` |

5. Click **"Publish"** button (top right)

---

## 📌 HOME SERVICES (Services Overview)

### Steps:
1. Click **"Home Services Section"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Section Title** | `Our Services` |
| **Section Description** | `Comprehensive technology and security solutions for homes, offices, and institutions` |

4. Add 4 services:

**Service 1:**
- Title: `Printers`
- Description: `Repairs, toner refills, leasing, sales, Canon/HP/Epson support, on-site technicians.`
- Link Path: `/printers`
- Color Class: `bg-gray-100 text-gray-800`

**Service 2:**
- Title: `CCTV Systems`
- Description: `Indoor/outdoor cameras, IP systems, cloud storage, demo videos, maintenance plans.`
- Link Path: `/cctv`
- Color Class: `bg-blue-100 text-blue-800`

**Service 3:**
- Title: `Door Locks`
- Description: `Smart locks, biometric/keycard access, mobile app integration, full installation.`
- Link Path: `/door-locks`
- Color Class: `bg-green-100 text-green-800`

**Service 4:**
- Title: `Fire Alarms`
- Description: `Smoke/heat/CO sensors, regulatory compliance, emergency support, AMCs.`
- Link Path: `/fire-alarms`
- Color Class: `bg-red-100 text-red-800`

5. Click **"Publish"**

---

## 📌 ABOUT SECTION

### Steps:
1. Click **"About Section"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Section Title** | `About iTOP Services` |
| **Main Description** | `Since 2008, iTOP Services has been Delhi NCR's trusted partner for comprehensive technology solutions. What started as a small printer repair service has grown into a full-service technology and security company, serving hundreds of satisfied customers across residential and commercial sectors.` |
| **Secondary Description** | `We specialize in printer services, CCTV surveillance systems, smart door locks, and fire alarm installations. Our team of certified technicians brings years of experience and expertise to every project, ensuring reliable solutions that keep your technology running smoothly and your property secure.` |
| **Why Choose Us Title** | `Why Choose iTOP Services?` |
| **Commitment Title** | `Our Commitment` |
| **Commitment Description** | `At iTOP Services, we understand that technology is essential to your daily life and business operations. That's why we're committed to providing fast, reliable, and cost-effective solutions that minimize downtime and maximize your peace of mind.` |
| **Secondary Commitment** | `Whether you need emergency printer repair, want to upgrade to a smart security system, or require regular maintenance for your office equipment, we're here to help with professional service and genuine care for our customers' satisfaction.` |

4. Add 4 achievements:

| # | Icon | Number | Label | Description |
|---|------|--------|-------|-------------|
| 1 | `Users` | `500+` | `Happy Customers` | `Homes and businesses served across Delhi NCR` |
| 2 | `Clock` | `16+` | `Years Experience` | `Established in 2008, serving the community` |
| 3 | `Award` | `50+` | `Brands Supported` | `Wide range of technology brands and models` |
| 4 | `CheckCircle` | `24/7` | `Support Available` | `Emergency services and customer support` |

5. Add 6 features (one per line):
```
Certified and experienced technicians
Same-day service for most repairs
Genuine parts and quality materials
Comprehensive warranty on all services
Transparent pricing with no hidden costs
Free consultation and site surveys
```

6. Click **"Publish"**

---

## 📌 CONTACT SECTION

### Steps:
1. Click **"Contact Information"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Section Title** | `Contact iTOP Services` |
| **Subtitle/Badge** | `🚀 Get Expert Help Now` |
| **Description** | `Ready to transform your tech experience? Our certified experts are standing by to provide immediate assistance, professional consultations, and comprehensive solutions tailored to your needs.` |
| **Email Address** | `sachidanand@live.in` |
| **WhatsApp Number** | `919849655559` |
| **CTA Title** | `Ready to Get Started?` |
| **CTA Description** | `Don't let tech problems slow you down. Contact our expert team today for fast, reliable solutions that get your devices working perfectly.` |

4. Add Phone Numbers:
```
+91 9849655559
+91 9990820830
```

5. Fill Address:
- Line 1: `224, B1, DDA Flats`
- Line 2: `Loknayak Puram`
- City & PIN: `New Delhi 110041`

6. Fill Service Hours:
- Monday-Saturday: `9:00 AM - 8:00 PM`
- Sunday: `10:00 AM - 6:00 PM`
- Emergency: `Available on Call`

7. Add Service Areas (12 items):
```
Central Delhi
South Delhi
North Delhi
East Delhi
West Delhi
Gurgaon
Noida
Faridabad
Ghaziabad
Greater Noida
Dwarka
Rohini
```

8. Click **"Publish"**

---

## 📌 FOOTER

### Steps:
1. Click **"Footer"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Company Name** | `iTOP Services` |
| **Tagline** | `Tech Solutions` |
| **Description** | `Your trusted partner for technology and security solutions since 2008.` |
| **Copyright Text** | `© 2024 iTOP Services. All rights reserved. | Serving Delhi NCR since 2008` |

4. Add Quick Links (4 items):
- Label: `About` → Section ID: `about`
- Label: `Services` → Section ID: `services`
- Label: `Contact` → Section ID: `contact`
- Label: `Blogs` → Section ID: `blogs`

5. Add Service Links (4 items):
- Label: `Printers` → Path: `/printers`
- Label: `CCTV Systems` → Path: `/cctv`
- Label: `Door Locks` → Path: `/door-locks`
- Label: `Fire Alarms` → Path: `/fire-alarms`

6. Fill Contact Info:
- Phone: `+91 9990820830`
- Email: `sachidanand@live.in`
- Address: `224, B1, DDA Flats, Loknayak Puram, New Delhi 110041`

7. Fill Social Links:
- Facebook URL: `#`
- Instagram URL: `#`
- WhatsApp URL: `https://wa.me/919990820830`

8. Click **"Publish"**

---

## 📌 BLOGS SECTION

### Steps:
1. Click **"Blogs Section"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Section Title** | `Latest Blogs & FAQs` |
| **Section Description** | `Stay updated with the latest trends and insights in technology and security` |
| **View All Button Text** | `View Testimonials & Feedback` |

4. Click **"Publish"**

---

## 📌 BLOG POSTS (Create 4 documents)

### Blog Post 1:
| Field | Value |
|-------|-------|
| **ID** | `1` |
| **Title** | `The Future of Home Security with Smart Door Locks` |
| **Excerpt** | `Discover how smart door locks work, their key benefits like remote access and activity logs, and the best brands available in India including Qubo, Yale, and Godrej.` |
| **Author** | `Alice Johnson` |
| **Date** | `2024-01-20` |
| **Category** | `Door Locks` |

### Blog Post 2:
| Field | Value |
|-------|-------|
| **ID** | `2` |
| **Title** | `Top 5 CCTV Cameras for Business Surveillance` |
| **Excerpt** | `A comprehensive guide to choosing the right CCTV system for your business, featuring top brands like CP Plus, Hikvision, and Dahua with placement tips.` |
| **Author** | `Bob Williams` |
| **Date** | `2024-02-15` |
| **Category** | `CCTV` |

### Blog Post 3:
| Field | Value |
|-------|-------|
| **ID** | `3` |
| **Title** | `Ensuring Fire Safety: A Guide to Modern Fire Alarms` |
| **Excerpt** | `Learn about different types of fire alarm systems, recommended brands like Honeywell and Ceasefire, and the best locations for installation.` |
| **Author** | `Charlie Brown` |
| **Date** | `2024-03-10` |
| **Category** | `Fire Alarms` |

### Blog Post 4:
| Field | Value |
|-------|-------|
| **ID** | `4` |
| **Title** | `Laser vs Inkjet Printers: Which One Suits Your Needs?` |
| **Excerpt** | `Compare inkjet and laser printers to make the right choice based on your usage, budget, and printing needs for home or business use.` |
| **Author** | `Tech Expert` |
| **Date** | `2024-03-15` |
| **Category** | `Printers` |

**Publish each blog post!**

---

## 📌 PRINTER PAGE HERO

### Steps:
1. Click **"Service Page Hero"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Page** | Select: `Printers` |
| **Title** | `Comprehensive Printer Solutions` |
| **Subtitle** | `Sales, Service, Repairs & Support — Everything You Need for Seamless Printing` |
| **Description** | `From home inkjet printers to commercial laser systems, we provide complete printer solutions including installation, repair, maintenance, and supplies for all major brands.` |
| **Primary Button Text** | `Get Free Quote` |
| **Secondary Button Text** | `Explore Services` |

4. Click **"Publish"**

---

## 📌 CCTV PAGE HERO

### Steps:
1. Click **"Service Page Hero"** in sidebar
2. Click **"Create"** (new document)
3. Fill in:

| Field | Value |
|-------|-------|
| **Page** | Select: `CCTV` |
| **Title** | `CCTV Camera Installation & Surveillance Systems` |
| **Subtitle** | `From Indoor Monitoring to Smart AI-Powered Security – Keep an Eye with Confidence` |
| **Description** | `Professional CCTV installation and surveillance solutions for homes, businesses, and institutions. From basic monitoring to advanced AI-powered security systems.` |
| **Primary Button Text** | `Explore Camera Types` |
| **Secondary Button Text** | `Smart Features` |

4. Click **"Publish"**

---

## 📌 DOOR LOCKS PAGE HERO

### Steps:
1. Click **"Service Page Hero"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Page** | Select: `Door Locks` |
| **Title** | `Smart & Secure Door Lock Solutions` |
| **Subtitle** | `From Traditional Locks to Smart Access Systems – Install, Repair & Upgrade with Confidence` |
| **Description** | `Expert door lock installation, repair, and upgrade services for homes and businesses. From mechanical locks to smart biometric systems, we ensure your security.` |
| **Primary Button Text** | `Get Free Quote` |
| **Secondary Button Text** | `Explore Lock Types` |

4. Click **"Publish"**

---

## 📌 FIRE ALARMS PAGE HERO

### Steps:
1. Click **"Service Page Hero"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Page** | Select: `Fire Alarms` |
| **Title** | `Fire Alarm & Detection Systems` |
| **Subtitle** | `From Smoke Detectors to Integrated Alarm Systems – Detect Early, Respond Fast, Stay Safe` |
| **Description** | `Professional fire alarm system installation and maintenance for homes, offices, and industrial facilities. Advanced detection systems with 24/7 monitoring and emergency response capabilities.` |
| **Primary Button Text** | `Schedule Fire Safety Audit` |
| **Secondary Button Text** | `Explore Alarm Types` |

4. Click **"Publish"**

---

## 📌 FEEDBACK HERO

### Steps:
1. Click **"Feedback Hero"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Title** | `What Our Customers Say` |
| **Subtitle** | `Real feedback from our happy clients — across printer repair, smart lock installs, CCTV setup, and more` |
| **Rating** | `4.8/5` |
| **Review Count** | `Based on 150+ reviews` |

4. Click **"Publish"**

---

## 📌 CHAT WIDGET

### Steps:
1. Click **"Chat Widget"** in sidebar
2. Click **"Create"**
3. Fill in:

| Field | Value |
|-------|-------|
| **Greeting** | `Hello! 👋 Welcome to iTOP Services. How can I help you today? You can type your question or choose a topic below.` |
| **Company Name** | `iTOP Services Support` |
| **Online Status** | `Online • Usually replies instantly` |
| **Footer Text** | `💬 iTOP Services • Delhi NCR • +91 9990820830` |

4. Fill Contact Info:
- Phone: `+919990820830`
- Email: `sachidanand@live.in`
- WhatsApp: `919990820830`
- Address: `224, B1, DDA Flats, Loknayak Puram, New Delhi 110041`

5. Click **"Publish"**

---

# Part 5: Verification & Safety Checks

## ✅ How to Verify Content Appears Correctly

1. **Wait 30 seconds** after publishing (for CDN cache to update)
2. **Refresh your website** (Ctrl+R or Cmd+R)
3. **Check each section** matches what you entered in Sanity

## 🔄 How to Roll Back If Something Goes Wrong

### Method 1: Edit in Sanity (Easiest)
1. Open Sanity Studio
2. Find the document with wrong content
3. Edit it to fix the mistake
4. Click **"Publish"**
5. Refresh your website

### Method 2: Your Website Has Fallbacks (Automatic Safety Net)

**GOOD NEWS**: Your website code already has **fallback content** built in!

This means:
- If Sanity is empty → Website shows the original content
- If Sanity has errors → Website shows the original content
- If you delete a document → Website shows the original content

**Your website will NEVER show blank or broken sections!**

### Method 3: Delete and Start Over

1. In Sanity Studio, find the wrong document
2. Click the **"..."** menu
3. Click **"Delete"**
4. Create a new document with correct content

---

# Part 6: What NOT to Touch

## ❌ DO NOT modify these files in the code:

| File | Reason |
|------|--------|
| `src/lib/sanity.ts` | Contains the connection to Sanity |
| `src/hooks/useCMSContent.ts` | Contains fallback content & hooks |
| `src/components/ui/*` | UI components (buttons, cards, etc.) |
| Any `.tsx` or `.ts` files | These control layout, not content |

## ❌ DO NOT change in Sanity:

| Field | Reason |
|-------|--------|
| `page` field values | Must match exactly: `printers`, `cctv`, `doorlocks`, `firealarms` |
| `sectionId` values in footer | Must match IDs in the website |
| `path` values | Must match website routes like `/printers`, `/cctv` |
| Icon names | Must be exact Lucide icon names |

## ✅ SAFE to change in Sanity:

| Content Type | Safe to Change |
|--------------|----------------|
| Titles | ✅ Yes |
| Descriptions | ✅ Yes |
| Phone numbers | ✅ Yes |
| Email addresses | ✅ Yes |
| Addresses | ✅ Yes |
| Stats/numbers | ✅ Yes |
| Service descriptions | ✅ Yes |
| FAQ questions and answers | ✅ Yes |
| Blog post content | ✅ Yes |
| Brand names | ✅ Yes |

---

# Quick Reference Card

## Sanity Studio URL
After setup: `http://localhost:3333`

## Key Credentials (Replace with yours)
- Project ID: `your-project-id`
- Dataset: `production`

## Document Types Summary

| Document | Creates How Many? |
|----------|-------------------|
| homeHero | 1 document |
| homeServices | 1 document |
| about | 1 document |
| contact | 1 document |
| footer | 1 document |
| blogsSection | 1 document |
| blog | Multiple (one per blog post) |
| pageHero | 4 documents (one per service page) |
| pageServices | 4 documents |
| pageTypes | 4 documents |
| pageBrands | 4 documents |
| pageIndustries | 4 documents |
| pageFAQs | 4 documents |
| smartFeatures | 1 document |
| pageCTA | 1 document |
| feedbackHero | 1 document |
| feedbackForm | 1 document |
| feedbackTestimonials | 1 document |
| feedbackOverview | 1 document |
| chatWidget | 1 document |

---

## 🎉 Congratulations!

Once you complete all the steps above, your website will:
- Look **exactly the same** as before
- Be **fully editable** from Sanity Studio
- **Never break** even if Sanity has issues (thanks to fallbacks)
- Allow you to update content **without touching any code**

---

## Need Help?

If you get stuck:
1. Re-read this guide carefully
2. Make sure all `page` field values match exactly
3. Check that you clicked "Publish" on every document
4. Wait 30-60 seconds and refresh your website

**The website will always show fallback content if something is wrong with Sanity, so don't worry - you can't break anything!**
