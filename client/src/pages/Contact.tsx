import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We are here to help. Reach out for any queries."
        image="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Have a question about our services or training programs? Fill out the form, and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-full shadow-md text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Location</h4>
                    <p className="text-slate-600">D, 1288/2, Trichy Rd, Nadar Colony, Race Course, Gopalapuram, Coimbatore, Tamil Nadu 641018</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-full shadow-md text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-slate-600">+91 90479 33484</p>
                    <p className="text-slate-500 text-sm">Mon-Sat 9am-7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-full shadow-md text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-slate-600">graceedutech26@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Google Map Integration */}
              <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.567484958255!2d76.97662007504509!3d10.995982989166404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU5JzQ1LjUiTiA3NsKwNTgnNDUuMSJF!5e0!3m2!1sen!2sin!4v1769500972984!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grace Edutech Location"
                ></iframe>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
