import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { FloatButtons } from "@/components/FloatButtons";
import NotFound from "@/pages/not-found";


// Import Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Courses from "@/pages/Courses";
import PracticalServices from "@/pages/PracticalServices";
import WhyUs from "@/pages/WhyUs";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import { useEffect } from "react";
import { useLocation } from "wouter";

// Helper to scroll top on route change
function ScrollToTopWrapper() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTopWrapper />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/courses" component={Courses} />
        <Route path="/practical-services" component={PracticalServices} />
        <Route path="/why-us" component={WhyUs} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
        <FloatButtons />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
