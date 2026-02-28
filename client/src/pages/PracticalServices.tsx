import { PageHeader } from "@/components/PageHeader";
import { Check } from "lucide-react";

export default function PracticalServices() {
    const practicalServices = [
        {
            category: "GST Services",
            items: ["GST Registration", "Monthly/Quarterly Filing", "GSTR-9 Annual Return", "GST Audit Assistance", "E-Way Bill Generation"]
        },
        {
            category: "Income Tax",
            items: ["PAN Card Application", "ITR Filing (Salaried/Business)", "Tax Planning", "TDS Returns", "Response to Notices"]
        },
        {
            category: "Business Registration",
            items: ["MSME / Udyam Registration", "Partnership Deed Drafting", "Company Incorporation", "Import Export Code (IEC)", "FSSAI Registration"]
        },
        {
            category: "Loans & Finance",
            items: ["Project Reports (CMA Data)", "Bank Loan Assistance", "Financial Projections", "Credit Score Improvement", "Subsidy Consulting"]
        },
        {
            category: "Intellectual Property",
            items: ["Trademark Search & Filing", "Copyright Registration", "ISO Certification", "Brand Protection Strategy", "Legal Drafting"]
        },
        {
            category: "Payroll & Compliance",
            items: ["ESI / EPF Registration", "Monthly Challan Generation", "Payroll Processing", "Labor Law Compliance", "Professional Tax"]
        },
        {
            category: "E-Commerce Management",
            items: ["Amazon & Flipkart Onboarding", "Product Cataloging & Optimization", "Amazon PPC & Ad Management", "Account Health Reinstatement", "Inventory & Order Management"]
        }
    ];

    return (
        <>
            <PageHeader
                title="Practical Services"
                subtitle="Real-world solutions for everyday business challenges."
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
            />

            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        {practicalServices.map((section, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold text-primary mb-6 pb-4 border-b border-slate-200">
                                    {section.category}
                                </h3>
                                <ul className="space-y-4">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <span className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mr-3 text-xs">
                                                <Check className="w-3 h-3" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
