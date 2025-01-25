"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const paths = [
  { name: 'low', label: 'C and Rust' },
  { name: 'devops', label: 'DevOps' },
  { name: 'web', label: 'Full Stack Javascript' },
  {name: "beyond", label: "Beyond One Semester"}
];

const PathSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  const filteredPaths = paths.filter((path) =>
    path.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
    if (e.key === ' ' && e.target === document.body) {
      lastSpacePressTime.current = Date.now();
    } else if (e.key === 'r') {
      const currentTime = Date.now();
      if (currentTime - lastSpacePressTime.current < 300) {
        e.preventDefault();
        setIsOpen(true);
      }
    }
  };

  const lastSpacePressTime = useRef<number>(0);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredPaths.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredPaths.length) % filteredPaths.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          linkRef.current?.click();
          setIsOpen(false);
          setQuery('');
        }
      }
    };

    document.addEventListener('keydown', handleArrowKeys);
    return () => document.removeEventListener('keydown', handleArrowKeys);
  }, [isOpen, filteredPaths, selectedIndex]);

  return (
    <>
      {isOpen && (
        <div className="fixed w-screen inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => {
              setIsOpen(false);
              setQuery('');
            }}
          />
          <div className="relative w-5/6 sm:mx-4 mx-auto sm:mx-auto sm:max-w-2xl mt-20">
            <div className="bg-neutral-900 shadow-xl overflow-hidden">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  placeholder="Search content..."
                  className="w-full px-4 py-4 border-b border-neutral-700 text-emerald-300 text-xl bg-neutral-900 placeholder:text-neutral-500 focus:outline-none"
                />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z" fill="currentColor" />
                  </svg>
                </button>
              </div>

              {filteredPaths.length > 0 && (
                <div ref={resultsContainerRef} className="max-h-96 custom-scroll overflow-y-auto p-4">
                  {filteredPaths.map((path, index) => (
                    <Link
                      key={path.name}
                      href={`/${path.name}`}
                      ref={index === selectedIndex ? linkRef : null}
                      className={`block w-full text-xl p-4 text-left hover:bg-neutral-800 ${
                        index === selectedIndex ? 'bg-neutral-800 text-emerald-500' : 'text-white'
                      } group`}
                      onClick={() => {
                        setIsOpen(false);
                        setQuery('');
                      }}
                    >
                      <div className="font-medium">{path.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PathSelector;