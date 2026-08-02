# ⏰ Clock it — Attendance & Task Tracker PWA

**Clock it** is a mobile-first Progressive Web App (PWA) designed for engineering students to track class attendance, calculate target/safe bunks, manage batch-filtered timetables, and stay on top of assignment deadlines.

🚀 **Live Application:** [https://clock-it-flame.vercel.app](https://clock-it-flame.vercel.app)  

---

## ✨ Features

- **📊 Attendance & Bunk Target Calculators:** 
  - Real-time calculation of safe bunks or required classes needed to maintain 75% or 50% attendance thresholds.
  - Quick single-tap attendance logging with instant undo functionality.
  - Proxy and extra class logging support.
- **📅 Batch-Filtered Timetables:** 
  - Dynamic daily schedules that filter out irrelevant lectures and practicals based on selected division and lab batch (A, B, or C).
- **📝 Assignment Tracker:** 
  - Task manager with deadline alerts, push notification integration, and one-click Google Calendar event creation.
- **📱 Offline-First PWA:** 
  - Installable natively on iOS and Android devices directly from the browser.
  - Full offline capability using LocalStorage and custom caching strategies.
- **📈 Privacy-First Analytics:** 
  - Client-side data storage ensuring zero user tracking or data collection.
  - Vercel Web Analytics integration for privacy-focused usage performance monitoring.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Modern JavaScript (ES6+), Tailwind CSS
- **PWA Capabilities:** Web App Manifest, Service Worker API, Push Notifications API
- **Deployment & Hosting:** Vercel (CI/CD via GitHub integration)
- **Analytics:** Vercel Web Analytics

---

## 🏗️ PWA & Cache Architecture

To ensure instant code updates across all installed devices without old code staying stuck in cache, **Clock it** implements a **Network-First Service Worker Strategy**:

1. **Network-First Fetching (`sw.js`):** The Service Worker prioritizes live network requests for fresh content and falls back to local cache only when the device is offline.
2. **No-Cache HTTP Headers (`vercel.json`):** Ensures `sw.js` is never cached by browsers or edge networks, guaranteeing instant updates upon new commits.
```json
{
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache, no-store, must-revalidate"
        }
      ]
    }
  ]
}
Auto-Reload Pipeline: When a new sw.js version is detected, the app automatically purges old cache instances and reloads the interface seamlessly.

🚀 Local Setup & Development
Clone the repository:

Bash
git clone [https://github.com/snehanshuuu/attendance_tracker.git](https://github.com/snehanshuuu/attendance_tracker.git)
cd attendance_tracker
Run locally:

Simply open index.html in any browser, or use a local development server like Live Server in VS Code.

Deploy to Vercel:

Push code changes to the main branch to trigger auto-deployments on Vercel.

📄 License
This project is open source and available under the MIT License.
