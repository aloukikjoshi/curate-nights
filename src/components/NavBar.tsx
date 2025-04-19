
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SubmissionForm } from "./SubmissionForm";

export function NavBar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2">
            <div className="hidden font-bold sm:inline-block">
              <span className="text-primary mr-1">Curate</span>
              <span>Nights</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">Add New</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Submit New Venue</DialogTitle>
              </DialogHeader>
              <SubmissionForm />
            </DialogContent>
          </Dialog>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
