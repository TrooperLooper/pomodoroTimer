# Magic Timer

A smart Pomodoro-inspired productivity timer designed to **prevent burnout by tracking a complete workday**. When all progress indicators are filled, you're done—no endless hyperfocus spirals. Designed and developed by Lars Munck, © 2025.

---

## 🎯 Problem It Solves

People with ADHD and hyperfocus tendencies often work without breaks, leading to burnout and fatigue. Magic Timer solves this by:

- Creating a **structured, visible workday boundary** (~7 hours)
- Encouraging manageable worksprints and regular breaks to maintain focus and energy
- Rewards a star and long break for each ~ 2 hour set completed
- Giving clear feedback when the workday is complete
- Preventing the "just one more task" trap with a concrete endpoint

## ✨ Features

- **Circular minute countdown:** Each minute appears as a dot in a circle. Dots light up/expire as time progresses, with direction changing based on timer type.
- **Central timer button:** Large, tactile button showing remaining minutes. Click to start work/break cycles. It displays "work" as red and "break" as green.
- **Star indicators:** 4 stars at the top represent completed work/break sets. 1 star = 2 hours 15 minutes. Stars fill as you complete cycles.
- **Progress pills:** 8 visual pills represent each timer block (25/5/25/5/25/5/25/20 min). Pills fill as you complete cycles.
- \*📸 Screenshots

![Magic Timer Demo](screenshot1.png)
_Main timer interface with minute countdown dots and progress pills_

![Magic Timer Completed](screenshot2.png)
_Completed workday with all stars filled_

---

## Screenshots

![Magic Timer Screenshot](screenshot1.png)
![Magic Timer Screenshot](screenshot2.png)

---

## Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/TrooperLooper/MagicTimer.git
   cd MagicTimer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the app:**
   ```bash
   npm run dev
   ```
   (Or use `npm start` if configured.)

---

## Usage

- Click the central button to start the timer.
- The minute dots count down, as you work or take a break.
- C🛠 Tech Stack

- **React 19** (with Hooks)
- **Vite** (ultra-fast build tool)
- **JavaScript ES6+**
- **SVG graphics** (custom-designed UI elements)
- **CSS3** (responsive layout)

### Architecture

- **Modular components** – Each UI element is an independent React component
- **State management** – Centralized state in App.jsx using `useState` and `useEffect`
- **Interval-based timer** – Uses `setInterval` for precise minute tracking
- **SVG visualization** – Dynamic dots, pills, and stars updated in real-time

- **React** (Vite)
- **JavaScript (ES6+)**
- **CSS**
- **SVG graphics**

---📚 Development Notes

### Key Implementation Challenges & Solutions

| Challenge                   | Solution                                                                                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Dot direction logic**     | Different timer types (25/5/20 min) required reverse countdown. Implemented `getLogicalIndex()` function to map visual positions to logical countdown. |
| **SVG rendering & z-index** | Absolute positioning with proper z-index layers ensures current dot stays visible and centered button doesn't overlap.                                 |
| **State synchronization**   | Careful management of `step`, `timeLeft`, `completedSteps`, and `completedSets` prevents state drift when timers transition.                           |
| **Responsive positioning**  | 400×400px container with relative/absolute positioning scales gracefully on mobile.                                                                    |
| **Sound playback**          | Audio files load from `/public/` with fallback handling for browser autoplay restrictions.                                                             |

---

### Learning Outcomes

Building Magic Timer taught me:

- Advanced React state management with Hooks (`useState`, `useEffect`, `useRef`)
- SVG manipulation and dynamic rendering
- Interval-based timing and cleanup patterns
- Component composition and prop drilling
- Responsive design without frameworks
- Practice UX design for ADHD-friendly interfaces

---

## License

All rights reserved © 2025 Lars Munck

---

## Credits

- **Design & Development:** Lars Munck
- **SVG & Custom Assets:** Created by Lars Munck
- **Audio:** Chime sound from Universfield @ [Pixabay](https://pixabay.com)
- **Built with:** React, Vite, and JavaScript

---

## Ideas for Further Improvement

- Add unit tests (Jest/React Testing Library)
- Add settings for custom timer lengths
- Create this as a mobile-app in React Native

---

## Credits

- **Design & Development:** Lars Munck
- **SVG & UI assets:** Custom
- **Soundclip: Universfield @ pixabay**

---

## License

All rights reserved © 2025 Lars Munck

---
