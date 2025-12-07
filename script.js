//theme change 

let themeicon = document.getElementById('theme');
let elements = document.querySelectorAll('body, #theme, .theme-mode, header, .clear-chat, .chat-input, .send-btn, .message-bubble, .message-row.user ');

themeicon.addEventListener("click", function() {
    document.body.classList.toggle('dark-mode');
        let isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeicon.innerHTML = isDark
        ? `<i class="ri-contrast-2-line"></i>` // Dark mode active -> Show Moon/Contrast icon
        : `<i class="ri-sun-line"></i>`;      // Light mode active -> Show Sun icon
        elements.forEach(el => {
        el.classList.toggle("dark-mode", isDark);
    });
});


window.addEventListener("load", function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeicon.innerHTML = `<i class="ri-contrast-2-line"></i>`;
        elements.forEach(el => {
            el.classList.add('dark-mode');
        });
    }
});

// --- THEME LOGIC END ---

//here add voice command inputs
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN, hi-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    const micBtn = document.getElementById("micBtn");
    const userInput = document.getElementById("userInput");

    micBtn.addEventListener("click", () => {
        recognition.start();
        micBtn.style.background = "#ffdfdf"; // mic active
    });

    console.log(navigator.userAgent);
console.log("Supported lang:", recognition.lang);

    recognition.onstart = () => {
        console.log("Voice recognition started...");
    };

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        userInput.value = text; // Put speech text into textbox
        micBtn.style.background = "";
        console.log("You said:", text);
        sendMessage(text);
    };
    recognition.onend = () => {
        micBtn.style.background = "";
    };
    recognition.onerror = (e) => {
        console.log("Error: ", e.error);
        micBtn.style.background = "";
    };
}
//voice function end
// --- CONFIGURATION ---
const apiKey = "AIzaSyBUADekobE9rRVFSsMVg5ioXxkuK8TB1BU"; // API Key is injected by the environment
        
// --- 1. PASTE YOUR SCHOOL DATA HERE (JSON Format) ---
const schoolData = {
    "school_name": "Jagruti U.B Vidhyalay",
    "address": "123 Innovation Blvd, Silicon Valley, CA",
    "contact": {
        "phone": "+91 903952442",
        "email": "jagrutiubvidhyalayvareda@gmail.com"
    },
    "shifts": {
        "morning": {
            "start": "07:30 AM",
            "end": "12:30 PM",
            "grades": "1st to 5th"
        },
        "afternoon": {
            "start": "01:00 PM",
            "end": "06:00 PM",
            "grades": "6th to 12th"
        }
    },
    "upcoming_events": [
        { "date": "2023-11-15", "event": "Science Fair" },
        { "date": "2023-11-20", "event": "Parent-Teacher Meeting" },
        { "date": "2023-12-01", "event": "Annual Sports Day" }
    ],
    "facilities": ["Library","Computer Lab"],
    "principal": "mr.Bhavik bhai patel",
    "rules": "Uniform is mandatory. 75% attendance required for exams."
};
// ----------------------------------------------------

const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const nav = document.getElementById('navLinks');

// Toggle Mobile Menu
function toggleMenu() {
    nav.classList.toggle('active');
}

// Handle 'Enter' key
function handleKeyPress(event) { 
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Add message to UI
function addMessage(finalMessage, isUser, isLoading = false) {
    const row = document.createElement('div');
    row.className = `message-row ${isUser ? 'user' : ''}`;
    
    // Avatar
    const avatar = document.createElement('div');
    avatar.className = `avatar ${isUser ? 'user-avatar' : 'bot-avatar'}`;
    avatar.innerHTML = isUser ? '<i class="fa-regular fa-user"></i>' : '<i class="fa-solid fa-robot"></i>';
    
    // Bubble
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    
    if (isLoading) {
        bubble.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>`;
        row.id = "loading-message";
    } else {
        // If it's a bot response, use marked to parse Markdown (bolding, lists, etc)
        if (!isUser) {
            bubble.innerHTML = marked.parse(text);
        } else {
            bubble.textContent = text;
        }
    }

    if (isUser) {
        row.appendChild(bubble);
        row.appendChild(avatar);
    } else {
        row.appendChild(avatar);
        row.appendChild(bubble);
    }

    chatMessages.appendChild(row);
    scrollToBottom();
    return row;
}

// Remove loading indicator
function removeLoading() {
    const loader = document.getElementById('loading-message');
    if (loader) loader.remove();
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function clearChat() {
    chatMessages.innerHTML = `
        <div class="message-row">
            <div class="avatar bot-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="message-bubble">Chat cleared. Ask me anything about ${schoolData.school_name}!</div>
        </div>`;
}

// --- GEMINI API INTEGRATION ---
async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    let selectedLan = localStorage.getItem("selectedLanguage") || "English";
    // 1. Show User Message
    addMessage(text, true);
    userInput.value = '';
    userInput.disabled = true;
    sendBtn.disabled = true;

    // 2. Show Loading
    addMessage("", false, true);

    try {
        // Construct the prompt with the JSON data injected
        const systemPrompt = `
            You are a helpful and polite school assistant for "${schoolData.school_name}".
            
            Here is the school's official data in JSON format:
            ${JSON.stringify(schoolData)}
            
            Instructions:
            1. Answer the user's question STRICTLY based on the JSON data provided above.
            2. If the answer is not in the JSON data, politely say you don't have that information and suggest they contact the school office.
            3. Keep answers concise and easy for students or parents to read.
            4. Use formatting like bullet points if listing items (like events or rules).
            5. give all answer in "${selectedLan}"
        
        `;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: text }]
                }],
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                }
            })
        });

        const data = await response.json();
        
        removeLoading();

        if (data.error) {
            addMessage("Sorry, I encountered an error. Please try again later.", false);
            console.error("Gemini API Error:", data.error);
        } else {
            const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't understand that.";
            addMessage(aiResponse, false);
        }

    } catch (error) {
        removeLoading();
        addMessage("Network error. Please check your connection.", false);
        console.error("Fetch Error:", error);
    } finally {
        userInput.disabled = false;
        sendBtn.disabled = false;
        userInput.focus();
    }
}

const synth = window.speechSynthesis;
let currentUtterance = null; 

/**
 * Handles the start/stop logic for the speech.
 * @param {string} text 
 * @param {HTMLElement} button 
 */
function toggleSpeech(text, button) {
    if (!synth) {
        alert("Text-to-Speech is not supported in your browser.");
        return;
    }

    // 1. Check if speech is currently active (and if it's the current message)
    if (synth.speaking) {
        // If the same message is already speaking, stop it (pause/cancel)
        if (currentUtterance && currentUtterance.text === text) {
            synth.cancel(); // Stop the current speech
            currentUtterance = null;
            updateAllSpeakerIcons(); // Reset all icons
            return;
        } 
        
        // If a DIFFERENT message is speaking, stop it first before starting the new one
        synth.cancel();
        currentUtterance = null;
        updateAllSpeakerIcons();
    }

    // 2. Start new speech
    // Clean up markdown before speaking
    const textToSpeak = text.replace(/(\*\*|__)/g, '').replace(/\n/g, ' '); 
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    utterance.lang = 'en-IN,hi-IN,gu-IN'; 

    // Store the new utterance
    currentUtterance = utterance;

    // Set up cleanup logic when speaking ends
    utterance.onend = () => {
        if (currentUtterance === utterance) {
            currentUtterance = null;
            updateAllSpeakerIcons();
        }
    };
    utterance.onerror = (event) => {
        console.error('Speech Synthesis Error:', event.error);
        if (currentUtterance === utterance) {
            currentUtterance = null;
            updateAllSpeakerIcons();
        }
    };

    // Start speaking
    synth.speak(utterance);
    
    // Update the icon for the current button to show 'stop/pause'
    button.innerHTML = '<i class="ri-stop-circle-line"></i>';
}

function updateAllSpeakerIcons() {
    const allButtons = document.querySelectorAll('.speaker-btn');
    allButtons.forEach(btn => {
        // Find the parent message bubble and extract the text content
        const messageTextElement = btn.parentElement.querySelector('.bot-message-content');
        if (!messageTextElement) return; 
        if (currentUtterance && synth.speaking) {
             // If speech is active, check if this button is associated with the current speech.
             if (currentUtterance.text.includes(messageTextElement.textContent.trim().substring(0, 10))) {
                 btn.innerHTML = '<i class="ri-stop-circle-line"></i>';
             } else {
                 btn.innerHTML = '<i class="ri-volume-up-line"></i>';
             }

        } else {
            // No speech active, reset icon to play
            btn.innerHTML = '<i class="ri-volume-up-line"></i>';
        }
    });
}
function addMessage(text, isUser, isLoading = false) {
    const row = document.createElement('div');
    row.className = `message-row ${isUser ? 'user' : ''}`;
    const avatar = document.createElement('div');
    avatar.className = `avatar ${isUser ? 'user-avatar' : 'bot-avatar'}`;
    avatar.innerHTML = isUser ? '<i class="fa-regular fa-user"></i>' : '<i class="fa-solid fa-robot"></i>';
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    if (isLoading) {
        // ... (keep the loading logic as is)
        bubble.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>`;
        row.id = "loading-message";
    } else {
        if (!isUser) {
            // For bot messages, create a container for the icon and text
            const contentContainer = document.createElement('div');
            contentContainer.className = 'bot-message-content';
            contentContainer.innerHTML = marked.parse(text); // Text content

            // Speaker Icon Button
            const speakerButton = document.createElement('button');
            speakerButton.className = 'speaker-btn';
            speakerButton.innerHTML = '<i class="ri-volume-up-line"></i>'; // Initial icon
            // Important: Attach the speak function
            speakerButton.onclick = () => toggleSpeech(text, speakerButton);

            // Append content and button to the bubble
            bubble.appendChild(contentContainer);
            bubble.appendChild(speakerButton);

        } else {
            bubble.textContent = text;
        }
    }

    if (isUser) {
        row.appendChild(bubble);
        row.appendChild(avatar);
    } else {
        row.appendChild(avatar);
        row.appendChild(bubble);
    }

    chatMessages.appendChild(row);
    scrollToBottom();
    return row;
}