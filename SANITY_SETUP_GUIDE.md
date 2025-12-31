# Sanity CMS Setup Guide for iTOP Services

This guide will help you set up Sanity CMS so the shop owner can edit website content without touching code.

## Step 1: Create a Sanity Account & Project

1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Click "Get Started" and sign up (Google/GitHub login available)
3. Click "Create new project"
4. Name it: `itop-services-cms`
5. Select "Start with a clean project"
6. Choose the **Free** plan (generous limits for small businesses)

## Step 2: Get Your Project Credentials

After creating the project:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Note down:
   - **Project ID** (looks like: `abc123xy`)
   - **Dataset** (usually: `production`)

## Step 3: Add Credentials to Your Website

Create a `.env` file in your project root (or add to your hosting platform):

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

## Step 4: Set Up Sanity Studio

Sanity Studio is the dashboard where the shop owner will edit content.

### Option A: Use Sanity's Hosted Studio (Recommended)

1. In your Sanity project dashboard, click "Studio"
2. Sanity provides a hosted studio at `https://your-project-name.sanity.studio`
3. The shop owner just needs to bookmark this URL and log in

### Option B: Create a Custom Studio (Advanced)

```bash
# In a separate folder (not inside your React project)
npm create sanity@latest

# Follow prompts:
# - Use existing project: Yes
# - Select your project
# - Dataset: production
# - Template: Clean project
```

## Step 5: Create Content Schemas

In your Sanity Studio project, create these schema files:

### `schemas/homeHero.js`
```javascript
export default {
  name: 'homeHero',
  title: 'Home Page Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' }
        ]
      }]
    }
  ]
}
```

### `schemas/about.js`
```javascript
export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Main Description',
      type: 'text'
    },
    {
      name: 'secondaryDescription',
      title: 'Secondary Description',
      type: 'text'
    },
    {
      name: 'achievements',
      title: 'Achievement Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Name', type: 'string', description: 'Use: Users, Clock, Award, CheckCircle' },
          { name: 'number', title: 'Number/Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' }
        ]
      }]
    },
    {
      name: 'features',
      title: 'Why Choose Us Features',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'commitmentTitle',
      title: 'Commitment Section Title',
      type: 'string'
    },
    {
      name: 'commitmentDescription',
      title: 'Commitment Description',
      type: 'text'
    },
    {
      name: 'secondaryCommitmentDescription',
      title: 'Secondary Commitment Description',
      type: 'text'
    }
  ]
}
```

### `schemas/contact.js`
```javascript
export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle/Badge',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'phones',
      title: 'Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string'
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number (without +)',
      type: 'string',
      description: 'e.g., 919849655559'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'line1', title: 'Address Line 1', type: 'string' },
        { name: 'line2', title: 'Address Line 2', type: 'string' },
        { name: 'city', title: 'City & PIN', type: 'string' }
      ]
    },
    {
      name: 'serviceHours',
      title: 'Service Hours',
      type: 'object',
      fields: [
        { name: 'weekdays', title: 'Monday-Saturday', type: 'string' },
        { name: 'weekends', title: 'Sunday', type: 'string' },
        { name: 'emergency', title: 'Emergency', type: 'string' }
      ]
    },
    {
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
```

### `schemas/pageHero.js`
```javascript
export default {
  name: 'pageHero',
  title: 'Page Heroes',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'CCTV Page', value: 'cctv' },
          { title: 'Printers Page', value: 'printers' },
          { title: 'Door Locks Page', value: 'doorlocks' },
          { title: 'Fire Alarms Page', value: 'firealarms' }
        ]
      }
    },
    {
      name: 'title',
      title: 'Main Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string'
    },
    {
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string'
    }
  ]
}
```

### `schemas/index.js`
```javascript
import homeHero from './homeHero'
import about from './about'
import contact from './contact'
import pageHero from './pageHero'

export const schemaTypes = [homeHero, about, contact, pageHero]
```

## Step 6: Deploy Sanity Studio

```bash
cd your-sanity-studio-folder
npx sanity deploy
```

Choose a hostname like: `itop-services`
Your studio will be available at: `https://itop-services.sanity.studio`

## Step 7: Add Initial Content

1. Go to your Sanity Studio URL
2. Log in with your Sanity account
3. Click on each document type and add the initial content
4. Click "Publish" to make content live

---

# Shop Owner's Guide: How to Edit Content

## Accessing the Dashboard

1. Go to: `https://itop-services.sanity.studio` (your studio URL)
2. Log in with your email/Google account

## Editing Content

### To edit the Home Page Hero:
1. Click "Home Page Hero" in the left sidebar
2. Edit the title, subtitle, description, or stats
3. Click **Publish** (green button)

### To edit Contact Information:
1. Click "Contact Information"
2. Update phone numbers, email, address, or service hours
3. Click **Publish**

### To edit About Section:
1. Click "About Section"
2. Update descriptions, achievements, or features
3. Click **Publish**

### To edit Service Page Heroes:
1. Click "Page Heroes"
2. Select the page (CCTV, Printers, etc.)
3. Edit the content
4. Click **Publish**

## Important Notes

- ✅ Changes go live **immediately** after publishing
- ✅ No need to touch any code
- ✅ No need to redeploy the website
- 📝 You can save drafts without publishing
- 🔄 Use "History" to revert to previous versions

## Need Help?

Contact the developer at: sachidanand@live.in
