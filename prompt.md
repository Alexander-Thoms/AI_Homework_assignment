# Project Prompt — Store List (AI Homework Assignment)

This file records the brief / requirements used to build this website.

## Original homework instruction
Create **only one page** that lets a user **add and remove store items from a list**.

## Tech constraints
- Framework: **Next.js** (Pages Router)
- Styling: **Pico CSS**

## Build requirements applied during development
1. Load **Pico CSS via CDN**
   (`https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css`).
2. Keep it a **single page** — no extra routes (no About / Contact).
3. **Persist** the item list across page refreshes using `localStorage`.
4. Limit each item name to **30 characters**; refuse to add longer items and
   show feedback instead.
5. Use `public/background.jpg` as a full-screen, pixel-perfect cover background.
6. Add a website **icon** (`public/icon.png`) and set the page **title** to
   `Store List`.
7. Keep text readable over the (dark) background: white text outside cards,
   dark text inside cards.

## Result
A Next.js single-page app where you can add and remove store items. The list is
saved in `localStorage`, styled with Pico CSS, and presented over a cover
background image with a favicon and the title "Store List".
