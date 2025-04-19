
import { NavBar } from "@/components/NavBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ContentList } from "@/components/ContentList";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DataProvider } from "@/contexts/DataContext";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="curate-nights-theme">
      <DataProvider>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1 container max-w-screen-xl py-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Discover The Best Nightlife
              </h1>
              <p className="text-muted-foreground">
                Find and share the most exciting venues and events for your perfect night out.
              </p>
            </div>
            <CategoryFilter />
            <ContentList />
          </main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} CurateNights. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </DataProvider>
    </ThemeProvider>
  );
};

export default Index;
