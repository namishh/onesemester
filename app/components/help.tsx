"use client";
import { useEffect, useRef, useState } from 'react';

const HelpWindow = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lastSpacePressTime = useRef<number>(0);

  const isInputFocused = (): boolean => {
    const activeElement = document.activeElement as HTMLElement;
    return (
      activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.tagName === 'SELECT' ||
      activeElement.isContentEditable ||
      activeElement.tagName === 'BUTTON' ||
      !!activeElement.closest('input, textarea, select, [contenteditable="true"]')
    );
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (isInputFocused()) {
      return;
    }

    if (e.key === ' ' && e.target === document.body) {
      e.preventDefault(); // Prevent page scroll
      lastSpacePressTime.current = Date.now();
    } else if (e.key === 'h') {
      const currentTime = Date.now();
      if (currentTime - lastSpacePressTime.current < 300) {
        e.preventDefault();
        setIsOpen(true);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed w-screen inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-5/6 sm:mx-4 mx-auto sm:mx-auto sm:max-w-2xl mt-20">
            <div className="bg-neutral-900 shadow-xl overflow-hidden p-8">
              <div className="text-emerald-300 text-2xl">
                Page Navigation
              </div>

              <ul className='list-disc pl-4 text-white text-xl'>
              <li>J/K - Scroll up and down</li>
              <li>H/L - Switch to previous/next month</li>
              <li>{"{"} / {"}"} - Switch to previous/next week</li>
              <li>bd - Go to home page</li>
              </ul>
              <div className="text-emerald-300 mt-6 text-2xl">
                Menus
              </div>
              <ul className='list-disc pl-4 text-white text-xl'>
              <li>Space + F - Open search menu</li>
              <li>Space + R - Open navigation menu</li>
              <li>Space + H - Open help menu</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpWindow;