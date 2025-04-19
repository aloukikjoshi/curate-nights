
import { useState } from "react";
import { useData } from "@/contexts/DataContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export function SubmissionForm() {
  const { categories, addContent } = useData();
  const filteredCategories = categories.filter(cat => cat !== "All");
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "",
    submittedBy: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
    if (errors.category) {
      setErrors(prev => ({ ...prev, category: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.imageUrl.trim()) newErrors.imageUrl = "Image URL is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.submittedBy.trim()) newErrors.submittedBy = "Username is required";
    
    // Basic URL validation
    if (formData.imageUrl && !formData.imageUrl.match(/^https?:\/\/.+\..+/)) {
      newErrors.imageUrl = "Please enter a valid URL";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      addContent(formData);
      toast({
        title: "Venue submitted!",
        description: "Your venue has been added successfully.",
      });
      
      // Reset form and close dialog
      setFormData({
        title: "",
        description: "",
        imageUrl: "",
        category: "",
        submittedBy: "",
      });
      
      // Close dialog (handled by Radix UI's Dialog component)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter venue name"
        />
        {errors.title && <p className="text-destructive text-sm">{errors.title}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe this venue"
          rows={3}
        />
        {errors.description && <p className="text-destructive text-sm">{errors.description}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
        />
        {errors.imageUrl && <p className="text-destructive text-sm">{errors.imageUrl}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={handleCategoryChange} value={formData.category}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {filteredCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && <p className="text-destructive text-sm">{errors.category}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="submittedBy">Your Username</Label>
        <Input
          id="submittedBy"
          name="submittedBy"
          value={formData.submittedBy}
          onChange={handleChange}
          placeholder="Enter your username"
        />
        {errors.submittedBy && <p className="text-destructive text-sm">{errors.submittedBy}</p>}
      </div>
      
      <Button type="submit" className="w-full">Submit Venue</Button>
    </form>
  );
}
