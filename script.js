// --- 1. MULTI-LANGUAGE DATA ---
const schoolData = {
    "English": {
        welcome: "Hello! I am the School Assistant. Please type the number of your question:",
        invalid: "❌ Invalid number. Please choose a number from the list.",
        menu_prompt: "\n\n_Type 'menu' to see options again._",
        questions: [
            { id: 1, q: "What are the school timings?", a: "• **Morning Shift:** 07:00 AM - 12:30 PM\n• **Afternoon:** 10:50 AM - 05:00 PM" },
            { id: 2, q: "What is the school address?", a: "The school is located at: ** Vareda Panchayat office to Kuba Road, At- Vareda, Ta-Saraswati, Dist- Patan, Pin-384272**." },
            { id: 3, q: "Who is the Principal?", a: "Our principal is **Mr. Bhavikkumar Kantilal Patel**." }
            // Add more English questions here...
        ]
    },
    "Hindi": {
        welcome: "नमस्ते! मैं स्कूल असिस्टेंट हूं। कृपया अपने प्रश्न का नंबर टाइप करें:",
        invalid: "❌ अमान्य संख्या। कृपया सूची में से एक संख्या चुनें।",
        menu_prompt: "\n\n_विकल्पों को फिर से देखने के लिए 'menu' टाइप करें।_",
        questions: [
            { id: 1, q: "स्कूल का समय क्या है?", a: "• **सुबह:** 07:30 AM - 12:30 PM\n• **दोपहर:** 01:00 PM - 06:00 PM" },
            { id: 2, q: "स्कूल का पता क्या है?", a: "स्कूल यहां स्थित है: **123 इनोवेशन एवेन्यू, सिलिकॉन वैली**।" },
            { id: 3, q: "प्रधानाचार्य कौन हैं?", a: "हमारे प्रधानाचार्य **श्री भाविक भाई पटेल** हैं।" }
             // Add more Hindi questions here...
        ]
    },
    "Gujarati": {
        welcome: "નમસ્તે! હું શાળા સહાયક છું. કૃપા કરીને તમારા પ્રશ્નનો નંબર લખો:",
        invalid: "❌ અમાન્ય નંબર. કૃપા કરીને સૂચિમાંથી નંબર પસંદ કરો.",
        menu_prompt: "\n\n_ફરીથી વિકલ્પો જોવા માટે 'menu' લખો._",
        questions: [
            { id: 1, q: "શાળાનો સમય શું છે?", a: "• **સવાર:** 07:30 AM - 12:30 PM\n• **બપોર:** 01:00 PM - 06:00 PM" },
            { id: 2, q: "શાળાનું સરનામું શું છે?", a: "શાળા અહીં આવેલી છે: **123 ઇનોવેશન બુલવાર્ડ**." },
            { id: 3, q: "આચાર્ય કોણ છે?", a: "અમારા આચાર્ય ** Bhavik Bhai Patel** છે." }
             // Add more Gujarati questions here...
        ]
    }
};
// --- GLOBAL VARIABLES ---
let currentLang = localStorage.getItem("selectedLanguage") || "English";

// --- JQUERY MODAL & LANGUAGE HANDLER ---
$(document).ready(function () {
    // Show modal only if language not yet selected
    if (!localStorage.getItem("selectedLanguage")) {
        $("#languageModal").modal("show");
    } else {
        // If already selected, load the menu immediately
        showWelcomeMenu();
    }

    // When user clicks any language button
    $(".lang-btn").click(function () {
        const lang = $(this).data("lang"); // "English", "Hindi", or "Gujarati"
        
        // Save selection
        localStorage.setItem("selectedLanguage", lang);
        currentLang = lang; // Update global variable

        // Close modal
        $("#languageModal").modal("hide");

        // Clear chat and show new menu in selected language
        document.getElementById('chatMessages').innerHTML = '';
        showWelcomeMenu();
    });
});

// --- HELPER: GET CURRENT DATA ---
function getData() {
    // Return the data object for the currently selected language
    // If language is missing, default to English
    return schoolData[currentLang] || schoolData["English"];
}

// --- HELPER: GENERATE MENU STRING ---
function getMenuString() {
    const data = getData();
    let menu = "";
    
    // Loop through the questions of the selected language
    data.questions.forEach(item => {
        menu += `**${item.id}.** ${item.q}\n`;
    });
    return menu;
}

function showWelcomeMenu() {
    const data = getData();
    // Combine welcome message + the list of questions
    const finalMsg = data.welcome + "\n\n" + getMenuString();
    addMessage(finalMsg, false);
}

// --- DOM ELEMENTS ---
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const themeicon = document.getElementById('theme');

// --- THEME LOGIC (Same as before) ---
let elements = document.querySelectorAll('body, #theme, .theme-mode, header, .clear-chat, .chat-input, .send-btn, .message-bubble, .message-row.user ');
themeicon.addEventListener("click", function() {
    document.body.classList.toggle('dark-mode');
    let isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeicon.innerHTML = isDark ? `<i class="ri-contrast-2-line"></i>` : `<i class="ri-sun-line"></i>`;      
    elements.forEach(el => el.classList.toggle("dark-mode", isDark));
});
window.addEventListener("load", function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeicon.innerHTML = `<i class="ri-contrast-2-line"></i>`;
        elements.forEach(el => el.classList.add('dark-mode'));
    }
});

// --- CORE CHAT LOGIC ---
function handleKeyPress(event) { 
    if (event.key === 'Enter') sendMessage();
}

function sendMessage(voiceText = null) {
    const text = voiceText || userInput.value.trim();
    if (!text) return;

    // 1. Show User Message
    addMessage(text, true);
    userInput.value = '';
    
    // 2. Loading animation
    addMessage("", false, true);

    setTimeout(() => {
        removeLoading();
        
        // Get current language data
        const langData = getData(); 
        const questionList = langData.questions;
        
        let response = "";
        const choice = parseInt(text);

        // LOGIC: Check number vs Array
        if (!isNaN(choice)) {
            if (choice >= 1 && choice <= questionList.length) {
                // Find question with that ID
                const selectedQ = questionList.find(item => item.id === choice);
                if(selectedQ) {
                    response = selectedQ.a + langData.menu_prompt;
                }
            } else {
                response = langData.invalid;
            }
        } else {
            // Basic Keyword matching
        
        var menubutton=menubtn
            const lowerText = text.toLowerCase();
            if (lowerText.includes('menu') || lowerText.includes('help')  ) {
                response = getMenuString();
            } else {
                response = langData.invalid;
            }
        }

        // 3. Show Bot Response
        addMessage(response, false);
    }, 500);
}

// --- UI FUNCTIONS (Add Message, Remove Loading, Scroll) ---
function addMessage(text, isUser, isLoading = false) {
    const row = document.createElement('div');
    row.className = `message-row ${isUser ? 'user' : ''}`;
    const avatar = document.createElement('div');
    avatar.className = `avatar ${isUser ? 'user-avatar' : 'bot-avatar'}`;
    avatar.innerHTML = isUser ? '<i class="fa-regular fa-user"></i>' : '<i class="fa-solid fa-robot"></i>';
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    if (isLoading) {
        bubble.innerHTML = `<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
        row.id = "loading-message";
    } else {
        if (!isUser) {
            // Parse Markdown and add Speaker Icon
            const contentDiv = document.createElement('div');
            contentDiv.className = 'bot-message-content';
            contentDiv.innerHTML = typeof marked !== 'undefined' ? marked.parse(text) : text;
            
            const btn = document.createElement('button');
            btn.className = 'speaker-btn';
            btn.innerHTML = '<i class="ri-volume-up-line"></i>';
            btn.onclick = () => toggleSpeech(text, btn);
            
            bubble.appendChild(contentDiv);
            bubble.appendChild(btn);
        } else {
            bubble.textContent = text;
        }
    }
    
    if (isUser) { row.appendChild(bubble); row.appendChild(avatar); } 
    else { row.appendChild(avatar); row.appendChild(bubble); }
    
    chatMessages.appendChild(row);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return row;
}

function removeLoading() {
    const loader = document.getElementById('loading-message');
    if (loader) loader.remove();
}

function clearChat() {
    chatMessages.innerHTML = ``;
    showWelcomeMenu();
}

// --- VOICE (TEXT TO SPEECH) ---
const synth = window.speechSynthesis;
let currentUtterance = null;

function toggleSpeech(text, button) {
    if (!synth) { alert("Not supported"); return; }
    if (synth.speaking) { synth.cancel(); button.innerHTML = '<i class="ri-volume-up-line"></i>'; return; }

    const u = new SpeechSynthesisUtterance(text.replace(/(\*\*|__)/g, ''));
    
    // Set Voice Language based on selection
    if(currentLang === "Hindi") u.lang = 'hi-IN';
    else if(currentLang === "Gujarati") u.lang = 'gu-IN'
   // alert('currently Gujarati Lang Not supported');
    else u.lang = 'en-IN';

    u.onend = () => { button.innerHTML = '<i class="ri-volume-up-line"></i>'; };
    synth.speak(u);
    button.innerHTML = '<i class="ri-stop-circle-line"></i>';
}