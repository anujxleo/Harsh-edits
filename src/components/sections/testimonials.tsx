import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { StarRating } from "../star-rating";
import { FadeIn } from "../fade-in";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    review: "Harsh's editing transformed my project. The cinematic quality and attention to detail were beyond my expectations. Highly recommended!",
    rating: 5,
    imageId: "testimonial-client-1",
  },
  {
    id: 2,
    name: "Samantha Lee",
    review: "The Instagram Reels Harsh created for my brand went viral! His understanding of trends and creative transitions are top-notch.",
    rating: 5,
    imageId: "testimonial-client-2",
  },
  {
    id: 3,
    name: "Michael Chen",
    review: "An absolute professional. The color grading on our short film was breathtaking. Will definitely work with Harsh again.",
    rating: 5,
    imageId: "testimonial-client-3",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="section-title">Client Feedback</h2>
        </FadeIn>
        
        <FadeIn>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="glass-card h-full">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                          {image && (
                            <div className="mb-4 golden-frame rounded-full">
                                <Image
                                    src={image.imageUrl}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                    data-ai-hint={image.imageHint}
                                />
                            </div>
                          )}
                          <p className="text-lg font-semibold">{testimonial.name}</p>
                          <StarRating rating={testimonial.rating} className="my-2" />
                          <p className="text-sm text-muted-foreground italic">
                            "{testimonial.review}"
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
