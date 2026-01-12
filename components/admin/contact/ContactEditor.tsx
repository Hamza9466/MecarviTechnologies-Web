"use client";

import { useState } from "react";

export default function ContactEditor() {
  const [formData, setFormData] = useState({
    // General Information
    heading: "Contact Us",
    subheading: "We're always here for you!",
    description: "We'd love to hear from you! Our world-class customer service team is always here to assist with any questions or concerns. You can reach us via phone, email, live chat, or SMS during business hours. Alternatively, complete the contact form below and we'll get back to you within one business day.",
    
    // Address Info
    addressTitle: "Address",
    address: "526 Forest Parkway, Suite H Forest Park GA 30297",
    
    // Contact Details
    phoneTitle: "Phone",
    phone: "1-855-561-7971 1-404-680-8252",
    faxTitle: "Fax",
    fax: "1-770-347-7149",
    emailTitle: "Email",
    email: "contact@mecarviprints.com",
    
    // Store Opening Hours
    storeMonFri: "",
    storeSaturday: "",
    storeSunday: "",
    storePublicHolidays: "",
    
    // Online Opening Hours
    onlineMonFri: "",
    onlineSaturday: "",
    onlineSunday: "",
    onlinePublicHolidays: "",
    
    // Social Media
    socialMediaTitle: "Follow Us",
    facebookUrl: "https://facebook.com/example",
    socialMediaDescription: "Stay connected on social media.",
    instagramUrl: "https://instagram.com/example",
    linkedinUrl: "https://linkedin.com/company/example",
    twitterUrl: "https://twitter.com/example",
    youtubeUrl: "https://youtube.com/example",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="space-y-8">
        {/* General Information Section */}
        <div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-lg font-bold text-pink-600 mb-2">Edit Contact Us Page (General Information)</h3>
            <div className="h-0.5 bg-pink-600 w-full"></div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                <input
                  type="text"
                  name="heading"
                  value={formData.heading}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subheading</label>
                <input
                  type="text"
                  name="subheading"
                  value={formData.subheading}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Address Info Section */}
        <div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-lg font-bold text-pink-600 mb-2">Address Info</h3>
            <div className="h-0.5 bg-pink-600 w-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Titles */}
            <div className="space-y-4">
              <div className="mt-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address Title</label>
                <input
                  type="text"
                  name="addressTitle"
                  value={formData.addressTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div className="mt-15">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Title</label>
                <input
                  type="text"
                  name="phoneTitle"
                  value={formData.phoneTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fax Title</label>
                <input
                  type="text"
                  name="faxTitle"
                  value={formData.faxTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Title</label>
                <input
                  type="text"
                  name="emailTitle"
                  value={formData.emailTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
            </div>

            {/* Right Column - Data Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fax</label>
                <input
                  type="text"
                  name="fax"
                  value={formData.fax}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Availability Page Section */}
        <div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-lg font-bold text-pink-600 mb-2">Availability Page</h3>
            <div className="h-0.5 bg-pink-600 w-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Store Opening Hours Column */}
            <div>
              <h4 className="text-md font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-300">Store Opening Hours</h4>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Store Hours (Mon-Fri)</label>
                  <input
                    type="text"
                    name="storeMonFri"
                    value={formData.storeMonFri}
                    onChange={handleInputChange}
                    placeholder="e.g. 9am-6pm"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Store Hours (Saturday)</label>
                  <input
                    type="text"
                    name="storeSaturday"
                    value={formData.storeSaturday}
                    onChange={handleInputChange}
                    placeholder="e.g. 10am-4pm"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Store Hours (Sunday)</label>
                  <input
                    type="text"
                    name="storeSunday"
                    value={formData.storeSunday}
                    onChange={handleInputChange}
                    placeholder="e.g. Closed"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Store Hours (Public Holidays)</label>
                  <input
                    type="text"
                    name="storePublicHolidays"
                    value={formData.storePublicHolidays}
                    onChange={handleInputChange}
                    placeholder="e.g. Closed"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Online Opening Hours Column */}
            <div>
              <h4 className="text-md font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-300">Online Opening Hours</h4>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Online Hours (Mon-Fri)</label>
                  <input
                    type="text"
                    name="onlineMonFri"
                    value={formData.onlineMonFri}
                    onChange={handleInputChange}
                    placeholder="e.g. 9am-6pm"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Online Hours (Saturday)</label>
                  <input
                    type="text"
                    name="onlineSaturday"
                    value={formData.onlineSaturday}
                    onChange={handleInputChange}
                    placeholder="e.g. 10am-4pm"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Online Hours (Sunday)</label>
                  <input
                    type="text"
                    name="onlineSunday"
                    value={formData.onlineSunday}
                    onChange={handleInputChange}
                    placeholder="e.g. Closed"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Online Hours (Public Holidays)</label>
                  <input
                    type="text"
                    name="onlinePublicHolidays"
                    value={formData.onlinePublicHolidays}
                    onChange={handleInputChange}
                    placeholder="e.g. Closed"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-lg font-bold text-pink-600 mb-2">Social Media</h3>
            <div className="h-0.5 bg-pink-600 w-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="socialMediaTitle"
                  value={formData.socialMediaTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="socialMediaDescription"
                  value={formData.socialMediaDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                <input
                  type="url"
                  name="instagramUrl"
                  value={formData.instagramUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
                <input
                  type="url"
                  name="twitterUrl"
                  value={formData.twitterUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                <input
                  type="url"
                  name="facebookUrl"
                  value={formData.facebookUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                <input
                  type="url"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">YouTube URL</label>
                <input
                  type="url"
                  name="youtubeUrl"
                  value={formData.youtubeUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

