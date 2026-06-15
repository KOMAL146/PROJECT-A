const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const testMoodButton = document.getElementById("testMoodButton");
const weeklyAnalysisButton = document.getElementById("weeklyAnalysisButton");
const sleepCycleButton = document.getElementById("sleepCycleButton");
const todoListButton = document.getElementById("todoListButton");
const moodCalendarButton = document.getElementById("moodCalendarButton");
const wellnessGoalButton = document.getElementById("wellnessGoalButton");
const personalProgressButton = document.getElementById("personalProgressButton");
const emotionalScoreButton = document.getElementById("emotionalScoreButton");
const greetingName = document.getElementById("greetingName");
const streakValue = document.getElementById("streakValue");
const coinValue = document.getElementById("coinValue");
const libraryMenuButton = document.getElementById("libraryMenuButton");
const libraryCloseButton = document.getElementById("libraryCloseButton");
const libraryPanel = document.getElementById("libraryPanel");
const moodQuizForm = document.getElementById("moodQuizForm");
const resultTitle = document.getElementById("resultTitle");
const resultScore = document.getElementById("resultScore");
const resultText = document.getElementById("resultText");
const retryQuizButton = document.getElementById("retryQuizButton");
const suggestionsButton = document.getElementById("suggestionsButton");
const moodPlayer = document.getElementById("moodPlayer");
const suggestionsTitle = document.getElementById("suggestionsTitle");
const suggestionsNote = document.getElementById("suggestionsNote");
const moodPlaylistTitle = document.getElementById("moodPlaylistTitle");
const backToResultButton = document.getElementById("backToResultButton");

function getMoodResult(score) {
  if (score >= 35) {
    return {
      label: "😄 Happy",
      range: "35–40",
      text: "You look bright, steady, and in a healthy emotional space.",
    };
  }

  if (score >= 28) {
    return {
      label: "😊 Good",
      range: "28–34",
      text: "You are in a positive place with room for a gentle boost.",
    };
  }

  if (score >= 20) {
    return {
      label: "😐 Neutral",
      range: "20–27",
      text: "You feel balanced, but a little more care could help today.",
    };
  }

  return {
    label: "😟 Stressed/Sad",
    range: "10–19",
    text: "You may be carrying a lot today. Please slow down and rest.",
  };
}

function getMoodKeyFromResult(label) {
  if (label?.includes("Happy")) return "happy";
  if (label?.includes("Good")) return "good";
  if (label?.includes("Neutral")) return "neutral";
  return "stressed";
}

function getPlaylistConfig(moodKey) {
  const playlists = {
    happy: {
      title: "HEARTFELT SUGGESTIONS FOR YOU",
      src: "https://open.spotify.com/embed/playlist/2gSHA2hK9utrPK6ldtJgws?utm_source=generator",
      note: "Bright music for high-energy, feel-good moments.",
    },
    good: {
      title: "HEARTFELT SUGGESTIONS FOR YOU",
      src: "https://open.spotify.com/embed/playlist/5S2l0RAtGMMbgxbb1lS7IL?utm_source=generator",
      note: "Soft upbeat music to keep your good vibe going.",
    },
    neutral: {
      title: "HEARTFELT SUGGESTIONS FOR YOU",
      src: "https://open.spotify.com/embed/playlist/3WYmyXrEqRL1UnV3ep13ie?utm_source=generator",
      note: "Calm and balanced tracks for a steady reset.",
    },
    stressed: {
      title: "HEARTFELT SUGGESTIONS FOR YOU",
      src: "https://open.spotify.com/embed/playlist/4uDjLpZROtXhdyaYV7ziuc?utm_source=generator",
      note: "Gentle tracks to help you slow down and breathe.",
    },
  };

  return playlists[moodKey] || playlists.neutral;
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getMoodScoreFromLabel(label) {
  if (label?.includes("Happy")) return 4;
  if (label?.includes("Good")) return 3;
  if (label?.includes("Neutral")) return 2;
  return 1;
}

function getSleepScoreFromFormData(formData) {
  const q1 = Number(formData.get("q1") || 0);
  return q1;
}

function getMoodSummary(score) {
  if (score >= 35) return { label: "EXTREMELY FINE", tone: "happy" };
  if (score >= 28) return { label: "FINE", tone: "good" };
  if (score >= 20) return { label: "AVERAGE", tone: "neutral" };
  return { label: "POOR", tone: "stressed" };
}

if (greetingName) {
  greetingName.textContent = localStorage.getItem("moodpulseName")?.toUpperCase() || "FRIEND";
}

if (streakValue) {
  streakValue.textContent = localStorage.getItem("moodpulseStreak") || "0";
}

if (coinValue) {
  coinValue.textContent = localStorage.getItem("moodpulseCoins") || "0";
}

if (startButton) {
  startButton.addEventListener("click", () => {
    window.location.href = "details.html";
  });
}

if (continueButton) {
  continueButton.addEventListener("click", () => {
    const nameInput = document.getElementById("fullName");
    const genderInput = document.getElementById("gender");
    const ageInput = document.getElementById("age");
    const userName = (nameInput?.value || "").trim() || "FRIEND";
    localStorage.setItem("moodpulseName", userName);
    localStorage.setItem("moodpulseGender", (genderInput?.value || "").trim());
    localStorage.setItem("moodpulseAge", (ageInput?.value || "").trim());
    if (!localStorage.getItem("moodpulseStreak")) {
      localStorage.setItem("moodpulseStreak", "0");
    }
    if (!localStorage.getItem("moodpulseCoins")) {
      localStorage.setItem("moodpulseCoins", "0");
    }
    window.location.href = "main.html";
  });
}

if (testMoodButton) {
  testMoodButton.addEventListener("click", () => {
    window.location.href = "quiz.html";
  });
}

if (weeklyAnalysisButton) {
  weeklyAnalysisButton.addEventListener("click", () => {
    window.location.href = "weekly-analysis.html";
  });
}

if (sleepCycleButton) {
  sleepCycleButton.addEventListener("click", () => {
    window.location.href = "sleep-cycle.html";
  });
}

if (todoListButton) {
  todoListButton.addEventListener("click", () => {
    window.location.href = "todo-list.html";
  });
}

if (moodCalendarButton) {
  moodCalendarButton.addEventListener("click", () => {
    window.location.href = "mood-calendar.html";
  });
}

if (wellnessGoalButton) {
  wellnessGoalButton.addEventListener("click", () => {
    window.location.href = "wellness-goal.html";
  });
}

if (personalProgressButton) {
  personalProgressButton.addEventListener("click", () => {
    window.location.href = "personal-progress.html";
  });
}

if (emotionalScoreButton) {
  emotionalScoreButton.addEventListener("click", () => {
    window.location.href = "emotional-score.html";
  });
}

if (libraryMenuButton && libraryPanel) {
  libraryMenuButton.addEventListener("click", () => {
    libraryPanel.classList.add("is-open");
    libraryPanel.setAttribute("aria-hidden", "false");
  });
}

if (libraryCloseButton && libraryPanel) {
  libraryCloseButton.addEventListener("click", () => {
    libraryPanel.classList.remove("is-open");
    libraryPanel.setAttribute("aria-hidden", "true");
  });
}

if (moodQuizForm) {
  moodQuizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(moodQuizForm);
    const answers = Array.from({ length: 10 }, (_, index) => Number(formData.get(`q${index + 1}`) || 0));
    const score = answers.reduce((total, value) => total + value, 0);
    const result = getMoodResult(score);

    localStorage.setItem("moodpulseQuizScore", String(score));
    localStorage.setItem("moodpulseQuizLabel", result.label);
    localStorage.setItem("moodpulseQuizRange", result.range);
    localStorage.setItem("moodpulseQuizText", result.text);

    const today = getTodayKey();
    const entries = readJson("moodpulseDailyEntries", []);
    const existingIndex = entries.findIndex((entry) => entry.date === today);
    const sleepScore = getSleepScoreFromFormData(formData);
    const moodPoints = getMoodScoreFromLabel(result.label);
    const dayEntry = {
      date: today,
      score,
      label: result.label,
      range: result.range,
      sleepScore,
      moodPoints,
    };

    if (existingIndex >= 0) {
      entries[existingIndex] = { ...entries[existingIndex], ...dayEntry };
    } else {
      entries.push(dayEntry);
    }
    writeJson("moodpulseDailyEntries", entries.slice(-365));

    const lastQuizDay = localStorage.getItem("moodpulseLastQuizDay");
    if (lastQuizDay !== today) {
      const currentStreak = Number(localStorage.getItem("moodpulseStreak") || "0");
      localStorage.setItem("moodpulseStreak", String(currentStreak + 1));
      localStorage.setItem("moodpulseLastQuizDay", today);
    }

    const currentCoins = Number(localStorage.getItem("moodpulseCoins") || "0");
    localStorage.setItem("moodpulseCoins", String(currentCoins + moodPoints));
    localStorage.setItem("moodpulseLastMoodTone", getMoodSummary(score).tone);

    window.location.href = "result.html";
  });
}

if (resultTitle) {
  resultTitle.textContent = localStorage.getItem("moodpulseQuizLabel") || "😄 Happy";
}

if (resultScore) {
  resultScore.textContent = localStorage.getItem("moodpulseQuizRange") || "35–40";
}

if (resultText) {
  resultText.textContent = localStorage.getItem("moodpulseQuizText") || "You are feeling bright and balanced today.";
}

if (retryQuizButton) {
  retryQuizButton.addEventListener("click", () => {
    window.location.href = "quiz.html";
  });
}

if (suggestionsButton) {
  suggestionsButton.addEventListener("click", () => {
    window.location.href = "suggestions.html";
  });
}

if (moodPlayer || suggestionsTitle || suggestionsNote || moodPlaylistTitle) {
  const moodKey = getMoodKeyFromResult(localStorage.getItem("moodpulseQuizLabel"));
  const playlist = getPlaylistConfig(moodKey);

  if (suggestionsTitle) {
    suggestionsTitle.textContent = playlist.title;
  }

  if (suggestionsNote) {
    suggestionsNote.textContent = playlist.note;
  }

  if (moodPlaylistTitle) {
    moodPlaylistTitle.textContent = playlist.title;
  }

  if (moodPlayer) {
    moodPlayer.src = playlist.src;
  }
}

if (backToResultButton) {
  backToResultButton.addEventListener("click", () => {
    window.location.href = "result.html";
  });
}
