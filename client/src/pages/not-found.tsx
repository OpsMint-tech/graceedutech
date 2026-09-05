import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-slate-50 py-16">
      <Card className="w-full max-w-md mx-4 shadow-lg border-slate-200">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            The page you are looking for might have been moved, deleted, or does not exist.
          </p>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl shadow-md px-6 py-5 cursor-pointer">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

