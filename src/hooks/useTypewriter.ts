"use client";

import { useEffect, useRef } from "react";

export const useTypewriter = (content: string[]) => {
  const typewriterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!typewriterRef.current) return;
    let interval = setInterval(typeText, 100);
    let textState = 0;
    let partIndex = 0;

    function typeText() {
      if (!typewriterRef.current) return;
      const text = content[textState]?.substring(0, partIndex + 1);
      typewriterRef.current.innerHTML = text ?? "";
      partIndex++;

      if (text === content[textState]) {
        clearInterval(interval);
        setTimeout(() => (interval = setInterval(deleteText, 50)), 1000);
      }
    }

    function deleteText() {
      if (!typewriterRef.current) return;
      const text = content[textState]?.substring(0, partIndex - 1);
      typewriterRef.current.innerHTML = text ?? "";
      partIndex--;

      if (text === "") {
        clearInterval(interval);
        if (textState == content.length - 1) {
          textState = 0;
        } else {
          textState++;
        }
        partIndex = 0;
        setTimeout(() => {
          interval = setInterval(typeText, 100);
        }, 200);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return typewriterRef;
};
