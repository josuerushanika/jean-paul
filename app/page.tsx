"use client"

import Navbar from "@/components/navbar"
import Image from "next/image"
import { useTranslation } from "@/hooks/use-translation"
import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"
import Impact from "@/components/Impact"
import { Flame, Lightbulb, Wheat, Zap, Shield, Users, Eye } from "lucide-react"

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

export default function Home() {
  const { t } = useTranslation()

  // Animation refs for different sections
  const [heroRef, heroVisible] = useScrollAnimation(0.1)
  const [servicesRef, servicesVisible] = useScrollAnimation(0.1)
  const [aboutRef, aboutVisible] = useScrollAnimation(0.1)
  const [processRef, processVisible] = useScrollAnimation(0.1)
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1)

  const images = [
    "/images/hero-biochar.jpg",
    "/images/Bamboo living community.jpg",
    "/images/Producing biochar from Tithonia.jpg",
    "/images/Biochar3.jpg",
  ]

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Enhanced Animations */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={src}
                alt="B4D Biochar Production"
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16 sm:pt-20 lg:pt-28 pb-8">
          <div className="max-w-5xl mx-auto">
            {/* Title & Subtitle with Enhanced Animations */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight">
              <span className={`block text-white drop-shadow-2xl transition-all duration-1200 ${heroVisible
                ? 'opacity-100 transform translate-y-0 scale-100'
                : 'opacity-0 transform translate-y-12 scale-95'
                }`}>
                {t("hero.title")}
              </span>
              <span className={`block text-green-400 mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold drop-shadow-xl transition-all duration-1200 delay-300 ${heroVisible
                ? 'opacity-100 transform translate-y-0 scale-100'
                : 'opacity-0 transform translate-y-12 scale-95'
                }`}>
                {t("hero.subtitle")}
              </span>
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto px-2 transition-all duration-1000 delay-600 ${heroVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}>
              {t("hero.description")}
            </p>

            {/* Buttons with Staggered Animation - Mobile Optimized */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 delay-900 ${heroVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}>
              <Link href="/projects" className="w-full sm:w-auto max-w-xs sm:max-w-none">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap">
                  {t("hero.projects")}
                </button>
              </Link>

              <Link href="/about" className="w-full sm:w-auto max-w-xs sm:max-w-none">
                <button className="w-full border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap">
                  {t("hero.learn")}
                </button>
              </Link>

              <a
                href="https://forms.gle/XbiHspoKb7S9SshC8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 border-2 border-green-600 hover:border-green-700 hover:scale-105 hover:shadow-xl leading-tight">
                  <span className="block sm:inline">
                    {t("prepurchase")}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className={`absolute top-32 left-16 w-6 h-6 bg-green-400 rounded-full transition-all duration-1000 delay-1200 ${heroVisible ? 'opacity-70 animate-bounce' : 'opacity-0'
          }`}></div>
        <div className={`absolute bottom-40 right-20 w-8 h-8 bg-blue-400 rounded-full transition-all duration-1000 delay-1500 ${heroVisible ? 'opacity-60 animate-ping' : 'opacity-0'
          }`}></div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${servicesVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t ? t("services.title") : "Our Services"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t ? t("services.description") : "Comprehensive solutions for sustainable biochar production and applications"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: "biochar", Icon: Flame, color: "green" },
              { key: "energy", Icon: Zap, color: "blue" },
              { key: "agriculture", Icon: Wheat, color: "amber" },
              { key: "innovation", Icon: Lightbulb, color: "purple" }
            ].map((service, index) => (
              <div
                key={service.key}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-rotate-1 ${servicesVisible
                  ? 'opacity-100 transform translate-y-0 rotate-0'
                  : 'opacity-0 transform translate-y-12 rotate-2'
                  }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 hover:rotate-12 hover:scale-110`}>
                  <service.Icon className={`w-8 h-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t ? t(`services.${service.key}.title`) : `${service.key} Service`}
                </h3>
                <p className="text-gray-600">
                  {t ? t(`services.${service.key}.description`) : `Description for ${service.key} service`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${aboutVisible
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform -translate-x-12'
              }`}>
              <h2 className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-800 delay-200 ${aboutVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("about.title")}
              </h2>
              <p className={`text-lg text-gray-600 mb-6 leading-relaxed transition-all duration-800 delay-400 ${aboutVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("about.description")}
              </p>

              <div className={`grid sm:grid-cols-2 gap-6 mb-8 transition-all duration-800 delay-600 ${aboutVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
                }`}>
                {[
                  { key: "innovation", Icon: Lightbulb },
                  { key: "responsibility", Icon: Shield },
                  { key: "inclusion", Icon: Users },
                  { key: "transparency", Icon: Eye }
                ].map((value, index) => (
                  <div
                    key={value.key}
                    className={`flex items-center gap-3 transition-all duration-500 hover:scale-105 hover:translate-x-2 ${aboutVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{ transitionDelay: `${index * 100 + 700}ms` }}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-12">
                      <value.Icon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-semibold text-gray-900">{t(`about.values.${value.key}`)}</span>
                  </div>
                ))}
              </div>

              <div className={`transition-all duration-800 delay-1000 ${aboutVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                <Link href="/projects">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    {t("about.learn")}
                  </button>
                </Link>
              </div>
            </div>

            <div className={`relative transition-all duration-1200 delay-300 ${aboutVisible
              ? 'opacity-100 transform translate-x-0 scale-100'
              : 'opacity-0 transform translate-x-12 scale-95'
              }`}>
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-xl transform rotate-3 transition-all duration-1000"></div>
              <Image
                src="/images/team-photo.jpg"
                alt="B4D Team"
                width={600}
                height={400}
                className="relative rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${processVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("process.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("process.description")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                key: "materials",
                image: "/images/bamboo-structure.jpg",
                alt: "Raw Biomass Materials"
              },
              {
                key: "pyrolysis",
                image: "/images/biochar-production.jpg",
                alt: "Biochar Production Process"
              },
              {
                key: "quality",
                image: "/images/biochar-finished.jpg",
                alt: "Finished Biochar Product"
              }
            ].map((step, index) => (
              <div
                key={step.key}
                className={`text-center transition-all duration-1000 hover:scale-105 ${processVisible
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 300 + 300}ms` }}
              >
                <div className={`relative mb-6 transition-all duration-700 hover:scale-110 ${processVisible ? 'scale-100' : 'scale-90'
                  }`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto shadow-lg hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-all duration-500 ${processVisible ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: `${index * 300 + 600}ms` }}>
                  {t(`process.${step.key}.title`)}
                </h3>
                <p className={`text-gray-600 transition-all duration-500 ${processVisible ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: `${index * 300 + 800}ms` }}>
                  {t(`process.${step.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Impact />

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-green-600 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl font-bold text-white mb-6 transition-all duration-1000 ${ctaVisible
            ? 'opacity-100 transform translate-y-0 scale-100'
            : 'opacity-0 transform translate-y-8 scale-95'
            }`}>
            {t("cta.title")}
          </h2>
          <p className={`text-xl text-green-100 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${ctaVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            {t("cta.description")}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${ctaVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}>
            <Link href="/contact">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg">
                {t("cta.contact")}
              </button>
            </Link>
            <Link href="/projects">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg">
                {t("cta.projects")}
              </button>
            </Link>
          </div>
        </div>

        {/* Floating CTA Elements */}
        <div className={`absolute top-10 left-10 w-4 h-4 bg-green-300 rounded-full transition-all duration-1000 delay-1000 ${ctaVisible ? 'opacity-70 animate-bounce' : 'opacity-0'
          }`}></div>
        <div className={`absolute bottom-10 right-10 w-6 h-6 bg-green-300 rounded-full transition-all duration-1000 delay-1200 ${ctaVisible ? 'opacity-60 animate-ping' : 'opacity-0'
          }`}></div>
      </section>

      <Footer />
    </div>
  )
}
