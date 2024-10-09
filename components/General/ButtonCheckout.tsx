'use client';

import { Button } from "@/components/ui/button";
import React from "react";

interface ButtonCheckoutProps {
  priceId: string;
}

const ButtonCheckout: React.FC<ButtonCheckoutProps> = ({ priceId }) => {
  const handleCheckout = async () => {
    // Implement your checkout logic here
    console.log(`Checkout initiated for price ID: ${priceId}`);
  };

  return (
    <Button onClick={handleCheckout} className="w-full" variant="default">
      Get Started
    </Button>
  );
};

export default ButtonCheckout;

