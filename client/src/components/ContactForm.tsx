import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Get your free key from https://web3forms.com (linked to your email)
const WEB3FORMS_KEY = "82bde1f2-6a3e-431c-89db-0a0f02727e8d";

const courseGroups = [
  {
    label: "Accounting & Finance",
    courses: [
      "Tally Prime (Advanced)",
      "GST with Practical Filing",
      "Income Tax Return (ITR)",
      "TDS / ESI / EPF",
      "Form 15G & 15H Filing",
    ],
  },
  {
    label: "E-Commerce Training",
    courses: [
      "Basic E-Commerce Training",
      "Advanced Marketplace Management",
      "Amazon Seller Central Training",
      "Flipkart Seller Hub Training",
      "Listing & Catalogue Management",
      "Amazon PPC & Advertising",
      "Account Health & Reinstatement",
      "E-Commerce Placement Training",
    ],
  },
  {
    label: "IT & Software Development",
    courses: [
      "DevOps",
      "Python & SQL",
      "Full Stack Development",
      "Java",
      "Medical Coding",
      "Power BI",
      "AI & Machine Learning",
    ],
  },
  {
    label: "Design & Mobile Development",
    courses: [
      "Adobe XD",
      "Adobe Illustrator",
      "iOS & Android App Development",
    ],
  },
  {
    label: "Competitive Exams",
    courses: ["NET / SET Coaching", "GATE Coaching"],
  },
  {
    label: "Professional Skills",
    courses: ["Master Diploma in Accounting", "Spoken English"],
  },
];

interface FormData {
  name: string;
  phone: string;
  course: string;
  message: string;
}

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, setValue, watch, setError, clearErrors, formState: { errors } } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  const selectedCourse = watch("course");

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Course Inquiry: ${data.course}`,
          from_name: data.name,
          name: data.name,
          phone: data.phone,
          course: data.course,
          message: data.message || "No additional questions",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully ✅",
          description: "Thank you for contacting Grace Edutech. We will get back to you shortly.",
          variant: "default",
        });
        reset();
      } else {
        throw new Error(result.message || "Failed to submit inquiry");
      }
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Course Inquiry</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800">Full Name</label>
          <Input
            placeholder="Your Name"
            className="bg-slate-50/80 border-slate-200 h-12 rounded-xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            {...register("name", { 
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name should only contain alphabets"
              }
            })}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              const originalValue = target.value;
              const cleanedValue = originalValue.replace(/[^A-Za-z\s]/g, '');
              
              if (originalValue !== cleanedValue) {
                setError("name", { 
                  type: "manual", 
                  message: "Numbers and special characters are not allowed" 
                });
              } else if (cleanedValue.length > 0) {
                clearErrors("name");
              }
              target.value = cleanedValue;
            }}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800">Phone Number/WhatsApp</label>
          <Input
            type="tel"
            maxLength={10}
            placeholder="10-digit mobile number"
            className="bg-slate-50/80 border-slate-200 h-12 rounded-xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            {...register("phone", { 
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Please enter a valid 10-digit mobile number"
              }
            })}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              const originalValue = target.value;
              const cleanedValue = originalValue.replace(/\D/g, '').slice(0, 10);
              
              if (originalValue !== cleanedValue) {
                setError("phone", { 
                  type: "manual", 
                  message: "Only numbers are allowed" 
                });
              } else if (cleanedValue.length === 10) {
                clearErrors("phone");
              } else if (cleanedValue.length > 0) {
                setError("phone", { 
                  type: "manual", 
                  message: "Please enter a valid 10-digit mobile number" 
                });
              }
              target.value = cleanedValue;
            }}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Course Selection Dropdown */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800">Select Interested Course</label>
          <Select
            value={selectedCourse}
            onValueChange={(value) => setValue("course", value, { shouldValidate: true })}
          >
            <SelectTrigger className="bg-slate-50/80 border-slate-200 h-12 rounded-xl text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
              <SelectValue placeholder="Click to choose a course" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              sideOffset={4}
              className="z-[200] rounded-xl border border-slate-200 bg-white shadow-2xl w-[var(--radix-select-trigger-width)]"
            >
              {courseGroups.map((group) => (
                <div key={group.label}>
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary bg-slate-50">
                    {group.label}
                  </div>
                  {group.courses.map((course) => (
                    <SelectItem
                      key={course}
                      value={course}
                      className="cursor-pointer py-3 px-4 text-sm text-slate-700 focus:bg-primary/10 focus:text-primary rounded-none border-b border-slate-50 last:border-0"
                    >
                      {course}
                    </SelectItem>
                  ))}
                </div>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" {...register("course", { required: "Please select a course" })} />
          {errors.course && <p className="text-sm text-red-500">{errors.course.message}</p>}
        </div>

        {/* Additional Questions */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800">
            Additional Questions <span className="font-normal text-slate-400">(Optional)</span>
          </label>
          <Textarea
            placeholder="Tell us about your background or requirements..."
            className="min-h-[120px] bg-slate-50/80 border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y"
            {...register("message")}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
          ) : (
            <><Send className="mr-2 h-5 w-5" /> Get Free Consultation</>
          )}
        </Button>
      </form>
    </div>
  );
}
