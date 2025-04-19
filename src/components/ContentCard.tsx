
import { ContentItem, useData } from "@/contexts/DataContext";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  item: ContentItem;
}

export function ContentCard({ item }: ContentCardProps) {
  const { upvoteContent, downvoteContent } = useData();

  return (
    <div className="content-card overflow-hidden flex flex-col md:flex-row animate-fade-in">
      <div className="md:w-1/3 h-48 md:h-auto relative">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs rounded-full px-2 py-1">
          {item.category}
        </div>
      </div>
      
      <div className="flex flex-grow p-4 md:p-6">
        <div className="flex flex-col mr-4 items-center">
          <button 
            onClick={() => upvoteContent(item.id)}
            className={cn(
              "p-1 rounded hover:bg-muted/80 transition-colors",
              item.hasVoted === 'up' && "text-curate-orange"
            )}
            aria-label="Upvote"
          >
            <ArrowUp size={20} />
          </button>
          <span className="my-1 font-medium">{item.votes}</span>
          <button 
            onClick={() => downvoteContent(item.id)}
            className={cn(
              "p-1 rounded hover:bg-muted/80 transition-colors",
              item.hasVoted === 'down' && "text-destructive"
            )}
            aria-label="Downvote"
          >
            <ArrowDown size={20} />
          </button>
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground mb-4">{item.description}</p>
          <div className="text-xs text-muted-foreground mt-auto">
            Submitted by {item.submittedBy} on {item.submitted}
          </div>
        </div>
      </div>
    </div>
  );
}
