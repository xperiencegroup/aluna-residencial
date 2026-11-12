import { useEffect } from "react";

let locks = 0;
let prevHtmlOverflow = "";
let prevBodyOverflow = "";
let prevBodyPaddingRight = "";

export function useLockBodyScroll(locked = true) {
  useEffect(() => {
    if (!locked) return;

    const { body, documentElement: html } = document;

    if (locks === 0) {
      const scrollbarWidth = window.innerWidth - html.clientWidth;

      prevHtmlOverflow = html.style.overflow;
      prevBodyOverflow = body.style.overflow;
      prevBodyPaddingRight = body.style.paddingRight;

      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    }

    locks++;

    return () => {
      locks--;

      if (locks === 0) {
        html.style.overflow = prevHtmlOverflow;
        body.style.overflow = prevBodyOverflow;
        body.style.paddingRight = prevBodyPaddingRight;
      }
    };
  }, [locked]);
}
