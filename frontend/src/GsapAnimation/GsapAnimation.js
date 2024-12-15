import gsap from 'gsap';

export const headingAnimation = (headingRef) => {
  const heading = headingRef.current;

  if (!heading) return;

  const chars = heading.textContent.split('');

  heading.innerHTML = chars
    .map((char) =>
      char === ' ' ? `<span class='inline-block'>&nbsp;</span>` : `<span class='inline-block'>${char}</span>`
    )
    .join('');

  const timeline = gsap.timeline();
  timeline.from(heading.querySelectorAll('span'), {
    opacity: 0, 
    duration: 0.05, 
    ease: 'power3.out', 
    stagger: 0.1, 
  });
};
