
import { useData } from "@/contexts/DataContext";
import { cn } from "@/lib/utils";

export function CategoryFilter() {
  const { categories, selectedCategory, setSelectedCategory } = useData();

  return (
    <div className="flex flex-wrap gap-2 my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
