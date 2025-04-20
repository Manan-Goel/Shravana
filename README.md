# SHRAVAN – Reimagining Elder Healthcare with Empathy and Intelligence

**Shravan** is not just a project — it’s a heartfelt revolution in the way we care for our elders.  
Built with empathy, powered by AI, and designed for impact, Shravan is a dual-portal intelligent ecosystem for elderly individuals and their distant children — ensuring health, motivation, and emotional connection in real time.

> **"For the generation that raised us, we’re building a future that never leaves them behind."**

---

## 🧩 The Problem

Millions of elderly individuals today live apart from their children, often feeling isolated and unsupported in managing their health.  
Shravan bridges that distance — with an integrated digital solution that monitors vitals, predicts risks, offers personalized motivation, and connects families.

---

## 💡 What Shravan Delivers

### 👴 Elder Portal
- **Simple, intuitive dashboard**
- **Daily task streaks and wellness points**
- **Workout guides with real-time posture feedback**
- **Elder-friendly chatbot for ease of use**

### 👨‍👩‍👧 Children’s Portal
- **Live updates on parents' vitals**
- **Medication alerts and reminders**
- **AI-based health risk predictions**
- **Emergency flagging and notifications**

---

## 🧠 Intelligent Features

- **Health Risk Prediction Engine**  
  Trained ML models analyze vitals to flag potential risks and trigger alerts

- **Posture Detection using Computer Vision**  
  Seniors get real-time feedback during workouts using MediaPipe/OpenPose

- **Community & Motivation System**  
  Keeps elders mentally active and emotionally connected through gamified wellness

- **Elder-Friendly Chatbot**  
  Makes the entire portal accessible through simple, guided conversations

---

## 🛠 Tech Stack

| Layer            | Tools & Frameworks                                 |
|------------------|----------------------------------------------------|
| Frontend         | HTML, CSS, JS (React )                             |
| Backend          | Python (Flask/Django)                              |
| AI Models        | Deep learning, CNN, MTL                            |
| Computer Vision  | OpenCV, MediaPipe Pose                             |
| Database         | Firebase / PostgreSQL                              |
| Deployment       | Render / Heroku / AWS                              |
| Notifications    | Twilio, Email, Browser Push                        |

---

## 🏗️ Architecture Overview

1. **Sensors/User Inputs** collect vitals  
2. **AI Engine** processes and predicts risk levels  
3. **CV Pipeline** analyzes exercise posture in real time  
4. **Dashboards** update children with health changes  
5. **Alerts** triggered for emergencies or anomalies

---

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/shravan.git
cd shravan

# Setup virtual environment
python -m venv venv
source venv/bin/activate     # For Unix
venv\Scripts\activate        # For Windows

# Install requirements
pip install -r requirements.txt

# Start the server
python app.py
