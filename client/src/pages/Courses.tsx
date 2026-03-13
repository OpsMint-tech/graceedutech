import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BookOpen, Calendar, Award } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Courses() {
    const courses = [
        {
            title: "Tally Prime (Advanced)",
            duration: "45 Days",
            features: ["Inventory Management", "Payroll", "GST Integration", "Banking"],
            level: "Intermediate",
            category: "Accounting & Finance"
        },
        {
            title: "GST with Practical Filing",
            duration: "30 Days",
            features: ["GSTR-1, 3B Filing", "E-Way Bill", "Input Tax Credit", "Reconciliation"],
            level: "Advanced",
            category: "Accounting & Finance"
        },
        {
            title: "Income Tax Return (ITR)",
            duration: "20 Days",
            features: ["ITR 1-4 Filing", "Tax Planning", "Deductions", "Portal Training"],
            level: "All Levels",
            category: "Accounting & Finance"
        },
        {
            title: "NET / SET Coaching",
            duration: "6 Months",
            features: ["UGC NET/SET Paper 1 & 2", "Regular Mock Tests", "Updated Study Materials", "Expert Mentorship"],
            level: "Competitive",
            category: "Competitive Exams"
        },
        {
            title: "GATE Coaching",
            duration: "1 Year",
            features: ["Engineering Subjects", "Aptitude Training", "Previous Year Solved Papers", "Test Series"],
            level: "Entrance Exam",
            category: "Competitive Exams"
        },
        {
            title: "Spoken English",
            duration: "3 Months",
            features: ["Communication Skills", "Grammar & Vocabulary", "Public Speaking", "Confidence Building"],
            level: "Language",
            category: "Professional Skills"
        },
        {
            title: "TDS / ESI / EPF",
            duration: "25 Days",
            features: ["Challan Payment", "Quarterly Returns", "Employee Compliance", "PF Withdrawal"],
            level: "Professional",
            category: "Accounting & Finance"
        },
        {
            title: "Master Diploma in Accounting",
            duration: "90 Days",
            features: ["All-in-one Package", "Live Projects", "Placement Assistance", "Certification"],
            level: "Expert",
            category: "Professional Skills"
        },
        {
            title: "Form 15G & 15H Filing",
            duration: "1 Week",
            features: ["Eligibility Check", "Online Submission", "Bank Coordination", "Documentation"],
            level: "Beginner",
            category: "Accounting & Finance"
        },
        // New E-Commerce Courses
        {
            title: "Basic E-Commerce Training",
            duration: "10 Days",
            features: ["Business Models Intro", "Account Creation", "GST Basics"],
            level: "Beginner",
            category: "E-Commerce Training"
        },
        {
            title: "Advanced Marketplace Management",
            duration: "30 Days",
            features: ["Product Research", "Inventory Management", "Scaling Strategy"],
            level: "Advanced",
            category: "E-Commerce Training"
        },
        {
            title: "Amazon Seller Central Training",
            duration: "45 Days",
            features: ["Complete Dashboard Training", "Buy Box Winning", "Listing Optimization"],
            level: "Expert",
            category: "E-Commerce Training"
        },
        {
            title: "Flipkart Seller Hub Training",
            duration: "30 Days",
            features: ["Hub Complete Training", "Promotional Campaigns", "Return Handling"],
            level: "Advanced",
            category: "E-Commerce Training"
        },
        {
            title: "Listing & Catalogue Management",
            duration: "10 Days",
            features: ["Brand & Category Approval", "SEO-Based Creation", "Photoshoot Guidelines"],
            level: "Intermediate",
            category: "E-Commerce Training"
        },
        {
            title: "Amazon PPC & Advertising",
            duration: "15 Days",
            features: ["Campaign Setup", "ACOS Optimization", "Performance Tracking"],
            level: "Advanced",
            category: "E-Commerce Training"
        },
        {
            title: "Account Health & Reinstatement",
            duration: "10 Days",
            features: ["Policy Compliance", "POA Preparation", "Performance Scaling"],
            level: "Professional",
            category: "E-Commerce Training"
        },
        {
            title: "E-Commerce Placement Training",
            duration: "30 Days",
            features: ["Placement Assistance", "Live Marketplace Exp", "Internship Opportunities"],
            level: "Expert",
            category: "E-Commerce Training"
        },
        // IT & Software Development Courses
        {
            title: "DevOps",
            duration: "3 Months",
            features: ["CI/CD Pipelines", "Docker & Kubernetes", "Cloud Deployment (AWS/Azure)", "Monitoring & Logging"],
            level: "Advanced",
            category: "IT & Software Development"
        },
        {
            title: "Python & SQL",
            duration: "2 Months",
            features: ["Python Programming Fundamentals", "Data Manipulation & Analysis", "SQL Queries & Database Design", "Real-World Projects"],
            level: "Beginner",
            category: "IT & Software Development"
        },
        {
            title: "Full Stack Development",
            duration: "6 Months",
            features: ["Frontend (HTML, CSS, React)", "Backend (Node.js, Express)", "Database (MongoDB, SQL)", "Deployment & Portfolio"],
            level: "Intermediate",
            category: "IT & Software Development"
        },
        {
            title: "Java",
            duration: "3 Months",
            features: ["Core Java & OOP Concepts", "Collections & Multithreading", "Spring Boot Framework", "Project Development"],
            level: "Intermediate",
            category: "IT & Software Development"
        },
        {
            title: "Medical Coding",
            duration: "3 Months",
            features: ["ICD-10 & CPT Coding", "Medical Terminology", "Healthcare Compliance (HIPAA)", "Revenue Cycle Management"],
            level: "Professional",
            category: "IT & Software Development"
        },
        {
            title: "Power BI",
            duration: "45 Days",
            features: ["Data Visualization & Dashboards", "DAX Formulas & Measures", "Data Modeling & ETL", "Real-Time Reporting"],
            level: "Intermediate",
            category: "IT & Software Development"
        },
        {
            title: "AI & Machine Learning",
            duration: "4 Months",
            features: ["Machine Learning Algorithms", "Deep Learning & Neural Networks", "Natural Language Processing", "Hands-On Projects with Python"],
            level: "Advanced",
            category: "IT & Software Development"
        },
        // Design & Mobile Development Courses
        {
            title: "Adobe XD",
            duration: "30 Days",
            features: ["UI/UX Design Principles", "Wireframing & Prototyping", "Interactive Design", "Design Systems & Components"],
            level: "Beginner",
            category: "Design & Mobile Development"
        },
        {
            title: "Adobe Illustrator",
            duration: "30 Days",
            features: ["Vector Graphics & Illustration", "Logo & Branding Design", "Typography & Layout", "Print & Digital Media"],
            level: "Beginner",
            category: "Design & Mobile Development"
        },
        {
            title: "iOS & Android App Development",
            duration: "6 Months",
            features: ["React Native / Flutter", "UI/UX for Mobile Apps", "API Integration & State Management", "App Store Deployment"],
            level: "Advanced",
            category: "Design & Mobile Development"
        }
    ];

    const categories = ["Accounting & Finance", "E-Commerce Training", "IT & Software Development", "Design & Mobile Development", "Competitive Exams", "Professional Skills"];

    return (
        <>
            <PageHeader
                title="Training Courses"
                subtitle="Bridging the gap between theory and practice."
                image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            />

            <section className="py-24 bg-white">
                <div className="container-custom">
                    {categories.map((category) => (
                        <div key={category} className="mb-20 last:mb-0">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-slate-100 pb-6">
                                <h2 className="text-3xl font-bold text-slate-900 font-display">
                                    {category}
                                </h2>
                                <div className="text-slate-500 text-sm font-medium bg-slate-100 px-4 py-1.5 rounded-full">
                                    {courses.filter(c => c.category === category).length} Courses Available
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {courses
                                    .filter((course) => course.category === category)
                                    .map((course, index) => (
                                        <motion.div
                                            key={course.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg bg-slate-50 transition-all duration-300"
                                        >
                                            <div className="p-8">
                                                <div className="flex justify-between items-start mb-4">
                                                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-slate-200 text-slate-600">
                                                        {course.level}
                                                    </span>
                                                    <span className="flex items-center text-slate-500 text-sm">
                                                        <Calendar className="w-4 h-4 mr-1" /> {course.duration}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors">
                                                    {course.title}
                                                </h3>

                                                <ul className="space-y-4 mb-8">
                                                    {course.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start text-slate-600 text-sm">
                                                            <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Link href="/contact">
                                                    <Button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                                                        Enroll Now
                                                    </Button>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* E-Commerce Specific Details */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 font-display">Why Choose E-Commerce Training?</h2>
                        <p className="text-lg text-slate-600">
                            Grace Edutech is a professional E-Commerce training institute focused on providing practical knowledge and real-time marketplace experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { title: "Practical Training", desc: "Real Marketplace Experience with Live Accounts" },
                            { title: "Expert Trainers", desc: "Industry-Oriented Guidance and Support" },
                            { title: "Affordable Fees", desc: "Quality Education at Competitive Prices" },
                            { title: "Job Placement", desc: "Assistance in E-Commerce & Agency Roles" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-8 h-8 text-secondary mb-4" />
                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Career Opportunities</h3>
                                <p className="text-slate-400 mb-8 font-medium">Our students work as E-Commerce Executives, Catalog Managers, PPC Experts, and Operations Leads at top brands.</p>
                                <div className="flex flex-wrap gap-3">
                                    {["Amazon Manager", "Flipkart Specialist", "PPC Executive", "Catalog Expert"].map(tag => (
                                        <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold">Training Duration</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {["10 Days", "30 Days", "45 Days"].map(d => (
                                        <div key={d} className="bg-white/10 p-4 rounded-xl text-center border border-white/5">
                                            <Calendar className="w-6 h-6 mx-auto mb-2 opacity-50 text-secondary" />
                                            <span className="font-bold text-sm">{d}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-slate-500 text-sm pt-4 italic">Mode: Available in both Online & Offline Classes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Banner */}
            <section className="py-20 bg-slate-900 text-white border-t border-white/10">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex items-center gap-6">
                        <div className="bg-white/10 p-6 rounded-full">
                            <Award className="w-16 h-16 text-secondary" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-2 font-display">Get Certified</h2>
                            <p className="text-slate-400 max-w-lg">
                                Receive a recognized certification upon completion of your course, validating your skills to future employers.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="bg-white/10 p-6 rounded-full">
                            <BookOpen className="w-16 h-16 text-secondary" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-2 font-display">Practical Focus</h2>
                            <p className="text-slate-400 max-w-lg">
                                Our curriculum is 80% practical, ensuring you are job-ready from day one.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
