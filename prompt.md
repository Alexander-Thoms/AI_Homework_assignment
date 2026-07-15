# Project — Store List (AI Homework Assignment)

A Next.js single-page app where you can add and remove store items. The list is
saved in `localStorage`, styled with Pico CSS, and presented over a cover
background image with a favicon and the title "Store List".

## Original homework instruction
Create **only one page** that lets a user **add and remove store items from a list**.

## Tech constraints
- Framework: **Next.js** (Pages Router)
- Styling: **Pico CSS** (via CDN)

---

## 1. Prompts Used
These are the prompts I gave the AI assistant while building the app:

1. "Create a Next.js (Pages Router) single-page app that lets a user add and
   remove store items from a list. Style it with Pico CSS loaded via CDN
   (`https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css`)."
2. "Keep it a single page — no extra routes like About or Contact."
3. "Persist the item list across page refreshes using `localStorage`."
4. "Limit each item name to 30 characters. Refuse to add longer items and show
   feedback to the user instead."
5. "Use `public/background.jpg` as a full-screen, pixel-perfect cover
   background."
6. "Add a website icon (`public/icon.png`) and set the page title to
   `Store List`."
7. "Keep text readable over the dark background: white text outside cards, dark
   text inside cards."

## 2. How AI Helped
- Scaffolded the React component structure using `useState` for the item list,
  the input value, and the error message.
- Generated the `localStorage` load-on-mount and save-on-change pattern with two
  `useEffect` hooks.
- Produced the Pico CSS layout: the semantic `container`/`article`/`hgroup`
  markup, the add-item form, and the item list with Remove buttons.
- Set up the CDN stylesheet link, favicon, page title, and the cover background
  image, plus the contrast styling in `_document.js`.

## 3. Manual Improvements / Corrections


## Result
A Next.js single-page app where you can add and remove store items. The list is
saved in `localStorage`, styled with Pico CSS, and presented over a cover
background image with a favicon and the title "Store List".
