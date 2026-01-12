"use client";

import { useState } from "react";
import Image from "next/image";

export default function CareersEditor() {
  const [activeTab, setActiveTab] = useState("Benefits");

  const tabs = [
    "General Data",
    "Benefits",
    "Procedure",
    "Jobs",
    "FAQ",
    "Support",
  ];

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Life Insurance Update",
      description: "We offer a variety of life insurance options which gives peace of mind & financial security to you a",
      imageUrl: "/assets/images/8jc9fH3B63sSTdln1747924955.png",
      image: null as File | null,
    },
    {
      id: 2,
      name: "Life Insurance",
      description: "We offer a variety of life insurance options which gives peace of mind & financial security to you a",
      imageUrl: "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
      image: null as File | null,
    },
    {
      id: 3,
      name: "Testttt",
      description: "We offer a variety of life insurance options which give peace of mind & financial security to you",
      imageUrl: "/assets/images/8jc9fH3B63sSTdln1747924955.png",
      image: null as File | null,
    },
    {
      id: 4,
      name: "Life Insuran",
      description: "We offer a variety of insurance options which gives peace of mind & financial security to you",
      imageUrl: "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
      image: null as File | null,
    },
    {
      id: 5,
      name: "Testing Final",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      imageUrl: "/assets/images/8jc9fH3B63sSTdln1747924955.png",
      image: null as File | null,
    },
  ]);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What Is Flowbite",
      answer: "Flowbite is an open-source library for Tailwind CSS...",
    },
    {
      id: 2,
      question: "How Can I Get Started With Flowbite?",
      answer: "To get started, install it via npm or yam...",
    },
  ]);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Laravel Development",
      description: "Explain your requirements by selecting your preferred servic",
      type: "Full Time",
      company: "House of Code",
      experience: "2 Years",
    },
    {
      id: 2,
      title: "Laravel Development",
      description: "Explain your requirements by selecting your preferred servic",
      type: "Full Time",
      company: "House of Code",
      experience: "2 Years",
    },
    {
      id: 3,
      title: "Production",
      description: "Digital Print Operator",
      type: "Full Time",
      company: "House of Code",
      experience: "2 Years",
    },
    {
      id: 4,
      title: "Production",
      description: "Digital Print Operator",
      type: "Full Time",
      company: "House of Code",
      experience: "2 Years",
    },
    {
      id: 5,
      title: "Production",
      description: "Digital Print Operator",
      type: "Full Time",
      company: "House of Code",
      experience: "2 Years",
    },
    {
      id: 6,
      title: "Software Development Update",
      description: "Explain your requirements by selecting your preferred servic",
      type: "Full Time",
      company: "House of Code",
      experience: "2 Years",
    },
  ]);

  const [factsData, setFactsData] = useState({
    yearsInBusiness: "15",
    subHeading: "years in business",
    buttonText: "Our Promise",
    description: "We help you scale your vision and services through thoughtful planning and consultation",
  });

  const [facts, setFacts] = useState([
    {
      id: 1,
      label: "Satisfaction Rate",
      value: "99",
    },
    {
      id: 2,
      label: "Testing 2",
      value: "345",
    },
    {
      id: 3,
      label: "Testingg",
      value: "234",
    },
  ]);

  const [promisePoints, setPromisePoints] = useState([
    {
      id: 1,
      label: "Information Collection",
      value: "Excuse Deal say over contain performance from comparison new melancholy themselves.",
    },
    {
      id: 2,
      label: "Projection Report Analysis",
      value: "Excuse Deal say over contain performance from comparison new melancholy themselves.",
    },
    {
      id: 3,
      label: "Consultation Solution",
      value: "Excuse Deal say over contain performance from comparison new melancholy themselves.",
    },
  ]);

  const [generalData, setGeneralData] = useState({
    title: "Welcome to Our Mecarvi Signs",
    buttonText: "Discover",
    buttonUrl: "https://testfrontend.mecarvisigns.com/",
    imageUrl: "https://testbackend.mecarvisigns.com/storage/sliderqpc",
    description: "Wanna know more about out us please have a look below and explore us more",
    backgroundImage: null as File | null,
  });

  const [procedures, setProcedures] = useState([
    {
      id: 1,
      name: "Apply Test",
      description: "Explain your requirements by selecting your preferred service and get quotation for your order. We",
      imageUrl: "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
      image: null as File | null,
    },
    {
      id: 2,
      name: "Apply",
      description: "Explain your requirements by selecting your preferred service and get quotation for your order. We",
      imageUrl: "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
      image: null as File | null,
    },
    {
      id: 3,
      name: "Test",
      description: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wit",
      imageUrl: "/assets/images/8jc9fH3B63sSTdln1747924955.png",
      image: null as File | null,
    },
  ]);

  const handleImageChange = (serviceId: number, file: File | null) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === serviceId ? { ...service, image: file } : service
      )
    );
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab
                ? "bg-pink-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeTab === "General Data" && (
        <div>
          <h3 className="text-2xl font-bold text-pink-600 mb-6">Edit Career Page General Data Page</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={generalData.title}
                onChange={(e) => setGeneralData({ ...generalData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                <input
                  type="text"
                  value={generalData.buttonText}
                  onChange={(e) => setGeneralData({ ...generalData, buttonText: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button URL</label>
                <input
                  type="url"
                  value={generalData.buttonUrl}
                  onChange={(e) => setGeneralData({ ...generalData, buttonUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL (optional)</label>
              <input
                type="url"
                value={generalData.imageUrl}
                onChange={(e) => setGeneralData({ ...generalData, imageUrl: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={generalData.description}
                onChange={(e) => setGeneralData({ ...generalData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Background Image</label>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <label className="inline-block">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setGeneralData({ ...generalData, backgroundImage: e.target.files[0] });
                        }
                      }}
                    />
                    <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors">
                      Choose File
                    </span>
                  </label>
                  <span className="text-sm text-gray-600">
                    {generalData.backgroundImage ? generalData.backgroundImage.name : "No file chosen"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Benefits" && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Benefit Section</h3>
          
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-sm font-bold">
                    <span className="text-red-600">SERVICE #</span>
                    <span className="text-gray-900">{service.id}</span>
                  </h4>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Circular Image */}
                <div className="flex justify-center mb-3">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleImageChange(service.id, e.target.files[0]);
                        }
                      }}
                    />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                      {service.image ? (
                        <Image
                          src={URL.createObjectURL(service.image)}
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                      ) : service.imageUrl ? (
                        <Image
                          src={service.imageUrl}
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
                
                {/* Service Name */}
                <h5 className="font-bold text-gray-900 mb-2 text-center">{service.name}</h5>
                
                {/* Description */}
                <p className="text-sm text-gray-700 mb-2">
                  {service.description}{" "}
                  <span className="text-blue-600 cursor-pointer">Read More</span>
                </p>
              </div>
            ))}

            {/* Add New Service Card */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white shadow-sm flex items-center justify-center min-h-[300px] cursor-pointer hover:border-pink-500 transition-colors">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "FAQ" && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">FAQ Section</h3>
          
          {/* FAQ Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-sm font-bold">
                    <span className="text-pink-600">FAQ #</span>
                    <span className="text-gray-900">{faq.id}</span>
                  </h4>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Question */}
                <h5 className="font-bold text-gray-900 mb-2">{faq.question}</h5>
                
                {/* Answer */}
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}

            {/* Add New FAQ Card */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white shadow-sm flex items-center justify-center min-h-[200px] cursor-pointer hover:border-pink-500 transition-colors">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Jobs" && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Jobs Section</h3>
          
          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {jobs.map((job) => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-sm font-bold text-gray-900">
                    JOB #{job.id}
                  </h4>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Job Title */}
                <h5 className="font-bold text-gray-900 mb-2">{job.title}</h5>
                
                {/* Description */}
                <p className="text-sm text-gray-700 mb-2">
                  {job.description}{" "}
                  {job.description.includes("servic") && (
                    <span className="text-blue-600 cursor-pointer">Read More</span>
                  )}
                </p>
                
                {/* Job Details */}
                <div className="text-sm text-gray-700">
                  <span>{job.type}</span>
                  <span className="mx-1">|</span>
                  <span className="text-pink-600">[{job.company}]</span>
                  <span className="mx-1">|</span>
                  <span>{job.experience}</span>
                </div>
              </div>
            ))}

            {/* Add New Job Card */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white shadow-sm flex items-center justify-center min-h-[200px] cursor-pointer hover:border-pink-500 transition-colors">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Procedure" && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-300">Procedure Section</h3>
          
          {/* Procedure Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {procedures.map((procedure) => (
              <div key={procedure.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-sm font-bold">
                    <span className="text-pink-600">SERVICE #</span>
                    <span className="text-gray-900">{procedure.id}</span>
                  </h4>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Circular Image */}
                <div className="flex justify-center mb-3">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setProcedures((prev) =>
                            prev.map((p) =>
                              p.id === procedure.id ? { ...p, image: e.target.files![0] } : p
                            )
                          );
                        }
                      }}
                    />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                      {procedure.image ? (
                        <Image
                          src={URL.createObjectURL(procedure.image)}
                          alt={procedure.name}
                          fill
                          className="object-cover"
                        />
                      ) : procedure.imageUrl ? (
                        <Image
                          src={procedure.imageUrl}
                          alt={procedure.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
                
                {/* Service Name */}
                <h5 className="font-bold text-gray-900 mb-2 text-center">{procedure.name}</h5>
                
                {/* Description */}
                <p className="text-sm text-gray-700 mb-2">
                  {procedure.description}{" "}
                  <span className="text-blue-600 cursor-pointer">Read More</span>
                </p>
              </div>
            ))}

            {/* Add New Service Card */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white shadow-sm flex items-center justify-center min-h-[300px] cursor-pointer hover:border-pink-500 transition-colors">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Support" && (
        <div className="space-y-8">
          {/* Our Facts Section */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Facts</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years in Business</label>
                  <input
                    type="text"
                    value={factsData.yearsInBusiness}
                    onChange={(e) => setFactsData({ ...factsData, yearsInBusiness: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sub Heading</label>
                  <input
                    type="text"
                    value={factsData.subHeading}
                    onChange={(e) => setFactsData({ ...factsData, subHeading: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button text</label>
                <input
                  type="text"
                  value={factsData.buttonText}
                  onChange={(e) => setFactsData({ ...factsData, buttonText: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={factsData.description}
                  onChange={(e) => setFactsData({ ...factsData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
                />
              </div>
              
              <div className="flex justify-start pt-2">
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Edit Facts Section */}
          <div>
            <h3 className="text-xl font-bold text-pink-600 mb-6">Edit Facts</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {facts.map((fact) => (
                <div key={fact.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-sm font-bold text-gray-900">
                      FACT #{fact.id}
                    </h4>
                    <div className="flex gap-2">
                      <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{fact.label}</label>
                      <input
                        type="text"
                        value={fact.value}
                        onChange={(e) => {
                          setFacts((prev) =>
                            prev.map((f) => (f.id === fact.id ? { ...f, value: e.target.value } : f))
                          );
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edit Promise Points Section */}
          <div>
            <h3 className="text-xl font-bold text-pink-600 mb-6">Edit Promise Points</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {promisePoints.map((point) => (
                <div key={point.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-sm font-bold text-gray-900">
                      PROMISE POINT #{point.id}
                    </h4>
                    <div className="flex gap-2">
                      <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{point.label}</label>
                      <input
                        type="text"
                        value={point.value}
                        onChange={(e) => {
                          setPromisePoints((prev) =>
                            prev.map((p) => (p.id === point.id ? { ...p, value: e.target.value } : p))
                          );
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Add New Promise Point Card */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white shadow-sm flex items-center justify-center min-h-[200px] cursor-pointer hover:border-pink-500 transition-colors">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab !== "General Data" && activeTab !== "Benefits" && activeTab !== "FAQ" && activeTab !== "Jobs" && activeTab !== "Procedure" && activeTab !== "Support" && (
        <div className="text-gray-600">{activeTab} Editor - Coming Soon</div>
      )}
    </div>
  );
}

