import { Star } from "lucide-react";

interface StarsProps {
  rating: number;
}
export default function Stars({ rating }: StarsProps) {
  const stars = Array(rating).fill(null);
  return (
    <div className="flex items-center gap-x-1">
      {stars.map((_, index) => (
        <Star key={index} className="text-yellow-500" />
      ))}
    </div>
  );
}
