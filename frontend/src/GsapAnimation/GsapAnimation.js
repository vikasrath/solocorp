import gsap from 'gsap';

export const headingAnimation = (headingRef, newHeading) => {
  const heading = headingRef.current;

  if (!heading) return;

  // Split the new heading into characters
  const chars = newHeading.split('');
  heading.innerHTML = chars
    .map((char) =>
      char === ' ' ? `<span class='inline-block'>&nbsp;</span>` : `<span class='inline-block'>${char}</span>`
    )
    .join('');

  const timeline = gsap.timeline();

  // Typing effect: Animate characters in
  timeline.from(heading.querySelectorAll('span'), {
    opacity: 0,
    duration: 0.05,
    ease: 'power3.out',
    stagger: 0.1,
  });

  // Delay and then erasing effect: Animate characters out in reverse
  timeline.to(
    heading.querySelectorAll('span'),
    {
      opacity: 0,
      duration: 0.05,
      ease: 'power3.in',
      stagger: { each: 0.1, from: 'end' }, // Reverse order
    },
    '+=1' // Start after a 1-second delay
  );
};
