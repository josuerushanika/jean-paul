"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "fr"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Translation data
const translations = {
  en: {

    //follow us 
    "followUs": "Follow Us",

    //message 

    "thank_you_title": "Thank you for your message!",
    "thank_you_subtitle": "We'll get back to you as soon as possible.",
    //address


    "line1": "Plot No. 38, Dominique Avenue",
    "line2": "Kashamata Quarter, Annex Commune",
    "line3": "City of Lubumbashi",
    "line4": "Haut-Katanga Province, DRC",



    //prepurchase
    "prepurchase": "Pre-purchase Carbon Removal Credits",
    //Contact

    "contacted.hour.monday.label": "Monday - Friday",
    "contacted.hour.monday.value": "8:00 AM - 5:00 PM",
    "contacted.hour.saturday.label": "Saturday",
    "contacted.hour.saturday.value": "9:00 AM - 12:00 PM",
    "contacted.hour.sunday.label": "Sunday",
    "contacted.hour.sunday.value": "Closed",
    "contacted.hour.emergency.label": "Emergency",
    "contacted.hour.emergency.value": "Available 24/7",
    "contacted.title": "Opening Hours",



    //whatsapp.startChat

    "whatsapp.startChat": "Chat with us",
    "whatsapp.chooseOption": "Select an option",
    //Blog

    "blog_heading": "Our Blog & Insights",
    "blog_description": "Stay updated with the latest developments in biochar technology, sustainable agriculture, and environmental impact stories from our projects across Central Africa.",
    "blog_categories_heading": "Blog Categories",
    "category_all": "All Categories",
    "category_science": "Science & Research",
    "category_agriculture": "Agriculture",
    "category_innovation": "Innovation",
    "category_sustainability": "Sustainability",
    "category_water": "Water Treatment",
    "category_climate": "Climate Action",
    "featured_article": "Featured Article",
    "read_full_article": "Read Full Article",
    "recent_articles": "Recent Articles",
    "read_more": "Read More",
    "close_article": "Close article",
    "published_on": "Published on",
    "back_to_articles": "Back to Articles",
    "blog_biochar_title": "Understanding Biochar: The Carbon-Rich Solution for Sustainable Agriculture",
    "blog_biochar_excerpt": "Discover how biochar is revolutionizing farming practices and helping combat climate change through innovative soil enhancement techniques.",
    "blog_biochar_content": "Biochar is a highly stable, carbon-rich material produced through pyrolysis. It improves soil fertility, retains water, supports beneficial microorganisms, and sequesters carbon for long-term climate benefits. Farmers are adopting biochar as part of regenerative agriculture worldwide.",
    "blog_modern_agriculture_title": "Modern Agriculture: Feeding the World Sustainably",
    "blog_modern_agriculture_excerpt": "Exploring how innovative farming techniques are meeting global food demands while protecting our environment for future generations.",
    "blog_modern_agriculture_content": "Modern agriculture focuses on maximizing crop yields while maintaining soil health. Techniques like crop rotation, intercropping, precision irrigation, and sustainable practices enhance productivity and environmental stewardship for long-term food security.",
    "blog_innovation_title": "Innovation in Farming: Technology Meets Tradition",
    "blog_innovation_excerpt": "How cutting-edge technology is transforming traditional farming methods to create more efficient and sustainable agricultural practices.",
    "blog_innovation_content": "Innovation in agriculture integrates advanced crop varieties, machinery, and digital tools. This enhances efficiency, resilience, and sustainability while reducing environmental impact, ensuring farms can thrive under climate and market challenges.",



    //Our impact 
    "impact_heading": "Our Impact",
    "impact_description": "Measuring our success through tangible environmental and social outcomes.",
    "impact_carbon": "Tons of Carbon Reduced",
    "impact_farmers": "Farmers Benefited",
    "impact_hectares": "Hectares Improved",
    "impact_projects": "Active Projects",

    //Partner with Our Projects
    "partner_heading": "Partner with Our Projects",
    "partner_description": "Join us in scaling sustainable biochar solutions across Central Africa. Together, we can create lasting environmental and social impact.",
    "partner_button": "Become a Partner",
    //Project Portfolio
    "status_active": "Active",
    "status_pilot": "Pilot",
    "status_development": "Development",
    "status_ongoing": "Ongoing",

    "project_bamboo_title": "Bamboo Shimbala regeneration project",
    "project_bamboo_desc": "We protect the Miombo forests by regenerating bamboo shimbala, and producing biochar and eco briquettes as alternative to charcoal and firewood.",

    "project_cash_title": "Project to plant cash crops",
    "project_cash_desc": "We plant cash crops such as Moringa Oleifera, Robusta coffee, avocado, cacao, and palm oil.",

    "project_maize_title": "Maize and Soybean cultivation",
    "project_maize_desc": "We are carrying out a project in the village of Mwawa, located in Haut-Katanga Province in the Democratic Republic of Congo (DRC).",

    "project_soil_title": "Soil Restoration Program",
    "project_soil_desc": "We apply biochar on a large scale to degraded agricultural lands, enhancing soil fertility and crop yields while capturing and storing carbon.",

    "project_water_title": "Water Purification Systems",
    "project_water_desc": "We implement biochar-based water filtration systems to provide clean drinking water to rural communities while making use of our biochar production.",

    "project_training_title": "Community Training Program",
    "project_training_desc": "We provide comprehensive training programs that teach local communities biochar production techniques and sustainable agriculture practices.",



    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Our Projects",
    "nav.contact": "Contact",
    "nav.blog": "Blog",

    // WhatsApp Chat
    "whatsapp.chat": "Chat with us",
    "chooseOption": "Please choose a  option",
    "learnMore": "Hello I want to learn more about your projects",
    "scheduleMeeting": "Hello I want to schedule a meeting with your team",
    "support": "Hello I want to support your initiatives",


    // Homepage Hero
    "hero.title": "Biochar for",
    "hero.subtitle": "Decarbonization",
    "hero.description":
      "Leading Central Africa's transition to sustainable agriculture and climate resilience through innovative biochar solutions",
    "hero.projects": "Our Projects",
    "hero.learn": "Learn More",

    // Services Section
    "services.title": "Our Core Services",
    "services.description":
      "Comprehensive solutions for sustainable agriculture, carbon sequestration, and renewable energy in the Democratic Republic of Congo",
    "services.biochar.title": "Biochar Production",
    "services.biochar.description":
      "High-quality biochar for carbon sequestration, soil amendment, and water purification.",
    "services.energy.title": "Renewable Energy",
    "services.energy.description":
      "Clean technology solutions tailored to rural energy needs and sustainable development.",
    "services.agriculture.title": "Regenerative Agriculture",
    "services.agriculture.description":
      "Environmentally friendly agricultural practices promoting soil health and long-term productivity.",
    "services.innovation.title": "Climate Innovation",
    "services.innovation.description":
      "Innovative technological solutions for climate resilience and environmental conservation.",

    // Blog dates
    "blog_biochar_date": "August 28, 2025",
    "blog_modern_agriculture_date": "August 28, 2025",
    "blog_innovation_date": "August 28, 2025",

    // Blog read times
    "blog_biochar_read_time": "8 min read",
    "blog_modern_agriculture_read_time": "6 min read",
    "blog_innovation_read_time": "7 min read",

    // About Section
    "about.title": "About B4D Sarl",
    "about.description":
      "B4D Sarl is an innovative company positioned at the intersection of the bioeconomy, energy transition, and sustainable agriculture. Founded within a dynamic of climate resilience and ecological development, we promote integrated solutions for decarbonization, soil regeneration, and food security in the Democratic Republic of Congo.",
    "about.values.innovation": "Innovation",
    "about.values.responsibility": "Environmental Responsibility",
    "about.values.inclusion": "Inclusion",
    "about.values.transparency": "Transparency",
    "about.learn": "Learn More About Us",

    // About Page Specific
    "about.hero.subtitle":
      "Pioneering sustainable solutions at the intersection of bioeconomy, energy transition, and regenerative agriculture in the Democratic Republic of Congo.",
    "about.story.title": "Our Story",
    "about.story.p1":
      "B4D Sarl (Biochar for Decarbonization) is an innovative Limited Liability Company headquartered in Lubumbashi, Haut-Katanga Province, DRC. Founded within a dynamic of climate resilience and ecological development, we promote integrated solutions for decarbonization, soil regeneration, and food security.",
    "about.story.p2":
      "Our company operates at the intersection of the bioeconomy, energy transition, and sustainable agriculture, delivering innovative and sustainable solutions in the green economy, particularly in agriculture, reforestation, and energy.",
    "about.legal.title": "Legal Status",
    "about.legal.status": "Limited Liability Company (Sarl) — RCCM: 25/LSH/IM002548, IDNat: 05-S9502-N82149T",
    "about.legal.headquarters": "Headquarters: Lubumbashi, Haut-Katanga Province, DRC",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To deliver innovative and sustainable solutions in the green economy, particularly in agriculture, reforestation, and energy, while promoting climate resilience and ecological development in Central Africa.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To become a leading company in regenerative agriculture and climate innovation in Central Africa, by creating an inclusive, sustainable economic model with strong environmental impact.",
    "about.values.title": "Our Core Values",
    "about.values.subtitle":
      "These fundamental principles guide every aspect of our work and define our commitment to sustainable development.",
    "about.values.innovation.desc":
      "Continuously developing cutting-edge solutions for environmental challenges through research and technology.",
    "about.values.responsibility.desc":
      "Committed to protecting and restoring our planet through sustainable practices and carbon-negative solutions.",
    "about.values.inclusion.desc":
      "Building an inclusive economic model that benefits local communities and promotes social equity.",
    "about.values.transparency.desc":
      "Operating with complete openness in our processes, impact measurement, and stakeholder communications.",
    "about.objectives.title": "Corporate Objectives",
    "about.objectives.subtitle":
      "Our comprehensive approach addresses multiple aspects of sustainable development and climate action.",
    "about.objectives.biochar.title": "Biochar & Decarbonization",
    "about.objectives.biochar.desc":
      "Production and valorization of biochar as a solution for carbon sequestration, soil amendment, and water purification.",
    "about.objectives.energy.title": "Renewable Energy",
    "about.objectives.energy.desc":
      "Development and promotion of clean technologies tailored to rural energy needs and sustainable development.",
    "about.objectives.agriculture.title": "Regenerative Agriculture",
    "about.objectives.agriculture.desc":
      "Implementation of environmentally friendly agricultural practices that promote soil health and long-term productivity.",
    "about.objectives.innovation.title": "Climate Innovation",
    "about.objectives.innovation.desc":
      "Design and deployment of innovative technological solutions for climate resilience and environmental conservation.",
    "about.activities.title": "Others Activities",
    "about.activities.agricultural.title": "Agricultural Operations",
    "about.activities.agricultural.desc":
      "Production, processing, distribution, and marketing of agricultural products using sustainable and regenerative practices, Sustainable crop production,  Agricultural product processing,  Distribution networks, Market development",
    "about.activities.consulting.title": "Consulting Services",
    "about.activities.consulting.desc":
      "Consulting, evaluations, and audits of bankable projects related to sustainable agriculture and environmental conservation.",
    "about.cta.title": "Join Our Mission",
    "about.cta.description":
      "Partner with us to create sustainable solutions for agriculture, energy, and climate resilience in Central Africa.",
    "about.cta.contact": "Contact Us",
    "about.cta.projects": "View Our Projects",

    // Process Section
    "process.title": "Our Biochar Process",
    "process.description":
      "From raw biomass to high-quality biochar, our sustainable production process transforms agricultural waste into valuable carbon-negative solutions.",
    "process.materials.title": "1. Raw Materials",
    "process.materials.description":
      "We source sustainable biomass including bamboo, agricultural residues, and organic waste materials.",
    "process.pyrolysis.title": "2. Pyrolysis Process",
    "process.pyrolysis.description":
      "Our controlled pyrolysis process converts biomass into biochar while capturing and utilizing byproduct gases.",
    "process.quality.title": "3. Quality Biochar",
    "process.quality.description":
      "The final product is high-quality biochar ready for soil amendment, carbon sequestration, and water filtration.",

    // CTA Section
    "cta.title": "Ready to Partner with Us?",
    "cta.description":
      "Join us in creating sustainable solutions for agriculture, energy, and climate resilience in Central Africa.",
    "cta.contact": "Contact Us",
    "cta.projects": "View Projects",

    // Footer
    "footer.description": "Leading Central Africa's transition to sustainable agriculture and climate resilience.",
    "footer.contact": "Contact Info",
    "footer.links": "Quick Links",
    "footer.copyright": "© 2024 B4D Sarl. All rights reserved.",

    // Projects Page
    "projects.title": "Our Projects",
    "projects.subtitle":
      "Transforming communities through innovative biochar solutions and sustainable development initiatives across Central Africa.",
    "projects.featured.title": "Featured Project",
    "projects.featured.name": "Community Biochar Production Hub",
    "projects.featured.description":
      "A comprehensive biochar production facility serving 15 rural communities, converting agricultural waste into valuable soil amendments while providing clean energy solutions.",
    "projects.featured.impact": "Impact: 500+ farmers benefited, 2,000 tons CO2 sequestered annually",
    "projects.featured.learn": "Learn More",
    "projects.grid.title": "Project Portfolio",
    "projects.impact.title": "Our Impact",
    "projects.impact.communities": "Communities Served",
    "projects.impact.carbon": "CO2 Sequestered (tons/year)",
    "projects.impact.farmers": "Farmers Benefited",
    "projects.impact.biochar": "Biochar Produced (tons)",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Ready to partner with us in creating sustainable solutions for Central Africa? Get in touch with our team.",
    "contact.getInTouch": "Get in Touch",
    "contact.office.title": "Office Address",
    "contact.phone.title": "Phone",
    "contact.email.title": "Email",
    "contact.website.title": "Website",
    "contact.form.title": "Send us a Message",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.firstName.placeholder": "Your first name",
    "contact.form.lastName.placeholder": "Your last name",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.email.placeholder": "your.email@example.com",
    "contact.form.phone": "Phone Number",
    "contact.form.phone.placeholder": "+243 XXX XXX XXX",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "Select a subject",
    "contact.form.subject.partnership": "Partnership Opportunities",
    "contact.form.subject.biochar": "Biochar Products & Services",
    "contact.form.subject.consulting": "Consulting Services",
    "contact.form.subject.projects": "Project Collaboration",
    "contact.form.subject.investment": "Investment Opportunities",
    "contact.form.subject.other": "Other Inquiry",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell us about your project or inquiry...",
    "contact.form.send": "Send Message",
    "contact.hours.title": "Business Hours",
    "contact.hours.weekdays": "8:00 AM - 5:00 PM",
    "contact.hours.saturday": "9:00 AM - 12:00",
    "contact.hours.sunday": "Closed",
    "contact.hours.emergency": "24/7 Available",
    "contact.hours.monday": "Monday - Friday",
    "contact.hours.saturday.label": "Saturday",
    "contact.hours.sunday.label": "Sunday",
    "contact.hours.emergency.label": "Emergency",
    "contact.cta.title": "Ready to Make an Impact?",
    "contact.cta.description":
      "Whether you're interested in our biochar products, consulting services, or partnership opportunities, we're here to help you achieve your sustainability goals.",
    "contact.cta.schedule": "Schedule a Call",
    "contact.cta.brochure": "Download Brochure",
    "contact.why.title": "Why Partner with B4D?",
    "contact.why.subtitle":
      "Join us in creating sustainable solutions that benefit both the environment and local communities.",
    "contact.why.expertise": "Proven Expertise",
    "contact.why.expertise.desc": "Years of experience in biochar production and sustainable agriculture solutions.",
    "contact.why.impact": "Measurable Impact",
    "contact.why.impact.desc":
      "Track record of successful projects with quantifiable environmental and social benefits.",
    "contact.why.local": "Local Knowledge",
    "contact.why.local.desc": "Deep understanding of Central African agricultural challenges and community needs.",

    // Blog Page
    "blog.title": "Blog & Insights",
    "blog.subtitle":
      "Stay updated with the latest developments in biochar technology, sustainable agriculture, and climate solutions.",
    "blog.featured.title": "Featured Article",
    "blog.categories.title": "Categories",
    "blog.recent.title": "Recent Articles",
    "blog.read": "Read More",
    "blog.category.all": "All",
    "blog.category.science": "Science",
    "blog.category.agriculture": "Agriculture",
    "blog.category.innovation": "Innovation",
    "blog.category.sustainability": "Sustainability",
    "blog.category.water": "Water Treatment",
    "blog.category.climate": "Climate",

    // Blog Post Translations
    "blog.posts.1.title": "The Science Behind Biochar: How Pyrolysis Creates Carbon-Negative Solutions",
    "blog.posts.1.excerpt":
      "Discover the fascinating process of pyrolysis and how it transforms agricultural waste into valuable biochar that actively removes CO2 from the atmosphere.",
    "blog.posts.1.author": "Dr. Jean-Baptiste Mukendi",
    "blog.posts.1.date": "December 15, 2024",
    "blog.posts.1.readTime": "8 min read",

    "blog.posts.2.title": "Transforming Agriculture in the DRC: Success Stories from Rural Communities",
    "blog.posts.2.excerpt":
      "Learn how biochar application has improved crop yields and soil health across farming communities in Haut-Katanga Province.",
    "blog.posts.2.author": "Marie Kabongo",
    "blog.posts.2.date": "December 10, 2024",
    "blog.posts.2.readTime": "6 min read",

    "blog.posts.3.title": "From Waste to Wonder: Converting Tithonia Plants into Valuable Biochar",
    "blog.posts.3.excerpt":
      "How we're turning invasive Tithonia plants into a sustainable solution for soil improvement and carbon sequestration.",
    "blog.posts.3.author": "Paul Mwamba",
    "blog.posts.3.date": "December 5, 2024",
    "blog.posts.3.readTime": "5 min read",

    "blog.posts.4.title": "Bamboo Biochar: The Future of Sustainable Carbon Sequestration",
    "blog.posts.4.excerpt":
      "Exploring the potential of bamboo as a renewable feedstock for biochar production and its environmental benefits.",
    "blog.posts.4.author": "Dr. Jean-Baptiste Mukendi",
    "blog.posts.4.date": "November 28, 2024",
    "blog.posts.4.readTime": "7 min read",

    "blog.posts.5.title": "Water Purification with Biochar: Clean Solutions for Rural Communities",
    "blog.posts.5.excerpt":
      "How biochar-based filtration systems are providing clean drinking water while supporting local economies.",
    "blog.posts.5.author": "Sarah Kalombo",
    "blog.posts.5.date": "November 20, 2024",
    "blog.posts.5.readTime": "4 min read",

    "blog.posts.6.title": "Climate Action in Central Africa: B4D's Role in the Green Economy",
    "blog.posts.6.excerpt":
      "Understanding how biochar production contributes to climate resilience and sustainable development in the DRC.",
    "blog.posts.6.author": "Marie Kabongo",
    "blog.posts.6.date": "November 15, 2024",
    "blog.posts.6.readTime": "9 min read",

    // Newsletter and CTA Section Translations
    "blog.newsletter.title": "Stay Updated",
    "blog.newsletter.description":
      "Subscribe to our newsletter for the latest insights on biochar technology, sustainability, and climate action.",
    "blog.newsletter.placeholder": "Enter your email address",
    "blog.newsletter.subscribe": "Subscribe",
    "blog.newsletter.disclaimer": "No spam, unsubscribe at any time.",

    "blog.cta.title": "Share Your Story",
    "blog.cta.description":
      "Have a biochar success story or research findings to share? We'd love to feature your work on our blog.",
    "blog.cta.submit": "Submit Article",
    "blog.cta.contact": "Contact Editorial Team",

    // Loading Screen
    "loading.title": "Loading B4D Solutions...",
    "loading.subtitle": "Preparing sustainable biochar innovations for Central Africa",

    //featuredStats
    "Carbon Sequestered": "Carbon Sequestered",
    "Families Impacted": "Farmers Benefited",
    "Watch Video Result": "Watch Video Result",

  },

  fr: {

    //Contact
    "contacted.hour.monday.label": "Lundi - Vendredi",
    "contacted.hour.monday.value": "8h00 - 17h00",
    "contacted.hour.saturday.label": "Samedi",
    "contacted.hour.saturday.value": "9h00 - 12h00",
    "contacted.hour.sunday.label": "Dimanche",
    "contacted.hour.sunday.value": "Fermé",
    "contacted.hour.emergency.label": "Urgence",
    "contacted.hour.emergency.value": "Disponible 24h/24 7j/7",
    "contacted.title": "Heures d'ouverture",
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.projects": "Nos Projets",
    "nav.contact": "Contact",
    "nav.blog": "Blog",

    // WhatsApp Chat
    "whatsapp.chat": "Discuter avec nous",
    "chooseOption": "Veuillez choisir une option",
    "learnMore": " Bonjour Je souhaite en savoir plus sur vos projets",
    "scheduleMeeting": "Bonjour  Je souhaite planifier une réunion avec votre équipe",
    "support": "Bonjour  Je souhaite soutenir vos initiatives",
    // Homepage Hero
    "hero.title": "Biochar pour la",
    "hero.subtitle": "Décarbonisation",
    "hero.description":
      "Mener la transition de l'Afrique centrale vers une agriculture durable et une résilience climatique grâce à des solutions innovantes de biochar",
    "hero.projects": "Nos Projets",
    "hero.learn": "En Savoir Plus",

    // Services Section
    "services.title": "Nos Services Principaux",
    "services.description":
      "Solutions complètes pour une agriculture durable, la séquestration du carbone et les énergies renouvelables en République Démocratique du Congo",
    "services.biochar.title": "Production de Biochar",
    "services.biochar.description":
      "Biochar de haute qualité pour la séquestration du carbone, l'amendement des sols et les applications de purification de l'eau.",
    "services.energy.title": "Énergies Renouvelables",
    "services.energy.description":
      "Solutions technologiques propres adaptées aux besoins énergétiques ruraux et au développement durable.",
    "services.agriculture.title": "Agriculture Régénératrice",
    "services.agriculture.description":
      "Pratiques agricoles respectueuses de l'environnement favorisant la santé des sols et la productivité à long terme.",
    "services.innovation.title": "Innovation Climatique",
    "services.innovation.description":
      "Solutions technologiques innovantes pour la résilience climatique et la conservation environnementale.",

    // About Section
    "about.title": "À Propos de B4D Sarl",
    "about.description":
      "B4D Sarl est une entreprise innovante positionnée à l'intersection de la bioéconomie, de la transition énergétique et de l'agriculture durable. Fondée dans une dynamique de résilience climatique et de développement écologique, nous promouvons des solutions intégrées pour la décarbonisation, la régénération des sols et la sécurité alimentaire en République Démocratique du Congo.",
    "about.values.innovation": "Innovation",
    "about.values.responsibility": "Responsabilité Environnementale",
    "about.values.inclusion": "Inclusion",
    "about.values.transparency": "Transparence",
    "about.learn": "En Savoir Plus Sur Nous",

    //featuredStats
    "Carbon Sequestered": "Carbone séquestré",
    "Families Impacted": "Agriculteurs bénéficiaires",
    "Watch Video Result": "Voir le résultat en vidéo",

    // Blog dates  
    "blog_biochar_date": "28 août 2025",
    "blog_modern_agriculture_date": "28 août 2025",
    "blog_innovation_date": "28 août 2025",

    // Blog read times
    "blog_biochar_read_time": "8 min de lecture",
    "blog_modern_agriculture_read_time": "6 min de lecture",
    "blog_innovation_read_time": "7 min de lecture",


    // About Page Specific
    "about.hero.subtitle":
      "Pionnier de solutions durables à l'intersection de la bioéconomie, de la transition énergétique et de l'agriculture régénératrice en République Démocratique du Congo.",
    "about.story.title": "Notre Histoire",
    "about.story.p1":
      "B4D Sarl (Biochar pour la Décarbonisation) est une société à responsabilité limitée innovante basée à Lubumbashi, Province du Haut-Katanga, RDC. Fondée dans une dynamique de résilience climatique et de développement écologique, nous promouvons des solutions intégrées pour la décarbonisation, la régénération des sols et la sécurité alimentaire.",
    "about.story.p2":
      "Notre entreprise opère à l'intersection de la bioéconomie, de la transition énergétique et de l'agriculture durable, offrant des solutions innovantes et durables dans l'économie verte, particulièrement dans l'agriculture, le reboisement et l'énergie.",
    "about.legal.title": "Statut Juridique",
    "about.legal.status": "Société à Responsabilité Limitée (Sarl), RCCM: 25/LSH/IM002548, IDNat: 05-S9502-N82149T",
    "about.legal.headquarters": "Siège social: Lubumbashi, Province du Haut-Katanga, RDC",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Fournir des solutions innovantes et durables dans l'économie verte, particulièrement dans l'agriculture, le reboisement et l'énergie, tout en promouvant la résilience climatique et le développement écologique en Afrique centrale.",
    "about.vision.title": "Notre Vision",
    "about.vision.description":
      "Devenir une entreprise leader en agriculture régénératrice et innovation climatique en Afrique centrale, en créant un modèle économique inclusif et durable avec un fort impact environnemental.",
    "about.values.title": "Nos Valeurs Fondamentales",
    "about.values.subtitle":
      "Ces principes fondamentaux guident tous les aspects de notre travail et définissent notre engagement envers le développement durable.",
    "about.values.innovation.desc":
      "Développer continuellement des solutions de pointe pour les défis environnementaux grâce à la recherche et à la technologie.",
    "about.values.responsibility.desc":
      "Engagés à protéger et restaurer notre planète grâce à des pratiques durables et des solutions à carbone négatif.",
    "about.values.inclusion.desc":
      "Construire un modèle économique inclusif qui profite aux communautés locales et promeut l'équité sociale.",
    "about.values.transparency.desc":
      "Opérer avec une transparence complète dans nos processus, la mesure d'impact et les communications avec les parties prenantes.",
    "about.objectives.title": "Objectifs Corporatifs",
    "about.objectives.subtitle":
      "Notre approche globale aborde plusieurs aspects du développement durable et de l'action climatique.",
    "about.objectives.biochar.title": "Biochar et Décarbonisation",
    "about.objectives.biochar.desc":
      "Production et valorisation du biochar comme solution pour la séquestration du carbone, l'amendement des sols et la purification de l'eau.",
    "about.objectives.energy.title": "Énergies Renouvelables",
    "about.objectives.energy.desc":
      "Développement et promotion de technologies propres adaptées aux besoins énergétiques ruraux et au développement durable.",
    "about.objectives.agriculture.title": "Agriculture Régénératrice",
    "about.objectives.agriculture.desc":
      "Mise en œuvre de pratiques agricoles respectueuses de l'environnement qui favorisent la santé des sols et la productivité à long terme.",
    "about.objectives.innovation.title": "Innovation Climatique",
    "about.objectives.innovation.desc":
      "Conception et déploiement de solutions technologiques innovantes pour la résilience climatique et la conservation environnementale.",
    "about.activities.title": "Activités Supplémentaires",
    "about.activities.agricultural.title": "Opérations Agricoles",
    "about.activities.agricultural.desc":
      "Production, transformation, distribution et commercialisation des produits agricoles selon des pratiques durables et régénératives, Production agricole durable, Transformation des produits agricoles, Réseaux de distribution, Développement des marchés",
    "about.activities.consulting.title": "Services de Conseil",
    "about.activities.consulting.desc":
      "Conseil, évaluations et audits de projets bancables liés à l'agriculture durable et à la conservation environnementale.",
    "about.cta.title": "Rejoignez Notre Mission",
    "about.cta.description":
      "Partenaire avec nous pour créer des solutions durables pour l'agriculture, l'énergie et la résilience climatique en Afrique centrale.",
    "about.cta.contact": "Nous Contacter",
    "about.cta.projects": "Voir Nos Projets",

    // Process Section
    "process.title": "Notre Processus de Biochar",
    "process.description":
      "De la biomasse brute au biochar de haute qualité, notre processus de production durable transforme les déchets agricoles en solutions précieuses à carbone négatif.",
    "process.materials.title": "1. Matières Premières",
    "process.materials.description":
      "Nous nous approvisionnons en biomasse durable, notamment le bambou, les résidus agricoles et les matières organiques.",
    "process.pyrolysis.title": "2. Processus de Pyrolyse",
    "process.pyrolysis.description":
      "Notre processus de pyrolyse contrôlée convertit la biomasse en biochar tout en capturant et utilisant les gaz sous-produits.",
    "process.quality.title": "3. Biochar de Qualité",
    "process.quality.description":
      "Le produit final est un biochar de haute qualité prêt pour l'amendement des sols, la séquestration du carbone et la filtration de l'eau.",

    // CTA Section
    "cta.title": "Prêt à Vous Associer avec Nous?",
    "cta.description":
      "Rejoignez-nous pour créer des solutions durables pour l'agriculture, l'énergie et la résilience climatique en Afrique centrale.",
    "cta.contact": "Nous Contacter",
    "cta.projects": "Voir les Projets",

    // Footer
    "footer.description":
      "Mener la transition de l'Afrique centrale vers une agriculture durable et une résilience climatique.",
    "footer.contact": "Informations de Contact",
    "footer.links": "Liens Rapides",
    "footer.copyright": "© 2024 B4D Sarl. Tous droits réservés.",

    // Projects Page
    "projects.title": "Nos Projets",
    "projects.subtitle":
      "Transformer les communautés grâce à des solutions innovantes de biochar et des initiatives de développement durable à travers l'Afrique centrale.",
    "projects.featured.title": "Projet Vedette",
    "projects.featured.name": "Centre de Production Communautaire de Biochar",
    "projects.featured.description":
      "Une installation complète de production de biochar desservant 15 communautés rurales, convertissant les déchets agricoles en amendements de sol précieux tout en fournissant des solutions d'énergie propre.",
    "projects.featured.impact": "Impact: 500+ agriculteurs bénéficiaires, 2 000 tonnes de CO2 séquestrées annuellement",
    "projects.featured.learn": "En Savoir Plus",
    "projects.grid.title": "Portefeuille de Projets",
    "projects.impact.title": "Notre Impact",
    "projects.impact.communities": "Communautés Servies",
    "projects.impact.carbon": "CO2 Séquestré (tonnes/an)",
    "projects.impact.farmers": "Agriculteurs Bénéficiaires",
    "projects.impact.biochar": "Biochar Produit (tonnes)",

    // Contact Page
    "contact.title": "Nous Contacter",
    "contact.subtitle":
      "Prêt à vous associer avec nous pour créer des solutions durables pour l'Afrique centrale? Contactez notre équipe.",
    "contact.getInTouch": "Entrer en Contact",
    "contact.office.title": "Adresse du Bureau",
    "contact.phone.title": "Téléphone",
    "contact.email.title": "Email",
    "contact.website.title": "Site Web",
    "contact.form.title": "Envoyez-nous un Message",
    "contact.form.firstName": "Prénom",
    "contact.form.lastName": "Nom de Famille",
    "contact.form.firstName.placeholder": "Votre prénom",
    "contact.form.lastName.placeholder": "Votre nom de famille",
    "contact.form.name": "Nom Complet",
    "contact.form.email": "Adresse Email",
    "contact.form.email.placeholder": "votre.email@exemple.com",
    "contact.form.phone": "Numéro de Téléphone",
    "contact.form.phone.placeholder": "+243 XXX XXX XXX",
    "contact.form.subject": "Sujet",
    "contact.form.subject.placeholder": "Sélectionnez un sujet",
    "contact.form.subject.partnership": "Opportunités de Partenariat",
    "contact.form.subject.biochar": "Produits et Services Biochar",
    "contact.form.subject.consulting": "Services de Conseil",
    "contact.form.subject.projects": "Collaboration de Projet",
    "contact.form.subject.investment": "Opportunités d'Investissement",
    "contact.form.subject.other": "Autre Demande",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Parlez-nous de votre projet ou demande...",
    "contact.form.send": "Envoyer le Message",
    "contact.hours.title": "Heures d'Ouverture",
    "contact.hours.weekdays": "8h00 - 17h00",
    "contact.hours.saturday": "9h00 - 12h00",
    "contact.hours.sunday": "Fermé",
    "contact.hours.emergency": "Disponible 24h/24 7j/7",
    "contact.hours.monday": "Lundi - Vendredi",
    "contact.hours.saturday.label": "Samedi",
    "contact.hours.sunday.label": "Dimanche",
    "contact.hours.emergency.label": "Urgence",
    "contact.cta.title": "Prêt à Faire un Impact?",
    "contact.cta.description":
      "Que vous soyez intéressé par nos produits biochar, services de conseil ou opportunités de partenariat, nous sommes là pour vous aider à atteindre vos objectifs de durabilité.",
    "contact.cta.schedule": "Planifier un Appel",
    "contact.cta.brochure": "Télécharger la Brochure",
    "contact.why.title": "Pourquoi S'Associer avec B4D?",
    "contact.why.subtitle":
      "Rejoignez-nous pour créer des solutions durables qui profitent à la fois à l'environnement et aux communautés locales.",
    "contact.why.expertise": "Expertise Prouvée",
    "contact.why.expertise.desc":
      "Des années d'expérience dans la production de biochar et les solutions d'agriculture durable.",
    "contact.why.impact": "Impact Mesurable",
    "contact.why.impact.desc":
      "Historique de projets réussis avec des bénéfices environnementaux et sociaux quantifiables.",
    "contact.why.local": "Connaissance Locale",
    "contact.why.local.desc":
      "Compréhension approfondie des défis agricoles de l'Afrique centrale et des besoins communautaires.",

    // Blog Page
    "blog.title": "Blog et Perspectives",
    "blog.subtitle":
      "Restez informé des derniers développements en technologie biochar, agriculture durable et solutions climatiques.",
    "blog.featured.title": "Article Vedette",
    "blog.categories.title": "Catégories",
    "blog.recent.title": "Articles Récents",
    "blog.read": "Lire Plus",
    "blog.category.all": "Tous",
    "blog.category.science": "Science",
    "blog.category.agriculture": "Agriculture",
    "blog.category.innovation": "Innovation",
    "blog.category.sustainability": "Durabilité",
    "blog.category.water": "Traitement de l'Eau",
    "blog.category.climate": "Climat",
    //message
    "thank_you_title": "Merci pour votre message !",
    "thank_you_subtitle": "Nous vous répondrons dès que possible.",
    //followUs
    "followUs": "Suivez-nous",

    // Blog Post Translations
    "blog.posts.1.title": "La Science Derrière le Biochar: Comment la Pyrolyse Crée des Solutions Carbone-Négatives",
    "blog.posts.1.excerpt":
      "Découvrez le processus fascinant de pyrolyse et comment il transforme les déchets agricoles en biochar précieux qui élimine activement le CO2 de l'atmosphère.",
    "blog.posts.1.author": "Dr. Jean-Baptiste Mukendi",
    "blog.posts.1.date": "15 décembre 2024",
    "blog.posts.1.readTime": "8 min de lecture",

    "blog.posts.2.title": "Transformer l'Agriculture en RDC: Histoires de Succès des Communautés Rurales",
    "blog.posts.2.excerpt":
      "Apprenez comment l'application de biochar a amélioré les rendements des cultures et la santé des sols dans les communautés agricoles de la Province du Haut-Katanga.",
    "blog.posts.2.author": "Marie Kabongo",
    "blog.posts.2.date": "10 décembre 2024",
    "blog.posts.2.readTime": "6 min de lecture",

    "blog.posts.3.title": "Du Déchet à la Merveille: Convertir les Plantes Tithonia en Biochar Précieux",
    "blog.posts.3.excerpt":
      "Comment nous transformons les plantes invasives Tithonia en une solution durable pour l'amélioration des sols et la séquestration du carbone.",
    "blog.posts.3.author": "Paul Mwamba",
    "blog.posts.3.date": "5 décembre 2024",
    "blog.posts.3.readTime": "5 min de lecture",

    "blog.posts.4.title": "Biochar de Bambou: L'Avenir de la Séquestration Durable du Carbone",
    "blog.posts.4.excerpt":
      "Explorer le potentiel du bambou comme matière première renouvelable pour la production de biochar et ses bénéfices environnementaux.",
    "blog.posts.4.author": "Dr. Jean-Baptiste Mukendi",
    "blog.posts.4.date": "28 novembre 2024",
    "blog.posts.4.readTime": "7 min de lecture",

    "blog.posts.5.title": "Purification de l'Eau avec le Biochar: Solutions Propres pour les Communautés Rurales",
    "blog.posts.5.excerpt":
      "Comment les systèmes de filtration à base de biochar fournissent de l'eau potable propre tout en soutenant les économies locales.",
    "blog.posts.5.author": "Sarah Kalombo",
    "blog.posts.5.date": "20 novembre 2024",
    "blog.posts.5.readTime": "4 min de lecture",

    "blog.posts.6.title": "Action Climatique en Afrique Centrale: Le Rôle de B4D dans l'Économie Verte",
    "blog.posts.6.excerpt":
      "Comprendre comment la production de biochar contribue à la résilience climatique et au développement durable en RDC.",
    "blog.posts.6.author": "Marie Kabongo",
    "blog.posts.6.date": "15 novembre 2024",
    "blog.posts.6.readTime": "9 min de lecture",

    //Project Portfolio

    "status_active": "Actif",
    "status_pilot": "Pilote",
    "status_development": "En développement",
    "status_ongoing": "En cours",

    "project_bamboo_title": "Projet de régénération du bambou Shimbala",
    "project_bamboo_desc": "Nous protégeons les forêts de Miombo en régénérant le bambou Shimbala et en produisant du biochar et des éco-briquettes comme alternatives au charbon de bois et au bois de chauffe.",

    "project_cash_title": "Projet de plantation de cultures de rente",
    "project_cash_desc": "Nous plantons des cultures de rente telles que le moringa oleifera, le café robusta, l’avocat, le cacao et le palmier à huile..",

    "project_maize_title": "Culture de maïs et de soja",
    "project_maize_desc": "Nous menons un projet dans le village de Mwawa, situé dans la province du Haut-Katanga en République Démocratique du Congo (RDC).",

    "project_soil_title": "Programme de restauration des sols",
    "project_soil_desc": "Nous appliquons du biochar à grande échelle sur des terres agricoles dégradées, afin d’améliorer la fertilité des sols et les rendements des cultures tout en capturant et stockant le carbone.",

    "project_water_title": "Systèmes de purification de l’eau",
    "project_water_desc": "Nous mettons en place des systèmes de filtration de l’eau à base de biochar pour fournir de l’eau potable aux communautés rurales tout en valorisant notre production de biochar.",

    "project_training_title": "Programme de formation communautaire",
    "project_training_desc": "Nous proposons des programmes de formation complets qui enseignent aux communautés locales les techniques de production de biochar et les pratiques agricoles durables.",


    // Newsletter and CTA Section Translations
    "blog.newsletter.title": "Restez Informé",
    "blog.newsletter.description":
      "Abonnez-vous à notre newsletter pour les dernières perspectives sur la technologie biochar, la durabilité et l'action climatique.",
    "blog.newsletter.placeholder": "Entrez votre adresse email",
    "blog.newsletter.subscribe": "S'abonner",
    "blog.newsletter.disclaimer": "Pas de spam, désabonnez-vous à tout moment.",

    "blog.cta.title": "Partagez Votre Histoire",
    "blog.cta.description":
      "Avez-vous une histoire de succès biochar ou des résultats de recherche à partager? Nous aimerions présenter votre travail sur notre blog.",
    "blog.cta.submit": "Soumettre un Article",
    "blog.cta.contact": "Contacter l'Équipe Éditoriale",

    // Loading Screen
    "loading.title": "Chargement des Solutions B4D...",
    "loading.subtitle": "Préparation des innovations biochar durables pour l'Afrique centrale",
    //Partner with Our Projects
    "partner_heading": "Partenariat avec nos projets",
    "partner_description": "Rejoignez-nous pour développer des solutions durables de biochar en Afrique centrale. Ensemble, nous pouvons créer un impact environnemental et social durable.",
    "partner_button": "Devenir partenaire",

    //Our Impact
    "impact_heading": "Notre Impact",
    "impact_description": "Mesurer notre réussite à travers des résultats environnementaux et sociaux concrets.",
    "impact_carbon": "Tonnes de carbone réduites",
    "impact_farmers": "Agriculteurs bénéficiaires",
    "impact_hectares": "Hectares améliorés",
    "impact_projects": "Projets actifs",

    // whatsapp.startChat
    "whatsapp.startChat": "Commencer le chat",
    "whatsapp.chooseOption": "Choisissez une option",

    //prepurchase

    "prepurchase": "Pré-acheter des Crédits de Suppression de Carbone",


    //address

    "line1": "Parcelle n° 38, Avenue Dominique",
    "line2": "Quartier Kashamata, Commune Annexe",
    "line3": "Ville de Lubumbashi",
    "line4": "Province du Haut-Katanga, RDC",


    "blog_heading": "Notre Blog & Ressources",
    "blog_description": "Restez informé des dernières avancées en technologie du biochar, agriculture durable et récits d'impact environnemental issus de nos projets à travers l'Afrique centrale.",
    "blog_categories_heading": "Catégories de Blog",
    "category_all": "Toutes les catégories",
    "category_science": "Science & Recherche",
    "category_agriculture": "Agriculture",
    "category_innovation": "Innovation",
    "category_sustainability": "Durabilité",
    "category_water": "Traitement de l'eau",
    "category_climate": "Action climatique",
    "featured_article": "Article en vedette",
    "read_full_article": "Lire l'article complet",
    "recent_articles": "Articles récents",
    "read_more": "Lire plus",
    "close_article": "Fermer l'article",
    "published_on": "Publié le",
    "back_to_articles": "Retour aux articles",
    "blog_biochar_title": "Comprendre le Biochar : La solution riche en carbone pour une agriculture durable",
    "blog_biochar_excerpt": "Découvrez comment le biochar révolutionne les pratiques agricoles et contribue à la lutte contre le changement climatique grâce à des techniques innovantes d'amélioration des sols.",
    "blog_biochar_content": "Le biochar est un matériau très stable et riche en carbone produit par pyrolyse. Il améliore la fertilité des sols, retient l'eau, favorise les micro-organismes bénéfiques et séquestre le carbone pour un impact climatique durable. Les agriculteurs l'adoptent dans le cadre de l'agriculture régénératrice à travers le monde.",
    "blog_modern_agriculture_title": "Agriculture moderne : Nourrir le monde de manière durable",
    "blog_modern_agriculture_excerpt": "Découvrez comment les techniques agricoles innovantes répondent aux besoins alimentaires mondiaux tout en protégeant notre environnement pour les générations futures.",
    "blog_modern_agriculture_content": "L'agriculture moderne vise à maximiser les rendements tout en préservant la santé des sols. Des techniques comme la rotation des cultures, l'association de cultures, l'irrigation de précision et les pratiques durables améliorent la productivité et la protection de l'environnement pour assurer la sécurité alimentaire à long terme.",
    "blog_innovation_title": "Innovation en agriculture : La technologie rencontre la tradition",
    "blog_innovation_excerpt": "Comment les technologies de pointe transforment les méthodes agricoles traditionnelles pour créer des pratiques plus efficaces et durables.",
    "blog_innovation_content": "L'innovation agricole intègre des variétés de cultures avancées, des machines modernes et des outils numériques. Cela améliore l'efficacité, la résilience et la durabilité tout en réduisant l'impact environnemental, permettant aux exploitations de prospérer malgré les défis climatiques et économiques."


  },
}

// Browser language detection function
function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.toLowerCase()

  // Check for French variants (fr, fr-FR, fr-CA, etc.)
  if (browserLang.startsWith("fr")) {
    return "fr"
  }

  // Default to English
  return "en"
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const detectedLang = detectBrowserLanguage()
    setLanguage(detectedLang)
  }, [])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
