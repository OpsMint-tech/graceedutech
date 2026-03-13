import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Calculator, GraduationCap, Building2, Quote, ChevronDown } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { ReelsSection } from "@/components/ReelsSection";


export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of the NET/SET coaching program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our intensive coaching programs typically run for 6 months, covering both Paper 1 and Paper 2 with regular mock tests."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide practical training for accounting software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in practical Tally Prime training, including real-world scenarios for GST, TDS, and payroll management."
        }
      },
      {
        "@type": "Question",
        "name": "What is the duration of the E-Commerce training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three flexible durations: 10 Days, 30 Days, and 45 Days, depending on the level of depth and marketplace exposure you need."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with new company registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We handle end-to-end registration for Pvt Ltd, LLP, and OPC, including GST registration and shop acts."
        }
      },
      {
        "@type": "Question",
        "name": "Is there placement assistance for training courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide placement support and career guidance for students who successfully complete our Master Diploma in Accounting."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Professional meeting or office building */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />

        <div className="container-custom relative z-20 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" /> Trusted Since 2009
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Your Trusted Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Accounting & Compliance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 max-w-lg leading-relaxed"
            >
              We provide comprehensive financial solutions and practical training to help businesses and careers grow with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/services">
                <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-white rounded-xl shadow-lg shadow-secondary/25">
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white/20 hover:bg-white/10 rounded-xl">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative element or secondary image for desktop */}
          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
                alt="Accounting professional"
                className="rounded-[20px] shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">What We Do</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Financial Solutions</h3>
            <p className="text-slate-600 text-lg">
              From day-to-day accounting to complex tax compliance and professional training, we cover all your financial needs under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Accounting"
              description="Expert bookkeeping and financial reporting to keep your business records pristine."
              icon={Calculator}
              delay={0}
            />
            <ServiceCard
              title="GST & Tax"
              description="Seamless GST filing, income tax return filing, and compliance management."
              icon={FileText}
              delay={0.1}
            />
            <ServiceCard
              title="Registrations"
              description="Company incorporation, trademarking, and business setup services."
              icon={Building2}
              delay={0.2}
            />
            <ServiceCard
              title="Training"
              description="Practical courses in Tally, GST, and Accounting for aspiring professionals."
              icon={GraduationCap}
              href="/courses"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "30+" },
              { label: "Happy Clients", value: "500+" },
              { label: "Students Trained", value: "2000+" },
              { label: "Projects Done", value: "100%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Coaching Programs Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Coaching Programs</h2>
                <h3 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
                  Achieve Your Dreams with Our <br />
                  <span className="text-primary">Expert Coaching</span>
                </h3>
                <p className="text-slate-600 text-lg">
                  We provide specialized coaching for competitive exams and language proficiency to help you excel in your academic and professional journey.
                </p>

                <div className="space-y-4 pt-6">
                  {[
                    { title: "E-Commerce Training", desc: "Master Amazon and Flipkart marketplace management for business growth." },
                    { title: "NET / SET Coaching", desc: "Expert guidance for University and State level lecturership exams." },
                    { title: "GATE Coaching", desc: "Comprehensive preparation for Graduate Aptitude Test in Engineering." },
                    { title: "Spoken English", desc: "Enhance your communication skills and build confidence." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link href="/courses">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg shadow-primary/20">
                      Explore All Programs
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                  alt="Students learning"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium italic">"Empowering students through quality education and expert mentorship."</p>
                </div>
              </motion.div>
              {/* Decorative background elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Success Stories</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">What Our Students & Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The NET coaching at Grace Edutech was exceptional. The materials and faculty support helped me clear the exam in my first attempt.",
                author: "Anitha R.",
                role: "NET Qualified"
              },
              {
                text: "Professional and reliable. They have been handling our company's GST and payroll for 5 years without a single error.",
                author: "Suresh Kumar",
                role: "Business Owner"
              },
              {
                text: "The Spoken English course gave me the confidence I needed for my career. The practical approach is what makes them different.",
                author: "Praveen M.",
                role: "IT Professional"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                <p className="text-slate-600 italic mb-6 relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-primary">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Questions?</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the duration of the NET/SET coaching program?",
                a: "Our intensive coaching programs typically run for 6 months, covering both Paper 1 and Paper 2 with regular mock tests."
              },
              {
                q: "Do you provide practical training for accounting software?",
                a: "Yes, we specialize in practical Tally Prime training, including real-world scenarios for GST, TDS, and payroll management."
              },
              {
                q: "What is the duration of the E-Commerce training?",
                a: "We offer three flexible durations: 10 Days, 30 Days, and 45 Days, depending on the level of depth and marketplace exposure you need."
              },
              {
                q: "Can you help with new company registration?",
                a: "Absolutely. We handle end-to-end registration for Pvt Ltd, LLP, and OPC, including GST registration and shop acts."
              },
              {
                q: "Is there placement assistance for training courses?",
                a: "Yes, we provide placement support and career guidance for students who successfully complete our Master Diploma in Accounting."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </button>
                <div className="px-6 pb-6 text-slate-600">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to streamline your finances?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join hundreds of satisfied individuals and businesses who trust Grace Edutech for their training and compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg px-8 py-6 rounded-xl shadow-xl">
                Get in Touch
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
