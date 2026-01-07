import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Briefcase, ArrowRight } from "lucide-react";

export default function Careers() {
  const roles = [
    {
      title: "Accounts Executive",
      type: "Full Time",
      description: "Manage daily accounting entries, bank reconciliation, and vendor payments."
    },
    {
      title: "GST Consultant",
      type: "Full Time",
      description: "Assist clients with GSTR filing, notices, and compliance queries."
    },
    {
      title: "Payroll Specialist",
      type: "Part Time",
      description: "Handle ESI/EPF calculations and monthly payroll processing for clients."
    },
    {
      title: "Audit Assistant",
      type: "Internship",
      description: "Support senior auditors in verification and report preparation."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Careers at Grace" 
        subtitle="Join a team that values expertise and continuous learning."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
            <p className="text-slate-600">
              We are always looking for talented individuals who are passionate about numbers and compliance. Explore our current opportunities below.
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {roles.map((role, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                    <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs rounded mt-2 mb-2 font-bold uppercase">{role.type}</span>
                    <p className="text-slate-600">{role.description}</p>
                  </div>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white">
                    Apply Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-primary/5 p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Don't see a fit?</h3>
            <p className="text-slate-600 mb-8">
              We are growing fast. Send us your resume, and we'll keep it on file for future opportunities.
            </p>
            <Link href="/contact">
               <Button size="lg" className="bg-primary text-white">Contact HR <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
