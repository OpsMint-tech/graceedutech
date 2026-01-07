import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Calculator, FileText, Building2, Scale, GraduationCap, Briefcase, FileSpreadsheet, Landmark } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Accounting & Financial Compliance",
      description: "End-to-end bookkeeping, ledger maintenance, financial statement preparation, and auditing assistance to keep your business healthy.",
      icon: Calculator
    },
    {
      title: "Taxation & Returns",
      description: "Comprehensive GST filing, Income Tax Returns (ITR), TDS returns, and strategic tax planning to minimize liability legally.",
      icon: FileText
    },
    {
      title: "Corporate Registrations",
      description: "Company incorporation (Pvt Ltd, LLP, OPC), partnership deeds, shop & establishment acts, and MSME registration.",
      icon: Building2
    },
    {
      title: "Government Filings",
      description: "Handling all statutory compliances including PF, ESI, PT, and other regulatory filings on time, every time.",
      icon: Landmark
    },
    {
      title: "Legal & Trademark",
      description: "Protect your brand with Trademark registration, copyright services, and ISO certification assistance.",
      icon: Scale
    },
    {
      title: "Project Financing",
      description: "Preparation of CMA data, project reports for bank loans, and financial projections for investors.",
      icon: FileSpreadsheet
    },
    {
      title: "Practical Training",
      description: "Hands-on training for students and professionals in Tally, GST, and real-world accounting practices.",
      icon: GraduationCap
    },
    {
      title: "Business Consultancy",
      description: "Strategic advice on business structure, cost reduction, and financial health improvement.",
      icon: Briefcase
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Expert solutions tailored to your business needs."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
                href="/contact"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
