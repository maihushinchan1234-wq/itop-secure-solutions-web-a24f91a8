# Complete Blog Management & Favicon Guide for iTOP Services

## Table of Contents
1. [Blog Post Management in Sanity](#blog-post-management-in-sanity)
2. [Creating Blog Schema in Sanity Studio](#creating-blog-schema-in-sanity-studio)
3. [Ready-to-Copy Blog Content for All 4 Categories](#ready-to-copy-blog-content)
4. [How to Add New Sections to Sanity](#adding-new-sections)
5. [Favicon Change Instructions](#favicon-change-instructions)

---

## Blog Post Management in Sanity

### ✅ System is Now Connected!

The website code is now connected to fetch blog posts from Sanity. You just need to:
1. Create the `blogPost` schema in Sanity Studio
2. Create blog documents in Sanity

### Step 1: Create Blog Post Schema in Sanity Studio

In your Sanity Studio project folder, create a new file `schemas/blogPost.js`:

```javascript
// schemas/blogPost.js
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Blog ID',
      type: 'string',
      description: 'Unique identifier (1, 2, 3, 4 for existing blogs, or any new number)',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of the blog post',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short description shown in blog card (max 200 characters)',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'htmlContent',
      title: 'HTML Content',
      type: 'text',
      description: 'Full HTML content of the blog post (copy from examples below)',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Author name'
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'string',
      description: 'Display date (e.g., "January 20, 2024")'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Door Locks', value: 'Door Locks' },
          { title: 'CCTV', value: 'CCTV' },
          { title: 'Fire Alarms', value: 'Fire Alarms' },
          { title: 'Printers', value: 'Printers' }
        ]
      },
      description: 'Blog category'
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'Estimated reading time (e.g., "8 min read")'
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional main image for the blog post'
    }
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      id: 'id'
    },
    prepare(selection) {
      const { title, category, id } = selection;
      return {
        title: title,
        subtitle: `ID: ${id} | ${category}`
      };
    }
  }
};
```

### Step 2: Add to Schema Index

In your Sanity Studio's `schemas/index.js` file, add:

```javascript
import blogPost from './blogPost'

export const schemaTypes = [
  // ... your existing schemas
  blogPost,
]
```

### Step 3: Restart Sanity Studio

After adding the schema, restart Sanity Studio:
```bash
npm run dev
```

---

## Ready-to-Copy Blog Content

### Blog 1: Smart Door Locks (ID: 1)

**In Sanity Studio → Blog Post → Create New**

| Field | Value |
|-------|-------|
| Blog ID | `1` |
| Title | `The Future of Home Security with Smart Door Locks` |
| Excerpt | `Discover how smart door locks work, their key benefits like remote access and activity logs, and the best brands available in India including Qubo, Yale, and Godrej.` |
| Author | `Security Expert Team` |
| Publication Date | `2024-01-20` |
| Category | `Door Locks` |
| Read Time | `8 min read` |

**HTML Content** (paste in "HTML Content" field):

```html
<div class="prose prose-lg max-w-none space-y-8">
  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
    <h2 class="text-2xl font-semibold text-blue-800 mb-3">Why Smart Door Locks Are Revolutionary</h2>
    <p class="text-blue-700 leading-relaxed">Traditional keys are becoming obsolete. Smart door locks represent the future of home security, offering unprecedented convenience, control, and peace of mind. Whether you're a busy professional, a parent juggling multiple responsibilities, or someone who values cutting-edge technology, smart locks transform how you interact with your home.</p>
  </div>

  <div class="space-y-6">
    <h3 class="text-xl font-semibold text-gray-800">🔐 What Exactly Are Smart Door Locks?</h3>
    <p class="text-gray-700 leading-relaxed">Smart door locks are advanced security devices that eliminate the need for traditional physical keys. Instead, they use modern technology like Bluetooth connectivity, Wi-Fi networks, fingerprint recognition, numeric keypads, or smartphone apps to grant access. Think of them as your personal security guard that never sleeps and always remembers who should and shouldn't enter your home.</p>
  </div>

  <div class="bg-green-50 p-6 rounded-lg border border-green-200">
    <h3 class="text-xl font-semibold text-green-800 mb-4">Key Benefits That Change Your Life:</h3>
    <ul class="space-y-3 text-green-700">
      <li><strong>Remote Access Control:</strong> Lock or unlock your door from anywhere in the world using your smartphone.</li>
      <li><strong>Temporary Access Codes:</strong> Create one-time or time-limited access codes for guests, housekeepers, or repair technicians.</li>
      <li><strong>Real-Time Security Alerts:</strong> Receive instant notifications if someone attempts to tamper with the lock.</li>
      <li><strong>Complete Activity Tracking:</strong> Monitor who enters and exits your home with detailed logs.</li>
    </ul>
  </div>

  <div class="space-y-6">
    <h3 class="text-xl font-semibold text-gray-800">🏆 Top Smart Lock Brands We Install & Service:</h3>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-blue-600 mb-3">Qubo Smart Locks</h4>
        <p class="text-gray-600 text-sm">Affordable Indian brand with excellent app connectivity and customer support.</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-blue-600 mb-3">Yale Digital Locks</h4>
        <p class="text-gray-600 text-sm">Premium international brand known for exceptional security features.</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-blue-600 mb-3">Godrej Smart Locks</h4>
        <p class="text-gray-600 text-sm">Trusted Indian manufacturer with robust build quality.</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-blue-600 mb-3">Hafele Digital Locks</h4>
        <p class="text-gray-600 text-sm">European engineering with premium materials and advanced features.</p>
      </div>
    </div>
  </div>

  <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
    <h3 class="text-xl font-semibold text-yellow-800 mb-4">🚀 Our Professional Installation Service Includes:</h3>
    <ul class="space-y-2 text-yellow-700">
      <li>• <strong>Free Home Visit:</strong> Expert evaluates your door and recommends the best lock</li>
      <li>• <strong>Same-Day Installation:</strong> Most installations completed within 2-3 hours</li>
      <li>• <strong>App Setup & Training:</strong> We configure your smartphone and teach you all features</li>
      <li>• <strong>6-Month Service Warranty:</strong> Free maintenance and support</li>
      <li>• <strong>24/7 Emergency Support:</strong> Locked out? We provide immediate assistance</li>
    </ul>
  </div>

  <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
    <h3 class="text-xl font-semibold text-blue-800 mb-4">Ready to Upgrade Your Home Security?</h3>
    <p class="text-blue-700 mb-4">Our expert team has installed over 500+ smart locks across Delhi NCR with 100% customer satisfaction.</p>
    <p class="text-blue-700 font-medium">Contact us today for a free consultation and quote!</p>
  </div>
</div>
```

---

### Blog 2: CCTV Cameras (ID: 2)

**In Sanity Studio → Blog Post → Create New**

| Field | Value |
|-------|-------|
| Blog ID | `2` |
| Title | `Top 5 CCTV Cameras for Business Surveillance` |
| Excerpt | `A comprehensive guide to choosing the right CCTV system for your business, featuring top brands like CP Plus, Hikvision, and Dahua with placement tips.` |
| Author | `Security Expert Team` |
| Publication Date | `2024-02-15` |
| Category | `CCTV` |
| Read Time | `12 min read` |

**HTML Content**:

```html
<div class="prose prose-lg max-w-none space-y-8">
  <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500">
    <h2 class="text-2xl font-semibold text-purple-800 mb-3">Protect Your Business Investment</h2>
    <p class="text-purple-700 leading-relaxed">Your business is more than just a source of income – it's your life's work. A comprehensive CCTV surveillance system isn't just about catching criminals; it's about creating a secure environment where business thrives.</p>
  </div>

  <div class="space-y-6">
    <h3 class="text-xl font-semibold text-gray-800">📹 Essential Features for Business CCTV Systems</h3>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-purple-600 mb-3">High Resolution (HD/4K)</h4>
        <p class="text-gray-600 text-sm">Crystal-clear footage essential for identifying faces and providing evidence.</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-purple-600 mb-3">Night Vision Technology</h4>
        <p class="text-gray-600 text-sm">Advanced IR LEDs provide clear visibility even in complete darkness.</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-purple-600 mb-3">Smart Motion Detection</h4>
        <p class="text-gray-600 text-sm">AI-powered alerts distinguish between regular activity and potential threats.</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-purple-600 mb-3">Remote Mobile Access</h4>
        <p class="text-gray-600 text-sm">Monitor your business from anywhere using smartphone apps.</p>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-semibold text-gray-800 mb-6">🏆 Top 5 CCTV Brands We Recommend & Install:</h3>

  <div class="space-y-6">
    <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
      <h4 class="text-lg font-bold text-blue-800 mb-2">1. CP Plus - Best Value for Money</h4>
      <p class="text-blue-700 mb-3">Leading Indian brand trusted by 10,000+ businesses nationwide.</p>
      <ul class="text-blue-600 text-sm space-y-1">
        <li>• Complete DVR kits starting from ₹8,000</li>
        <li>• 2-year comprehensive warranty</li>
        <li>• Local service support across Delhi NCR</li>
      </ul>
    </div>

    <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
      <h4 class="text-lg font-bold text-green-800 mb-2">2. Hikvision - Industry Technology Leader</h4>
      <p class="text-green-700 mb-3">Global #1 in surveillance technology with cutting-edge AI features.</p>
      <ul class="text-green-600 text-sm space-y-1">
        <li>• Advanced facial recognition technology</li>
        <li>• 4K ultra-HD recording capability</li>
        <li>• Professional-grade reliability</li>
      </ul>
    </div>

    <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
      <h4 class="text-lg font-bold text-orange-800 mb-2">3. Dahua - Superior Software Integration</h4>
      <p class="text-orange-700 mb-3">Excellent mobile app experience with intuitive controls.</p>
      <ul class="text-orange-600 text-sm space-y-1">
        <li>• User-friendly mobile applications</li>
        <li>• Cloud storage with flexible plans</li>
        <li>• Easy installation and setup</li>
      </ul>
    </div>

    <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
      <h4 class="text-lg font-bold text-purple-800 mb-2">4. Godrej - Trusted Indian Brand</h4>
      <p class="text-purple-700 mb-3">Strong local service network and reliable after-sales support.</p>
      <ul class="text-purple-600 text-sm space-y-1">
        <li>• Competitive pricing for Indian market</li>
        <li>• Quick response technical support</li>
      </ul>
    </div>

    <div class="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg border border-teal-200">
      <h4 class="text-lg font-bold text-teal-800 mb-2">5. TP-Link Tapo - Best for Small Offices</h4>
      <p class="text-teal-700 mb-3">Perfect plug-and-play solution for small businesses.</p>
      <ul class="text-teal-600 text-sm space-y-1">
        <li>• Quick 5-minute setup process</li>
        <li>• Built-in Wi-Fi connectivity</li>
        <li>• Free cloud storage included</li>
      </ul>
    </div>
  </div>

  <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
    <h3 class="text-xl font-semibold text-yellow-800 mb-4">🎯 Critical Coverage Areas:</h3>
    <ul class="text-yellow-700 space-y-1">
      <li>• Main entrance and exit points</li>
      <li>• Cash counters and payment areas</li>
      <li>• Storage rooms and inventory areas</li>
      <li>• Parking areas and building perimeter</li>
    </ul>
  </div>

  <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
    <h3 class="text-xl font-semibold text-blue-800 mb-4">Ready to Secure Your Business?</h3>
    <p class="text-blue-700 font-medium">Contact iTOP Services for a free security assessment and customized CCTV solution.</p>
  </div>
</div>
```

---

### Blog 3: Fire Alarms (ID: 3)

**In Sanity Studio → Blog Post → Create New**

| Field | Value |
|-------|-------|
| Blog ID | `3` |
| Title | `Ensuring Fire Safety: A Guide to Modern Fire Alarms` |
| Excerpt | `Learn about different types of fire alarm systems, recommended brands like Honeywell and Ceasefire, and the best locations for installation.` |
| Author | `Fire Safety Expert Team` |
| Publication Date | `2024-03-10` |
| Category | `Fire Alarms` |
| Read Time | `10 min read` |

**HTML Content**:

```html
<div class="prose prose-lg max-w-none space-y-8">
  <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
    <h2 class="text-2xl font-semibold text-red-800 mb-3">Why Fire Alarms Are Non-Negotiable</h2>
    <p class="text-red-700 leading-relaxed">Fire doesn't wait. Every year, thousands of homes and businesses suffer devastating losses that could have been prevented with proper fire detection systems. A fire alarm system is your first line of defense – providing precious seconds that can mean the difference between a minor incident and a catastrophe.</p>
  </div>

  <div class="space-y-6">
    <h3 class="text-xl font-semibold text-gray-800">🔥 Types of Fire Alarm Systems</h3>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-red-600 mb-3">Smoke Detectors</h4>
        <p class="text-gray-600 text-sm">Detect smoke particles in the air. Ideal for bedrooms, living rooms, and hallways. Two types: ionization (fast-flaming fires) and photoelectric (smoldering fires).</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-red-600 mb-3">Heat Detectors</h4>
        <p class="text-gray-600 text-sm">Activate when temperature rises above a threshold. Perfect for kitchens and garages where smoke detectors may cause false alarms.</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-red-600 mb-3">Carbon Monoxide Detectors</h4>
        <p class="text-gray-600 text-sm">Detect deadly CO gas from faulty heaters, generators, or blocked chimneys. Essential for homes with gas appliances.</p>
      </div>
      <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h4 class="font-semibold text-red-600 mb-3">Addressable Systems</h4>
        <p class="text-gray-600 text-sm">Advanced systems for large buildings that identify the exact location of fire. Required for commercial compliance.</p>
      </div>
    </div>
  </div>

  <div class="bg-orange-50 p-6 rounded-lg border border-orange-200">
    <h3 class="text-xl font-semibold text-orange-800 mb-4">🏆 Top Fire Alarm Brands We Install:</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg border border-orange-200">
        <h4 class="font-semibold text-orange-700">Honeywell</h4>
        <p class="text-gray-600 text-sm">Global leader in fire safety with advanced detection technology.</p>
      </div>
      <div class="bg-white p-4 rounded-lg border border-orange-200">
        <h4 class="font-semibold text-orange-700">Ceasefire</h4>
        <p class="text-gray-600 text-sm">India's trusted brand for residential and commercial systems.</p>
      </div>
      <div class="bg-white p-4 rounded-lg border border-orange-200">
        <h4 class="font-semibold text-orange-700">Bosch</h4>
        <p class="text-gray-600 text-sm">German engineering with premium reliability and smart features.</p>
      </div>
      <div class="bg-white p-4 rounded-lg border border-orange-200">
        <h4 class="font-semibold text-orange-700">Agni</h4>
        <p class="text-gray-600 text-sm">Affordable Indian brand with good after-sales support.</p>
      </div>
      <div class="bg-white p-4 rounded-lg border border-orange-200">
        <h4 class="font-semibold text-orange-700">Ravel</h4>
        <p class="text-gray-600 text-sm">Budget-friendly options for small businesses and homes.</p>
      </div>
      <div class="bg-white p-4 rounded-lg border border-orange-200">
        <h4 class="font-semibold text-orange-700">Morley</h4>
        <p class="text-gray-600 text-sm">Professional-grade systems for large commercial installations.</p>
      </div>
    </div>
  </div>

  <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
    <h3 class="text-xl font-semibold text-yellow-800 mb-4">📍 Where to Install Fire Alarms:</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <h4 class="font-semibold text-yellow-800 mb-2">Residential:</h4>
        <ul class="text-yellow-700 text-sm space-y-1">
          <li>• Every bedroom and hallway</li>
          <li>• Living room and dining area</li>
          <li>• Kitchen (heat detector recommended)</li>
          <li>• Near gas appliances</li>
          <li>• Each floor including basement</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-yellow-800 mb-2">Commercial:</h4>
        <ul class="text-yellow-700 text-sm space-y-1">
          <li>• All escape routes and corridors</li>
          <li>• Server rooms and electrical panels</li>
          <li>• Storage areas and warehouses</li>
          <li>• Reception and waiting areas</li>
          <li>• Ceiling voids and false ceilings</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-green-50 p-6 rounded-lg border border-green-200">
    <h3 class="text-xl font-semibold text-green-800 mb-4">✅ Our Fire Safety Services:</h3>
    <ul class="text-green-700 space-y-2">
      <li>• <strong>Free Fire Safety Assessment:</strong> We evaluate your property and recommend the right system</li>
      <li>• <strong>Professional Installation:</strong> Certified technicians ensure proper placement and wiring</li>
      <li>• <strong>Regulatory Compliance:</strong> Help you meet fire safety codes and insurance requirements</li>
      <li>• <strong>Annual Maintenance:</strong> Regular testing and battery replacement</li>
      <li>• <strong>24/7 Emergency Support:</strong> Immediate response for alarm issues</li>
    </ul>
  </div>

  <div class="bg-red-50 p-6 rounded-lg border border-red-200">
    <h3 class="text-xl font-semibold text-red-800 mb-4">🚨 Don't Wait for a Fire Emergency!</h3>
    <p class="text-red-700 mb-4">The best time to install a fire alarm was yesterday. The second best time is now.</p>
    <p class="text-red-700 font-medium">Contact iTOP Services for a free fire safety audit and protect what matters most!</p>
  </div>
</div>
```

---

### Blog 4: Printers (ID: 4)

**In Sanity Studio → Blog Post → Create New**

| Field | Value |
|-------|-------|
| Blog ID | `4` |
| Title | `Laser vs Inkjet Printers: Which One Suits Your Needs?` |
| Excerpt | `Compare inkjet and laser printers to make the right choice based on your usage, budget, and printing needs for home or business use.` |
| Author | `Printer Specialist Team` |
| Publication Date | `2024-03-25` |
| Category | `Printers` |
| Read Time | `15 min read` |

**HTML Content**:

```html
<div class="prose prose-lg max-w-none space-y-8">
  <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
    <h2 class="text-2xl font-semibold text-cyan-800 mb-3">Choosing the Right Printer for Your Needs</h2>
    <p class="text-cyan-700 leading-relaxed">In today's digital age, having the right printer is essential for both home and business. But with so many options available, how do you choose? Let's break down the key differences and help you make the perfect choice.</p>
  </div>

  <div class="space-y-6">
    <h3 class="text-xl font-semibold text-gray-800">🖨️ Inkjet vs Laser: The Basics</h3>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h4 class="font-semibold text-blue-700 mb-3">Inkjet Printers</h4>
        <ul class="text-blue-600 text-sm space-y-2">
          <li>• Use liquid ink sprayed through tiny nozzles</li>
          <li>• Excellent for photos and color documents</li>
          <li>• Lower upfront cost (₹3,000 - ₹15,000)</li>
          <li>• Higher per-page printing cost</li>
          <li>• Best for: Home users, photographers</li>
        </ul>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h4 class="font-semibold text-gray-700 mb-3">Laser Printers</h4>
        <ul class="text-gray-600 text-sm space-y-2">
          <li>• Use toner powder and heat fusion</li>
          <li>• Sharp text and fast printing</li>
          <li>• Higher upfront cost (₹8,000 - ₹50,000)</li>
          <li>• Lower per-page printing cost</li>
          <li>• Best for: Offices, high-volume printing</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-green-50 p-6 rounded-lg border border-green-200">
    <h3 class="text-xl font-semibold text-green-800 mb-4">💡 Ink Tank Printers - The Game Changer!</h3>
    <p class="text-green-700 mb-4">Modern ink tank printers (like Epson EcoTank and HP Smart Tank) offer the best of both worlds:</p>
    <ul class="text-green-600 space-y-2">
      <li>• <strong>Ultra-low printing costs:</strong> ₹0.10 - ₹0.50 per page</li>
      <li>• <strong>Huge capacity:</strong> One refill prints 4,000 - 7,500 pages</li>
      <li>• <strong>No more cartridge hassles:</strong> Just pour ink from bottles</li>
      <li>• <strong>Excellent for both text and photos</strong></li>
    </ul>
  </div>

  <div class="space-y-6">
    <h3 class="text-xl font-semibold text-gray-800">🏆 Top Printer Brands We Service:</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-white p-4 border border-gray-200 rounded-lg">
        <h4 class="font-semibold text-blue-600">HP</h4>
        <p class="text-gray-600 text-sm">Reliable, wide range, excellent support</p>
      </div>
      <div class="bg-white p-4 border border-gray-200 rounded-lg">
        <h4 class="font-semibold text-blue-600">Canon</h4>
        <p class="text-gray-600 text-sm">Great for photos, quality color printing</p>
      </div>
      <div class="bg-white p-4 border border-gray-200 rounded-lg">
        <h4 class="font-semibold text-blue-600">Epson</h4>
        <p class="text-gray-600 text-sm">EcoTank series, excellent ink economy</p>
      </div>
      <div class="bg-white p-4 border border-gray-200 rounded-lg">
        <h4 class="font-semibold text-blue-600">Brother</h4>
        <p class="text-gray-600 text-sm">Business-focused, reliable laser printers</p>
      </div>
      <div class="bg-white p-4 border border-gray-200 rounded-lg">
        <h4 class="font-semibold text-blue-600">Samsung</h4>
        <p class="text-gray-600 text-sm">Compact designs, good value</p>
      </div>
      <div class="bg-white p-4 border border-gray-200 rounded-lg">
        <h4 class="font-semibold text-blue-600">Xerox</h4>
        <p class="text-gray-600 text-sm">Enterprise-grade, high-volume machines</p>
      </div>
    </div>
  </div>

  <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
    <h3 class="text-xl font-semibold text-yellow-800 mb-4">💰 Cost Comparison (per page):</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg border border-yellow-200">
        <h4 class="font-semibold text-yellow-800">Inkjet + Cartridge</h4>
        <p class="text-yellow-700 text-lg font-bold">₹5-8 per page</p>
      </div>
      <div class="bg-white p-4 rounded-lg border border-yellow-200">
        <h4 class="font-semibold text-yellow-800">Ink Tank</h4>
        <p class="text-yellow-700 text-lg font-bold">₹0.10-0.50 per page</p>
      </div>
      <div class="bg-white p-4 rounded-lg border border-yellow-200">
        <h4 class="font-semibold text-yellow-800">Laser</h4>
        <p class="text-yellow-700 text-lg font-bold">₹0.50-2 per page</p>
      </div>
    </div>
  </div>

  <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
    <h3 class="text-xl font-semibold text-purple-800 mb-4">🔧 Our Complete Printer Services:</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <h4 class="font-semibold text-purple-700 mb-2">Sales & Setup:</h4>
        <ul class="text-purple-600 text-sm space-y-1">
          <li>• Free consultation and recommendation</li>
          <li>• Competitive pricing with warranty</li>
          <li>• Professional installation</li>
          <li>• Network and driver setup</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-purple-700 mb-2">Repair & Maintenance:</h4>
        <ul class="text-purple-600 text-sm space-y-1">
          <li>• Same-day repair service</li>
          <li>• Genuine parts and refills</li>
          <li>• Annual maintenance contracts</li>
          <li>• Pickup and delivery service</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
    <h3 class="text-xl font-semibold text-blue-800 mb-4">🚀 Need Help Choosing a Printer?</h3>
    <p class="text-blue-700 mb-4">Our experts have 17+ years of experience helping customers find the perfect printer. We consider your:</p>
    <ul class="text-blue-600 mb-4">
      <li>• Monthly printing volume</li>
      <li>• Color vs black & white needs</li>
      <li>• Budget constraints</li>
      <li>• Space requirements</li>
    </ul>
    <p class="text-blue-700 font-medium">Contact iTOP Services for personalized recommendations!</p>
  </div>
</div>
```

---

## Adding New Sections to Sanity

### How to Add Any New Section

**Step 1: Create Schema in Sanity Studio**

Create a new file in `schemas/` folder:

```typescript
// schemas/newSection.ts
export default {
  name: 'newSectionName',
  title: 'New Section Title',
  type: 'document',
  fields: [
    // Add your fields here
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    // ... more fields
  ]
};
```

**Step 2: Register Schema**

Add to `schemas/index.ts`:

```typescript
import newSection from './newSection';

export const schemaTypes = [
  // ... existing
  newSection,
];
```

**Step 3: Add Query in Website**

Add to `src/lib/sanity.ts`:

```typescript
export const queries = {
  // ... existing queries
  
  newSection: `*[_type == "newSectionName"][0]{
    title,
    // ... other fields
  }`,
};
```

**Step 4: Create Hook in Website**

Add to `src/hooks/useCMSContent.ts`:

```typescript
export function useNewSection() {
  const fallback = {
    title: 'Default Title',
    // ... default values
  };
  
  return useCMSContent(queries.newSection, fallback);
}
```

**Step 5: Use in Component**

```typescript
import { useNewSection } from '@/hooks/useCMSContent';

const MyComponent = () => {
  const { content } = useNewSection();
  return <h1>{content.title}</h1>;
};
```

---

## Favicon Change Instructions

### Method 1: Replace Favicon File (Easiest)

**Location:** `public/favicon.ico`

**Steps:**
1. Create your favicon image (recommended: 32x32 or 64x64 pixels)
2. Use an online converter like [favicon.io](https://favicon.io/) to convert your logo to `.ico` format
3. Download the generated `favicon.ico`
4. Replace the file at `public/favicon.ico` with your new file
5. Deploy your changes

### Method 2: Use PNG Favicon

**Edit `index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Replace this line: -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    
    <!-- With this (for PNG): -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    
    <!-- Or for multiple sizes: -->
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    
    <title>iTOP Services - Tech Solutions</title>
    <!-- rest of head -->
  </head>
```

### Method 3: Use SVG Favicon (Modern Browsers)

**Edit `index.html`:**

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

### Favicon Best Practices

| Size | Usage |
|------|-------|
| 16x16 | Browser tab (standard) |
| 32x32 | Browser tab (retina) |
| 48x48 | Windows taskbar |
| 180x180 | Apple Touch Icon |
| 192x192 | Android Chrome |
| 512x512 | PWA icon |

### Quick Favicon Change Checklist

1. ☐ Design your logo as a square image
2. ☐ Convert to ICO format (or use PNG/SVG)
3. ☐ Name it `favicon.ico`
4. ☐ Place in `public/` folder
5. ☐ (Optional) Update `index.html` if using different format
6. ☐ Clear browser cache and test
7. ☐ Deploy to Netlify

---

## Summary

### What You Can Now Edit from Sanity:

| Content Type | Sanity Document | Website Component |
|--------------|-----------------|-------------------|
| Blog Cards (homepage) | `blog` | BlogsSection.tsx |
| Full Blog Articles | `blogPost` (new) | BlogPost.tsx |
| Blog Section Title | `blogsSection` | BlogsSection.tsx |

### Files You Edit for Favicon:

| File | Purpose |
|------|---------|
| `public/favicon.ico` | The favicon image file |
| `index.html` | Link tag pointing to favicon |

### Need Help?

Contact your developer or refer to:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Favicon Generator](https://favicon.io/)
