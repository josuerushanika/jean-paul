"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"
import { useState, useEffect } from "react"
import {
  Target,
  Eye,
  Lightbulb,
  Shield,
  Users,
  Sparkles,
  BookOpen,
  HeartPulse,
  HandHeart,
  Megaphone,
  Sprout
} from "lucide-react"

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

export default function About() {
  const { t } = useTranslation()

  // Animation refs for different sections
  const [heroRef, heroVisible] = useScrollAnimation(0.1)
  const [storyRef, storyVisible] = useScrollAnimation(0.1)
  const [missionRef, missionVisible] = useScrollAnimation(0.1)
  const [valuesRef, valuesVisible] = useScrollAnimation(0.1)
  const [objectivesRef, objectivesVisible] = useScrollAnimation(0.1)
  const [activitiesRef, activitiesVisible] = useScrollAnimation(0.1)
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/affe10.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl font-bold text-white mb-6 transition-all duration-1000 ${heroVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
              }`}>
              {t("about.title")}
            </h1>
            <p className={`text-xl text-gray-200 leading-relaxed transition-all duration-1000 delay-300 ${heroVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
              }`}>
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className={`absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-70 animate-bounce' : 'opacity-0'
          }`}></div>
        <div className={`absolute bottom-32 right-16 w-6 h-6 bg-blue-400 rounded-full transition-all duration-1000 delay-700 ${heroVisible ? 'opacity-60 animate-ping' : 'opacity-0'
          }`}></div>
      </section>

      {/* Story & Legal Section */}
      <section ref={storyRef} className="pt-24 pb-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <div className={`transition-all duration-1000 ease-out ${storyVisible
                ? 'opacity-100 transform translate-x-0'
                : 'opacity-0 transform -translate-x-12'
              }`}>
              <h2 className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-800 delay-200 ${storyVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("about.story.title")}
              </h2>
              <p className={`text-lg text-gray-600 mb-6 leading-relaxed transition-all duration-800 delay-400 ${storyVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("about.story.p1")}
              </p>
              <p className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-800 delay-600 ${storyVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("about.story.p2")}
              </p>

              {/* Legal Info */}
              <div className={`bg-green-50 p-6 rounded-lg border-l-4 border-green-400 transition-all duration-1000 delay-800 transform hover:shadow-md hover:border-green-500 hover:bg-green-100/50 ${storyVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-6 scale-95'
                }`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t("about.legal.title")}
                </h3>
                <p className="text-gray-600 mb-2 transform transition-all duration-300 hover:translate-x-2">
                  {t("about.legal.status")}
                </p>
                <p className="text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                  {t("about.legal.headquarters")}
                </p>
              </div>
            </div>

            {/* Team Image */}
            <div className={`relative transition-all duration-1200 ease-out delay-300 ${storyVisible
                ? 'opacity-100 transform translate-x-0 scale-100'
                : 'opacity-0 transform translate-x-12 scale-95'
              }`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-xl transform transition-all duration-1000 ${storyVisible ? 'rotate-3 scale-100' : 'rotate-0 scale-90'
                }`}></div>
              <Image
                src="/images/affe11.jpeg"
                alt="AFFE community leadership"
                width={600}
                height={400}
                className="relative rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-500 filter brightness-90 hover:brightness-100 group"
              />

              {/* Floating elements */}
              <div className={`absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full transition-all duration-1000 delay-1000 ${storyVisible ? 'opacity-70 animate-bounce' : 'opacity-0'
                }`}></div>
              <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 rounded-full transition-all duration-1000 delay-1200 ${storyVisible ? 'opacity-70 animate-ping' : 'opacity-0'
                }`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Mission */}
            <div className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-1000 hover:shadow-2xl hover:scale-105 ${missionVisible
                ? 'opacity-100 transform translate-y-0 rotate-0'
                : 'opacity-0 transform translate-y-8 rotate-1'
              }`}>
              <div className={`w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-800 delay-200 ${missionVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-180'
                }`}>
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 transition-all duration-800 delay-300 ${missionVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-4'
                }`}>
                {t("about.mission.title")}
              </h3>
              <p className={`text-gray-600 leading-relaxed transition-all duration-800 delay-500 ${missionVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("about.mission.description")}
              </p>
            </div>

            {/* Vision */}
            <div className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-1000 delay-200 hover:shadow-2xl hover:scale-105 ${missionVisible
                ? 'opacity-100 transform translate-y-0 rotate-0'
                : 'opacity-0 transform translate-y-8 -rotate-1'
              }`}>
              <div className={`w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-800 delay-400 ${missionVisible ? 'scale-100 rotate-0' : 'scale-75 -rotate-180'
                }`}>
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 transition-all duration-800 delay-500 ${missionVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'
                }`}>
                {t("about.vision.title")}
              </h3>
              <p className={`text-gray-600 leading-relaxed transition-all duration-800 delay-700 ${missionVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                {t("about.vision.description")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">

          <div className={`text-center mb-16 transition-all duration-1000 ${valuesVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("about.values.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: "innovation", color: "green", Icon: Lightbulb },
              { key: "responsibility", color: "blue", Icon: Shield },
              { key: "inclusion", color: "amber", Icon: Users },
              { key: "transparency", color: "purple", Icon: Sparkles },
            ].map((value, index) => (
              <div
                key={value.key}
                className={`text-center transition-all duration-1000 hover:scale-110 ${valuesVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div
                  className={`w-20 h-20 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 hover:rotate-12 hover:shadow-lg`}
                >
                  <value.Icon className={`w-10 h-10 text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`about.values.${value.key}`)}
                </h3>
                <p className="text-gray-600">
                  {t(`about.values.${value.key}.desc`)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Objectives Section */}
      <section ref={objectivesRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">

          <div className={`text-center mb-16 transition-all duration-1000 ${objectivesVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
            }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("about.objectives.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.objectives.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { key: "biochar", Icon: Shield },
              { key: "energy", Icon: HeartPulse },
              { key: "agriculture", Icon: HandHeart },
              { key: "innovation", Icon: Megaphone },
            ].map((obj, index) => {
              const colors: Record<string, string> = {
                biochar: "green",
                energy: "blue",
                agriculture: "amber",
                innovation: "purple",
              }
              const color = colors[obj.key]
              return (
                <div
                  key={obj.key}
                  className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-1000 hover:shadow-2xl hover:scale-105 ${objectivesVisible
                      ? 'opacity-100 transform translate-x-0'
                      : `opacity-0 transform ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                    }`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:rotate-12`}
                    >
                      <obj.Icon className={`w-6 h-6 text-${color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {t(`about.objectives.${obj.key}.title`)}
                      </h3>
                      <p className="text-gray-600">
                        {t(`about.objectives.${obj.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section ref={activitiesRef} className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold text-gray-900 mb-8 text-center transition-all duration-1000 ${activitiesVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
              }`}>
              {t("about.activities.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  key: "agricultural",
                  title: t("about.activities.agricultural.title"),
                  desc: t("about.activities.agricultural.desc"),
                  Icon: Sprout,
                },
                {
                  key: "consulting",
                  title: t("about.activities.consulting.title"),
                  desc: t("about.activities.consulting.desc"),
                  Icon: BookOpen,
                },
              ].map((activity, index) => (
                <div
                  key={activity.key}
                  className={`bg-gray-50 p-8 rounded-xl transition-all duration-1000 hover:bg-gray-100 hover:scale-105 ${activitiesVisible
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform translate-y-8'
                    }`}
                  style={{ transitionDelay: `${index * 300 + 300}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-500 hover:rotate-12">
                      <activity.Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-green-600 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl font-bold text-white mb-6 transition-all duration-1000 ${ctaVisible
              ? 'opacity-100 transform translate-y-0 scale-100'
              : 'opacity-0 transform translate-y-8 scale-95'
            }`}>
            {t("about.cta.title")}
          </h2>
          <p className={`text-xl text-green-100 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${ctaVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
            }`}>
            {t("about.cta.description")}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${ctaVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
            }`}>
            <Link href="/contact">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg">
                {t("about.cta.contact")}
              </button>
            </Link>
            <Link href="/projects">
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg">
                {t("about.cta.projects")}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
