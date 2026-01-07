import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We are here to help. Reach out for any queries."
        image="https://images.unsplash.com/photo-1423666639041-f14d7045c573?auto=format&fit=crop&q=80"
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
                    <p className="text-slate-600">123 Business Park, Main Avenue,<br/>Coimbatore, Tamil Nadu 641001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-full shadow-md text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-slate-600">+91 96552 14330</p>
                    <p className="text-slate-500 text-sm">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-4 rounded-full shadow-md text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-slate-600">info@graceassociates.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-200 w-full h-64 rounded-2xl flex items-center justify-center text-slate-500 font-medium">
                Google Map Integration Placeholder
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
