"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContactStore } from "@/store/contact";

const ContactUs: React.FC = () => {
  const { name, email, text, setName, setEmail, setText } = useContactStore();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="mx-auto max-w-md space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-white">
              Get in touch with our team for any inquiries or feedback.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="text-black"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter your message"
                className="min-h-[120px] text-black"
              />
            </div>
            <Button type="submit" variant="secondary" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
