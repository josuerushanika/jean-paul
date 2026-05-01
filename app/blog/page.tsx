"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";

type BlogPost = {
  id: number;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  dateKey: string;
  readTimeKey: string;
  categoryKey: string;
  image: string;
  featured?: boolean;
};

export default function Blog() {
  const { t } = useTranslation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      titleKey: "blog_biochar_title",
      excerptKey: "blog_biochar_excerpt",
      contentKey: "blog_biochar_content",
      dateKey: "blog_biochar_date",
      readTimeKey: "blog_biochar_read_time",
      categoryKey: "category_science",
      image: "/images/affe13.jpeg",
      featured: true,
    },
    {
      id: 2,
      titleKey: "blog_modern_agriculture_title",
      excerptKey: "blog_modern_agriculture_excerpt",
      contentKey: "blog_modern_agriculture_content",
      dateKey: "blog_modern_agriculture_date",
      readTimeKey: "blog_modern_agriculture_read_time",
      categoryKey: "category_agriculture",
      image: "/images/affe14.jpeg",
    },
    {
      id: 3,
      titleKey: "blog_innovation_title",
      excerptKey: "blog_innovation_excerpt",
      contentKey: "blog_innovation_content",
      dateKey: "blog_innovation_date",
      readTimeKey: "blog_innovation_read_time",
      categoryKey: "category_innovation",
      image: "/images/affe15.png",
    },
  ];

  const categories = [
    "category_all",
    "category_science",
    "category_agriculture",
    "category_innovation",
    "category_sustainability",
    "category_water",
    "category_climate",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/images/affe16.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("blog_heading")}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            {t("blog_description")}
          </motion.p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Categories */}

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 lg:h-96">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={t(blogPosts[0].titleKey)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {t("featured_article")}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{t(blogPosts[0].titleKey)}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t(blogPosts[0].excerptKey)}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>{t(blogPosts[0].dateKey)}</span>
                    <span>•</span>
                    <span>{t(blogPosts[0].readTimeKey)}</span>
                  </div>
                  <button
                    onClick={() => setSelectedPost(blogPosts[0])}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {t("read_full_article")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t("recent_articles")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.slice(1, 3).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={t(post.titleKey)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold mb-3">
                      {t(post.categoryKey)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{t(post.titleKey)}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{t(post.excerptKey)}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{t(post.readTimeKey)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{t(post.dateKey)}</span>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-green-600 hover:text-green-700 font-semibold"
                      >
                        {t("read_more")}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full relative max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                {selectedPost.image && (
                  <div className="relative h-64">
                    <Image
                      src={selectedPost.image}
                      alt={t(selectedPost.titleKey)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                )}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
                  aria-label={t("close_article")}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {t(selectedPost.categoryKey)}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                    {t(selectedPost.titleKey)}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[60vh]">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-200">
                  <span>{t(selectedPost.dateKey)}</span>
                  <span>•</span>
                  <span>{t(selectedPost.readTimeKey)}</span>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {t(selectedPost.contentKey).split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-6 text-justify">{paragraph.trim()}</p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{t("published_on")} {t(selectedPost.dateKey)}</div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      {t("back_to_articles")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
