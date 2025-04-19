
import { useData } from "@/contexts/DataContext";
import { ContentCard } from "./ContentCard";

export function ContentList() {
  const { filteredContent } = useData();

  return (
    <div className="space-y-6">
      {filteredContent.length > 0 ? (
        filteredContent.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No venues found</h3>
          <p className="text-muted-foreground mt-2">
            Try selecting a different category or submit a new venue
          </p>
        </div>
      )}
    </div>
  );
}
