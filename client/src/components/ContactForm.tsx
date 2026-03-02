import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send, GraduationCap } from "lucide-react";

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
    label: "Competitive Exams",
    courses: ["NET / SET Coaching", "GATE Coaching"],
  },
  {
    label: "Professional Skills",
    courses: ["Master Diploma in Accounting", "Spoken English"],
  },
];

export function ContactForm() {
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-slate-800">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    className="bg-slate-50/80 border-slate-200 h-12 rounded-xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-slate-800">Phone Number/WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+91 98XXX XXXXX"
                    className="bg-slate-50/80 border-slate-200 h-12 rounded-xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Course Selection Dropdown */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-slate-800">Select Interested Course</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-slate-50/80 border-slate-200 h-12 rounded-xl text-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                      <SelectValue placeholder="Click to choose a course" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[200] rounded-xl border border-slate-200 bg-white shadow-2xl max-h-[320px] overflow-y-auto">
                    {courseGroups.map((group) => (
                      <div key={group.label}>
                        <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary bg-slate-50 sticky top-0">
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
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Additional Questions */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-slate-800">Additional Questions <span className="font-normal text-slate-400">(Optional)</span></FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your background or requirements..."
                    className="min-h-[120px] bg-slate-50/80 border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
            ) : (
              <><Send className="mr-2 h-5 w-5" /> Get Free Consultation</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
