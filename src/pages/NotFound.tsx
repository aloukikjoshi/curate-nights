
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/contexts/ThemeContext";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="curate-nights-theme">
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary">404</h1>
            <p className="text-xl text-foreground">Oops! This page doesn't exist</p>
            <p className="text-muted-foreground">
              The page you're looking for might have been moved or doesn't exist.
            </p>
          </div>
          <Button asChild size="lg">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
