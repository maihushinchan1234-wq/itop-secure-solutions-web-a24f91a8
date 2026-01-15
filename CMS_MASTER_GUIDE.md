# 📘 Website CMS Master Guide
## iTOP Services - Complete Content Management Reference

---

> **For:** Content Managers, Shop Owners, Non-Technical Staff  
> **Purpose:** Safely update website content without breaking anything  
> **Version:** 1.0 | Last Updated: January 2025

---

## 📋 Table of Contents

1. [Welcome & How This Guide Works](#-welcome--how-this-guide-works)
2. [Quick Safety Rules (READ FIRST!)](#-quick-safety-rules-read-first)
3. [Understanding Sanity Studio](#-understanding-sanity-studio)
4. [Complete Section Reference](#-complete-section-reference)
   - [Home Page Sections](#-home-page-sections)
   - [Service Pages (Printers, CCTV, Door Locks, Fire Alarms)](#-service-pages)
   - [Feedback Page Sections](#-feedback-page-sections)
   - [Global/Shared Sections](#-globalshared-sections)
5. [Safe Editing Best Practices](#-safe-editing-best-practices)
6. [Common Mistakes to Avoid](#-common-mistakes-to-avoid)
7. [Troubleshooting](#-troubleshooting)
8. [Emergency Rollback Instructions](#-emergency-rollback-instructions)

---

# 🎉 Welcome & How This Guide Works

This guide explains **every section** of your website that you can edit from Sanity Studio (your content management dashboard).

**What you CAN do:**
- ✅ Change text (titles, descriptions, phone numbers)
- ✅ Update statistics and numbers
- ✅ Add, edit, or remove services, FAQs, and brands
- ✅ Update contact information
- ✅ Change button text

**What you should NOT do:**
- ❌ Change technical field names (like "page key" values)
- ❌ Delete required fields
- ❌ Change URL paths unless you understand the impact
- ❌ Leave required fields empty

---

# 🛡️ Quick Safety Rules (READ FIRST!)

### Before Making ANY Changes:

1. **📸 Take a Screenshot** - Before editing, take a screenshot of the current content
2. **✏️ Edit One Thing at a Time** - Make small changes, publish, verify
3. **👀 Preview Before Publishing** - Always check your changes look correct
4. **🚫 Don't Delete Everything** - If a section has multiple items, keep at least one
5. **💾 Publish = Live** - Only click "Publish" when you're sure

### The "Safe Zone" Rule:

| ✅ SAFE TO CHANGE | ⚠️ BE CAREFUL | ❌ NEVER CHANGE |
|-------------------|---------------|-----------------|
| Titles & headings | Button text | Page key values |
| Descriptions | Link URLs | Icon names |
| Phone numbers | Color classes | Field structure |
| Email addresses | Image URLs | Technical IDs |
| Statistics/numbers | Feature lists | Slug patterns |

---

# 📱 Understanding Sanity Studio

## What is Sanity Studio?

Sanity Studio is your **content dashboard** - think of it like WordPress Admin or Google Docs, but for your website content.

## Basic Navigation:

```
┌─────────────────────────────────────────────────────────────┐
│  SANITY STUDIO                                              │
├──────────────────┬──────────────────────────────────────────┤
│                  │                                          │
│  📁 Content Types│     [EDITOR AREA]                        │
│                  │                                          │
│  • Home Page Hero│     Title: [______________]              │
│  • Home Services │     Description: [________]              │
│  • About Section │     ...                                  │
│  • Contact Info  │                                          │
│  • Footer        │     [Save]  [Publish ▼]                  │
│  • Service Pages │                                          │
│  • ...           │                                          │
│                  │                                          │
└──────────────────┴──────────────────────────────────────────┘
```

## Key Actions:

| Button | What It Does |
|--------|--------------|
| **Save** | Saves your work as a draft (not live yet) |
| **Publish** | Makes your changes LIVE on the website |
| **Discard changes** | Throws away unsaved changes |
| **Create** | Makes a new document |

## Document States:

- **Draft** (yellow dot) = Saved but not live
- **Published** (green dot) = Live on website
- **Unpublished changes** (yellow dot + green) = Live version exists, but you have new edits

---

# 📑 Complete Section Reference

---

## 🏠 HOME PAGE SECTIONS

---

### 1. Home Page Hero

**📍 Location in Sanity:** `Home Page Hero`  
**🌐 Appears on:** Homepage - Top banner section  
**🔗 Component:** `HeroSection.tsx`

#### What This Section Controls:
The main banner visitors see when they first visit your website. This is your "first impression" area.

#### Editable Fields:

| Field | What It Is | Example | Safe to Edit? |
|-------|-----------|---------|---------------|
| **Main Title** | Big headline text | "Trusted Technology & Security Experts" | ✅ Yes |
| **Subtitle** | Smaller text under title | "Serving You Since 2008" | ✅ Yes |
| **Description** | Longer paragraph | "Your go-to specialist for..." | ✅ Yes |
| **Statistics** | Number cards at bottom | "17+ Years Experience" | ✅ Yes |

#### Statistics Details:
Each statistic has:
- **Value**: The number (e.g., "17+", "1000+", "24/7")
- **Label**: What the number means (e.g., "Years Experience")

#### ✅ Correct Edit Example:
```
Before: "17+ Years Experience"
After:  "18+ Years Experience"
```

#### ❌ Incorrect Edit Example:
```
Don't leave the value empty: "" Years Experience (BROKEN!)
```

#### Dependencies:
- None - this section is independent

---

### 2. Home Services Section

**📍 Location in Sanity:** `Home Services Section`  
**🌐 Appears on:** Homepage - Services overview cards  
**🔗 Component:** `ServicesSection.tsx`

#### What This Section Controls:
The 4 service cards showing Printers, CCTV, Door Locks, and Fire Alarms.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Section Title** | Heading above cards | ✅ Yes |
| **Section Description** | Subtext under heading | ✅ Yes |
| **Services (array)** | The 4 service cards | ✅ Yes (see rules below) |

#### Service Card Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| Title | Card heading | ✅ Yes |
| Description | Card text | ✅ Yes |
| Link Path | Where card links to | ⚠️ Careful - must match page URL |
| Color Class | Card color | ⚠️ Careful - use valid Tailwind colors |

#### ⚠️ Special Rules for Link Paths:
These MUST match your actual page URLs:
- `/printers` → Printers page
- `/cctv` → CCTV page  
- `/door-locks` → Door Locks page
- `/fire-alarms` → Fire Alarms page

**Never change these unless you're also changing the website structure!**

#### ⚠️ Valid Color Classes:
```
bg-gray-100 text-gray-800    (Printers - gray)
bg-blue-100 text-blue-800    (CCTV - blue)
bg-green-100 text-green-800  (Door Locks - green)
bg-red-100 text-red-800      (Fire Alarms - red)
```

---

### 3. About Section

**📍 Location in Sanity:** `About Section`  
**🌐 Appears on:** Homepage - About iTOP Services area  
**🔗 Component:** `AboutSection.tsx`

#### What This Section Controls:
Company information, achievements, features list, and commitment statement.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Section Title** | Main heading | ✅ Yes |
| **Main Description** | First paragraph | ✅ Yes |
| **Secondary Description** | Second paragraph | ✅ Yes |
| **Achievements** | 4 stat boxes | ✅ Yes (values & labels) |
| **Why Choose Us Title** | Feature section heading | ✅ Yes |
| **Features List** | Bullet points | ✅ Yes |
| **Commitment Title** | Commitment section heading | ✅ Yes |
| **Commitment Description** | Commitment paragraphs | ✅ Yes |

#### Achievement Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Icon | ⚠️ Careful | Use only: Users, Clock, Award, CheckCircle |
| Number | ✅ Yes | e.g., "500+", "16+", "24/7" |
| Label | ✅ Yes | e.g., "Happy Customers" |
| Description | ✅ Yes | Short explanation |

#### ⚠️ Valid Icon Names:
Only use these exact names (case-sensitive):
- `Users`
- `Clock`
- `Award`
- `CheckCircle`

---

### 4. Contact Information

**📍 Location in Sanity:** `Contact Information`  
**🌐 Appears on:** Homepage - Contact section  
**🔗 Component:** `ContactSection.tsx`

#### What This Section Controls:
All contact details, phone numbers, email, address, and service hours.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Section Title** | Heading | ✅ Yes |
| **Subtitle/Badge** | Small badge text | ✅ Yes |
| **Description** | Contact intro text | ✅ Yes |
| **Phone Numbers** | List of phone numbers | ✅ Yes |
| **Email Address** | Contact email | ✅ Yes |
| **WhatsApp Number** | For WhatsApp button | ✅ Yes |
| **Address** | Office address | ✅ Yes |
| **Service Hours** | Operating hours | ✅ Yes |
| **Service Areas** | Locations served | ✅ Yes |
| **CTA Title** | Call-to-action heading | ✅ Yes |
| **CTA Description** | Call-to-action text | ✅ Yes |

#### ⚠️ WhatsApp Number Format:
Enter WITHOUT the + sign:
```
✅ Correct: 919849655559
❌ Wrong:   +919849655559
❌ Wrong:   +91 9849 655559
```

#### Address Structure:
- **Line 1**: Building/flat number
- **Line 2**: Street/locality name  
- **City & PIN**: City and postal code

---

### 5. Blogs Section

**📍 Location in Sanity:** `Blogs Section`  
**🌐 Appears on:** Homepage - Blog area  
**🔗 Component:** `BlogsSection.tsx`

#### What This Section Controls:
The blog section header and "View All" button.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Section Title** | Blog section heading | ✅ Yes |
| **Section Description** | Subtext | ✅ Yes |
| **View All Button Text** | Button label | ✅ Yes |

---

### 6. Blog Posts

**📍 Location in Sanity:** `Blog Posts`  
**🌐 Appears on:** Homepage - Individual blog cards  
**🔗 Component:** `BlogsSection.tsx`

#### What This Section Controls:
Individual blog post entries displayed on the homepage.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **ID** | Unique number | ⚠️ Keep unique |
| **Title** | Blog post title | ✅ Yes |
| **Excerpt** | Short preview text | ✅ Yes |
| **Author** | Writer's name | ✅ Yes |
| **Date** | Publication date | ✅ Yes |
| **Category** | Topic category | ✅ Yes |

#### ✅ Valid Categories:
- Door Locks
- CCTV
- Fire Alarms
- Printers

---

## 🔧 SERVICE PAGES

Service pages (Printers, CCTV, Door Locks, Fire Alarms) share the same structure. Each page has these sections:

- Hero (banner)
- Services
- Types
- Brands
- Industries
- FAQs
- CTA (Call to Action)

### ⚠️ IMPORTANT: Page Key System

Each service page section uses a **"page" field** to determine which page it belongs to:

| Page Key | Which Page |
|----------|------------|
| `printers` | Printers page |
| `cctv` | CCTV page |
| `doorlocks` | Door Locks page |
| `firealarms` | Fire Alarms page |

**🛑 NEVER change the page key value!** This links the content to the correct page.

---

### 7. Service Page Hero

**📍 Location in Sanity:** `Service Page Hero`  
**🌐 Appears on:** Top of each service page

#### What This Section Controls:
The main banner at the top of each service page.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Page** | Which service page | ❌ NEVER CHANGE |
| **Title** | Main headline | ✅ Yes |
| **Subtitle** | Secondary headline | ✅ Yes |
| **Description** | Intro paragraph | ✅ Yes |
| **Primary Button Text** | First button label | ✅ Yes |
| **Secondary Button Text** | Second button label | ✅ Yes |

#### You need ONE document for EACH page:
- One with page = `printers`
- One with page = `cctv`
- One with page = `doorlocks`
- One with page = `firealarms`

---

### 8. Service Page - Services Section

**📍 Location in Sanity:** `Service Page - Services Section`  
**🌐 Appears on:** Services section of each service page

#### What This Section Controls:
The list of services offered for each service category.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Page** | Which service page | ❌ NEVER CHANGE |
| **Section Title** | Heading | ✅ Yes |
| **Section Description** | Subtext | ✅ Yes |
| **Services (array)** | Service cards | ✅ Yes |
| **Repair Section** | Optional repair info | ✅ Yes |

#### Service Item Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Icon | ⚠️ Careful | Must be valid Lucide icon name |
| Title | ✅ Yes | Service name |
| Description | ✅ Yes | Service details |
| Features | ✅ Yes | Bullet points (optional) |

#### ⚠️ Valid Icon Names for Services:
```
Printer, Camera, Lock, Flame, Shield, Settings, Wrench, 
HardDrive, AlertTriangle, Package, Truck, Zap, Smartphone,
Key, Bell
```

---

### 9. Service Page - Types Section

**📍 Location in Sanity:** `Service Page - Types Section`  
**🌐 Appears on:** Types section of each service page

#### What This Section Controls:
Different types/categories of products (e.g., "Dome Cameras", "Laser Printers")

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Page** | Which service page | ❌ NEVER CHANGE |
| **Section Title** | Heading | ✅ Yes |
| **Section Description** | Subtext | ✅ Yes |
| **Types (array)** | Product type cards | ✅ Yes |

#### Type Item Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Title | ✅ Yes | Type name |
| Description | ✅ Yes | Type details |
| Image | ✅ Yes | Image URL or uploaded image |
| Features | ✅ Yes | Feature bullet points |
| Best For | ✅ Yes | Who this is ideal for |

---

### 10. Service Page - Brands Section

**📍 Location in Sanity:** `Service Page - Brands Section`  
**🌐 Appears on:** Brands section of each service page

#### What This Section Controls:
List of brands you work with for each service category.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Page** | Which service page | ❌ NEVER CHANGE |
| **Section Title** | Heading | ✅ Yes |
| **Section Description** | Subtext | ✅ Yes |
| **Brands (array)** | Brand cards | ✅ Yes |
| **CTA Title** | Bottom call-to-action heading | ✅ Yes |
| **CTA Description** | CTA text | ✅ Yes |
| **CTA Button Text** | Button label | ✅ Yes |

#### Brand Item Fields:

| Field | Safe to Edit? |
|-------|---------------|
| Brand Name | ✅ Yes |
| Logo (URL or upload) | ✅ Yes |
| Description | ✅ Yes |
| Specialties | ✅ Yes |

---

### 11. Service Page - Industries Section

**📍 Location in Sanity:** `Service Page - Industries Section`  
**🌐 Appears on:** Industries section of each service page

#### What This Section Controls:
Industries/sectors you serve for each service category.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Page** | Which service page | ❌ NEVER CHANGE |
| **Section Title** | Heading | ✅ Yes |
| **Section Description** | Subtext | ✅ Yes |
| **Industries (array)** | Industry cards | ✅ Yes |

#### Industry Item Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Icon | ⚠️ Careful | Must be valid Lucide icon |
| Title | ✅ Yes | Industry name |
| Description | ✅ Yes | How you serve them |
| Solutions | ✅ Yes | Solution bullet points |
| Image | ✅ Yes | Optional image |

#### ⚠️ Valid Industry Icon Names:
```
Building, Home, School, ShoppingCart, Factory, Hospital, 
Landmark, Warehouse, Store, Hotel
```

---

### 12. Service Page - FAQs Section

**📍 Location in Sanity:** `Service Page - FAQs Section`  
**🌐 Appears on:** FAQ section of each service page

#### What This Section Controls:
Frequently asked questions and the bottom call-to-action.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Page** | Which service page | ❌ NEVER CHANGE |
| **Section Title** | Heading | ✅ Yes |
| **Section Description** | Subtext | ✅ Yes |
| **FAQs (array)** | Question/answer pairs | ✅ Yes |
| **Categories** | Grouped FAQs (optional) | ✅ Yes |
| **CTA Title** | Bottom CTA heading | ✅ Yes |
| **CTA Description** | CTA text | ✅ Yes |
| **CTA Buttons** | Action buttons | ⚠️ Careful |

#### FAQ Item Fields:

| Field | Safe to Edit? |
|-------|---------------|
| Question | ✅ Yes |
| Answer | ✅ Yes |

#### CTA Button Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Text | ✅ Yes | Button label |
| Action | ⚠️ Careful | URL or action path |
| Variant | ⚠️ Careful | `primary` or `secondary` |

---

### 13. Service Page - CTA Section

**📍 Location in Sanity:** `Service Page - CTA Section`  
**🌐 Appears on:** CCTV page (Monitor Your Property section)

#### What This Section Controls:
The "Monitor Your Property" call-to-action banner.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Page** | Which service page | ❌ NEVER CHANGE |
| **Title** | CTA heading | ✅ Yes |
| **Description** | CTA text | ✅ Yes |
| **Primary Button Text** | First button label | ✅ Yes |
| **Primary Button Link** | First button URL | ⚠️ Careful |
| **Secondary Button Text** | Second button label | ✅ Yes |
| **Secondary Button Link** | Second button URL | ⚠️ Careful |

---

### 14. Smart Features (CCTV Only)

**📍 Location in Sanity:** `Smart Features (CCTV)`  
**🌐 Appears on:** CCTV page only - Smart features section

#### What This Section Controls:
The smart CCTV features grid on the CCTV page.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Section Title** | Heading | ✅ Yes |
| **Section Description** | Subtext | ✅ Yes |
| **Features (array)** | Feature cards | ✅ Yes |

#### Feature Item Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Icon | ⚠️ Careful | Valid: Shield, Smartphone, Cloud, Eye, FileText, Lock |
| Title | ✅ Yes | Feature name |
| Description | ✅ Yes | Feature details |

---

## ⭐ FEEDBACK PAGE SECTIONS

---

### 15. Feedback Page Hero

**📍 Location in Sanity:** `Feedback Page Hero`  
**🌐 Appears on:** Feedback page - Top banner

#### What This Section Controls:
The header of the feedback/testimonials page.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Title** | Main heading | ✅ Yes |
| **Subtitle** | Description text | ✅ Yes |
| **Rating** | Overall rating display | ✅ Yes |
| **Review Count** | "Based on X reviews" | ✅ Yes |

---

### 16. Feedback Form

**📍 Location in Sanity:** `Feedback Form`  
**🌐 Appears on:** Feedback page - Form section

#### What This Section Controls:
The feedback submission form labels and options.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Section Title** | Form heading | ✅ Yes |
| **Section Description** | Form intro text | ✅ Yes |
| **Form Labels** | Field labels | ✅ Yes |
| **Services List** | Dropdown options | ✅ Yes |
| **Submit Button Text** | Button label | ✅ Yes |
| **Note Text** | Disclaimer text | ✅ Yes |
| **Google Review Section** | Google review CTA | ✅ Yes |

#### Form Labels Sub-fields:

| Field | What It Is |
|-------|-----------|
| name | "Your Name" label |
| location | "Your Location" label |
| service | "Service Used" label |
| rating | "Your Rating" label |
| feedback | "Your Feedback" label |
| photo | "Upload Photo" label |

#### ⚠️ Google Review Link:
Update the `link` field with your actual Google Business review URL:
```
https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review
```

---

### 17. Feedback Testimonials

**📍 Location in Sanity:** `Feedback Testimonials`  
**🌐 Appears on:** Feedback page - Testimonials section

#### What This Section Controls:
The customer testimonials display section.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Section Title** | Heading | ✅ Yes |
| **Section Description** | Subtext | ✅ Yes |
| **Empty State Title** | Shown when no reviews | ✅ Yes |
| **Empty State Description** | Shown when no reviews | ✅ Yes |
| **Verified Badge Text** | Badge label | ✅ Yes |
| **Bottom Text** | Text at section bottom | ✅ Yes |

---

### 18. Feedback Overview

**📍 Location in Sanity:** `Feedback Overview`  
**🌐 Appears on:** Feedback page - Rating overview section

#### What This Section Controls:
The rating statistics and "Why Customers Love Us" section.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Rating Title** | Rating section heading | ✅ Yes |
| **Why Love Us Title** | Stats section heading | ✅ Yes |
| **Overall Rating** | Main rating number | ✅ Yes |
| **Review Count** | Total review count text | ✅ Yes |
| **Rating Distribution** | Star breakdown | ✅ Yes |
| **Stats** | Stat cards | ✅ Yes |

#### Rating Distribution Fields:

| Field | What It Is |
|-------|-----------|
| stars | 5, 4, 3, 2, or 1 |
| percentage | Bar fill percentage |
| count | Number of reviews |

#### Stats Item Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Icon | ⚠️ Careful | Valid: Clock, Users, Award, CheckCircle |
| Title | ✅ Yes | Stat heading |
| Description | ✅ Yes | Stat details |

---

## 🌐 GLOBAL/SHARED SECTIONS

---

### 19. Footer

**📍 Location in Sanity:** `Footer`  
**🌐 Appears on:** Bottom of ALL pages

#### What This Section Controls:
The website footer shown on every page.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Company Name** | Business name | ✅ Yes |
| **Tagline** | Slogan | ✅ Yes |
| **Description** | Short about text | ✅ Yes |
| **Quick Links** | Navigation links | ⚠️ Careful |
| **Service Links** | Service page links | ⚠️ Careful |
| **Contact Info** | Phone, email, address | ✅ Yes |
| **Copyright** | Copyright text | ✅ Yes |
| **Social Links** | Social media URLs | ✅ Yes |

#### Quick Links Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Label | ✅ Yes | Link text |
| Section ID | ⚠️ Careful | Must match: `about`, `services`, `contact`, `blogs` |

#### Service Links Fields:

| Field | Safe to Edit? | Notes |
|-------|---------------|-------|
| Label | ✅ Yes | Link text |
| Path | ⚠️ Careful | Must match: `/printers`, `/cctv`, `/door-locks`, `/fire-alarms` |

---

### 20. Chat Widget

**📍 Location in Sanity:** `Chat Widget`  
**🌐 Appears on:** Bottom-right corner of ALL pages

#### What This Section Controls:
The chat help widget that appears on every page.

#### Editable Fields:

| Field | What It Is | Safe to Edit? |
|-------|-----------|---------------|
| **Greeting** | Welcome message | ✅ Yes |
| **Company Name** | Chat header | ✅ Yes |
| **Online Status** | Status text | ✅ Yes |
| **Contact Info** | Phone, email, WhatsApp, address | ✅ Yes |
| **Footer Text** | Chat footer | ✅ Yes |

---

# ✅ Safe Editing Best Practices

## The Golden Rules:

### 1. One Change at a Time
Make ONE change → Publish → Check website → Repeat

### 2. Keep a Backup
Before major changes, copy the current content to a text file.

### 3. Test Before Publishing
Use the preview feature (if available) before clicking Publish.

### 4. Maintain Consistency
- Keep similar formatting across sections
- Use the same phone number format everywhere
- Keep the same writing style

### 5. Check All Pages
After editing shared content (Footer, Contact), check ALL pages to ensure nothing looks broken.

## Content Formatting Tips:

| Type | Good Format | Bad Format |
|------|-------------|------------|
| Phone | +91 9849655559 | 91-9849-655-559 |
| WhatsApp | 919849655559 (no +) | +91 9849 655559 |
| Email | lowercase@domain.com | UPPERCASE@DOMAIN.COM |
| Stats | "17+" or "500+" | "about 17" or "~500" |
| Dates | 2024-01-20 | Jan 20, 2024 |

---

# ❌ Common Mistakes to Avoid

### Mistake 1: Changing Page Keys
```
❌ WRONG: Changed page from "cctv" to "CCTV"
✅ RIGHT: Keep it exactly as "cctv" (lowercase)
```

### Mistake 2: Deleting All Items
```
❌ WRONG: Deleted all services, now page is empty
✅ RIGHT: Always keep at least one item, then add new ones
```

### Mistake 3: Invalid Icon Names
```
❌ WRONG: icon = "camera" (lowercase)
✅ RIGHT: icon = "Camera" (capitalized)
```

### Mistake 4: Breaking Link Paths
```
❌ WRONG: path = "printers" (missing /)
✅ RIGHT: path = "/printers" (with /)
```

### Mistake 5: Leaving Required Fields Empty
```
❌ WRONG: Title = "" (empty)
✅ RIGHT: Title = "Some Value" (always fill required fields)
```

### Mistake 6: Wrong WhatsApp Format
```
❌ WRONG: +91 9990 820830
✅ RIGHT: 919990820830
```

---

# 🔧 Troubleshooting

## "My changes aren't showing on the website"

1. **Did you click Publish?** (not just Save)
2. **Clear your browser cache** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Wait 1-2 minutes** - changes may take time to propagate
4. **Check the right page** - ensure you're on the correct page

## "The page looks broken after my edit"

1. **Undo your change** - Edit the document and restore the previous value
2. **Check for empty fields** - Make sure required fields have values
3. **Check special formatting** - Icon names, paths, colors must be exact

## "I can't find the section I want to edit"

The section name in Sanity might be different. Refer to the table at the start of each section in this guide.

## "I accidentally deleted something important"

1. Sanity keeps version history - click the document menu (⋮) → "History"
2. Find the previous version and restore it

---

# 🚨 Emergency Rollback Instructions

If something goes seriously wrong:

## Option 1: Sanity History (Recommended)

1. Open the broken document in Sanity Studio
2. Click the three dots menu (⋮) at the top right
3. Select **"History"**
4. Find a version from before your changes
5. Click **"Restore"**
6. Click **"Publish"** to make it live

## Option 2: Website Fallback Safety Net

**Good news!** Your website has built-in fallback content. If Sanity content is missing or broken, the website will automatically show default content. This means your website will **never show a completely broken page**.

However, you should still fix the Sanity content to show your real information.

## Option 3: Contact Developer Support

If you're stuck and can't fix the issue:
1. Take a screenshot of the problem
2. Note which document you edited
3. Contact your developer with this information

---

# 📊 Quick Reference: All Content Types

| # | Sanity Document | Website Location | Page Key |
|---|-----------------|------------------|----------|
| 1 | Home Page Hero | Homepage banner | - |
| 2 | Home Services Section | Homepage services | - |
| 3 | About Section | Homepage about | - |
| 4 | Contact Information | Homepage contact | - |
| 5 | Blogs Section | Homepage blogs header | - |
| 6 | Blog Posts | Homepage blog cards | - |
| 7 | Footer | All pages bottom | - |
| 8 | Chat Widget | All pages corner | - |
| 9 | Service Page Hero | Service page banner | printers/cctv/doorlocks/firealarms |
| 10 | Service Page - Services | Service page services | printers/cctv/doorlocks/firealarms |
| 11 | Service Page - Types | Service page types | printers/cctv/doorlocks/firealarms |
| 12 | Service Page - Brands | Service page brands | printers/cctv/doorlocks/firealarms |
| 13 | Service Page - Industries | Service page industries | printers/cctv/doorlocks/firealarms |
| 14 | Service Page - FAQs | Service page FAQs | printers/cctv/doorlocks/firealarms |
| 15 | Service Page - CTA | CCTV page CTA | cctv |
| 16 | Smart Features (CCTV) | CCTV page features | - |
| 17 | Feedback Page Hero | Feedback banner | - |
| 18 | Feedback Form | Feedback form | - |
| 19 | Feedback Testimonials | Feedback reviews | - |
| 20 | Feedback Overview | Feedback stats | - |

---

# 🎯 Your First Safe Edit (Practice)

Try this simple, safe edit to get comfortable:

1. Open **Sanity Studio**
2. Click on **"Home Page Hero"**
3. Find the **"Subtitle"** field
4. Change "Serving You Since 2008" to "Serving You Since 2008 with Excellence"
5. Click **"Publish"**
6. Open your website and refresh - you should see the change!
7. (Optional) Change it back if you prefer the original

**Congratulations!** You've made your first CMS edit! 🎉

---

## Need Help?

- 📧 Contact your developer
- 📖 Refer to this guide
- 🔄 Use the History feature to undo changes

---

**Document Version:** 1.0  
**Created:** January 2025  
**For:** iTOP Services Website CMS
