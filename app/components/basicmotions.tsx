"use client";
import { useEffect, useRef } from 'react';

const VimMotions = () => {
  const lastGPressTime = useRef<number>(0);
  const DOUBLE_PRESS_DELAY = 300; // milliseconds

  const isInputElement = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    
    const tagName = element.tagName.toLowerCase();
    return (
      tagName === 'input' ||
      tagName === 'textarea' ||
      tagName === 'select' ||
      element.isContentEditable
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (isInputElement(target)) {
        return;
      }

      if (['j', 'k', 'g', 'f', ' '].includes(event.key)) {
        event.preventDefault();
      }

      if (event.key === 'j') {
        window.scrollBy(0, 50);
      }

      if (event.key === 'k') {
        window.scrollBy(0, -50);
      }

      if (event.shiftKey && event.key === 'G') {
        window.scrollTo(0, document.body.scrollHeight);
      }

      // Handle double 'g' press
      if (event.key === 'g' && !event.shiftKey) {
        const currentTime = Date.now();
        const timeSinceLastPress = currentTime - lastGPressTime.current;
        
        if (timeSinceLastPress < DOUBLE_PRESS_DELAY) {
          // Double press detected - scroll to top
          window.scrollTo(0, 0);
        }
        
        lastGPressTime.current = currentTime;
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default VimMotions;