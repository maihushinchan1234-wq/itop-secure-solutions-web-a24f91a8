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

---

# 📋 READY-TO-COPY CONTENT FOR ALL MISSING SECTIONS

The following sections contain the **exact content** from your website. Copy and paste these into Sanity Studio when creating documents.

---

## 🔧 SERVICE PAGE - SERVICES SECTION (Create 4 Documents)

### Document 1: PRINTERS Services

| Field | Content |
|-------|---------|
| **Page** | `printers` |
| **Section Title** | Complete Printer Services |
| **Section Description** | From installation to maintenance, we provide comprehensive printer solutions for homes and businesses |

**Services Array (6 items):**

| # | Icon | Title | Description | Features |
|---|------|-------|-------------|----------|
| 1 | `Wrench` | Printer Repairs | Complete diagnosis and repair services for all printer issues including paper jams, quality problems, and hardware failures. Our certified technicians handle everything from simple fixes to complex component replacements. | Paper jam resolution, Print quality issues, Hardware component replacement, Diagnostic services |
| 2 | `Settings` | Installation & Setup | Professional printer installation and network setup services. We handle everything from unboxing to driver installation, network configuration, and user training. | Network printer setup, Driver installation, WiFi configuration, User training |
| 3 | `Package` | Toner & Ink Supply | Reliable supply of original and compatible toner cartridges and ink refills for all major printer brands. We offer competitive pricing and bulk discounts for businesses. | Original cartridges, Compatible alternatives, Bulk discounts, Regular supply contracts |
| 4 | `Truck` | Printer Leasing | Flexible printer leasing options for businesses and events. Choose from our range of high-quality printers with maintenance included in the rental package. | Monthly rental plans, Event-based rentals, Maintenance included, Flexible terms |
| 5 | `Shield` | AMC Plans | Comprehensive Annual Maintenance Contracts to keep your printers running smoothly. Regular maintenance, priority support, and genuine parts included. | Preventive maintenance, Priority support, Genuine parts, Cost-effective plans |
| 6 | `Zap` | Emergency Support | 24/7 emergency printer support for critical business operations. Quick response times and on-site service when you need it most. | 24/7 availability, Quick response, On-site service, Emergency repairs |

---

### Document 2: CCTV Services

| Field | Content |
|-------|---------|
| **Page** | `cctv` |
| **Section Title** | We Provide the Best CCTV Services |
| **Section Description** | Complete surveillance solutions for residential and commercial properties |

**Services Array (6 items):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Camera` | CCTV Camera Installation | Professional installation of dome, bullet, PTZ, IP, and face recognition cameras. Covers placement, cabling, and integration with control systems. Our technicians ensure optimal camera positioning for maximum coverage and minimal blind spots. |
| 2 | `Settings` | System Upgrade & Expansion | Upgrade from analog to HD or IP-based systems. Includes expanding coverage, integrating facial recognition, and modernizing storage solutions. Transform your old surveillance system into a smart, connected security network. |
| 3 | `Wrench` | Camera Repair & Maintenance | Lens cleaning, connectivity troubleshooting, DVR issues, recording failure diagnosis. Includes scheduled maintenance and system health checks to ensure continuous surveillance and optimal performance of your security system. |
| 4 | `HardDrive` | DVR/NVR Setup | Configuration of DVR/NVRs for storage, recording schedules, motion detection triggers, and remote access. Complete setup includes network configuration, mobile app integration, and user training for easy system management. |
| 5 | `Shield` | Security System Integration | Integration with access control systems, alarm systems, and building management platforms. Comprehensive security ecosystem setup for maximum protection and centralized monitoring capabilities. |
| 6 | `AlertTriangle` | Emergency Response Setup | 24/7 monitoring solutions with instant alerts and emergency response protocols. Integration with security services and automated notification systems for immediate incident response. |

**Repair Section (Optional):**

| Field | Content |
|-------|---------|
| **Repair Section Title** | CCTV Repair Services |
| **Repair Section Description** | Expert repair solutions for all CCTV system issues |

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Camera` | Camera Repair | Lens replacement, image quality issues, and housing repairs |
| 2 | `HardDrive` | DVR/NVR Repair | Storage issues, recording problems, and system crashes |
| 3 | `Settings` | Network Issues | Connectivity problems, IP conflicts, and remote access issues |
| 4 | `AlertTriangle` | Emergency Repairs | 24/7 urgent repair services for critical security systems |

---

### Document 3: DOOR LOCKS Services

| Field | Content |
|-------|---------|
| **Page** | `doorlocks` |
| **Section Title** | We Provide the Best Door Lock Services |
| **Section Description** | Complete lock solutions for residential and commercial properties |

**Services Array (4 items):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Lock` | Lock Installation | Professional installation of mechanical, electronic, and smart locks for all door types with proper alignment and security. |
| 2 | `Wrench` | Lock Repair | Expert repair services for jammed locks, broken keys, keypad issues, and smart lock troubleshooting. |
| 3 | `Smartphone` | Smart Lock Setup | Complete smart lock installation with mobile app configuration, user access setup, and integration training. |
| 4 | `Key` | Key Services | Key duplication, lock rekeying, master key systems, and emergency lockout services available 24/7. |

---

### Document 4: FIRE ALARMS Services

| Field | Content |
|-------|---------|
| **Page** | `firealarms` |
| **Section Title** | We Provide the Best Fire Alarm Services |
| **Section Description** | Comprehensive fire safety solutions for all types of properties |

**Services Array (4 items):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Flame` | Fire Alarm Installation | Complete installation of smoke, heat, and flame detectors with control panel setup and zone configuration. |
| 2 | `Shield` | System Maintenance | Regular testing, battery replacement, sensor cleaning, and compliance inspections to ensure optimal performance. |
| 3 | `Wrench` | Emergency Repairs | 24/7 urgent response for faulty alarms, disconnected sensors, and control panel issues. |
| 4 | `Bell` | Smart Monitoring | Advanced monitoring systems with mobile alerts, incident logs, and integration with building management systems. |

---

## 📷 SERVICE PAGE - TYPES SECTION (Create 4 Documents)

### Document 1: PRINTERS Types

| Field | Content |
|-------|---------|
| **Page** | `printers` |
| **Section Title** | Types of Printers We Service |
| **Section Description** | We work with all types of printers, from basic home models to industrial printing solutions |

**Types Array (6 items):**

| # | Title | Description | Features | Best For |
|---|-------|-------------|----------|----------|
| 1 | Laser Printers | High-speed, cost-effective printing for offices and businesses. Perfect for high-volume text documents with sharp, professional quality. | Fast printing speeds, Low cost per page, Professional quality, High paper capacity | Offices, businesses, high-volume printing |
| 2 | Inkjet Printers | Versatile printers ideal for photo printing and color documents. Great for home use and small offices requiring quality color output. | Excellent photo quality, Color accuracy, Affordable initial cost, Compact design | Home users, photo printing, small offices |
| 3 | All-in-One Printers | Multifunction devices combining printing, scanning, copying, and faxing capabilities. Space-saving solution for comprehensive office needs. | Multiple functions, Space-saving, Network connectivity, Mobile printing | Small offices, home offices, versatile tasks |
| 4 | Wide Format Printers | Large format printing for posters, banners, and technical drawings. Professional quality for marketing materials and engineering plans. | Large format printing, High resolution, Professional quality, Various media types | Design studios, engineering firms, marketing agencies |
| 5 | Thermal Printers | Specialized printers for labels, receipts, and barcodes. Essential for retail, logistics, and inventory management applications. | No ink required, Fast printing, Durable labels, Low maintenance | Retail, warehouses, shipping, inventory |
| 6 | Dot Matrix Printers | Impact printers for multi-part forms and carbon copies. Reliable solution for applications requiring duplicate copies. | Multi-part forms, Carbon copies, Reliable operation, Low operating cost | Banking, logistics, official documentation |

**Image URLs for each type:**
- Laser: `https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop`
- Inkjet: `https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop`
- All-in-One: `https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop`
- Wide Format: `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop`
- Thermal: `https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop`
- Dot Matrix: `https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop`

---

### Document 2: CCTV Types

| Field | Content |
|-------|---------|
| **Page** | `cctv` |
| **Section Title** | Types of CCTV Systems We Offer |
| **Section Description** | Choose the perfect camera for your security needs |

**Types Array (6 items):**

| # | Title | Description | Image URL |
|---|-------|-------------|-----------|
| 1 | Dome Cameras | 360° view, vandal-resistant design perfect for indoor and outdoor monitoring | `https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop` |
| 2 | Bullet Cameras | Long range, weatherproof cameras ideal for perimeter monitoring and outdoor areas | `https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop` |
| 3 | PTZ Cameras | Pan, tilt, zoom functionality for active monitoring and tracking of subjects | `https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop` |
| 4 | IP Cameras | HD quality, smart analytics, and network connectivity for modern surveillance | `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop` |
| 5 | Thermal Cameras | Night vision and heat sensing technology for 24/7 monitoring capabilities | `https://images.unsplash.com/photo-1573883430120-6e6d5dc38cd5?w=400&h=300&fit=crop` |
| 6 | Face Recognition Cameras | AI-powered, real-time alerts for advanced security and access control | `https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop` |

---

### Document 3: DOOR LOCKS Types

| Field | Content |
|-------|---------|
| **Page** | `doorlocks` |
| **Section Title** | Types of Door Locks We Offer |
| **Section Description** | Choose the perfect lock for your security needs |

**Types Array (4 items):**

| # | Title | Description | Image URL |
|---|-------|-------------|-----------|
| 1 | Mechanical Locks | Traditional deadbolts, mortise locks, and lever handles for reliable security | `https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop` |
| 2 | Smart Locks | Keypad, biometric, and app-controlled locks with remote access capabilities | `https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop` |
| 3 | Biometric Locks | Fingerprint and face recognition locks for maximum security and convenience | `https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop` |
| 4 | Magnetic Locks | Electromagnetic locks perfect for glass doors and access control systems | `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop` |

---

### Document 4: FIRE ALARMS Types

| Field | Content |
|-------|---------|
| **Page** | `firealarms` |
| **Section Title** | Types of Fire Alarm Systems We Offer |
| **Section Description** | Advanced fire detection systems for complete protection |

**Types Array (4 items):**

| # | Title | Description | Image URL |
|---|-------|-------------|-----------|
| 1 | Smoke Detectors | Ionization and photoelectric smoke detectors for early fire detection | `https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop` |
| 2 | Heat Detectors | Fixed temperature and rate-of-rise heat detectors for kitchen and industrial areas | `https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop` |
| 3 | Control Panels | Addressable and conventional fire alarm control panels with zone management | `https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop` |
| 4 | Notification Devices | Sirens, strobes, and voice evacuation systems for emergency alerts | `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop` |

---

## 🏢 SERVICE PAGE - BRANDS SECTION (Create 4 Documents)

### Document 1: PRINTERS Brands

| Field | Content |
|-------|---------|
| **Page** | `printers` |
| **Section Title** | Brands We Service |
| **Section Description** | Authorized service partners for all major printer brands with genuine parts and expert technicians |
| **CTA Title** | Don't see your brand? |
| **CTA Description** | We service many other brands including Ricoh, Kyocera, Lexmark, and more. Contact us to check if we can help with your specific printer model. |
| **CTA Button Text** | Contact Us |

**Brands Array (6 items):**

| # | Name | Description | Specialties |
|---|------|-------------|-------------|
| 1 | HP | Leading manufacturer of inkjet and laser printers for home and business use. | LaserJet series, DeskJet inkjet, OfficeJet all-in-one, Enterprise solutions |
| 2 | Canon | Premium printers known for excellent photo quality and reliability. | PIXMA series, imageCLASS laser, Professional photo printers, Wide format |
| 3 | Epson | Innovative printing technology with EcoTank and WorkForce series. | EcoTank printers, WorkForce series, Photo printers, POS printers |
| 4 | Brother | Reliable printers for small to medium businesses with excellent support. | Laser printers, Label printers, All-in-one devices, Industrial printers |
| 5 | Samsung | Quality laser printers with smart connectivity features. | Laser printers, Smart connectivity, Mobile printing, Office solutions |
| 6 | Xerox | Professional printing solutions for large enterprises and offices. | Production printers, Multifunction devices, Document solutions, Enterprise systems |

**Logo URLs:**
- HP: `https://logos-world.net/wp-content/uploads/2020/07/HP-Logo.png`
- Canon: `https://logos-world.net/wp-content/uploads/2020/07/Canon-Logo.png`
- Epson: `https://logos-world.net/wp-content/uploads/2020/07/Epson-Logo.png`
- Brother: `https://logos-world.net/wp-content/uploads/2020/11/Brother-Logo.png`
- Samsung: `https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png`
- Xerox: `https://logos-world.net/wp-content/uploads/2020/07/Xerox-Logo.png`

---

### Document 2: CCTV Brands

| Field | Content |
|-------|---------|
| **Page** | `cctv` |
| **Section Title** | Top CCTV Brands We Work With |
| **Section Description** | Authorized partners for premium surveillance solutions |

**Brands Array (6 items):**

| # | Name | Description | Logo URL |
|---|------|-------------|----------|
| 1 | Hikvision | World's leading provider of innovative video surveillance products | `https://www.hikvision.com/content/dam/hikvision/global/about-us/brand-identity/hikvision-logo.png` |
| 2 | Dahua | Professional video surveillance and smart IoT solutions | `https://www.dahuasecurity.com/asset/image/logo.png` |
| 3 | Axis | Pioneer in network video and intelligent security solutions | `https://logos-world.net/wp-content/uploads/2020/07/Axis-Logo.png` |
| 4 | Bosch | Premium security cameras and surveillance systems | `https://logos-world.net/wp-content/uploads/2020/07/Bosch-Logo.png` |
| 5 | CP Plus | Leading security surveillance brand in India | `https://www.cpplus.in/images/logo.png` |
| 6 | Panasonic | Advanced video surveillance and security solutions | `https://logos-world.net/wp-content/uploads/2020/07/Panasonic-Logo.png` |

---

### Document 3: DOOR LOCKS Brands

| Field | Content |
|-------|---------|
| **Page** | `doorlocks` |
| **Section Title** | Top Door Lock Brands We Work With |
| **Section Description** | Trusted brands for secure access solutions |

**Brands Array (6 items):**

| # | Name | Description | Logo URL |
|---|------|-------------|----------|
| 1 | Yale | Premium smart locks and traditional security solutions | `https://www.yalehome.com/content/dam/yale/logos/yale-logo.png` |
| 2 | August | Smart home access and keyless entry systems | `https://august.com/images/logo.png` |
| 3 | Schlage | Trusted residential and commercial lock solutions | `https://www.schlage.com/content/dam/schlage-com/logo.png` |
| 4 | Kwikset | Innovative door hardware and smart lock technology | `https://www.kwikset.com/images/logo.png` |
| 5 | Godrej | India's leading security and storage solutions | `https://logos-world.net/wp-content/uploads/2020/07/Godrej-Logo.png` |
| 6 | Honeywell | Advanced home automation and security systems | `https://logos-world.net/wp-content/uploads/2020/07/Honeywell-Logo.png` |

---

### Document 4: FIRE ALARMS Brands

| Field | Content |
|-------|---------|
| **Page** | `firealarms` |
| **Section Title** | Top Fire Alarm Brands We Work With |
| **Section Description** | Trusted brands for reliable fire safety solutions |

**Brands Array (6 items):**

| # | Name | Description | Logo URL |
|---|------|-------------|----------|
| 1 | Honeywell | Leading fire safety and security solutions provider | `https://logos-world.net/wp-content/uploads/2020/07/Honeywell-Logo.png` |
| 2 | Bosch | Premium fire detection and alarm systems | `https://logos-world.net/wp-content/uploads/2020/07/Bosch-Logo.png` |
| 3 | Ceasefire | India's leading fire safety equipment manufacturer | `https://www.ceasefire.in/images/logo.png` |
| 4 | Ravel | Comprehensive fire safety solutions | `https://www.ravelfiresafety.com/images/logo.png` |
| 5 | Siemens | Advanced fire safety technology and systems | `https://logos-world.net/wp-content/uploads/2020/07/Siemens-Logo.png` |
| 6 | Edwards | Professional fire detection and notification systems | `https://www.edwardsfiresafety.com/images/logo.png` |

---

## 🏭 SERVICE PAGE - INDUSTRIES SECTION (Create 4 Documents)

### Document 1: PRINTERS Industries

| Field | Content |
|-------|---------|
| **Page** | `printers` |
| **Section Title** | Industries We Serve |
| **Section Description** | Specialized printing solutions tailored to meet the unique needs of different industries |

**Industries Array (6 items):**

| # | Icon | Title | Description | Solutions | Image URL |
|---|------|-------|-------------|-----------|-----------|
| 1 | `Building` | Corporate Offices | High-volume printing solutions for large corporations with network printers, managed print services, and enterprise-grade security. | Network printer setup, Managed print services, Cost optimization, Security features | `https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop` |
| 2 | `Home` | Home Offices | Compact, efficient printers for home-based professionals and remote workers with wireless connectivity and mobile printing. | Wireless setup, Mobile printing, Compact designs, Cost-effective solutions | `https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop` |
| 3 | `GraduationCap` | Educational Institutions | Reliable printing solutions for schools and colleges with high-capacity printers and student-friendly features. | High-capacity printers, Student access control, Bulk printing, Educational discounts | `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop` |
| 4 | `ShoppingBag` | Retail Businesses | Point-of-sale printers, receipt printers, and label printing solutions for retail operations and inventory management. | POS printers, Receipt printing, Label printers, Inventory solutions | `https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop` |
| 5 | `Factory` | Manufacturing | Industrial-grade printers for manufacturing environments with barcode printing, quality control documentation, and harsh environment capabilities. | Industrial printers, Barcode printing, Quality documentation, Harsh environment | `https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop` |
| 6 | `Heart` | Healthcare | Medical-grade printing solutions for hospitals and clinics with patient record printing, prescription labels, and compliance features. | Medical records, Prescription labels, HIPAA compliance, Patient wristbands | `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop` |

---

### Document 2: CCTV Industries

| Field | Content |
|-------|---------|
| **Page** | `cctv` |
| **Section Title** | Installation Suggestions by Property Type |
| **Section Description** | Customized surveillance solutions for every sector |

**Industries Array (6 items):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Home` | Residential | Home security cameras for entrances, gardens, and interior monitoring |
| 2 | `Building` | Commercial | Office surveillance, parking lots, and business premise security |
| 3 | `School` | Educational | School and college campus security with comprehensive coverage |
| 4 | `Hotel` | Hospitality | Hotel lobby, corridor, and facility monitoring systems |
| 5 | `Factory` | Industrial | Factory floor monitoring, perimeter security, and safety compliance |
| 6 | `ShoppingBag` | Retail | Store surveillance, theft prevention, and customer behavior analysis |

---

### Document 3: DOOR LOCKS Industries

| Field | Content |
|-------|---------|
| **Page** | `doorlocks` |
| **Section Title** | Industries We Serve |
| **Section Description** | Customized lock solutions for every sector |

**Industries Array (6 items):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Home` | Residential | Home security locks for main doors, bedrooms, and interior spaces |
| 2 | `Building` | Commercial | Office access control, meeting room locks, and security systems |
| 3 | `School` | Educational | School and college security with keycard and biometric access |
| 4 | `Hotel` | Hospitality | Hotel room locks, RFID systems, and guest access management |
| 5 | `Factory` | Industrial | High-security locks for industrial facilities and restricted areas |
| 6 | `ShoppingBag` | Retail | Store security, cash room locks, and retail access control |

---

### Document 4: FIRE ALARMS Industries

| Field | Content |
|-------|---------|
| **Page** | `firealarms` |
| **Section Title** | Industries We Serve |
| **Section Description** | Customized fire safety solutions for every sector |

**Industries Array (6 items):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Home` | Residential | Home fire safety systems for apartments, villas, and residential complexes |
| 2 | `Building` | Commercial | Office buildings, corporate complexes, and commercial establishments |
| 3 | `School` | Educational | Schools, colleges, and educational institutions with compliance requirements |
| 4 | `Hotel` | Hospitality | Hotels, restaurants, and hospitality venues with guest safety priorities |
| 5 | `Factory` | Industrial | Manufacturing plants, warehouses, and industrial facilities |
| 6 | `ShoppingBag` | Retail | Shopping malls, retail stores, and commercial complexes |

---

## ❓ SERVICE PAGE - FAQs SECTION (Create 4 Documents)

### Document 1: PRINTERS FAQs

| Field | Content |
|-------|---------|
| **Page** | `printers` |
| **Section Title** | Frequently Asked Questions |
| **Section Description** | Get answers to common questions about our printer services and solutions |
| **CTA Title** | Need Help with Your Printer? |
| **CTA Description** | Our expert technicians are ready to help with any printer-related questions or issues. |

**CTA Buttons:**
| Button | Text | Action | Variant |
|--------|------|--------|---------|
| 1 | Contact Support | contact | primary |
| 2 | WhatsApp Us | whatsapp | secondary |

**FAQ Categories:**

**Category 1: General Questions**
| Question | Answer |
|----------|--------|
| What areas do you serve? | We provide services across Delhi and NCR. You can contact us to check availability in your specific area. |
| Do you provide emergency or same-day services? | Yes, we offer same-day support for urgent installations, breakdowns, or safety issues. |
| Are your staff and technicians certified? | Yes. Our team is professionally trained, background-verified, and equipped with all necessary tools and certifications. |

**Category 2: Printer Services**
| Question | Answer |
|----------|--------|
| Do you repair all brands of printers? | Yes. We repair HP, Canon, Epson, Brother, Samsung, Pantum, and more. We handle all issues from hardware to cartridge problems. |
| Can I rent a printer for short-term use? | Yes. We offer flexible daily/weekly/monthly printer rental options for events, exams, and offices. |
| How much time does a repair take? | Most repairs are completed within 24 hours. Complex issues may take longer, but we keep you informed at each step. |
| Do you provide genuine toner and ink cartridges? | Yes, we supply both genuine OEM cartridges and high-quality compatible alternatives. We offer competitive pricing and bulk discounts for businesses with regular supply contracts. |
| What's included in your AMC plans? | Our Annual Maintenance Contracts include regular preventive maintenance, priority support, genuine parts replacement, and emergency repairs. We offer different tiers to match your specific needs and budget. |
| How quickly can you respond to emergency repair calls? | We provide 24/7 emergency support with response times typically within 4-6 hours for critical business environments. Our technicians carry common parts and tools for immediate repairs. |
| Do you offer training for printer operation and maintenance? | Yes, we provide comprehensive training for your staff on printer operation, basic troubleshooting, and maintenance. This helps prevent common issues and extends the life of your equipment. |
| Can you help with printer network setup and configuration? | Absolutely! We specialize in network printer setup, including WiFi configuration, driver installation, and user access management. We ensure seamless integration with your existing IT infrastructure. |

---

### Document 2: CCTV FAQs

| Field | Content |
|-------|---------|
| **Page** | `cctv` |
| **Section Title** | CCTV System FAQs |
| **Section Description** | Common questions about CCTV installation and surveillance systems |
| **CTA Title** | Ready to Secure Your Property? |
| **CTA Description** | Get a free security assessment and customized CCTV solution for your needs. |

**CTA Buttons:**
| Button | Text | Action | Variant |
|--------|------|--------|---------|
| 1 | Free Assessment | contact | primary |
| 2 | WhatsApp Us | whatsapp | secondary |

**FAQs Array (8 items):**
| Question | Answer |
|----------|--------|
| How many CCTV cameras do I need for my shop? | Usually 2–4 cameras are enough: one for entry, one for the counter, one for storage, and one outdoor. We provide layout planning as well. |
| Can I access my CCTV feed on my phone? | Yes. All our systems support mobile viewing via dedicated Android and iOS apps. |
| What's better: wired or wireless cameras? | Wired systems are more reliable but take more time to install. Wireless systems are easy to set up but may depend on Wi-Fi quality. |
| How long can CCTV footage be stored? | Storage duration depends on your DVR/NVR capacity and recording quality. Typically ranges from 7 days to 3 months. Cloud storage options are also available. |
| Do CCTV cameras work in complete darkness? | Yes, cameras with infrared (IR) night vision can record in complete darkness up to specified distances, usually 20-100 meters depending on the model. |
| Can I upgrade my existing analog CCTV system? | Yes! We can upgrade your system to HD or IP cameras while utilizing existing cable infrastructure in most cases. |
| What's the difference between HD and IP cameras? | HD cameras provide high-definition video over coax cables, while IP cameras offer superior image quality, advanced features, and network connectivity but require more bandwidth. |
| Do I need internet for CCTV to work? | No, CCTV systems work independently. Internet is only needed for remote viewing on mobile devices or cloud storage features. |

---

### Document 3: DOOR LOCKS FAQs

| Field | Content |
|-------|---------|
| **Page** | `doorlocks` |
| **Section Title** | Door Lock FAQs |
| **Section Description** | Get answers to the most common questions about smart door locks, installation process, security features, and ongoing maintenance. Our expert team has compiled these insights from years of experience helping customers upgrade their home security. |
| **CTA Title** | Ready to Upgrade Your Home Security? |
| **CTA Description** | Join thousands of satisfied customers who have upgraded to smart locks. Our certified technicians provide professional installation and setup for all smart lock brands with comprehensive warranty coverage. |

**CTA Buttons:**
| Button | Text | Action | Variant |
|--------|------|--------|---------|
| 1 | Get Free Consultation | contact | primary |
| 2 | WhatsApp Us Now | whatsapp | secondary |

**FAQs Array (12 items):**
| Question | Answer |
|----------|--------|
| Will a smart lock fit my wooden or metal door? | Yes. Most smart locks fit standard door thicknesses. We recommend sharing door images for better compatibility checks. |
| Will my smart lock still work during power or internet outages? | Yes. Most smart locks use battery power and support Bluetooth unlocking. Some models come with physical key backups. |
| What if my smart lock's battery dies? | You will be notified in advance. Also, emergency USB charging or mechanical key options are available in most models. |
| Can I install a smart lock myself? | While some smart locks are designed for DIY installation, we recommend professional installation to ensure proper alignment, security, and warranty coverage. |
| How secure are smart locks compared to traditional locks? | Smart locks often provide enhanced security features like tamper alerts, activity logs, and temporary access codes. They use encrypted communication and are designed to be as secure as traditional deadbolts. |
| Can I integrate smart locks with other smart home devices? | Yes! Most smart locks work with popular platforms like Alexa, Google Home, and Apple HomeKit, allowing integration with cameras, lights, and security systems. |
| What happens if I lose my phone? | Smart locks typically offer multiple access methods including backup keys, keypads, or secondary user access through family members' phones. |
| How long do smart lock batteries last? | Most smart lock batteries last 6-12 months depending on usage. You'll receive low battery notifications well in advance through the mobile app. |
| Do smart locks work with all door types? | Smart locks are compatible with most standard doors including wooden, metal, and composite doors. Our technicians assess door compatibility during the free consultation to ensure proper fit and functionality. |
| Can I still use a regular key with a smart lock? | Many smart locks offer traditional key backup options alongside digital access methods. This provides peace of mind and ensures you're never locked out, even if the electronic components fail. |
| How do I manage access for guests or service providers? | Smart locks allow you to create temporary access codes that can be set to expire after a specific time or number of uses. You can also grant and revoke access remotely through the mobile app. |
| What maintenance do smart locks require? | Smart locks require minimal maintenance - mainly battery replacement every 6-12 months and occasional cleaning of the keypad or fingerprint sensor. Our service team provides annual maintenance checks to ensure optimal performance. |

---

### Document 4: FIRE ALARMS FAQs

| Field | Content |
|-------|---------|
| **Page** | `firealarms` |
| **Section Title** | Fire Safety FAQs |
| **Section Description** | Everything you need to know about fire alarm systems, installation requirements, maintenance schedules, and safety compliance. Our fire safety experts answer the most common questions to help you make informed decisions about protecting your property and loved ones. |
| **CTA Title** | Protect Your Property with Professional Fire Safety |
| **CTA Description** | Don't wait for an emergency. Get a comprehensive fire safety assessment and modern alarm system installation. Our certified fire safety experts ensure your property meets all safety standards and regulations. |

**CTA Buttons:**
| Button | Text | Action | Variant |
|--------|------|--------|---------|
| 1 | Schedule Fire Safety Audit | contact | primary |
| 2 | Emergency Consultation | whatsapp | secondary |

**FAQs Array (12 items):**
| Question | Answer |
|----------|--------|
| What is the average lifespan of a fire alarm device? | Typically, 8 to 10 years. Sensors should be tested regularly and batteries replaced annually. |
| How often should I test my fire alarm? | Once a month. Testing takes under 5 minutes and ensures your system is always ready. |
| Can fire alarms be monitored on a mobile app? | Yes. Smart alarms connect to apps and alert you in real-time in case of fire, smoke, or system errors. |
| Do I need a fire alarm for a small office? | Yes, fire alarms are essential for any workplace regardless of size. Small offices should have at least smoke detectors in main areas and compliance with local fire safety regulations. |
| Will it work during a power cut? | Yes, all our fire alarm systems come with battery backup that can operate for 24-72 hours during power outages, ensuring continuous protection. |
| Can I upgrade an old alarm system? | Absolutely! We can upgrade your existing system to addressable or smart fire alarms, add new zones, or integrate with building management systems while using existing wiring where possible. |
| Can I receive alerts on my phone? | Yes! Our smart fire alarm systems can send instant notifications to your smartphone, security team, and monitoring center when an alarm is triggered. |
| What is the typical lifespan of a fire detector? | Smoke detectors typically last 8-10 years, while heat detectors can last 15-20 years. We provide replacement schedules and proactive maintenance to ensure optimal performance. |
| What's the difference between smoke and heat detectors? | Smoke detectors sense airborne particles from fires, while heat detectors respond to temperature changes. Smoke detectors are more sensitive and provide earlier warning, while heat detectors are better for dusty or steamy environments. |
| Are fire alarms mandatory for all buildings? | Yes, fire safety regulations mandate fire detection systems for most commercial buildings, apartments, and public spaces. Residential homes also benefit greatly from fire alarm installation. |
| How do I maintain my fire alarm system? | Regular maintenance includes monthly testing, annual professional inspections, battery replacements, and sensor cleaning. We offer comprehensive AMC packages to handle all maintenance requirements. |
| What should I do if my fire alarm keeps giving false alarms? | False alarms can be caused by dust accumulation, cooking smoke, or sensor malfunction. Our technicians can diagnose the issue and recommend solutions like sensor relocation or upgrades to reduce false alarms. |

---

## 📢 SERVICE PAGE - CTA SECTION (Create 1 Document - CCTV Only)

### Document: CCTV CTA Section

| Field | Content |
|-------|---------|
| **Page** | `cctv` |
| **Title** | Monitor Your Property |
| **Description** | Ready to secure your property with professional CCTV installation? |
| **Primary Button Text** | WhatsApp Our Expert |
| **Primary Button Link** | `https://wa.me/919990820830` |
| **Secondary Button Text** | Send a Message |
| **Secondary Button Link** | `mailto:sachidanand@live.in` |

---

## 🤖 SMART FEATURES (CCTV) - Create 1 Document

### Document: Smart CCTV Features

| Field | Content |
|-------|---------|
| **Section Title** | Smart CCTV Features |
| **Section Description** | Advanced technology for modern security needs |

**Features Array (6 items):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Shield` | 24/7 Live Monitoring | Continuous surveillance with real-time alerts |
| 2 | `Smartphone` | Mobile Alerts & App Access | Instant notifications and remote viewing on your phone |
| 3 | `Cloud` | Cloud Storage Integration | Secure cloud backup and easy access to recordings |
| 4 | `Eye` | AI-Powered Motion Detection | Smart analytics to reduce false alarms |
| 5 | `FileText` | Log History for Recorded Events | Detailed timeline of all surveillance activities |
| 6 | `Lock` | Secure Remote Access Control | Protected login and encrypted data transmission |

---

## 📝 FEEDBACK FORM - Create 1 Document

### Document: Feedback Form Content

| Field | Content |
|-------|---------|
| **Section Title** | Share Your Experience |
| **Section Description** | Help us improve our services and help others by sharing your honest feedback |
| **Submit Button Text** | Submit Your Feedback |
| **Note Text** | Your review will be published on our website to help other customers. We may contact you to verify your feedback. All reviews are subject to our content guidelines. |

**Form Labels:**
| Field | Label |
|-------|-------|
| Name | Your Name * |
| Location | Your Location * |
| Service | Service Used * |
| Rating | Your Rating * |
| Feedback | Your Detailed Feedback * |
| Photo | Upload Photo (Optional) |

**Services Dropdown Options:**
1. Printer Repair
2. Printer Installation
3. Door Lock Installation
4. Smart Lock Setup
5. CCTV Installation
6. Fire Alarm Installation
7. AMC Service
8. Emergency Repair
9. Toner Refilling
10. Ink Refilling
11. System Configuration
12. Other

**Google Review Section:**
| Field | Content |
|-------|---------|
| Title | Write a Google Review |
| Description | Help others find us by leaving a review on Google Business |
| Button Text | Write Google Review |
| Link | `https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review` |

> ⚠️ **Important:** Replace `YOUR_GOOGLE_BUSINESS_ID` with your actual Google Business ID when you have one!

---

## 💬 FEEDBACK TESTIMONIALS - Create 1 Document

### Document: Feedback Testimonials Content

| Field | Content |
|-------|---------|
| **Section Title** | Customer Testimonials |
| **Section Description** | Hear what our satisfied customers have to say about our services |
| **Verified Badge Text** | Verified Customer |
| **Bottom Text** | Have you used our services? We'd love to hear from you! |

**Empty State (when no reviews exist):**
| Field | Content |
|-------|---------|
| Title | No Reviews Yet |
| Description | Be the first to share your experience with iTOP Services! |
| Sub Description | We value your feedback and use it to improve our services. Your review will help other customers make informed decisions. |

---

## 📊 FEEDBACK OVERVIEW - Create 1 Document

### Document: Feedback Overview Content

| Field | Content |
|-------|---------|
| **Rating Title** | Rating Overview |
| **Why Love Us Title** | Why Customers Love Us |
| **Overall Rating** | 4.8 |
| **Review Count** | Based on 150+ reviews |

**Rating Distribution:**
| Stars | Percentage | Count |
|-------|------------|-------|
| 5 | 78 | 117 |
| 4 | 15 | 23 |
| 3 | 5 | 8 |
| 2 | 1 | 2 |
| 1 | 1 | 0 |

**Stats Array (4 items):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | `Clock` | 24-Hour Service Response | Quick response to all service requests |
| 2 | `Users` | 97% Customers Recommend Us | High satisfaction rate from our clients |
| 3 | `Award` | 1000+ Devices Serviced | Extensive experience across all services |
| 4 | `CheckCircle` | 100% Issue Resolution | We don't stop until it's fixed |

---

## ✅ COMPLETE DOCUMENT CREATION CHECKLIST

Use this checklist to track your progress:

### Home Page (Already in Guide)
- [ ] Home Page Hero
- [ ] Home Services Section
- [ ] About Section
- [ ] Contact Information
- [ ] Blogs Section
- [ ] Blog Posts (4 documents)

### Service Page - Heroes (4 documents)
- [ ] Printers Hero (page: `printers`)
- [ ] CCTV Hero (page: `cctv`)
- [ ] Door Locks Hero (page: `doorlocks`)
- [ ] Fire Alarms Hero (page: `firealarms`)

### Service Page - Services (4 documents) ✨ NEW
- [ ] Printers Services (page: `printers`)
- [ ] CCTV Services (page: `cctv`)
- [ ] Door Locks Services (page: `doorlocks`)
- [ ] Fire Alarms Services (page: `firealarms`)

### Service Page - Types (4 documents) ✨ NEW
- [ ] Printers Types (page: `printers`)
- [ ] CCTV Types (page: `cctv`)
- [ ] Door Locks Types (page: `doorlocks`)
- [ ] Fire Alarms Types (page: `firealarms`)

### Service Page - Brands (4 documents) ✨ NEW
- [ ] Printers Brands (page: `printers`)
- [ ] CCTV Brands (page: `cctv`)
- [ ] Door Locks Brands (page: `doorlocks`)
- [ ] Fire Alarms Brands (page: `firealarms`)

### Service Page - Industries (4 documents) ✨ NEW
- [ ] Printers Industries (page: `printers`)
- [ ] CCTV Industries (page: `cctv`)
- [ ] Door Locks Industries (page: `doorlocks`)
- [ ] Fire Alarms Industries (page: `firealarms`)

### Service Page - FAQs (4 documents) ✨ NEW
- [ ] Printers FAQs (page: `printers`)
- [ ] CCTV FAQs (page: `cctv`)
- [ ] Door Locks FAQs (page: `doorlocks`)
- [ ] Fire Alarms FAQs (page: `firealarms`)

### Service Page - CTA (1 document) ✨ NEW
- [ ] CCTV CTA Section (page: `cctv`)

### CCTV Specific ✨ NEW
- [ ] Smart Features (CCTV)

### Feedback Page ✨ NEW
- [ ] Feedback Hero
- [ ] Feedback Form
- [ ] Feedback Testimonials
- [ ] Feedback Overview

### Global/Shared
- [ ] Footer
- [ ] Chat Widget

---

**Total Documents to Create: 36**

**🎉 Once all documents are created and published, your entire website will be fully CMS-managed!**

---

**Document Version:** 1.0  
**Created:** January 2025  
**For:** iTOP Services Website CMS
