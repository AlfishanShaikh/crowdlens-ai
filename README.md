# CrowdLens AI – Snap. Detect. Report. (Prototype)

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://crowdlens-ai.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/AlfishanShaikh/crowdlens-ai)

---

## 🚀 Introduction

**CrowdLens AI** is a **prototype** real-time, AI-powered civic issue reporting assistant.  
It demonstrates how citizens can report problems in their surroundings with just a **single photo**, turning civic engagement into a seamless experience.  

From potholes and broken streetlights to garbage overflow and water leaks, CrowdLens AI automates the **entire process of reporting civic issues** — making cities smarter, safer, and cleaner.

---

## 🏙 Problem Statement

Urban residents often face challenges like:

- Potholes on roads  
- Broken streetlights  
- Water leakages  
- Overflowing garbage  

Currently, reporting these issues to municipal bodies is **manual and time-consuming**:
- Finding the right authority’s contact.  
- Filling out long complaint forms.  
- Waiting without status updates.  

👉 As a result, **most problems remain unreported**, leading to unsafe, unhygienic, and unpleasant public spaces.

---

## 💡 Solution Overview

CrowdLens AI (Prototype) shows how a **photo** can be transformed into a structured complaint:

1. **Detects the issue type** (trash, pothole, broken light, etc.) using AI vision models.  
2. **Captures GPS location automatically** — no typing required.  
3. **Generates an official complaint** with all necessary details.  
4. **Sends it to the correct municipal department** via pre-integrated channels.  
5. **Tracks complaint status** and notifies the user in real-time.  

---

## 🤖 Role of Agentic AI (via qRaptor)

The backbone of CrowdLens AI is powered by **qRaptor’s Agentic AI framework**, which coordinates multiple AI agents:

- **Image Analysis Agent** → Detects issue category & severity.  
- **Geo-Context Agent** → Maps GPS to administrative zones.  
- **Complaint Drafting Agent** → Auto-formats reports for local authorities.  
- **Notification Agent** → Sends updates & confirmations.  
- **Orchestration Layer** → Links image → location → report → submission → notification without manual effort.  

✅ Thanks to **qRaptor AI**, even as a prototype, CrowdLens demonstrates the power of multi-agent systems for civic reporting.

---

## 🔑 Key Features

- 📸 **One-Tap Civic Reporting** → Just take a photo, everything else is automated.  
- 🧠 **AI Issue Detection** → Identifies type & urgency of civic problems.  
- 📍 **Auto Location Mapping** → Detects GPS and maps address automatically.  
- 📤 **Instant Official Submission** → Sends directly to the right department.  
- 📊 **Status Tracking Dashboard** → Citizens can track complaint progress.  
- 🌍 **Community Impact View (Optional)** → Shows issues on a map to encourage collective action.  

---

## 🎯 Expected Impact

**For Citizens** → Easy, transparent, and quick civic reporting.  
**For Municipal Bodies** → Structured, geotagged reports that save time and speed up resolutions.  
**For Communities** → Better living conditions, collective responsibility, and cleaner neighborhoods.  

🔮 **Scalability** → Can expand into rural areas, disaster management, and environmental hazard reporting.  

⚡ Note: This is currently a **prototype** showcasing the concept. A full production system would include government integrations, advanced AI training, and stronger security.

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js / Express  
- **AI Models:** Vision models for image classification & detection  
- **Location Services:** GPS-based geotagging  
- **Agentic AI Framework:** [qRaptor](https://qraptor.ai)  

---

## 🌐 Live Demo (Prototype)

🔗 [CrowdLens AI Website](https://crowdlens-ai.netlify.app/)  
⚠️ *Note: This is a prototype version built for demonstration purposes. Some features may be limited.*  

---

## 🖼 Screenshots

> Below are sample screenshots from the **CrowdLens AI Prototype** for better understanding:

### Home Page  
![Home Page](https://github.com/AlfishanShaikh/crowdlens-ai/blob/c9995ea37db3c51682217f66f9d467c4db155e27/public/home%20banner.png)  

### Issue Detection Page  
![Issue Detection](https://github.com/AlfishanShaikh/crowdlens-ai/blob/c9995ea37db3c51682217f66f9d467c4db155e27/public/Report%20Issue%20banner.png)  

### Complaint Report Dashboard  
![Dashboard](https://github.com/AlfishanShaikh/crowdlens-ai/blob/c9995ea37db3c51682217f66f9d467c4db155e27/public/View%20Reports%20banner.png)  


---

## 📁 Project Structure

```bash
crowdlens-ai
├── public/               # Static files and HTML template
│   ├── index.html        # Root HTML file
│   └── favicon.ico       # App favicon
├── src/                  # React source code
│   ├── assets/           # Images, icons, and other static assets
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components (Home, Dashboard, etc.)
│   ├── services/         # API calls and AI integration logic
│   ├── App.js            # Main React app component
│   ├── index.js          # Entry point for React
│   └── styles/           # Global styles / Tailwind configs
├── screenshots/          # Screenshots for README (optional)
│   ├── home.png
│   ├── detect.png
│   └── dashboard.png
├── package.json          # Project dependencies & scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite bundler configuration
└── README.md             # Project documentation
```

---

## 📌 How CrowdLens AI Works

1. User snaps a **photo** of the civic issue.  
2. **AI Vision Agent** identifies the problem type.  
3. **Geo-Tagging Agent** maps exact location.  
4. **Complaint Drafting Agent** creates a formatted report.  
5. **Orchestration Layer** (via qRaptor) sends it to the **right authority**.  
6. **Notification Agent** updates user with complaint status.  

---

## 📊 System Architecture

User → Upload Photo
1. AI Vision (Issue Detection)
2. GPS Mapping (Geo-Context)
3. Report Generation (Complaint Drafting)
4. Orchestration (qRaptor AI)
5. Submission to Authorities
6. Notifications Back to User

---

## 🤝 Contributing

We welcome contributions to improve **CrowdLens AI Prototype**!  

### 🔄 How to Contribute (Step by Step)

1. **Fork the Repository**  
   - Click the **Fork** button (top right of this page).  
   - This creates a copy of the repo under your GitHub account.  

2. **Clone Your Fork**  
   ```bash
   git clone https://github.com/<your-username>/crowdlens-ai.git
   cd crowdlens-ai
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Add new features, fix bugs, or improve documentation.

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "Added <your-change-description>"
   ```
6. ** Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request (PR)**
   - Go to the original repository on GitHub.
   - Click Compare & pull request.
   - Submit your PR for review. 🎉
  
---

## 📝 License

Copyright (c) 2025 Shaikh Alfishan.

This project is licensed under the [MIT License](LICENSE).




   



