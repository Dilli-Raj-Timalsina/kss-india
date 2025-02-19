"use client";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    title: "Health Camp",
    date: "2023-12-15",
    time: "10:00 AM",
    location: "Community Center",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    category: "Healthcare",
  },
  {
    title: "Education Fair",
    date: "2024-01-20",
    time: "9:00 AM",
    location: "City Hall",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    category: "Education",
  },
  {
    title: "Women's Workshop",
    date: "2024-02-10",
    time: "2:00 PM",
    location: "Community Center",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    category: "Empowerment",
  },
];

const MotionSection = m.section;
const MotionDiv = m.div;

const cardVariants = {
  fadeScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  },
  slideFade: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  },
  flip3D: {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      rotateY: 90,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  },
  bounceFade: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  },
};

type AnimationType = "fadeScale" | "slideFade" | "flip3D" | "bounceFade";

interface EventsSectionProps {
  animation?: AnimationType;
}

export default function EventsSection({
  animation = "fadeScale",
}: EventsSectionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionSection className="py-20 bg-accent will-change-transform">
        <div className="container mx-auto px-4">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in our mission to create positive change. Participate in
              our upcoming events and be part of the transformation.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: false, amount: 0.1 });

              return (
                <MotionDiv
                  key={index}
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "visible" : "exit"}
                  variants={cardVariants[animation]}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow will-change-transform"
                >
                  <div className="relative h-48">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-secondary/90 text-white text-sm rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {event.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="mt-6 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </MotionSection>
    </LazyMotion>
  );
}
