// --- 1. MULTI-LANGUAGE DATA ---
const schoolData = {
    "English": {
        welcome: "Hello! I am the School Assistant. Please type the number of your question:",
        invalid: "❌ Invalid number. Please choose a number from the list.",
        notnumber:"To get the answer, please enter the index number.",
        menu_prompt: "\n\n_Type 'menu' to see options again._",
        questions: [
            { id: 1, q: "Know Our School ", a: "School Name : Jagruti Uttar Buniyadi Vidhyalay,Vareda Gram Panchayat to Kuba Road, Vareda Village : Vareda, Post- Bepadar, Ta- Saraswati, Dist - Patan (School Istablish : 1986)" },
            { id: 2, q: "Know Our Principal ", a: "The scPrincipal Name : Bhavikkumar Kantilal Patel Contact Number : 9925491242" },
            { id: 3, q: "Know Our Trust ", a: "Jagruti Yuvak Mandal Patan President Name : Keshaji Shankarji Thakor  Contact Number : 9979788132" },
            { id: 4, q: "Know School Staff ", a: "1.Principal : Patel Bhavikkumar Kantilal (contect number: 9925491242) 2.Assistant Teacher Secondary : Thakor Vanrajji Ranchhodji (contect number:9979699747) 3.Assistant Teacher Secondary :Makvana Natvarsinh Ishvarsinh (contect number:9099535475) 4.Assistant Teacher Secondary : Dabhi Nilaben Dayalbhai (contect number:9723055820) 5.Assistant Teacher Higher : Parmar Rameshbhai Dhanjibhai (contect number:7600300745) 6.Assistant Teacher Higher : Gohil Nitaben Naranbhai (contect number:9227234659) 7. Assistant Teacher Higher : Acharya Vijaykumar Bharatkumar (contect number:9925168162) 8.Clerk : Raval Harshilkumar Chandrakantbhai (contect number:8905454015) 9. Vocational Trainer : Maheshkumar Ranchhodji Thakor (contect number:9998387612)" },
            { id: 5, q: "Know Class Teacher  ", a: "stander 9 : Nitaben Gohil (Contact Number:9227234659):  stander 10 : Nilaben Dabhi1 (contect number:9723055820) stander 11 :Vijaykumar Acharya (contect number:9925168162) stander 12 :Parmar Rameshbhai (contect number:7600300745)" },
            { id: 6, q: "Know School Activity ", a: "1.Morning Prarthana : Prarthana With Music, News Reading, General Knowladge Quations And Answer, National Anthem Song,Day Celebration, MD Priode Activities Like, GK Games, Quize Compition, Different types of Games, " },
            { id: 7, q: "Know School Campus ", a: "1. Principal Office 2. Staff Room 3. Sport Room 4. Library 5. Science Lab 6. IT Computer Lab 7. Girls Room 8. Water Room 9.Seprate Washroom for Girls & Boys 10.Class Rooms 11. Sport Ground for Kabbadi, kho-kho, Cricket, Voliball, Long Jump, High Jump,  " },
            { id: 8, q: "Know School Timing ", a: "Morning School Timing is 7:00AM to 12:30AM  Evening School Timing is 10:50AM to 05:00PM Saturday School Timing :07:15AM to 11:30AM" },
            // Add more English questions here...
        ]
    },
    "Hindi": {
        welcome: "नमस्ते! मैं स्कूल असिस्टेंट हूं। कृपया अपने प्रश्न का नंबर टाइप करें:",

        invalid: "❌ अमान्य संख्या। कृपया सूची में से एक संख्या चुनें।",
        notnumber:"उत्तर जानने के लिए कृपया नंबर टाइप करें।",
        menu_prompt: "\n\n_विकल्पों को फिर से देखने के लिए 'menu' टाइप करें।_",
        questions: [
            {
                id: 1,
                q: "हमारे विद्यालय के बारे में जानें",
                a: "विद्यालय का नाम : जागृति उत्तर बुनियादी विद्यालय, वारेडा ग्राम पंचायत से कुबा रोड, गाँव : वरेडा, पोस्ट- बेपादर, तहसील- सरस्वती, जिला - पाटन (विद्यालय स्थापना : 1986)"
            },
            {
                id: 2,
                q: "हमारे प्रधानाचार्य के बारे में जानें",
                a: "प्रधानाचार्य का नाम : भाविककुमार कांतिलाल पटेल, संपर्क नंबर : 9925491242"
            },
            {
                id: 3,
                q: "हमारे ट्रस्ट के बारे में जानें",
                a: "जागृति युवक मंडल पाटन, अध्यक्ष का नाम : केशाजी शंकरजी ठाकोर, संपर्क नंबर : 9979788132"
            },
            {
                id: 4,
                q: "विद्यालय स्टाफ के बारे में जानें",
                a: "1. प्रधानाचार्य : पटेल भाविककुमार कांतिलाल (संपर्क नंबर: 9925491242) 2. सहायक शिक्षक (माध्यमिक) : ठाकोर वनराजजी रणछोड़जी (संपर्क नंबर: 9979699747) 3. सहायक शिक्षक (माध्यमिक) : मकवाना नटवरसिंह ईश्वरसिंह (संपर्क नंबर: 9099535475) 4. सहायक शिक्षक (माध्यमिक) : डाभी नीलाबेन दयालभाई (संपर्क नंबर: 9723055820) 5. सहायक शिक्षक (उच्चतर) : परमार रमेशभाई धनजीभाई (संपर्क नंबर: 7600300745) 6. सहायक शिक्षक (उच्चतर) : गोहिल नीताबेन नारणभाई (संपर्क नंबर: 9227234659) 7. सहायक शिक्षक (उच्चतर) : आचार्य विजयकुमार भरतकुमार (संपर्क नंबर: 9925168162) 8. क्लर्क : रावल हर्षिलकुमार चंद्रकांतभाई (संपर्क नंबर: 8905454015) 9. व्यावसायिक प्रशिक्षक : महेशकुमार रणछोड़जी ठाकोर (संपर्क नंबर: 9998387612)"
            },
            {
                id: 5,
                q: "कक्षा शिक्षक के बारे में जानें",
                a: "कक्षा 9 : नीताबेन गोहिल (संपर्क नंबर: 9227234659) : कक्षा 10 : नीलाबेन डाभी (संपर्क नंबर: 9723055820) कक्षा 11 : विजयकुमार आचार्य (संपर्क नंबर: 9925168162) कक्षा 12 : परमार रमेशभाई (संपर्क नंबर: 7600300745)"
            },
            {
                id: 6,
                q: "विद्यालय की गतिविधियों के बारे में जानें",
                a: "1. सुबह की प्रार्थना : संगीत के साथ प्रार्थना, समाचार वाचन, सामान्य ज्ञान (GK) प्रश्न और उत्तर, राष्ट्रगान, दिवस समारोह, एम.डी. पीरियड गतिविधियाँ जैसे GK गेम्स, क्विज़ प्रतियोगिता, विभिन्न प्रकार के खेल।"
            },
            {
                id: 7,
                q: "विद्यालय परिसर के बारे में जानें",
                a: "1. प्रधानाचार्य कार्यालय 2. स्टाफ रूम 3. खेल कक्ष (Sport Room) 4. पुस्तकालय 5. विज्ञान प्रयोगशाला 6. आईटी कंप्यूटर लैब 7. छात्राओं का कक्ष (Girls Room) 8. जल कक्ष 9. छात्र और छात्राओं के लिए अलग शौचालय 10. कक्षाएँ 11. कबड्डी, खो-खो, क्रिकेट, वॉलीबॉल, लंबी कूद, ऊंची कूद के लिए खेल का मैदान।"
            },
            { 
            id: 8, 
            q: "विद्यालय के समय के बारे में जानें", 
            a: "सुबह के विद्यालय का समय 7:00AM से 12:30PM है, शाम के विद्यालय का समय 10:50AM से 05:00PM है, शनिवार विद्यालय का समय : 07:15AM से 11:30AM है" 
            }
                        // Add more Hindi questions here...
        ]
    },
    "Gujarati": {
        welcome: "નમસ્તે! હું શાળા સહાયક છું. કૃપા કરીને તમારા પ્રશ્નનો નંબર લખો:",
        invalid: "❌ અમાન્ય નંબર. કૃપા કરીને સૂચિમાંથી નંબર પસંદ કરો.",
        notnumber:"જવાબ મેળવવા માટે કૃપા કરીને નંબર ટાઈપ કરો.",
        menu_prompt: "\n\n_ફરીથી વિકલ્પો જોવા માટે 'menu' લખો._",
        questions: [
        {
            id: 1,
            q: "અમારી શાળા વિશે જાણો",
            a: "શાળાનું નામ : જાગૃતિ ઉત્તર બુનિયાદી વિદ્યાલય, વારેડા ગ્રામ પંચાયત થી કુબા રોડ, ગામ : વરેડા, પોસ્ટ- બેપાદર, તાલુકો- સરસ્વતી, જીલ્લો - પાટણ (શાળા સ્થાપના : 1986)"
        },
        {
            id: 2,
            q: "અમારા આચાર્ય વિશે જાણો",
            a: "આચાર્યનું નામ : ભાવિકકુમાર કાંતિલાલ પટેલ, સંપર્ક નંબર : 9925491242"
        },
        {
            id: 3,
            q: "અમારા ટ્રસ્ટ વિશે જાણો",
            a: "જાગૃતિ યુવક મંડળ પાટણ, પ્રમુખનું નામ : કેશાજી શંકરજી ઠાકોર, સંપર્ક નંબર : 9979788132"
        },
        {
            id: 4,
            q: "શાળાના સ્ટાફ વિશે જાણો",
            a: "1. આચાર્ય : પટેલ ભાવિકકુમાર કાંતિલાલ (સંપર્ક નંબર: 9925491242) 2. મદદનીશ શિક્ષક (માધ્યમિક) : ઠાકોર વનરાજજી રણછોડજી (સંપર્ક નંબર: 9979699747) 3. મદદનીશ શિક્ષક (માધ્યમિક) : મકવાણા નટવરસિંહ ઈશ્વરસિંહ (સંપર્ક નંબર: 9099535475) 4. મદદનીશ શિક્ષક (માધ્યમિક) : ડાભી નીલાબેન દયાળભાઈ (સંપર્ક નંબર: 9723055820) 5. મદદનીશ શિક્ષક (ઉચ્ચતર) : પરમાર રમેશભાઈ ધનજીભાઈ (સંપર્ક નંબર: 7600300745) 6. મદદનીશ શિક્ષક (ઉચ્ચતર) : ગોહિલ નીતાબેન નારણભાઈ (સંપર્ક નંબર: 9227234659) 7. મદદનીશ શિક્ષક (ઉચ્ચતર) : આચાર્ય વિજયકુમાર ભરતકુમાર (સંપર્ક નંબર: 9925168162) 8. ક્લાર્ક : રાવલ હર્ષિલકુમાર ચંદ્રકાંતભાઈ (સંપર્ક નંબર: 8905454015) 9. વોકેશનલ ટ્રેનર : મહેશકુમાર રણછોડજી ઠાકોર (સંપર્ક નંબર: 9998387612)"
        },
        {
            id: 5,
            q: "વર્ગશિક્ષક વિશે જાણો",
            a: "ધોરણ 9 : નીતાબેન ગોહિલ (સંપર્ક નંબર: 9227234659) : ધોરણ 10 : નીલાબેન ડાભી (સંપર્ક નંબર: 9723055820) ધોરણ 11 : વિજયકુમાર આચાર્ય (સંપર્ક નંબર: 9925168162) ધોરણ 12 : પરમાર રમેશભાઈ (સંપર્ક નંબર: 7600300745)"
        },
        {
            id: 6,
            q: "શાળાની પ્રવૃત્તિઓ વિશે જાણો",
            a: "1. સવારની પ્રાર્થના : સંગીત સાથે પ્રાર્થના, સમાચાર વાંચન, સામાન્ય જ્ઞાન (GK) પ્રશ્નોત્તરી, રાષ્ટ્રગીત, દિવસની ઉજવણી, એમ.ડી. પિરિયડ પ્રવૃત્તિઓ (MD Period Activities) જેમ કે GK ગેમ્સ, ક્વિઝ કોમ્પિટિશન, વિવિધ પ્રકારની રમતો."
        },
        {
            id: 7,
            q: "શાળાના કેમ્પસ વિશે જાણો",
            a: "1. આચાર્ય ઓફિસ 2. સ્ટાફ રૂમ 3. સ્પોર્ટ રૂમ (રમતગમત ખંડ) 4. લાયબ્રેરી 5. વિજ્ઞાન પ્રયોગશાળા 6. IT કોમ્પ્યુટર લેબ 7. ગર્લ્સ રૂમ 8. વોટર રૂમ 9. કુમાર અને કન્યાઓ માટે અલગ શૌચાલય 10. વર્ગખંડો 11. કબડ્ડી, ખો-ખો, ક્રિકેટ, વોલીબોલ, લાંબી કૂદ, ઊંચી કૂદ માટે રમતનું મેદાન."
        },
        { 
        id: 8, 
        q: "શાળાના સમય વિશે જાણો", 
        a: "સવારની શાળાનો સમય 7:00AM થી 12:30PM છે, સાંજની શાળાનો સમય 10:50AM થી 05:00PM છે, શનિવારે શાળાનો સમય : 07:15AM થી 11:30AM છે" 
        }
        ]
             // Add more Gujarati questions here...
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
const nav = document.getElementById('navLinks');
function toggleMenu() {
    nav.classList.toggle('active');
}
 
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
            }else{
                response = langData.invalid;
            }
        }else if(isNaN(choice)) {
                response =langData.notnumber;
        }
         else {
            // Basic Keyword matching
        
        //var menubutton=menubtn
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
function formatTextForDisplay(text) {
    // If you are receiving text that should be line-by-line, 
    // this replaces newline characters (\n) with <br> tags.
    return text.replace(/\n/g, '<br>');
}
// --- UI FUNCTIONS (Add Message, Remove Loading, Scroll) ---
function addMessage(text, isUser, isLoading = false) {
    formatedmessage=formatTextForDisplay(text);
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
            contentDiv.innerHTML = typeof marked !== 'undefined' ? marked.parse(formatedmessage) : formatedmessage;
            
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