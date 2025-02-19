"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Award } from "lucide-react";
import CountUp from "react-countup";

const impactData = [
  {
    icon: BookOpen,
    number: 30000,
    label: "Children Educated",
    description: "Free education materials and after-school tuitions provided",
  },
  {
    icon: Heart,
    number: 10525,
    label: "Healthcare Recipients",
    description: "Benefited from eye camps in the last 10 years",
  },
  {
    icon: Users,
    number: 205,
    label: "Women Empowered",
    description: "Completed tailoring courses and received training",
  },
  {
    icon: Award,
    number: 112,
    label: "Tuition Centers",
    description: "Active centers providing free education",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent container mx-auto">
      <div className=" px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            For over two decades, we've been making a difference in the lives of
            slum communities through education, healthcare, and empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2 + index * 0.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyDelay={100}
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.label}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
