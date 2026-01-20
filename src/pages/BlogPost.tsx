import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock, CheckCircle } from 'lucide-react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  useScrollPosition();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = {
    '1': {
      title: 'The Future of Home Security with Smart Door Locks',
      content: `
        <div class="prose prose-lg max-w-none space-y-8">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 class="text-2xl font-semibold text-blue-800 mb-3">Why Smart Door Locks Are Revolutionary</h2>
            <p class="text-blue-700 leading-relaxed">Traditional keys are becoming obsolete. Smart door locks represent the future of home security, offering unprecedented convenience, control, and peace of mind. Whether you're a busy professional, a parent juggling multiple responsibilities, or someone who values cutting-edge technology, smart locks transform how you interact with your home.</p>
          </div>

          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-800 flex items-center">
              <span class="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">🔐</span>
              What Exactly Are Smart Door Locks?
            </h3>
            <p class="text-gray-700 leading-relaxed">Smart door locks are advanced security devices that eliminate the need for traditional physical keys. Instead, they use modern technology like Bluetooth connectivity, Wi-Fi networks, fingerprint recognition, numeric keypads, or smartphone apps to grant access. Think of them as your personal security guard that never sleeps and always remembers who should and shouldn't enter your home.</p>
          </div>

          <div class="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 class="text-xl font-semibold text-green-800 mb-4">Key Benefits That Change Your Life:</h3>
            <div class="text-green-700 space-y-3 leading-relaxed">
              <p>
                <strong class="text-green-800">Remote Access Control:</strong>
                Lock or unlock your door from anywhere in the world using your smartphone.
                Perfect for letting in family members, service providers, or guests when you're not home.
              </p>

              <p>
                <strong class="text-green-800">Temporary Access Codes:</strong>
                Create one-time or time-limited access codes for housekeepers, repair technicians,
                Airbnb guests, or family members. Codes expire automatically for maximum security.
              </p>

              <p>
                <strong class="text-green-800">Real-Time Security Alerts:</strong>
                Receive instant notifications on your phone if someone attempts to tamper with the lock,
                enters the wrong code multiple times, or if the door is left unlocked.
              </p>

              <p>
                <strong class="text-green-800">Complete Activity Tracking:</strong>
                Monitor who enters and exits your home with detailed logs showing timestamps.
                Perfect for keeping track of children, elderly family members, or service providers.
              </p>
            </div>
          </div>


          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-800">🏆 Top Smart Lock Brands We Install & Service:</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 class="font-semibold text-blue-600 mb-3">Qubo Smart Locks</h4>
                <p class="text-gray-600 text-sm">Affordable Indian brand with excellent app connectivity and customer support. Great for first-time smart lock users.</p>
              </div>
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 class="font-semibold text-blue-600 mb-3">Yale Digital Locks</h4>
                <p class="text-gray-600 text-sm">Premium international brand known for exceptional security features and sleek designs that complement modern homes.</p>
              </div>
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 class="font-semibold text-blue-600 mb-3">Godrej Smart Locks</h4>
                <p class="text-gray-600 text-sm">Trusted Indian manufacturer with robust build quality and wide range of options for different door types and budgets.</p>
              </div>
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 class="font-semibold text-blue-600 mb-3">Hafele Digital Locks</h4>
                <p class="text-gray-600 text-sm">European engineering with premium materials and advanced features. Ideal for luxury homes and commercial properties.</p>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 class="text-xl font-semibold text-yellow-800 mb-4">🚀 Our Professional Installation Service Includes:</h3>
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-yellow-600 mr-3">•</span>
                <div>
                  <strong class="text-yellow-800">Free Home Visit:</strong>
                  <span class="text-yellow-700 block">Our expert evaluates your door and recommends the best lock</span>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-yellow-600 mr-3">•</span>
                <div>
                  <strong class="text-yellow-800">Same-Day Installation:</strong>
                  <span class="text-yellow-700 block">Most installations completed within 2-3 hours</span>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-yellow-600 mr-3">•</span>
                <div>
                  <strong class="text-yellow-800">App Setup & Training:</strong>
                  <span class="text-yellow-700 block">We configure your smartphone and teach you all features</span>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-yellow-600 mr-3">•</span>
                <div>
                  <strong class="text-yellow-800">6-Month Service Warranty:</strong>
                  <span class="text-yellow-700 block">Free maintenance and support for 6 months</span>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-yellow-600 mr-3">•</span>
                <div>
                  <strong class="text-yellow-800">24/7 Emergency Support:</strong>
                  <span class="text-yellow-700 block">Locked out? We provide immediate assistance</span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-800">🏠 Choosing the Right Lock for Your Door Type:</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-400 pl-6 py-3">
                <h4 class="font-semibold text-gray-800 mb-2">Wooden Doors</h4>
                <p class="text-gray-600">Most compatible with all smart lock types. Easy installation with standard tools. We recommend fingerprint + keypad combination locks for maximum convenience.</p>
              </div>
              <div class="border-l-4 border-green-400 pl-6 py-3">
                <h4 class="font-semibold text-gray-800 mb-2">Metal/Steel Doors</h4>
                <p class="text-gray-600">Requires special mounting hardware which we provide. Excellent security when paired with smart locks. Installation takes slightly longer but provides superior protection.</p>
              </div>
              <div class="border-l-4 border-purple-400 pl-6 py-3">
                <h4 class="font-semibold text-gray-800 mb-2">Glass Doors</h4>
                <p class="text-gray-600">Special glass-compatible smart locks available. We use professional mounting techniques that don't compromise the glass integrity.</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 class="text-xl font-semibold text-blue-800 mb-4">Ready to Upgrade Your Home Security?</h3>
            <p class="text-blue-700 mb-4">Smart door locks aren't just about convenience – they're about peace of mind, enhanced security, and stepping into the future of home automation. Our expert team has installed over 500+ smart locks across Delhi NCR with 100% customer satisfaction.</p>
            <p class="text-blue-700 font-medium">Contact us today for a free consultation and quote. We'll help you choose the perfect smart lock for your home and lifestyle.</p>
          </div>
        </div>
      `,
      author: 'Security Expert Team',
      date: 'January 20, 2024',
      category: 'Door Locks',
      readTime: '8 min read',
      image: '/placeholder.svg'
    },
    '2': {
      title: 'Top 5 CCTV Cameras for Business Surveillance',
      content: `
        <div class="prose prose-lg max-w-none space-y-8">
          <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h2 class="text-2xl font-semibold text-purple-800 mb-3">Protect Your Business Investment</h2>
            <p class="text-purple-700 leading-relaxed">Your business is more than just a source of income – it's your life's work, your employees' livelihood, and your customers' trust. A comprehensive CCTV surveillance system isn't just about catching criminals; it's about creating a secure environment where business thrives, employees feel safe, and customers trust your establishment.</p>
          </div>

          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-800 flex items-center">
              <span class="bg-purple-100 text-purple-600 rounded-full p-2 mr-3">📹</span>
              Essential Features for Business CCTV Systems
            </h3>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 class="font-semibold text-purple-600 mb-3 flex items-center">
                  <CheckCircle class="h-5 w-5 mr-2" />
                  High Resolution (HD/4K)
                </h4>
                <p class="text-gray-600 text-sm">Crystal-clear footage essential for identifying faces, reading license plates, and providing evidence to authorities. 4K cameras capture details that could make or break a case.</p>
              </div>
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 class="font-semibold text-purple-600 mb-3 flex items-center">
                  <CheckCircle class="h-5 w-5 mr-2" />
                  Night Vision Technology
                </h4>
                <p class="text-gray-600 text-sm">Advanced IR LEDs provide clear visibility even in complete darkness. Essential for 24/7 monitoring and capturing incidents that often occur after business hours.</p>
              </div>
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 class="font-semibold text-purple-600 mb-3 flex items-center">
                  <CheckCircle class="h-5 w-5 mr-2" />
                  Smart Motion Detection
                </h4>
                <p class="text-gray-600 text-sm">AI-powered alerts distinguish between regular activity and potential threats. Reduces false alarms while ensuring you never miss important events.</p>
              </div>
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 class="font-semibold text-purple-600 mb-3 flex items-center">
                  <CheckCircle class="h-5 w-5 mr-2" />
                  Remote Mobile Access
                </h4>
                <p class="text-gray-600 text-sm">Monitor your business from anywhere using smartphone apps. Check in during vacations, verify employee attendance, or respond to security alerts instantly.</p>
              </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mb-6">🏆 Top 5 CCTV Brands We Recommend & Install:</h3>

            <div class="space-y-6 mb-8">
              <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h4 class="text-lg font-bold text-blue-800 mb-2">1. CP Plus - Best Value for Money</h4>
                <p class="text-blue-700 mb-3">Leading Indian brand trusted by over 10,000+ businesses nationwide. Excellent balance of price, features, and reliability.</p>
                <ul class="text-blue-600 text-sm space-y-1">
                  <li>• Complete DVR kits starting from ₹8,000</li>
                  <li>• 2-year comprehensive warranty</li>
                  <li>• Local service support across Delhi NCR</li>
                  <li>• Compatible with all smartphone platforms</li>
                </ul>
              </div>

              <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <h4 class="text-lg font-bold text-green-800 mb-2">2. Hikvision - Industry Technology Leader</h4>
                <p class="text-green-700 mb-3">Global #1 in surveillance technology with cutting-edge AI features and superior image quality.</p>
                <ul class="text-green-600 text-sm space-y-1">
                  <li>• Advanced facial recognition technology</li>
                  <li>• 4K ultra-HD recording capability</li>
                  <li>• Smart analytics and behavior detection</li>
                  <li>• Professional-grade reliability</li>
                </ul>
              </div>

              <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <h4 class="text-lg font-bold text-orange-800 mb-2">3. Dahua - Superior Software Integration</h4>
                <p class="text-orange-700 mb-3">Excellent mobile app experience with intuitive controls and advanced cloud storage options.</p>
                <ul class="text-orange-600 text-sm space-y-1">
                  <li>• User-friendly mobile applications</li>
                  <li>• Cloud storage with flexible plans</li>
                  <li>• Easy installation and setup</li>
                  <li>• Robust weather-resistant housing</li>
                </ul>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <h4 class="text-lg font-bold text-purple-800 mb-2">4. Godrej - Trusted Indian Brand</h4>
                <p class="text-purple-700 mb-3">Established Indian manufacturer with strong local service network and reliable after-sales support.</p>
                <ul class="text-purple-600 text-sm space-y-1">
                  <li>• Strong local service network</li>
                  <li>• Competitive pricing for Indian market</li>
                  <li>• Reliable build quality</li>
                  <li>• Quick response technical support</li>
                </ul>
              </div>

              <div class="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg border border-teal-200">
                <h4 class="text-lg font-bold text-teal-800 mb-2">5. TP-Link Tapo - Best for Small Offices</h4>
                <p class="text-teal-700 mb-3">Perfect plug-and-play solution for small businesses, startups, and home offices.</p>
                <ul class="text-teal-600 text-sm space-y-1">
                  <li>• Quick 5-minute setup process</li>
                  <li>• Affordable wireless cameras</li>
                  <li>• Built-in Wi-Fi connectivity</li>
                  <li>• Free cloud storage included</li>
                </ul>
              </div>
            </div>

            <div class="bg-yellow-50 p-6 rounded-lg mb-8 border border-yellow-200">
              <h3 class="text-xl font-semibold text-yellow-800 mb-4">🎯 Professional Installation & Placement Strategy:</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold text-yellow-800 mb-2">Critical Coverage Areas:</h4>
                  <ul class="text-yellow-700 text-sm space-y-1">
                    <li>• Main entrance and exit points</li>
                    <li>• Cash counters and payment areas</li>
                    <li>• Storage rooms and inventory areas</li>
                    <li>• Parking areas and building perimeter</li>
                    <li>• Employee work areas (with consent)</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-yellow-800 mb-2">Installation Best Practices:</h4>
                  <ul class="text-yellow-700 text-sm space-y-1">
                    <li>• Optimal height: 8-10 feet from ground</li>
                    <li>• Clear line of sight, no obstructions</li>
                    <li>• Adequate lighting or IR illumination</li>
                    <li>• Weather protection for outdoor cameras</li>
                    <li>• Secure cable routing and connections</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 class="text-xl font-semibold text-blue-800 mb-4">🛡️ Complete Business Security Package</h3>
              <p class="text-blue-700 mb-4">Our comprehensive CCTV installation service includes free site survey, professional installation, system configuration, mobile app setup, and 1-year maintenance warranty. We've secured over 200+ businesses across Delhi NCR with zero security incidents post-installation.</p>
              <div class="bg-white p-4 rounded-lg border border-blue-200 mt-4">
                <h4 class="font-semibold text-blue-800 mb-2">Package Starting from ₹12,000*</h4>
                <p class="text-blue-600 text-sm">*Includes 4 HD cameras, DVR, cables, installation, and setup</p>
              </div>
            </div>
          </div>
        </div>
      `,
      author: 'CCTV Specialist Team',
      date: 'February 15, 2024',
      category: 'CCTV',
      readTime: '10 min read',
      image: '/placeholder.svg'
    },
    '3': {
      title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
      content: `
        <div class="prose prose-lg max-w-none space-y-8">
          <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg mb-8 border-l-4 border-red-500">
            <h2 class="text-2xl font-semibold text-red-800 mb-3">Fire Safety: Your First Line of Defense</h2>
            <p class="text-red-700 leading-relaxed">Every year, thousands of properties and lives are lost to preventable fire accidents. Modern fire alarm systems are not just safety devices – they're life-saving technologies that provide precious minutes for evacuation and emergency response. In those critical moments, a well-designed fire alarm system becomes the difference between a minor incident and a major tragedy.</p>
          </div>

          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-800 flex items-center">
              <span class="bg-red-100 text-red-600 rounded-full p-2 mr-3">🔥</span>
              Understanding Modern Fire Alarm Technology
            </h3>
            <p class="mb-6 text-gray-700 leading-relaxed">Today's fire alarm systems go far beyond the simple smoke detectors of the past. They use sophisticated sensors, intelligent algorithms, and network connectivity to detect threats early, minimize false alarms, and coordinate emergency responses automatically.</p>

            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <div class="bg-blue-100 text-blue-600 rounded-full p-3 mb-4 inline-block">
                  <CheckCircle class="h-6 w-6" />
                </div>
                <h4 class="font-semibold text-blue-600 mb-2">Smoke Detectors</h4>
                <p class="text-gray-600 text-sm">Advanced photoelectric and ionization sensors detect different types of smoke particles for comprehensive protection.</p>
              </div>
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <div class="bg-orange-100 text-orange-600 rounded-full p-3 mb-4 inline-block">
                  <CheckCircle class="h-6 w-6" />
                </div>
                <h4 class="font-semibold text-orange-600 mb-2">Heat Detectors</h4>
                <p class="text-gray-600 text-sm">Intelligent thermal sensors that detect rapid temperature changes and sustained high temperatures.</p>
              </div>
              <div class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <div class="bg-red-100 text-red-600 rounded-full p-3 mb-4 inline-block">
                  <CheckCircle class="h-6 w-6" />
                </div>
                <h4 class="font-semibold text-red-600 mb-2">Flame Sensors</h4>
                <p class="text-gray-600 text-sm">Infrared and UV flame detectors that identify actual fire signatures within seconds.</p>
              </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mb-6">🏆 Top Fire Alarm Brands We Install & Service:</h3>

            <div class="space-y-6 mb-8">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-lg border border-blue-200">
                <h4 class="text-lg font-bold text-blue-800 mb-2">Honeywell - Global Fire Safety Leader</h4>
                <p class="text-blue-700 mb-3">World's most trusted fire detection technology with over 100 years of safety innovation.</p>
                <div class="grid md:grid-cols-2 gap-4">
                  <ul class="text-blue-600 text-sm space-y-1">
                    <li>• Advanced multi-sensor technology</li>
                    <li>• Intelligent false alarm prevention</li>
                    <li>• Comprehensive system integration</li>
                  </ul>
                  <ul class="text-blue-600 text-sm space-y-1">
                    <li>• 24/7 monitoring capabilities</li>
                    <li>• Global warranty and support</li>
                    <li>• Suitable for all building types</li>
                  </ul>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <h4 class="text-lg font-bold text-green-800 mb-2">Ravel - Premium Indian Fire Systems</h4>
                <p class="text-green-700 mb-3">Leading Indian manufacturer specializing in intelligent fire detection and control panels.</p>
                <div class="grid md:grid-cols-2 gap-4">
                  <ul class="text-green-600 text-sm space-y-1">
                    <li>• Microprocessor-based control panels</li>
                    <li>• Addressable fire detection systems</li>
                    <li>• Quick local technical support</li>
                  </ul>
                  <ul class="text-green-600 text-sm space-y-1">
                    <li>• Cost-effective Indian solutions</li>
                    <li>• BIS certified products</li>
                    <li>• Easy maintenance and servicing</li>
                  </ul>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <h4 class="text-lg font-bold text-purple-800 mb-2">Ceasefire - Complete Fire Solutions</h4>
                <p class="text-purple-700 mb-3">Comprehensive fire safety systems combining detection, suppression, and emergency response.</p>
                <div class="grid md:grid-cols-2 gap-4">
                  <ul class="text-purple-600 text-sm space-y-1">
                    <li>• Integrated detection & suppression</li>
                    <li>• Automatic fire extinguishing systems</li>
                    <li>• Emergency evacuation systems</li>
                  </ul>
                  <ul class="text-purple-600 text-sm space-y-1">
                    <li>• Industrial-grade reliability</li>
                    <li>• Customized safety solutions</li>
                    <li>• Pan-India service network</li>
                  </ul>
                </div>
              </div>

              <div class="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg border border-orange-200">
                <h4 class="text-lg font-bold text-orange-800 mb-2">Bosch & Siemens - Advanced Technology</h4>
                <p class="text-orange-700 mb-3">Premium European fire safety systems with cutting-edge automation and integration capabilities.</p>
                <div class="grid md:grid-cols-2 gap-4">
                  <ul class="text-orange-600 text-sm space-y-1">
                    <li>• AI-powered threat detection</li>
                    <li>• Building automation integration</li>
                    <li>• Advanced networking capabilities</li>
                  </ul>
                  <ul class="text-orange-600 text-sm space-y-1">
                    <li>• Premium build quality</li>
                    <li>• Long-term reliability</li>
                    <li>• Enterprise-grade solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-yellow-50 p-6 rounded-lg mb-8 border border-yellow-200">
              <h3 class="text-xl font-semibold text-yellow-800 mb-4">📍 Strategic Fire Alarm Placement Guide:</h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-yellow-800 mb-3">Essential Coverage Areas:</h4>
                  <ul class="text-yellow-700 space-y-2">
                    <li class="flex items-start">
                      <CheckCircle class="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Kitchen Areas:</strong> Heat detectors preferred over smoke detectors to prevent cooking-related false alarms</span>
                    </li>
                    <li class="flex items-start">
                      <CheckCircle class="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Living & Bedroom Areas:</strong> Photoelectric smoke detectors for early detection</span>
                    </li>
                    <li class="flex items-start">
                      <CheckCircle class="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Hallways & Stairwells:</strong> Critical for evacuation route monitoring</span>
                    </li>
                    <li class="flex items-start">
                      <CheckCircle class="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                      <span><strong>Electrical Panels:</strong> Specialized heat detection for electrical fire prevention</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-yellow-800 mb-3">Professional Installation Standards:</h4>
                  <ul class="text-yellow-700 space-y-2">
                    <li class="flex items-start">
                      <CheckCircle class="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Ceiling-mounted for optimal smoke detection coverage</span>
                    </li>
                    <li class="flex items-start">
                      <CheckCircle class="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Minimum 3 feet from air vents and fans</span>
                    </li>
                    <li class="flex items-start">
                      <CheckCircle class="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Interconnected system for simultaneous alerts</span>
                    </li>
                    <li class="flex items-start">
                      <CheckCircle class="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Battery backup for power outage protection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-6 rounded-lg mb-8 border border-red-200">
              <h3 class="text-xl font-semibold text-red-800 mb-4">⏰ Maintenance & Testing Schedule:</h3>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded-lg border border-red-200">
                  <h4 class="font-semibold text-red-600 mb-2">Monthly Testing</h4>
                  <p class="text-red-700 text-sm">Test alarm sounds and visual indicators. Check battery levels and system connectivity.</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-red-200">
                  <h4 class="font-semibold text-red-600 mb-2">Annual Service</h4>
                  <p class="text-red-700 text-sm">Professional sensor cleaning, calibration, and complete system inspection by certified technicians.</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-red-200">
                  <h4 class="font-semibold text-red-600 mb-2">Battery Replacement</h4>
                  <p class="text-red-700 text-sm">Annual battery replacement for optimal performance. Smart systems notify you in advance.</p>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 class="text-xl font-semibold text-blue-800 mb-4">🛡️ Complete Fire Safety Solution</h3>
              <p class="text-blue-700 mb-4">Don't wait for a fire emergency to think about safety. Our comprehensive fire alarm installation includes professional assessment, code-compliant installation, system testing, and ongoing maintenance support. We've protected over 300+ properties with zero fire-related incidents.</p>
              
              <div class="bg-white p-4 rounded-lg border border-blue-200 mt-4">
                <h4 class="font-semibold text-blue-800 mb-2">Complete Package Starting from ₹6,000*</h4>
                <p class="text-blue-600 text-sm mb-2">*Includes smoke detectors, control panel, installation, and 1-year AMC</p>
                <p class="text-blue-600 text-sm font-medium">🚨 Emergency Response: 24/7 support for fire alarm issues</p>
              </div>
              
              <div class="mt-4 p-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg">
                <p class="text-red-800 font-semibold text-center">Remember: Early detection saves lives. Don't compromise on fire safety.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      author: 'Fire Safety Expert Team',
      date: 'March 10, 2024',
      category: 'Fire Alarms',
      readTime: '12 min read',
      image: '/placeholder.svg'
    },
    '4': {
      title: 'Laser vs Inkjet Printers: Which One Suits Your Needs?',
      content: `
        <div class="prose prose-lg max-w-none space-y-8">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-indigo-500">
            <h2 class="text-2xl font-semibold text-indigo-800 mb-3">The Ultimate Printer Buying Guide</h2>
            <p class="text-indigo-700 leading-relaxed">Choosing the right printer can save you hundreds of rupees annually and countless frustrations. Whether you're a student printing assignments, a small business owner managing documents, or a home user handling family needs – this comprehensive guide will help you make the smartest choice for your specific requirements and budget.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 class="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <span class="bg-blue-200 text-blue-600 rounded-full p-2 mr-3">🖨️</span>
                Inkjet Printers
              </h3>
              <p class="text-blue-700 mb-4">Use liquid ink sprayed through microscopic nozzles to create images and text on paper.</p>
              
              <h4 class="font-semibold text-blue-800 mb-2">Perfect For:</h4>
              <ul class="text-blue-700 text-sm space-y-1 mb-4">
                <li>• High-quality photo printing</li>
                <li>• Colorful presentations and graphics</li>
                <li>• Occasional home use (1-50 pages/month)</li>
                <li>• Small spaces and home offices</li>
              </ul>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-green-600 mb-2">Advantages:</h5>
                  <ul class="text-green-700 text-xs space-y-1">
                    <li>• Lower upfront cost (₹3,000-₹8,000)</li>
                    <li>• Compact, space-saving design</li>
                    <li>• Exceptional photo quality</li>
                    <li>• Excellent color reproduction</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-red-600 mb-2">Limitations:</h5>
                  <ul class="text-red-700 text-xs space-y-1">
                    <li>• Slower printing speed</li>
                    <li>• Ink can dry out if unused</li>
                    <li>• Higher cost per page</li>
                    <li>• Requires special photo paper</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span class="bg-gray-200 text-gray-600 rounded-full p-2 mr-3">⚡</span>
                Laser Printers
              </h3>
              <p class="text-gray-700 mb-4">Use powdered toner and heat fusion technology to create sharp, precise text and images.</p>
              
              <h4 class="font-semibold text-gray-800 mb-2">Perfect For:</h4>
              <ul class="text-gray-700 text-sm space-y-1 mb-4">
                <li>• High-volume document printing</li>
                <li>• Office environments and businesses</li>
                <li>• Fast, professional text documents</li>
                <li>• Cost-effective bulk printing</li>
              </ul>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-green-600 mb-2">Advantages:</h5>
                  <ul class="text-green-700 text-xs space-y-1">
                    <li>• Lightning-fast printing speed</li>
                    <li>• Sharp, crisp text quality</li>
                    <li>• Low cost per page</li>
                    <li>• Toner doesn't dry out</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-red-600 mb-2">Limitations:</h5>
                  <ul class="text-red-700 text-xs space-y-1">
                    <li>• Higher initial investment</li>
                    <li>• Larger, bulkier design</li>
                    <li>• Limited photo quality</li>
                    <li>• Higher electricity consumption</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mb-6">🎯 Choose Based on Your Usage Pattern:</h3>

          <div class="space-y-6 mb-8">
            <div class="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 class="text-lg font-bold text-green-800 mb-3">👨‍🎓 Students & Home Users (1-50 pages/month)</h4>
              <p class="text-green-700 mb-3"><strong>Recommendation:</strong> Ink Tank Printers (Canon Pixma, HP Smart Tank, Epson EcoTank)</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-green-700 mb-2">Why Ink Tank:</h5>
                  <ul class="text-green-600 text-sm space-y-1">
                    <li>• Refillable ink bottles last 1-2 years</li>
                    <li>• Cost: ₹1-2 per page (vs ₹8-12 for cartridges)</li>
                    <li>• Perfect for assignments, photos, projects</li>
                    <li>• No more expensive cartridge replacements</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-green-700 mb-2">Best Models:</h5>
                  <ul class="text-green-600 text-sm space-y-1">
                    <li>• Canon Pixma G2010 (₹9,000)</li>
                    <li>• HP Smart Tank 515 (₹12,000)</li>
                    <li>• Epson L3110 (₹8,500)</li>
                    <li>• Brother DCP-T310 (₹9,500)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 class="text-lg font-bold text-blue-800 mb-3">🏢 Small Businesses & Offices (100-500 pages/month)</h4>
              <p class="text-blue-700 mb-3"><strong>Recommendation:</strong> Monochrome Laser Printers</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-blue-700 mb-2">Why Laser:</h5>
                  <ul class="text-blue-600 text-sm space-y-1">
                    <li>• Print 20-30 pages per minute</li>
                    <li>• Professional document quality</li>
                    <li>• Cost: ₹0.50-1 per page</li>
                    <li>• Reliable for daily business use</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-blue-700 mb-2">Best Models:</h5>
                  <ul class="text-blue-600 text-sm space-y-1">
                    <li>• HP LaserJet Pro M15w (₹8,000)</li>
                    <li>• Canon LBP2900B (₹6,500)</li>
                    <li>• Brother HL-L2321D (₹9,000)</li>
                    <li>• Samsung ML-1665 (₹7,500)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 class="text-lg font-bold text-purple-800 mb-3">🏭 Large Offices & Enterprises (500+ pages/month)</h4>
              <p class="text-purple-700 mb-3"><strong>Recommendation:</strong> Color Laser Multifunction Printers</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-purple-700 mb-2">Why Color Laser MFP:</h5>
                  <ul class="text-purple-600 text-sm space-y-1">
                    <li>• Print, scan, copy, fax in one device</li>
                    <li>• Network connectivity for team sharing</li>
                    <li>• Duplex printing saves paper costs</li>
                    <li>• Enterprise-grade reliability</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-purple-700 mb-2">Best Models:</h5>
                  <ul class="text-purple-600 text-sm space-y-1">
                    <li>• HP Color LaserJet Pro M479fdw (₹35,000)</li>
                    <li>• Canon Color ImageCLASS MF632Cdw (₹30,000)</li>
                    <li>• Brother MFC-L3750CDW (₹32,000)</li>
                    <li>• Xerox WorkCentre 6515 (₹28,000)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg mb-8 border border-yellow-200">
            <h3 class="text-xl font-semibold text-yellow-800 mb-4">💰 Total Cost of Ownership Calculator:</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-lg border border-yellow-300">
                <h4 class="font-semibold text-yellow-800 mb-2">Inkjet with Cartridges</h4>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• Printer: ₹5,000</li>
                  <li>• Cartridge: ₹1,500 (200 pages)</li>
                  <li>• Annual cartridge cost: ₹9,000</li>
                  <li><strong>Cost per page: ₹7.50</strong></li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg border border-yellow-300">
                <h4 class="font-semibold text-yellow-800 mb-2">Ink Tank Printer</h4>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• Printer: ₹10,000</li>
                  <li>• Ink bottle: ₹800 (1,500 pages)</li>
                  <li>• Annual ink cost: ₹1,600</li>
                  <li><strong>Cost per page: ₹1.00</strong></li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg border border-yellow-300">
                <h4 class="font-semibold text-yellow-800 mb-2">Laser Printer</h4>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• Printer: ₹8,000</li>
                  <li>• Toner: ₹2,500 (2,500 pages)</li>
                  <li>• Annual toner cost: ₹3,000</li>
                  <li><strong>Cost per page: ₹0.60</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8 border border-green-200">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">🔧 Our Complete Printer Services:</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-green-700 mb-3">🛒 Sales & Installation:</h4>
                <ul class="text-green-600 text-sm space-y-1">
                  <li>• Free consultation and recommendation</li>
                  <li>• Competitive pricing with warranty</li>
                  <li>• Professional setup and configuration</li>
                  <li>• Network connectivity setup</li>
                  <li>• Driver installation and testing</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-blue-700 mb-3">🔧 Repair & Maintenance:</h4>
                <ul class="text-blue-600 text-sm space-y-1">
                  <li>• Same-day repair service</li>
                  <li>• Genuine parts and refills</li>
                  <li>• Annual maintenance contracts</li>
                  <li>• Printhead cleaning and alignment</li>
                  <li>• Pickup and delivery service</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 class="text-xl font-semibold text-blue-800 mb-4">🏆 Why Choose iTOP Services for Your Printer Needs?</h3>
            <ul class="text-blue-700 space-y-2 leading-relaxed">
              <li><strong>Expert Guidance:</strong> 8+ years helping customers choose the right printer </li>
              <li><strong>Best Prices:</strong> Competitive rates with genuine products</li>
              <li><strong>Complete Service:</strong> Sales, installation, repair, and AMC</li>
              <li><strong>Quick Response:</strong> Same-day service across Delhi NCR</li>
              <li><strong>All Brands:</strong> HP, Canon, Epson, Brother, Samsung, Xerox</li>
              <li><strong>Warranty Support:</strong> Extended warranty and service guarantees</li>
            </ul>
            
            <div class="bg-white p-4 rounded-lg border border-blue-200">
              <p class="text-blue-800 font-semibold mb-2">🚀 Ready to Find Your Perfect Printer?</p>
              <p class="text-blue-700 text-sm">Contact us for personalized printer recommendations based on your exact needs and budget. Our experts will help you make the smartest choice and ensure hassle-free setup.</p>
            </div>
          </div>
        </div>
      `,
      author: 'Printer Specialist Team',
      date: 'March 25, 2024',
      category: 'Printers',
      readTime: '15 min read',
      image: '/placeholder.svg'
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/#blogs')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col w-full">
      <HamburgerSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <button
              onClick={() => navigate('/#blogs')}
              className="flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog Section
            </button>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-blue-200">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <User className="h-4 w-4" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Tag className="h-4 w-4" />
                <span className="text-sm">{post.category}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive guide with expert insights, practical tips, and professional recommendations from iTOP Services
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
            <p className="text-blue-100 mb-6">
              Our expert team is ready to help you with all your {post.category.toLowerCase()} needs. 
              Get professional consultation, installation, and ongoing support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => navigate('/feedback')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Read Customer Reviews
              </button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
