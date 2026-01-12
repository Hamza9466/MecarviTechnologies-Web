"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    // Section 1: Primary Contact Information
    fullName: "",
    jobTitle: "",
    companyName: "",
    email: "",
    phone: "",
    preferredContact: "",
    
    // Section 2: Business Information
    industry: "",
    companySize: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    businessWebsite: "",
    
    // Section 3: Services Required
    services: [] as string[],
    
    // Section 4: Technology Stack
    frontEndTech: [] as string[],
    backEndTech: [] as string[],
    databasePreference: "",
    
    // Section 5: Domain & Hosting
    ownDomain: "",
    domainName: "",
    hasHosting: "",
    hostingProvider: [] as string[],
    hostingRequirements: [] as string[],
    preferredCloud: "",
    
    // Section 6: Product Interest
    interestedInProducts: "",
    productSolutions: [] as string[],
    
    // Section 7: Custom Development
    requireCustomDev: "",
    projectType: "",
    projectDescription: "",
    
    // Section 8: Project Scope
    primaryObjective: "",
    estimatedTimeline: "",
    budgetRange: "",
    
    // Section 9: Technical Requirements
    requiredIntegrations: "",
    securityCompliance: [] as string[],
    
    // Section 10: Post-Launch
    requireMaintenance: "",
    interestedInPartnership: "",
    
    // Section 11: Additional Information
    hearAboutUs: "",
    additionalNotes: "",
    
    // Section 12: Confirmation
    confirmation: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentArray = (prev[name as keyof typeof prev] as string[]) || [];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [name]: newArray };
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const totalTabs = 12;
  const canProceed = activeTab < totalTabs;
  const canGoBack = activeTab > 1;

  const handleNext = () => {
    if (canProceed) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevious = () => {
    if (canGoBack) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Quote request submitted successfully!");
  };

  const tabs = [
    "Contact Info",
    "Business Info",
    "Services",
    "Technology",
    "Domain & Hosting",
    "Products",
    "Custom Dev",
    "Project Scope",
    "Technical",
    "Post-Launch",
    "Additional",
    "Confirmation",
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index + 1}
              onClick={() => setActiveTab(index + 1)}
              className={`px-3 py-2 text-xs sm:text-sm rounded-lg transition-colors ${
                activeTab === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}. {tab}
            </button>
          ))}
        </div>

        {/* Form Container with Shadow */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8 lg:p-10 shadow-2xl" style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.15), 0 -10px 25px rgba(0, 0, 0, 0.1)' }}>
          
          {/* Tab 1: Primary Contact Information */}
          {activeTab === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Primary Contact Information</h3>
              <p className="text-gray-600 mb-6">(Authorized decision-maker or technical lead)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Job Title / Role *</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Company / Business Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Preferred Contact Method *</label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Business Information */}
          {activeTab === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Business Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Industry / Sector *</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Company Size *</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="solo">Solo / Startup</option>
                    <option value="2-10">2–10 Employees</option>
                    <option value="11-50">11–50 Employees</option>
                    <option value="51-200">51–200 Employees</option>
                    <option value="200+">200+ Employees</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">Street Address</label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">State / Province</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">Business Website</label>
                    <input
                      type="url"
                      name="businessWebsite"
                      value={formData.businessWebsite}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Services Required */}
          {activeTab === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3. Services Required (Select all that apply)</h3>
              <div className="space-y-3">
                {[
                  "Web Development",
                  "Mobile App Development",
                  "Software Engineering",
                  "Artificial Intelligence & Automation",
                  "Machine Learning Engineering",
                  "Cloud Infrastructure & DevOps",
                  "Cloud Security & Compliance",
                  "API Development & System Integration",
                  "Hosting & Domain Services",
                ].map((service) => (
                  <label key={service} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckboxChange("services", service)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-900">{service}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Technology Stack */}
          {activeTab === 4 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">4. Technology Stack Preferences</h3>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Front-End Technologies</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Next.js",
                    "React.js",
                    "Vue.js",
                    "Angular",
                    "Tailwind CSS",
                    "Bootstrap",
                    "HTML / CSS / JavaScript (Vanilla)",
                    "No preference / Open to recommendation",
                  ].map((tech) => (
                    <label key={tech} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.frontEndTech.includes(tech)}
                        onChange={() => handleCheckboxChange("frontEndTech", tech)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-900">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Back-End Technologies</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Laravel (PHP)",
                    "Django (Python)",
                    "Node.js with Express",
                    "NestJS",
                    "Spring Boot (Java)",
                    "Ruby on Rails",
                    "Go (Golang)",
                    "No preference / Open to recommendation",
                  ].map((tech) => (
                    <label key={tech} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.backEndTech.includes(tech)}
                        onChange={() => handleCheckboxChange("backEndTech", tech)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-900">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Database Preference</h4>
                <div className="space-y-3">
                  {[
                    "PostgreSQL",
                    "MySQL / MariaDB",
                    "MongoDB",
                    "Microsoft SQL Server",
                    "No preference / Architect-recommended",
                  ].map((db) => (
                    <label key={db} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="databasePreference"
                        value={db}
                        checked={formData.databasePreference === db}
                        onChange={() => handleRadioChange("databasePreference", db)}
                        className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-900">{db}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Domain & Hosting */}
          {activeTab === 5 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">5. Domain & Hosting Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 mb-3 font-medium">Do you already own a domain name?</label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="ownDomain"
                          value={option.toLowerCase()}
                          checked={formData.ownDomain === option.toLowerCase()}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-900">{option}</span>
                      </label>
                    ))}
                  </div>
                  {formData.ownDomain === "yes" && (
                    <input
                      type="text"
                      name="domainName"
                      value={formData.domainName}
                      onChange={handleInputChange}
                      placeholder="Domain name(s)"
                      className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>
                <div>
                  <label className="block text-gray-900 mb-3 font-medium">Do you currently have hosting services?</label>
                  <div className="flex gap-4 mb-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="hasHosting"
                          value={option.toLowerCase()}
                          checked={formData.hasHosting === option.toLowerCase()}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-900">{option}</span>
                      </label>
                    ))}
                  </div>
                  {formData.hasHosting === "yes" && (
                    <div className="space-y-2">
                      <label className="block text-gray-900 mb-2 font-medium">Hosting Provider:</label>
                      {["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean", "Shared Hosting Provider", "Other"].map((provider) => (
                        <label key={provider} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.hostingProvider.includes(provider)}
                            onChange={() => handleCheckboxChange("hostingProvider", provider)}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-3 text-gray-900">{provider}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  {formData.hasHosting === "no" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-900 mb-2 font-medium">Do you require:</label>
                        {["Fully managed hosting", "Dedicated server", "Cloud infrastructure"].map((req) => (
                          <label key={req} className="flex items-center cursor-pointer mb-2">
                            <input
                              type="checkbox"
                              checked={formData.hostingRequirements.includes(req)}
                              onChange={() => handleCheckboxChange("hostingRequirements", req)}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-3 text-gray-900">{req}</span>
                          </label>
                        ))}
                      </div>
                      <div>
                        <label className="block text-gray-900 mb-2 font-medium">Preferred cloud platform:</label>
                        {["AWS", "Azure", "DigitalOcean", "No preference"].map((platform) => (
                          <label key={platform} className="flex items-center cursor-pointer mb-2">
                            <input
                              type="radio"
                              name="preferredCloud"
                              value={platform}
                              checked={formData.preferredCloud === platform}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-900">{platform}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 6: Product Interest */}
          {activeTab === 6 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">6. Product & Solution Interest</h3>
              <div>
                <label className="block text-gray-900 mb-3 font-medium">Are you interested in any of our ready-made product solutions?</label>
                <div className="flex gap-4 mb-6">
                  {["Yes", "No", "Not sure"].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="interestedInProducts"
                        value={option.toLowerCase().replace(" ", "-")}
                        checked={formData.interestedInProducts === option.toLowerCase().replace(" ", "-")}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-900">{option}</span>
                    </label>
                  ))}
                </div>
                {formData.interestedInProducts === "yes" && (
                  <div>
                    <label className="block text-gray-900 mb-3 font-medium">Select all that apply:</label>
                    {[
                      "Business Applications / Internal Tools",
                      "Admin Panels & Dashboards",
                      "Client or Vendor Portals",
                      "E-commerce & Payment Systems",
                      "Marketplace / On-Demand Platforms",
                      "Communication, Mail, or Collaboration Systems",
                      "Other",
                    ].map((product) => (
                      <label key={product} className="flex items-center cursor-pointer mb-2">
                        <input
                          type="checkbox"
                          checked={formData.productSolutions.includes(product)}
                          onChange={() => handleCheckboxChange("productSolutions", product)}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-900">{product}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 7: Custom Development */}
          {activeTab === 7 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">7. Custom Development Requirements</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 mb-3 font-medium">Do you require custom development services?</label>
                  <div className="flex gap-4">
                    {["Yes", "No", "Unsure"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="requireCustomDev"
                          value={option.toLowerCase()}
                          checked={formData.requireCustomDev === option.toLowerCase()}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-900">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="new-build">New build</option>
                    <option value="enhancement">Enhancement to existing system</option>
                    <option value="migration">Migration / Rebuild</option>
                    <option value="integration">Integration only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Brief Project Description</label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="What are you building or improving?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 8: Project Scope */}
          {activeTab === 8 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">8. Project Scope & Planning</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Primary Objective</label>
                  <select
                    name="primaryObjective"
                    value={formData.primaryObjective}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="launch-new">Launch new product</option>
                    <option value="scale">Scale existing platform</option>
                    <option value="automation">Automation & efficiency</option>
                    <option value="security">Security & compliance</option>
                    <option value="performance">Performance optimization</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Estimated Timeline</label>
                  <select
                    name="estimatedTimeline"
                    value={formData.estimatedTimeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1–3 months</option>
                    <option value="3-6months">3–6 months</option>
                    <option value="6+months">6+ months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Estimated Budget Range (Optional)</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-50k">$15,000 – $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Tab 9: Technical Requirements */}
          {activeTab === 9 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">9. Technical & Compliance Requirements</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Required Integrations</label>
                  <textarea
                    name="requiredIntegrations"
                    value={formData.requiredIntegrations}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="APIs, payment gateways, CRM, ERP, third-party platforms"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 mb-3 font-medium">Security or Compliance Requirements</label>
                  {["HIPAA", "SOC 2", "PCI-DSS", "GDPR", "Other"].map((compliance) => (
                    <label key={compliance} className="flex items-center cursor-pointer mb-2">
                      <input
                        type="checkbox"
                        checked={formData.securityCompliance.includes(compliance)}
                        onChange={() => handleCheckboxChange("securityCompliance", compliance)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-900">{compliance}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 10: Post-Launch */}
          {activeTab === 10 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">10. Post-Launch & Partnership</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 mb-3 font-medium">Do you require ongoing maintenance and support?</label>
                  <div className="flex gap-4">
                    {["Yes", "No", "Open to discussion"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="requireMaintenance"
                          value={option.toLowerCase().replace(" ", "-")}
                          checked={formData.requireMaintenance === option.toLowerCase().replace(" ", "-")}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-900">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-900 mb-3 font-medium">Are you interested in a long-term technology partnership?</label>
                  <div className="flex gap-4">
                    {["Yes", "Possibly", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="interestedInPartnership"
                          value={option.toLowerCase()}
                          checked={formData.interestedInPartnership === option.toLowerCase()}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-900">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 11: Additional Information */}
          {activeTab === 11 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">11. Additional Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 mb-2 font-medium">How did you hear about Mecarvi Technologies?</label>
                  <input
                    type="text"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                {/* File Upload Section */}
                <div>
                  <label className="block text-gray-900 mb-3 font-medium">Upload Files</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                    <p className="text-gray-600 mb-4">Drag file here or click the button below</p>
                    <button
                      type="button"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Upload file
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 mb-2 font-medium">Message</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Additional Notes or Special Requirements"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 12: Confirmation */}
          {activeTab === 12 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">12. Confirmation</h3>
              <div>
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="confirmation"
                    checked={formData.confirmation}
                    onChange={(e) => setFormData({ ...formData, confirmation: e.target.checked })}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <span className="ml-3 text-gray-900">
                    I confirm that I am authorized to request services on behalf of this organization and that the information provided is accurate.
                  </span>
                </label>
              </div>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={!canGoBack}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                canGoBack
                  ? "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              Previous
            </button>
            
            {canProceed ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Submit Request
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
