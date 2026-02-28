import { PageHeader } from "@/components/PageHeader";
import { Users, Target, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Trusted since 2009. Building financial clarity for businesses."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
      />

      {/* Company History */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <div className="w-20 h-1 bg-secondary rounded-full" />
              <p className="text-slate-600 text-lg leading-relaxed">
                Established in 2009, Grace Edutech (A Unit of Grace Associates) has grown from a specialized consultancy to a premier educational and compliance firm. With over 30 years of collective experience, our mission is to empower students and professionals through quality coaching and reliable financial services.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We specialize in bridging the gap between academic theory and professional practice, offering top-tier coaching for NET, SET, and GATE exams, while simultaneously providing expert accounting and GST compliance solutions for businesses.
              </p>


              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary"><Clock className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Established</h4>
                    <p className="text-sm text-slate-500">Founded in 2009</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary"><Users className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Team</h4>
                    <p className="text-sm text-slate-500">Expert Professionals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
                <p className="font-serif italic text-slate-600 text-lg">"Excellence is not an act, but a habit."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide top-tier coaching for competitive exams and practical accounting training that builds careers, while delivering precise financial compliance services that empower businesses to grow.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-secondary"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-secondary">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be a national leader in professional coaching and financial consultancy, recognized for our commitment to student success and business excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-secondary font-bold text-2xl">01</div>
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-slate-300">We uphold the highest standards of honesty in all our dealings.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-secondary font-bold text-2xl">02</div>
              <h3 className="text-xl font-bold">Precision</h3>
              <p className="text-slate-300">Accuracy is the cornerstone of accounting. We don't compromise.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-secondary font-bold text-2xl">03</div>
              <h3 className="text-xl font-bold">Growth</h3>
              <p className="text-slate-300">We grow when our clients grow. Your success is our priority.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
