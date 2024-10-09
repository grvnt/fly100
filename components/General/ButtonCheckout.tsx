'use client';

import { Button } from "@/components/ui/button";

const ButtonCheckout = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.convertkit && typeof window.convertkit.openModal === 'function') {
      window.convertkit.openModal('28797b89a2');
    } else {
      console.error('ConvertKit modal function not available');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="w-full"
    >
      Join Waitlist
    </Button>
  );
};

export default ButtonCheckout;

