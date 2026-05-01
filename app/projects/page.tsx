"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

// Animation hook for intersection observer
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    observer.observe(elementRef)
    return () => observer.disconnect()
  }, [elementRef, threshold])

  return [setElementRef, isVisible] as const
}

export default function Projects() {
  const { t } = useTranslation()
  const [showVideo, setShowVideo] = useState(false)

  // Animation refs for different sections
  const [heroRef, heroVisible] = useScrollAnimation(0.1)
  const [featuredRef, featuredVisible] = useScrollAnimation(0.1)
  const [gridRef, gridVisible] = useScrollAnimation(0.1)
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1)

  const featuredStats = [
    { label: t("Carbon Sequestered"), value: "4000 tons CO₂", color: "text-green-600" },
    { label: t("Families Impacted"), value: "1500+", color: "text-blue-600" },
  ]

  const projects = [
    {
      image: "/images/uku.jpg",
      alt: "Bamboo Shimbala regeneration project",
      category: { label: "Biomass Conversion", color: "green" },
      title: t("project_bamboo_title"),
      description: t("project_bamboo_desc"),
      status: t("status_active"),
    },
    {
      image: "/images/moringa.jpg",
      alt: "Agroforestry Project",
      category: { label: "🌱 Agroforestry", color: "blue" },
      title: t("project_cash_title"),
      description: t("project_cash_desc"),
      status: t("status_pilot"),
    },
    {
      image: "/images/maize.jpg",
      alt: "Maize and Soybean cultivation",
      category: { label: "Agriculture / Food Security", color: "amber" },
      title: t("project_maize_title"),
      description: t("project_maize_desc"),
      status: t("status_development"),
    },
    {
      image: "/images/biochar-hands.jpg",
      alt: "Soil Restoration Program",
      category: { label: "Agriculture", color: "purple" },
      title: t("project_soil_title"),
      description: t("project_soil_desc"),
      status: t("status_active"),
    },
    {
      image: "/images/biochar-container.jpg",
      alt: "Water Purification Systems",
      category: { label: "Water Treatment", color: "cyan" },
      title: t("project_water_title"),
      description: t("project_water_desc"),
      status: t("status_pilot"),
    },
    {
      image: "/images/team-photo.jpg",
      alt: "Community Training Program",
      category: { label: "Education", color: "rose" },
      title: t("project_training_title"),
      description: t("project_training_desc"),
      status: t("status_ongoing"),
    },
  ]

  // Function to close the video modal
  const closeVideoModal = () => {
    setShowVideo(false)
  }

  // Function to open the video modal
  const openVideoModal = () => {
    setShowVideo(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Animation */}
      <section
        ref={heroRef}
        className="relative py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/background.jpeg')" }}
      >
        {/* Dark overlay behind the text */}
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-8 text-center">
          {/* Title with animation */}
          <h2
            className={`text-5xl font-bold mb-6 drop-shadow-md text-white transition-all duration-1200 ${heroVisible
              ? 'opacity-100 transform translate-y-0 scale-100'
              : 'opacity-0 transform translate-y-12 scale-95'
              }`}
          >
            {t("projects.featured.title")}
          </h2>

          {/* Subtitle with delayed animation */}
          <p className={`text-xl text-gray-200 leading-relaxed transition-all duration-1000 delay-300 ${heroVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Floating Elements */}
        <div className={`absolute top-32 left-16 w-6 h-6 bg-green-400 rounded-full transition-all duration-1000 delay-800 ${heroVisible ? 'opacity-70 animate-bounce' : 'opacity-0'
          }`}></div>
        <div className={`absolute bottom-40 right-20 w-8 h-8 bg-blue-400 rounded-full transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-60 animate-ping' : 'opacity-0'
          }`}></div>
      </section>

      {/* Featured Project Section */}
      <section ref={featuredRef} className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className={`relative transition-all duration-1200 ${featuredVisible
              ? 'opacity-100 transform translate-x-0 scale-100'
              : 'opacity-0 transform -translate-x-12 scale-95'
              }`}>
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-xl transform rotate-3 transition-all duration-1000"></div>
              <Image
                src="/images/hero-biochar.jpg"
                alt="Community Biochar Production"
                width={600}
                height={400}
                className="relative rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className={`transition-all duration-1000 ${featuredVisible
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform translate-x-12'
              }`}>
              <div className={`inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 transition-all duration-800 delay-200 ${featuredVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("projects.featured.title")}
              </div>
              <h3 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-800 delay-400 ${featuredVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("projects.featured.name")}
              </h3>
              <p className={`text-lg text-gray-600 mb-6 leading-relaxed transition-all duration-800 delay-600 ${featuredVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("projects.featured.description")}
              </p>

              <div className={`grid sm:grid-cols-2 gap-4 mb-6 transition-all duration-800 delay-800 ${featuredVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
                }`}>
                {featuredStats.map((stat, i) => (
                  <div
                    key={i}
                    className={`bg-gray-50 p-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ${featuredVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{ transitionDelay: `${i * 100 + 1000}ms` }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{stat.label}</h4>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <button
                onClick={openVideoModal}
                className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit ${featuredVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                  }`}
                style={{ transitionDelay: '1200ms' }}
              >
                {t("Watch Video Result")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section ref={gridRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${gridVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("projects.grid.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("projects.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-700 ${gridVisible
                  ? 'opacity-100 transform translate-y-0 rotate-0'
                  : 'opacity-0 transform translate-y-12 rotate-2'
                  }`}
                style={{ transitionDelay: `${i * 150 + 300}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.alt}
                    fill
                    className="object-cover transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div
                    className={`inline-block bg-${proj.category.color}-100 text-${proj.category.color}-800 px-2 py-1 rounded text-sm font-semibold mb-3 transition-all duration-300 hover:scale-105`}
                  >
                    {proj.category.label}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-600">{proj.title}</h3>
                  <p className="text-gray-600 mb-4">{proj.description}</p>
                  <span className="text-sm text-gray-500">Status: {proj.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section ref={ctaRef} className="py-20 bg-green-600 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl font-bold text-white mb-6 transition-all duration-1000 ${ctaVisible
            ? 'opacity-100 transform translate-y-0 scale-100'
            : 'opacity-0 transform translate-y-8 scale-95'
            }`}>
            {t("partner_heading")}
          </h2>
          <p className={`text-xl text-green-100 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${ctaVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            {t("partner_description")}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${ctaVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <Link href="/contact">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg">
                {t("partner_button")}
              </button>
            </Link>
          </div>
        </div>

        {/* Floating CTA Elements */}
        <div className={`absolute top-20 left-10 w-4 h-4 bg-green-300 rounded-full transition-all duration-1000 delay-1000 ${ctaVisible ? 'opacity-70 animate-bounce' : 'opacity-0'
          }`}></div>
        <div className={`absolute bottom-20 right-10 w-6 h-6 bg-green-300 rounded-full transition-all duration-1000 delay-1200 ${ctaVisible ? 'opacity-60 animate-ping' : 'opacity-0'
          }`}></div>
      </section>

      <Footer />

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 flex items-center gap-2 text-white bg-black/50 hover:bg-black/70 px-4 py-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Close video"
            >
              <span className="text-xl">×</span>
              <span className="text-sm font-medium">Close</span>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video">
              <video
                src="/images/vdeo.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
                onLoadStart={() => console.log('Video loading started')}
                onError={(e) => console.error('Video error:', e)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
