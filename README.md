swipe-navigator
===============

A component to manage horizontal navigation in a mobile website or hybrid application.

---

## The idea

I want to try and utilise the native scrolling action in the browsers to give
a high performance feel to the animation, and to utilise the already optimised
dragging and throwing.

There is no need for CSS3 with the proposed technique, nor GPU acceleration
handled by passing 'layers' to the GPU with the z axis hack. It should also
perform far better on older phones.

---

## How to achieve this?

I'll need to find or write a library which will

- Understand which pane to scroll to once the user lets go of the pane they are
sliding.
-

---

## Problems anticipated

Focus management will be a bitch. Simply by tabbing on a keyboard etc you can
achieve focus in a pane which is not visible. This means I may need to store the
tabindex of the page elements when leaving the page, taking them out of the
picture. I may even need to take a snapshot of all enabled inputs and disable
them to enforce tab trapping.

Accessibility is high on the list of priorities also.

---

## Reading material
- [Pocket world cup scheduler](http://pocketworldcupschedule.info/)
- [jQuery waypoints](http://imakewebthings.com/jquery-waypoints/)
- [Greensock throwprops](http://greensock.com/ThrowPropsPlugin-JS)
