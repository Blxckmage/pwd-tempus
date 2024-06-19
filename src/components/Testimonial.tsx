import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    position: "Fitness Enthusiast",
    image: "/placeholder-user.jpg",
    fallback: "AJ",
    quote:
      "The smartwatch has transformed my workouts. The health tracking features are incredibly accurate and keep me motivated.",
  },
  {
    name: "Michael Brown",
    position: "Software Engineer, TechCorp",
    image: "/placeholder-user.jpg",
    fallback: "MB",
    quote:
      "I love the seamless integration with my phone. Notifications, music control, and fitness tracking all in one place.",
  },
  {
    name: "Rachel Adams",
    position: "Product Manager, InnoTech",
    image: "/placeholder-user.jpg",
    fallback: "RA",
    quote:
      "This smartwatch is a game-changer. The battery life is impressive, and the sleek design makes it perfect for all occasions.",
  },
  {
    name: "David Wilson",
    position: "Entrepreneur, StartUpX",
    image: "/placeholder-user.jpg",
    fallback: "DW",
    quote:
      "I've tried several smartwatches, but this one stands out. The performance and feature set are unmatched.",
  },
  {
    name: "Emma Taylor",
    position: "Teacher",
    image: "/placeholder-user.jpg",
    fallback: "ET",
    quote:
      "It's so convenient to track my daily activities and stay connected with my students. Highly recommend it!",
  },
  {
    name: "James Lee",
    position: "Doctor",
    image: "/placeholder-user.jpg",
    fallback: "JL",
    quote:
      "The health monitoring features are very helpful in managing my day-to-day health. A must-have for health-conscious individuals.",
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:max-w-4xl lg:px-8 lg:py-16">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-black sm:mt-4">
          Hear from some of our satisfied customers about their experience with
          our smartwatch.
        </p>
      </div>
      <Carousel
        className="mt-12"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                </Avatar>
                <blockquote className="text-center">
                  <p className="text-lg font-medium text-black">
                    "{testimonial.quote}"
                  </p>
                  <cite className="mt-4 block font-medium text-black">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm">{testimonial.position}</div>
                  </cite>
                </blockquote>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonial;
