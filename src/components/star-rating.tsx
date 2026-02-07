import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  maxRating?: number;
  className?: string;
};

export function StarRating({ rating, maxRating = 5, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-5 w-5",
            index < rating ? "text-primary fill-primary" : "text-muted-foreground/50"
          )}
        />
      ))}
    </div>
  );
}
