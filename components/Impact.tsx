"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Leaf, Users, MapPin, FolderOpen } from "lucide-react";

// Animation hook for intersection observer (same as in your main page)
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

interface ImpactItemProps {
    number: number;
    labelKey: string;
    bgOuter: string;
    bgInner: string;
    Icon: React.ComponentType<{ className?: string }>;
    isVisible: boolean;
    delay: number;
}

const ImpactItem = ({ number, labelKey, bgOuter, bgInner, Icon, isVisible, delay }: ImpactItemProps) => {
    const { t } = useTranslation();
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!isVisible || hasStarted) return;

        // Add delay before starting the animation
        const startDelay = setTimeout(() => {
            setHasStarted(true);
            let start = 0;
            const duration = 10000; // 2 seconds (faster than original 20s)
            const intervalTime = 50;
            const steps = duration / intervalTime;
            const increment = number / steps;

            const interval = setInterval(() => {
                start += increment;
                if (start >= number) {
                    start = number;
                    clearInterval(interval);
                }
                setCount(Math.floor(start));
            }, intervalTime);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(startDelay);
    }, [isVisible, number, hasStarted, delay]);

    return (
        <div
            className={`flex flex-col items-center text-center p-4 transition-all duration-1000 ${isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-12'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div
                className={`w-28 h-28 ${bgOuter} rounded-full flex items-center justify-center mb-5 shadow-xl transition-all duration-700 hover:scale-110 hover:rotate-12 ${isVisible ? 'scale-100' : 'scale-75'
                    }`}
                style={{ transitionDelay: `${delay + 200}ms` }}
            >
                <Icon className={`w-12 h-12 ${bgInner.replace('bg-', 'text-')} transition-all duration-500`} />
            </div>
            <div
                className={`text-5xl font-extrabold text-white mb-2 tracking-wide transition-all duration-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                style={{ transitionDelay: `${delay + 400}ms` }}
            >
                {count.toLocaleString()}+
            </div>
            <div
                className={`text-lg font-medium text-gray-200 text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                style={{ transitionDelay: `${delay + 600}ms` }}
            >
                {t(labelKey)}
            </div>
        </div>
    );
};

export default function Impact() {
    const { t } = useTranslation();
    const [impactRef, impactVisible] = useScrollAnimation(0.2);

    return (
        <section
            ref={impactRef}
            className="py-24 bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: "url('/images/biocharback.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${impactVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8'
                    }`}>
                    <h2 className="text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {t("impact_heading")}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                        {t("impact_description")}
                    </p>
                </div>

                {/* Impact Items */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <ImpactItem
                        number={4000}
                        labelKey="impact_carbon"
                        bgOuter="bg-green-100"
                        bgInner="bg-green-600"
                        Icon={Leaf}
                        isVisible={impactVisible}
                        delay={0}
                    />
                    <ImpactItem
                        number={1500}
                        labelKey="impact_farmers"
                        bgOuter="bg-blue-100"
                        bgInner="bg-blue-600"
                        Icon={Users}
                        isVisible={impactVisible}
                        delay={200}
                    />
                    <ImpactItem
                        number={1200}
                        labelKey="impact_hectares"
                        bgOuter="bg-amber-100"
                        bgInner="bg-amber-600"
                        Icon={MapPin}
                        isVisible={impactVisible}
                        delay={400}
                    />
                    <ImpactItem
                        number={6}
                        labelKey="impact_projects"
                        bgOuter="bg-purple-100"
                        bgInner="bg-purple-600"
                        Icon={FolderOpen}
                        isVisible={impactVisible}
                        delay={600}
                    />
                </div>

                {/* Floating Elements (matching your main page style) */}
                <div className={`absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full transition-all duration-1000 delay-1000 ${impactVisible ? 'opacity-70 animate-bounce' : 'opacity-0'
                    }`}></div>
                <div className={`absolute bottom-20 right-10 w-8 h-8 bg-blue-400 rounded-full transition-all duration-1000 delay-1200 ${impactVisible ? 'opacity-60 animate-ping' : 'opacity-0'
                    }`}></div>
            </div>
        </section>
    );
}