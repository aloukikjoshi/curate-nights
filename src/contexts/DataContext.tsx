
import { createContext, useContext, useEffect, useState } from "react";

// Define our content types
export type ContentItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  votes: number;
  submitted: string;
  submittedBy: string;
  hasVoted: 'up' | 'down' | null;
};

type DataContextType = {
  content: ContentItem[];
  filteredContent: ContentItem[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  addContent: (item: Omit<ContentItem, "id" | "votes" | "submitted" | "hasVoted">) => void;
  upvoteContent: (id: string) => void;
  downvoteContent: (id: string) => void;
};

// Mock data
const mockData: ContentItem[] = [
  {
    id: "1",
    title: "Neon Nightclub",
    description: "Experience the ultimate nightlife with vibrant neon lights and top DJs spinning the latest tracks all night long.",
    imageUrl: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Nightclubs",
    votes: 125,
    submitted: "2023-06-15",
    submittedBy: "alex_party",
    hasVoted: null,
  },
  {
    id: "2",
    title: "Jazz Lounge",
    description: "Relax with soulful jazz in an intimate setting with craft cocktails and a sophisticated atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Lounges",
    votes: 87,
    submitted: "2023-06-22",
    submittedBy: "jazz_lover",
    hasVoted: null,
  },
  {
    id: "3",
    title: "Rooftop Bar",
    description: "Stunning city views, refreshing drinks, and a lively atmosphere under the stars.",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Bars",
    votes: 210,
    submitted: "2023-06-10",
    submittedBy: "cityviewer",
    hasVoted: null,
  },
  {
    id: "4",
    title: "Cabaret Show",
    description: "Spectacular performances featuring dance, music, and comedy in a vintage theatre setting.",
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Shows",
    votes: 156,
    submitted: "2023-06-18",
    submittedBy: "showtime",
    hasVoted: null,
  },
  {
    id: "5",
    title: "Speakeasy Cocktail Bar",
    description: "Hidden entrance, prohibition-era decor, and masterfully crafted cocktails for a unique experience.",
    imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    category: "Bars",
    votes: 98,
    submitted: "2023-06-20",
    submittedBy: "mixology_fan",
    hasVoted: null,
  },
  {
    id: "6",
    title: "Beach Party",
    description: "Dance on the sand with ocean breezes, fire dancers, and international DJs until sunrise.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Events",
    votes: 178,
    submitted: "2023-06-12",
    submittedBy: "beach_lover",
    hasVoted: null,
  }
];

// Create context with default values
const DataContext = createContext<DataContextType>({
  content: [],
  filteredContent: [],
  categories: [],
  selectedCategory: "All",
  setSelectedCategory: () => {},
  addContent: () => {},
  upvoteContent: () => {},
  downvoteContent: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<ContentItem[]>(mockData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Extract unique categories from content
  const categories = ["All", ...Array.from(new Set(content.map(item => item.category)))];
  
  // Filter content based on selected category
  const filteredContent = selectedCategory === "All"
    ? content
    : content.filter(item => item.category === selectedCategory);

  // Add new content item
  const addContent = (item: Omit<ContentItem, "id" | "votes" | "submitted" | "hasVoted">) => {
    const newItem: ContentItem = {
      ...item,
      id: Date.now().toString(),
      votes: 0,
      submitted: new Date().toISOString().split("T")[0],
      hasVoted: null,
    };
    setContent(prev => [newItem, ...prev]);
  };

  // Handle upvoting
  const upvoteContent = (id: string) => {
    setContent(prev => prev.map(item => {
      if (item.id === id) {
        // If already upvoted, remove vote
        if (item.hasVoted === 'up') {
          return { ...item, votes: item.votes - 1, hasVoted: null };
        }
        // If downvoted, change to upvote (adding 2 votes)
        else if (item.hasVoted === 'down') {
          return { ...item, votes: item.votes + 2, hasVoted: 'up' };
        }
        // Otherwise, add upvote
        return { ...item, votes: item.votes + 1, hasVoted: 'up' };
      }
      return item;
    }));
  };

  // Handle downvoting
  const downvoteContent = (id: string) => {
    setContent(prev => prev.map(item => {
      if (item.id === id) {
        // If already downvoted, remove vote
        if (item.hasVoted === 'down') {
          return { ...item, votes: item.votes + 1, hasVoted: null };
        }
        // If upvoted, change to downvote (subtracting 2 votes)
        else if (item.hasVoted === 'up') {
          return { ...item, votes: item.votes - 2, hasVoted: 'down' };
        }
        // Otherwise, add downvote
        return { ...item, votes: item.votes - 1, hasVoted: 'down' };
      }
      return item;
    }));
  };

  return (
    <DataContext.Provider
      value={{
        content,
        filteredContent,
        categories,
        selectedCategory,
        setSelectedCategory,
        addContent,
        upvoteContent,
        downvoteContent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
