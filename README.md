# 🧠 Quiz App (React)

A fun and interactive quiz application built using **React** that fetches real-time questions from the Open Trivia Database API.  
Users can attempt the quiz, check their answers, see their score, and instantly replay with a fresh set of questions.

---

## 🚀 Features

- 🎯 Fetches **random quiz questions** dynamically
- 🔄 **Play Again** functionality with new questions
- ✅ Highlights **correct & wrong answers**
- 📊 Displays **final score** after submission
- 🎨 Clean UI with conditional styling
- ⚡ Fully client-side, fast & responsive

---

## 🛠️ Tech Stack

- **React (Hooks)** – `useState`, `useEffect`
- **Open Trivia DB API** – for quiz questions
- **clsx** – conditional class handling
- **he** – HTML entity decoding
- **CSS** – custom styles

---

## 🧩 How It Works

1. On load, the app fetches **5 random questions** from the API
2. Each question has:
   - One correct answer
   - Multiple incorrect options (shuffled)
3. User selects answers and clicks **Check Answer**
4. The app:
   - Locks inputs
   - Shows correct & wrong selections
   - Displays total score
5. Clicking **Play Again** resets everything and fetches new questions

---
## 🔗 Live Demo

🚀 **Try the quiz live here:**  
👉 https://your-app-name.netlify.app

---
## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/quiz-app.git

# Navigate to project folder
cd quiz-app

# Install dependencies
npm install

# Start development server
npm run dev

