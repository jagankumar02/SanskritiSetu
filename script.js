/* =====================================================
   GLOBAL DATA
===================================================== */

let selectedLanguage = "";
let selectedInterests = [];

let userProfile = {
    name: "Explorer",
    state: "Haryana",
    interests: []
};


/* =====================================================
   SAMPLE ARTIST DATA
   Prototype data — later Supabase se ayega
===================================================== */

const artists = [

    {
        id: 1,
        name: "Raghav Sharma",
        state: "Haryana",
        artForm: "Folk Music",
        avatar: "🎵",
        experience: "18+",
        artworks: "35+",
        followers: "1.2K",
        description:
            "A folk musician dedicated to preserving traditional melodies and regional musical stories.",
        story:
            "His musical journey focuses on keeping Haryana's folk traditions alive and introducing them to younger generations."
    },

    {
        id: 2,
        name: "Meera Kumari",
        state: "Rajasthan",
        artForm: "Folk Painting",
        avatar: "🎨",
        experience: "15+",
        artworks: "80+",
        followers: "2.4K",
        description:
            "A traditional painter inspired by village life, folk stories and colourful Rajasthani traditions.",
        story:
            "Her paintings combine traditional motifs with stories passed down through generations."
    },

    {
        id: 3,
        name: "Arjun Prajapati",
        state: "Gujarat",
        artForm: "Handicraft",
        avatar: "🧵",
        experience: "22+",
        artworks: "120+",
        followers: "3.1K",
        description:
            "A craftsman working with traditional handmade designs and decorative craft techniques.",
        story:
            "His work represents the patience and skill involved in India's traditional handcrafted arts."
    },

    {
        id: 4,
        name: "Ananya Das",
        state: "West Bengal",
        artForm: "Folk Painting",
        avatar: "🖌️",
        experience: "12+",
        artworks: "65+",
        followers: "1.8K",
        description:
            "An artist inspired by storytelling traditions, nature and folk narratives.",
        story:
            "Her art uses traditional storytelling as a way to preserve local history and cultural memory."
    },

    {
        id: 5,
        name: "Vikram Singh",
        state: "Punjab",
        artForm: "Folk Music",
        avatar: "🥁",
        experience: "20+",
        artworks: "45+",
        followers: "2.8K",
        description:
            "A folk performer passionate about traditional Punjabi music and cultural celebrations.",
        story:
            "His performances bring traditional music into modern cultural events while preserving its roots."
    },

    {
        id: 6,
        name: "Lakshmi Iyer",
        state: "Tamil Nadu",
        artForm: "Classical Dance",
        avatar: "💃",
        experience: "16+",
        artworks: "50+",
        followers: "3.5K",
        description:
            "A classical performer who teaches traditional dance and cultural storytelling.",
        story:
            "Her performances use movement and expression to communicate stories from India's cultural heritage."
    },

    {
        id: 7,
        name: "Suresh Kumar",
        state: "Uttar Pradesh",
        artForm: "Pottery",
        avatar: "🏺",
        experience: "19+",
        artworks: "100+",
        followers: "1.5K",
        description:
            "A traditional potter creating handmade objects using age-old techniques.",
        story:
            "His craft highlights the connection between everyday life, soil and traditional Indian craftsmanship."
    },

    {
        id: 8,
        name: "Kavita Devi",
        state: "Odisha",
        artForm: "Textile Art",
        avatar: "🧶",
        experience: "17+",
        artworks: "90+",
        followers: "2.1K",
        description:
            "A textile artist working with traditional patterns, weaving and handmade designs.",
        story:
            "Her work preserves textile traditions by combining inherited techniques with new generations of learners."
    },

    {
        id: 9,
        name: "Mohan Lal",
        state: "Kerala",
        artForm: "Handicraft",
        avatar: "🪵",
        experience: "24+",
        artworks: "150+",
        followers: "2.7K",
        description:
            "A craftsman inspired by Kerala's natural materials and traditional decorative arts.",
        story:
            "His craft reflects the relationship between nature, local materials and traditional craftsmanship."
    }

];


/* =====================================================
   SPLASH
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("splashScreen").classList.add("hidden");
        document.getElementById("loginScreen").classList.remove("hidden");

    }, 2200);

});


/* =====================================================
   LOGIN / SIGNUP
===================================================== */

function loginUser(event) {

    event.preventDefault();

    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("languageScreen").classList.remove("hidden");

}


function signupUser(event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();

    document.getElementById("profileName").value = name;

    document.getElementById("signupScreen").classList.add("hidden");
    document.getElementById("languageScreen").classList.remove("hidden");

}


function showSignup() {

    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("signupScreen").classList.remove("hidden");

}


function showLogin() {

    document.getElementById("signupScreen").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");

}


function googleLogin() {

    alert("Google Login will be connected with Supabase Auth later.");

}


function togglePassword(id) {

    const input = document.getElementById(id);

    input.type =
        input.type === "password"
            ? "text"
            : "password";

}


/* =====================================================
   LANGUAGE
===================================================== */

function selectLanguage(button, language) {

    document.querySelectorAll(".language-card")
        .forEach(card => card.classList.remove("selected"));

    button.classList.add("selected");

    selectedLanguage = language;

}


function continueLanguage() {

    if (!selectedLanguage) {

        alert("Please select a language first.");
        return;

    }

    document.getElementById("languageScreen").classList.add("hidden");
    document.getElementById("profileScreen").classList.remove("hidden");

}


/* =====================================================
   PROFILE
===================================================== */

function toggleInterest(button, interest) {

    button.classList.toggle("selected");

    if (selectedInterests.includes(interest)) {

        selectedInterests =
            selectedInterests.filter(item => item !== interest);

    } else {

        selectedInterests.push(interest);

    }

}


function completeProfile() {

    const name =
        document.getElementById("profileName").value.trim();

    const state =
        document.getElementById("profileState").value;

    if (!name) {

        alert("Please enter your name.");
        return;

    }

    if (!state) {

        alert("Please select your state.");
        return;

    }

    if (selectedInterests.length === 0) {

        alert("Please select at least one interest.");
        return;

    }

    userProfile = {
        name,
        state,
        interests: selectedInterests
    };

    updateDashboard();

    document.getElementById("profileScreen").classList.add("hidden");
    document.getElementById("homeScreen").classList.remove("hidden");

}


function updateDashboard() {

    document.getElementById("welcomeName").textContent =
        userProfile.name;

    document.getElementById("featuredTitle").textContent =
        `Discover ${userProfile.state}'s Culture`;

    document.getElementById("featuredDescription").textContent =
        `Explore the folk traditions, crafts, music and heritage of ${userProfile.state}.`;

}


/* =====================================================
   HOME / SCREEN NAVIGATION
===================================================== */

function showHomeScreen() {

    document.getElementById("artistsScreen").classList.add("hidden");
    document.getElementById("artistDetailModal").classList.add("hidden");

    document.getElementById("homeScreen").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function showArtistsScreen() {

    document.getElementById("homeScreen").classList.add("hidden");

    document.getElementById("artistsScreen").classList.remove("hidden");

    renderArtists(artists);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   ARTISTS
===================================================== */

function renderArtists(data) {

    const grid =
        document.getElementById("artistsGrid");

    const empty =
        document.getElementById("artistEmpty");

    const count =
        document.getElementById("artistCount");


    grid.innerHTML = "";

    count.textContent =
        `${data.length} artist${data.length !== 1 ? "s" : ""} found`;


    if (data.length === 0) {

        empty.classList.remove("hidden");
        return;

    }

    empty.classList.add("hidden");


    data.forEach(artist => {

        const card = document.createElement("div");

        card.className = "artist-card";

        card.innerHTML = `

            <div class="artist-card-top">

                <div class="artist-avatar">
                    ${artist.avatar}
                </div>

                <button
                    class="save-artist"
                    onclick="toggleSaveArtist(event, ${artist.id})"
                    id="save-${artist.id}"
                >
                    ♡
                </button>

            </div>


            <div class="artist-card-body">

                <span class="artist-tag">
                    ${artist.artForm}
                </span>

                <h3>
                    ${artist.name}
                </h3>

                <p class="artist-location">
                    📍 ${artist.state}, India
                </p>

                <p class="artist-description">
                    ${artist.description}
                </p>

                <div class="artist-card-bottom">

                    <span>
                        ${artist.experience} experience
                    </span>

                    <button
                        class="view-artist-btn"
                        onclick="openArtistDetail(${artist.id})"
                    >
                        View Profile
                    </button>

                </div>

            </div>

        `;

        grid.appendChild(card);

    });

}


function filterArtists() {

    const search =
        document.getElementById("artistSearch")
            .value
            .toLowerCase()
            .trim();

    const state =
        document.getElementById("artistStateFilter")
            .value;

    const artForm =
        document.getElementById("artistArtFilter")
            .value;


    const filtered =
        artists.filter(artist => {

            const matchesSearch =
                artist.name.toLowerCase().includes(search) ||
                artist.artForm.toLowerCase().includes(search) ||
                artist.state.toLowerCase().includes(search);

            const matchesState =
                state === "all" ||
                artist.state === state;

            const matchesArt =
                artForm === "all" ||
                artist.artForm === artForm;

            return (
                matchesSearch &&
                matchesState &&
                matchesArt
            );

        });


    renderArtists(filtered);

}


function clearArtistFilters() {

    document.getElementById("artistSearch").value = "";

    document.getElementById("artistStateFilter").value = "all";

    document.getElementById("artistArtFilter").value = "all";

    renderArtists(artists);

}


/* =====================================================
   ARTIST DETAIL
===================================================== */

let currentArtistId = null;


function openArtistDetail(id) {

    const artist =
        artists.find(item => item.id === id);

    if (!artist) return;

    currentArtistId = id;

    document.getElementById("detailAvatar").textContent =
        artist.avatar;

    document.getElementById("detailArtForm").textContent =
        artist.artForm;

    document.getElementById("detailName").textContent =
        artist.name;

    document.getElementById("detailLocation").textContent =
        `📍 ${artist.state}, India`;

    document.getElementById("detailExperience").textContent =
        artist.experience;

    document.getElementById("detailArtworks").textContent =
        artist.artworks;

    document.getElementById("detailFollowers").textContent =
        artist.followers;

    document.getElementById("detailDescription").textContent =
        artist.description;

    document.getElementById("detailStory").textContent =
        artist.story;


    updateDetailSaveButton();

    document
        .getElementById("artistDetailModal")
        .classList.remove("hidden");

}


function closeArtistDetail() {

    document
        .getElementById("artistDetailModal")
        .classList.add("hidden");

}


function toggleSaveArtist(event, id) {

    event.stopPropagation();

    const saved =
        JSON.parse(
            localStorage.getItem("savedArtists") || "[]"
        );

    const index =
        saved.indexOf(id);


    if (index === -1) {

        saved.push(id);

    } else {

        saved.splice(index, 1);

    }


    localStorage.setItem(
        "savedArtists",
        JSON.stringify(saved)
    );


    updateSaveIcon(id);

}


function updateSaveIcon(id) {

    const saved =
        JSON.parse(
            localStorage.getItem("savedArtists") || "[]"
        );

    const button =
        document.getElementById(`save-${id}`);

    if (!button) return;


    if (saved.includes(id)) {

        button.textContent = "♥";
        button.classList.add("saved");

    } else {

        button.textContent = "♡";
        button.classList.remove("saved");

    }

}


function updateDetailSaveButton() {

    const saved =
        JSON.parse(
            localStorage.getItem("savedArtists") || "[]"
        );

    const button =
        document.getElementById("detailSaveBtn");


    if (saved.includes(currentArtistId)) {

        button.textContent = "♥ Saved Artist";

    } else {

        button.textContent = "♡ Save Artist";

    }

}


document
    .getElementById("detailSaveBtn")
    .addEventListener("click", () => {

        if (!currentArtistId) return;

        toggleSaveArtist(
            { stopPropagation: () => {} },
            currentArtistId
        );

        updateDetailSaveButton();

    });


/* =====================================================
   HOME FEATURES
===================================================== */

function openFeature(feature) {

    const modal =
        document.getElementById("featureModal");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("modalText");

    const icon =
        document.getElementById("modalIcon");


    if (feature === "Games") {

        icon.textContent = "🎮";

        title.textContent = "Cultural Games";

        text.textContent =
            "Play quizzes, earn XP, unlock badges and compete on the cultural leaderboard.";

    }

    else if (feature === "Cultural Map") {

        icon.textContent = "🗺️";

        title.textContent = "Cultural Map";

        text.textContent =
            "Explore India's states, historical places, traditional arts, festivals and cultural landmarks.";

    }

    else if (feature === "AI Cultural Guide") {

        icon.textContent = "🤖";

        title.textContent = "AI Cultural Guide";

        text.textContent =
            "Ask questions about Indian traditions, festivals, food, history, art and heritage.";

    }

    else {

        icon.textContent = "✨";

        title.textContent = feature;

        text.textContent =
            "This feature is part of the SanskritiSetu experience and will be connected with the backend later.";

    }


    modal.classList.remove("hidden");

}


function openCulture(category) {

    const modal =
        document.getElementById("featureModal");

    document.getElementById("modalIcon").textContent =
        "🌿";

    document.getElementById("modalTitle").textContent =
        category;

    document.getElementById("modalText").textContent =
        `Explore ${category} from different regions of India. More cultural content will be added in the next version.`;


    modal.classList.remove("hidden");

}


function closeModal() {

    document
        .getElementById("featureModal")
        .classList.add("hidden");

}


/* =====================================================
   PROFILE
===================================================== */

function showProfilePreview() {

    alert(
        `Name: ${userProfile.name}\nState: ${userProfile.state}\nInterests: ${userProfile.interests.join(", ")}`
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();
        closeArtistDetail();

    }

});


/* =====================================================
   ================= GAME SYSTEM ======================
===================================================== */


/* ================= QUIZ DATA ================= */

const quizData = {

    culture: {

        title: "India & Culture",
        time: 60,

        questions: [

            {
                question:
                    "Which country is known for having one of the world's oldest living cultural traditions?",

                options: [
                    "India",
                    "Canada",
                    "Brazil",
                    "Australia"
                ],

                answer: 0,

                explanation:
                    "India has a long and diverse cultural history spanning thousands of years."
            },


            {
                question:
                    "Which symbol is commonly associated with Indian spirituality?",

                options: [
                    "Om",
                    "Star",
                    "Crescent",
                    "Anchor"
                ],

                answer: 0,

                explanation:
                    "Om is an important spiritual symbol in Indian traditions."
            },


            {
                question:
                    "Which language has one of India's oldest classical literary traditions?",

                options: [
                    "Tamil",
                    "English",
                    "German",
                    "Spanish"
                ],

                answer: 0,

                explanation:
                    "Tamil has a very old and rich classical literary tradition."
            },


            {
                question:
                    "Which of these is a traditional Indian performing art?",

                options: [
                    "Kathak",
                    "Ballet only",
                    "Opera only",
                    "Jazz"
                ],

                answer: 0,

                explanation:
                    "Kathak is one of India's classical dance traditions."
            },


            {
                question:
                    "India is especially known for which type of cultural diversity?",

                options: [
                    "Languages, food, traditions and arts",
                    "Only one language",
                    "Only one festival",
                    "Only one style of food"
                ],

                answer: 0,

                explanation:
                    "India has tremendous diversity in languages, food, festivals, arts and traditions."
            }

        ]

    },


    festivals: {

        title: "Indian Festivals",
        time: 60,

        questions: [

            {
                question:
                    "Which festival is widely known as the Festival of Lights?",

                options: [
                    "Diwali",
                    "Holi",
                    "Onam",
                    "Baisakhi"
                ],

                answer: 0,

                explanation:
                    "Diwali is popularly known as the Festival of Lights."
            },


            {
                question:
                    "Which festival is famous for colours?",

                options: [
                    "Holi",
                    "Diwali",
                    "Pongal",
                    "Eid"
                ],

                answer: 0,

                explanation:
                    "Holi is widely celebrated as the festival of colours."
            },


            {
                question:
                    "Onam is traditionally associated with which Indian state?",

                options: [
                    "Kerala",
                    "Punjab",
                    "Haryana",
                    "Gujarat"
                ],

                answer: 0,

                explanation:
                    "Onam is a major cultural festival of Kerala."
            },


            {
                question:
                    "Baisakhi is strongly associated with which region?",

                options: [
                    "Punjab",
                    "Kerala",
                    "Odisha",
                    "Assam"
                ],

                answer: 0,

                explanation:
                    "Baisakhi is an important festival in Punjab and the surrounding region."
            },


            {
                question:
                    "Pongal is especially celebrated in which state?",

                options: [
                    "Tamil Nadu",
                    "Rajasthan",
                    "Himachal Pradesh",
                    "Bihar"
                ],

                answer: 0,

                explanation:
                    "Pongal is a major harvest festival of Tamil Nadu."
            }

        ]

    },


    arts: {

        title: "Arts & Crafts",
        time: 75,

        questions: [

            {
                question:
                    "Madhubani painting is traditionally associated with which state?",

                options: [
                    "Bihar",
                    "Punjab",
                    "Kerala",
                    "Goa"
                ],

                answer: 0,

                explanation:
                    "Madhubani painting is traditionally associated with Bihar."
            },


            {
                question:
                    "Which art form is associated with Odisha?",

                options: [
                    "Pattachitra",
                    "Phulkari",
                    "Warli",
                    "Kalamkari only"
                ],

                answer: 0,

                explanation:
                    "Pattachitra is a traditional painting style strongly associated with Odisha."
            },


            {
                question:
                    "Phulkari is traditionally associated with which region?",

                options: [
                    "Punjab",
                    "Kerala",
                    "Tamil Nadu",
                    "Assam"
                ],

                answer: 0,

                explanation:
                    "Phulkari is a traditional embroidery style associated with Punjab."
            },


            {
                question:
                    "Warli painting is traditionally associated with which state?",

                options: [
                    "Maharashtra",
                    "Rajasthan",
                    "Haryana",
                    "Sikkim"
                ],

                answer: 0,

                explanation:
                    "Warli painting is traditionally associated with Maharashtra."
            },


            {
                question:
                    "Which material is commonly associated with traditional pottery?",

                options: [
                    "Clay",
                    "Plastic",
                    "Glass only",
                    "Rubber"
                ],

                answer: 0,

                explanation:
                    "Clay is one of the primary materials used in traditional pottery."
            }

        ]

    },


    heritage: {

        title: "Indian Heritage",
        time: 75,

        questions: [

            {
                question:
                    "The Taj Mahal is located in which city?",

                options: [
                    "Agra",
                    "Delhi",
                    "Jaipur",
                    "Lucknow"
                ],

                answer: 0,

                explanation:
                    "The Taj Mahal is located in Agra, Uttar Pradesh."
            },


            {
                question:
                    "Which monument is located in Delhi?",

                options: [
                    "Red Fort",
                    "Gateway of India",
                    "Charminar",
                    "Konark Temple"
                ],

                answer: 0,

                explanation:
                    "The Red Fort is a major historical monument in Delhi."
            },


            {
                question:
                    "The Konark Sun Temple is located in which state?",

                options: [
                    "Odisha",
                    "Punjab",
                    "Gujarat",
                    "Haryana"
                ],

                answer: 0,

                explanation:
                    "The Konark Sun Temple is located in Odisha."
            },


            {
                question:
                    "Hampi is located in which Indian state?",

                options: [
                    "Karnataka",
                    "Rajasthan",
                    "Bihar",
                    "Punjab"
                ],

                answer: 0,

                explanation:
                    "Hampi is a historic site in Karnataka."
            },


            {
                question:
                    "India has many heritage sites because of its:",

                options: [
                    "Rich and diverse history",
                    "Single cultural tradition",
                    "Modern architecture only",
                    "Small geographical area"
                ],

                answer: 0,

                explanation:
                    "India's long and diverse history has created a large variety of heritage sites."
            }

        ]

    },


    daily: {

        title: "Daily Cultural Challenge",
        time: 45,

        questions: [

            {
                question:
                    "Which festival is famous for colourful celebrations?",

                options: [
                    "Holi",
                    "Diwali",
                    "Onam",
                    "Pongal"
                ],

                answer: 0,

                explanation:
                    "Holi is famous for its colourful celebrations."
            },


            {
                question:
                    "Which traditional art is associated with Bihar?",

                options: [
                    "Madhubani",
                    "Phulkari",
                    "Warli",
                    "Pattachitra"
                ],

                answer: 0,

                explanation:
                    "Madhubani painting is traditionally associated with Bihar."
            },


            {
                question:
                    "Which city is home to the Taj Mahal?",

                options: [
                    "Agra",
                    "Mumbai",
                    "Jaipur",
                    "Chennai"
                ],

                answer: 0,

                explanation:
                    "The Taj Mahal is located in Agra."
            },


            {
                question:
                    "Which state is associated with Onam?",

                options: [
                    "Kerala",
                    "Punjab",
                    "Gujarat",
                    "Haryana"
                ],

                answer: 0,

                explanation:
                    "Onam is a major festival of Kerala."
            },


            {
                question:
                    "Which material is commonly used in pottery?",

                options: [
                    "Clay",
                    "Paper",
                    "Plastic",
                    "Rubber"
                ],

                answer: 0,

                explanation:
                    "Traditional pottery commonly uses clay."
            }

        ]

    }

};


/* =====================================================
   GAME STATE
===================================================== */

let currentQuizType = "";
let currentQuizQuestions = [];
let currentQuestionIndex = 0;

let selectedAnswer = null;
let correctCount = 0;
let wrongCount = 0;

let quizTimerInterval = null;
let quizTimeLeft = 0;

let quizXP = Number(
    localStorage.getItem("quizXP") || 0
);

let playedGames = Number(
    localStorage.getItem("playedGames") || 0
);

let bestQuizScore = Number(
    localStorage.getItem("bestQuizScore") || 0
);

let badgeCount = Number(
    localStorage.getItem("badgeCount") || 0
);


/* =====================================================
   SHOW GAMES
===================================================== */

function showGamesScreen() {

    document
        .getElementById("homeScreen")
        .classList.add("hidden");

    document
        .getElementById("artistsScreen")
        .classList.add("hidden");

    document
        .getElementById("quizScreen")
        .classList.add("hidden");

    document
        .getElementById("resultScreen")
        .classList.add("hidden");

    document
        .getElementById("gamesScreen")
        .classList.remove("hidden");


    updateGameStats();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   START QUIZ
===================================================== */

function startQuiz(type) {

    const quiz =
        quizData[type];

    if (!quiz) return;


    currentQuizType = type;

    currentQuizQuestions =
        quiz.questions;

    currentQuestionIndex = 0;

    selectedAnswer = null;

    correctCount = 0;

    wrongCount = 0;

    quizTimeLeft = quiz.time;


    document
        .getElementById("gamesScreen")
        .classList.add("hidden");

    document
        .getElementById("resultScreen")
        .classList.add("hidden");

    document
        .getElementById("quizScreen")
        .classList.remove("hidden");


    document.getElementById("totalQuestionNumber")
        .textContent =
        currentQuizQuestions.length;


    startQuizTimer();

    showQuestion();

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    const question =
        currentQuizQuestions[currentQuestionIndex];


    selectedAnswer = null;


    document
        .getElementById("currentQuestionNumber")
        .textContent =
        currentQuestionIndex + 1;


    document
        .getElementById("questionCategory")
        .textContent =
        quizData[currentQuizType].title.toUpperCase();


    document
        .getElementById("questionText")
        .textContent =
        question.question;


    const optionsContainer =
        document.getElementById("questionOptions");


    optionsContainer.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "question-option";


            button.innerHTML = `

                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span>
                    ${option}
                </span>

            `;


            button.onclick = () => {

                selectAnswer(index);

            };


            optionsContainer.appendChild(button);

        }
    );


    document
        .getElementById("nextQuestionBtn")
        .disabled = true;


    document
        .getElementById("nextQuestionBtn")
        .textContent =
        currentQuestionIndex ===
        currentQuizQuestions.length - 1
            ? "Finish Quiz →"
            : "Next →";


    const progress =
        ((currentQuestionIndex + 1) /
        currentQuizQuestions.length) * 100;


    document
        .getElementById("quizProgressBar")
        .style.width =
        `${progress}%`;


    document
        .getElementById("questionHint")
        .textContent =
        "Choose the correct answer";

}


/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(index) {

    selectedAnswer = index;


    const options =
        document.querySelectorAll(
            ".question-option"
        );


    options.forEach(
        option =>
            option.classList.remove("selected")
    );


    if (options[index]) {

        options[index]
            .classList.add("selected");

    }


    document
        .getElementById("nextQuestionBtn")
        .disabled = false;


    document
        .getElementById("questionHint")
        .textContent =
        "Answer selected ✓";

}


/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {

    if (selectedAnswer === null) {

        return;

    }


    const question =
        currentQuizQuestions[currentQuestionIndex];


    if (
        selectedAnswer ===
        question.answer
    ) {

        correctCount++;

    } else {

        wrongCount++;

    }


    currentQuestionIndex++;


    if (
        currentQuestionIndex >=
        currentQuizQuestions.length
    ) {

        finishQuiz();

        return;

    }


    showQuestion();

}


/* =====================================================
   TIMER
===================================================== */

function startQuizTimer() {

    clearInterval(quizTimerInterval);


    updateTimerDisplay();


    quizTimerInterval =
        setInterval(() => {

            quizTimeLeft--;

            updateTimerDisplay();


            if (quizTimeLeft <= 0) {

                clearInterval(
                    quizTimerInterval
                );

                finishQuiz();

            }

        }, 1000);

}


function updateTimerDisplay() {

    const timer =
        document.getElementById("quizTimer");


    if (!timer) return;


    timer.textContent =
        quizTimeLeft;


    if (quizTimeLeft <= 10) {

        timer.parentElement.style.background =
            "#ffe5e0";

    } else {

        timer.parentElement.style.background =
            "#fff1e8";

    }

}


/* =====================================================
   FINISH QUIZ
===================================================== */

function finishQuiz() {

    clearInterval(
        quizTimerInterval
    );


    /*
       If timer finishes while an unanswered
       question is visible, count it as wrong.
    */

    if (
        currentQuestionIndex <
        currentQuizQuestions.length &&
        selectedAnswer !== null
    ) {

        const question =
            currentQuizQuestions[currentQuestionIndex];


        if (
            selectedAnswer ===
            question.answer
        ) {

            correctCount++;

        } else {

            wrongCount++;

        }

    }


    const total =
        currentQuizQuestions.length;


    wrongCount =
        total - correctCount;


    const percentage =
        Math.round(
            (correctCount / total) * 100
        );


    const earned =
        correctCount * 10;


    quizXP += earned;

    playedGames++;


    if (
        percentage >
        bestQuizScore
    ) {

        bestQuizScore =
            percentage;

    }


    /*
       Badge system
    */

    if (
        percentage >= 80 &&
        badgeCount === 0
    ) {

        badgeCount = 1;

    }


    if (
        percentage === 100 &&
        badgeCount < 2
    ) {

        badgeCount = 2;

    }


    localStorage.setItem(
        "quizXP",
        quizXP
    );

    localStorage.setItem(
        "playedGames",
        playedGames
    );

    localStorage.setItem(
        "bestQuizScore",
        bestQuizScore
    );

    localStorage.setItem(
        "badgeCount",
        badgeCount
    );


    showResult(
        percentage,
        earned
    );

}


/* =====================================================
   RESULT
===================================================== */

function showResult(
    percentage,
    earned
) {

    document
        .getElementById("quizScreen")
        .classList.add("hidden");


    document
        .getElementById("resultScreen")
        .classList.remove("hidden");


    document
        .getElementById("finalPercentage")
        .textContent =
        `${percentage}%`;


    document
        .getElementById("correctAnswers")
        .textContent =
        correctCount;


    document
        .getElementById("wrongAnswers")
        .textContent =
        wrongCount;


    document
        .getElementById("earnedXP")
        .textContent =
        `+${earned}`;


    let title =
        "Keep Exploring!";


    let message =
        "Every quiz helps you discover something new.";


    let badge =
        "🌱 Culture Learner";


    if (percentage >= 80) {

        title = "Excellent! 🎉";

        message =
            "You have a strong knowledge of Indian culture.";

        badge =
            "🏆 Culture Champion";

    }

    else if (percentage >= 60) {

        title = "Great Job! 👏";

        message =
            "You are building a strong cultural knowledge.";

        badge =
            "🎖️ Culture Explorer";

    }


    document
        .getElementById("resultTitle")
        .textContent =
        title;


    document
        .getElementById("resultMessage")
        .textContent =
        message;


    document
        .getElementById("resultBadge")
        .innerHTML =
        badge;


    updateGameStats();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   RESTART
===================================================== */

function restartCurrentQuiz() {

    startQuiz(
        currentQuizType
    );

}


/* =====================================================
   EXIT QUIZ
===================================================== */

function exitQuiz() {

    clearInterval(
        quizTimerInterval
    );


    showGamesScreen();

}


/* =====================================================
   GAME STATS
===================================================== */

function updateGameStats() {

    const xp =
        document.getElementById("totalXP");

    const played =
        document.getElementById("gamesPlayed");

    const best =
        document.getElementById("bestScore");

    const badges =
        document.getElementById("badgeCount");

    const miniXP =
        document.getElementById("gamesXP");


    if (xp)
        xp.textContent = quizXP;

    if (played)
        played.textContent = playedGames;

    if (best)
        best.textContent =
            `${bestQuizScore}%`;

    if (badges)
        badges.textContent = badgeCount;

    if (miniXP)
        miniXP.textContent = quizXP;

}


/* =====================================================
   UPDATE OPEN FEATURE
===================================================== */

const originalOpenFeature =
    window.openFeature;


window.openFeature = function(feature) {

    if (feature === "Games") {

        showGamesScreen();

        return;

    }


    /*
       Existing features continue working
    */

    if (typeof originalOpenFeature === "function") {

        originalOpenFeature(feature);

    }

};


/* =====================================================
   GAMES ON LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateGameStats();

    }
);

/* =====================================================
   SCREEN NAVIGATION - GAMES
===================================================== */

function hideAllMainScreens() {

    const screens = [
        "homeScreen",
        "artistsScreen",
        "gamesScreen",
        "quizScreen",
        "resultScreen",
        "culturalMapScreen"
    ];

    screens.forEach(id => {
        const screen = document.getElementById(id);

        if (screen) {
            screen.classList.add("hidden");
        }
    });
}


/* ================= HOME ================= */

function showHomeScreen() {

    hideAllMainScreens();

    const home = document.getElementById("homeScreen");

    if (home) {
        home.classList.remove("hidden");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= ARTISTS ================= */

function showArtistsScreen() {

    hideAllMainScreens();

    const artists = document.getElementById("artistsScreen");

    if (artists) {
        artists.classList.remove("hidden");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (typeof renderArtists === "function") {
        renderArtists();
    }
}


/* ================= GAMES ================= */

function showGamesScreen() {

    hideAllMainScreens();

    const games = document.getElementById("gamesScreen");

    if (games) {
        games.classList.remove("hidden");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (typeof updateGameStats === "function") {
        updateGameStats();
    }
}


/* ================= OPEN FEATURE ================= */

function openFeature(feature) {

    if (feature === "Games") {

        showGamesScreen();
        return;
    }

    if (feature === "Cultural Map") {

        showFeatureModal(
            "🗺️",
            "Cultural Map",
            "Explore India's cultural places, traditions and heritage from different regions."
        );

        return;
    }

    if (feature === "AI Cultural Guide") {

        showFeatureModal(
            "🤖",
            "AI Cultural Guide",
            "Ask questions about Indian culture, traditions, festivals, food, art and history."
        );

        return;
    }

    showFeatureModal(
        "✨",
        feature,
        "This feature is coming soon."
    );
}


/* ================= FEATURE MODAL ================= */

function showFeatureModal(icon, title, text) {

    const modal = document.getElementById("featureModal");

    if (!modal) return;

    document.getElementById("modalIcon").textContent = icon;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;

    modal.classList.remove("hidden");
}


function closeModal() {

    const modal = document.getElementById("featureModal");

    if (modal) {
        modal.classList.add("hidden");
    }
}

/* =====================================================
   CULTURAL MAP DATA
===================================================== */

const culturalMapData = [

    {
        state: "Haryana",
        icon: "🌾",
        tagline: "Land of vibrant folk traditions",
        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Haryana is known for its strong rural traditions, folk music, dance, local crafts and agricultural heritage.",

        arts:
            "Phulkari, pottery, folk music and traditional handicrafts.",

        food:
            "Bajra roti, churma, lassi and traditional rural dishes.",

        festivals:
            "Baisakhi, Teej, Holi and Lohri.",

        heritage:
            "Kurukshetra, Rakhigarhi and historic sites connected with Haryana's ancient heritage.",

        story:
            "Haryana's culture is deeply connected with village life, agriculture, folk traditions and the stories of the Mahabharata."
    },

    {
        state: "Rajasthan",
        icon: "🏜️",
        tagline: "Land of royal heritage",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Rajasthan is famous for its colourful traditions, royal architecture, folk music and vibrant handicrafts.",

        arts:
            "Madhubani-style folk influences, miniature painting, blue pottery and block printing.",

        food:
            "Dal Baati Churma, Gatte ki Sabzi and Ker Sangri.",

        festivals:
            "Gangaur, Teej, Pushkar Fair and Desert Festival.",

        heritage:
            "Jaipur City Palace, Amber Fort, Jaisalmer Fort and Udaipur's heritage.",

        story:
            "The culture of Rajasthan reflects centuries of royal history, desert life, colourful clothing, music and craftsmanship."
    },

    {
        state: "Uttar Pradesh",
        icon: "🛕",
        tagline: "A land of spiritual and artistic heritage",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Uttar Pradesh has a rich heritage of temples, classical arts, crafts, literature and spiritual traditions.",

        arts:
            "Chikankari, brassware, pottery and classical dance traditions.",

        food:
            "Awadhi biryani, kebabs, kachori and traditional sweets.",

        festivals:
            "Diwali, Holi, Janmashtami and Dev Deepawali.",

        heritage:
            "Taj Mahal, Varanasi, Ayodhya, Mathura and Fatehpur Sikri.",

        story:
            "From the ghats of Varanasi to the heritage of Agra and the traditions of Braj, Uttar Pradesh contains many layers of Indian cultural history."
    },

    {
        state: "Punjab",
        icon: "🌾",
        tagline: "Land of energy and folk traditions",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Punjab is known for energetic folk dances, music, agriculture and warm community traditions.",

        arts:
            "Phulkari embroidery, Punjabi folk music and traditional crafts.",

        food:
            "Makki di roti, sarson da saag, lassi and traditional Punjabi dishes.",

        festivals:
            "Baisakhi, Lohri and Gurpurab.",

        heritage:
            "Golden Temple, Jallianwala Bagh and historic Sikh heritage sites.",

        story:
            "Punjabi culture is celebrated through music, dance, food, festivals and a strong tradition of community participation."
    },

    {
        state: "Gujarat",
        icon: "🪔",
        tagline: "Colourful crafts and traditions",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Gujarat has a rich tradition of textiles, embroidery, folk dance and colourful festivals.",

        arts:
            "Bandhani, Patola weaving, embroidery and traditional handicrafts.",

        food:
            "Dhokla, thepla, undhiyu and fafda.",

        festivals:
            "Navratri, Uttarayan and Rann Utsav.",

        heritage:
            "Rani ki Vav, Dholavira and historic Ahmedabad.",

        story:
            "Gujarat's cultural identity combines colourful textiles, traditional crafts, community celebrations and ancient heritage."
    },

    {
        state: "West Bengal",
        icon: "🎨",
        tagline: "Art, literature and cultural expression",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "West Bengal is known for literature, music, painting, theatre and rich festival traditions.",

        arts:
            "Kantha embroidery, Kalighat painting and terracotta art.",

        food:
            "Rasgulla, sandesh, luchi and traditional Bengali cuisine.",

        festivals:
            "Durga Puja, Poila Boishakh and Kali Puja.",

        heritage:
            "Victoria Memorial, Bishnupur temples and Kolkata's cultural heritage.",

        story:
            "West Bengal has a strong cultural tradition where literature, music, art and festivals play an important role in everyday life."
    },

    {
        state: "Odisha",
        icon: "🛕",
        tagline: "Temple traditions and classical arts",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Odisha is famous for temple architecture, classical dance, crafts and traditional festivals.",

        arts:
            "Pattachitra, stone carving, silver filigree and Odissi dance.",

        food:
            "Dalma, pakhala bhata and traditional Odia sweets.",

        festivals:
            "Rath Yatra, Durga Puja and Raja Parba.",

        heritage:
            "Konark Sun Temple, Jagannath Temple and ancient temple architecture.",

        story:
            "Odisha's culture is deeply connected with temple traditions, classical dance, painting and centuries-old craftsmanship."
    },

    {
        state: "Tamil Nadu",
        icon: "🪷",
        tagline: "Classical traditions and temple heritage",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Tamil Nadu is known for classical dance, music, temple architecture and ancient Tamil traditions.",

        arts:
            "Bharatanatyam, Tanjore painting, bronze sculpture and weaving.",

        food:
            "Idli, dosa, sambar, pongal and traditional Tamil cuisine.",

        festivals:
            "Pongal, Tamil New Year and Navaratri.",

        heritage:
            "Brihadisvara Temple, Mahabalipuram and Madurai temples.",

        story:
            "Tamil Nadu preserves one of India's oldest continuous cultural traditions through language, temples, classical arts and festivals."
    },

    {
        state: "Kerala",
        icon: "🌴",
        tagline: "God's Own Country of traditions",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Kerala has a unique cultural identity shaped by classical art forms, festivals, cuisine and coastal traditions.",

        arts:
            "Kathakali, Mohiniyattam, mural painting and traditional crafts.",

        food:
            "Appam, puttu, avial and traditional Kerala cuisine.",

        festivals:
            "Onam, Vishu and Thrissur Pooram.",

        heritage:
            "Padmanabhaswamy Temple, traditional Kerala architecture and historic sites.",

        story:
            "Kerala's culture combines performing arts, traditional architecture, festivals, food and a strong connection with nature."
    },

    {
        state: "Maharashtra",
        icon: "🥁",
        tagline: "Folk traditions and historic heritage",

        categories: ["arts", "food", "festivals", "heritage"],

        description:
            "Maharashtra has a diverse cultural heritage shaped by folk traditions, historic forts, literature and performing arts.",

        arts:
            "Warli painting, Paithani weaving and traditional folk performances.",

        food:
            "Puran poli, misal pav, bhakri and traditional Maharashtrian dishes.",

        festivals:
            "Ganesh Chaturthi, Gudi Padwa and Makar Sankranti.",

        heritage:
            "Ajanta and Ellora Caves, Raigad Fort and historic Mumbai.",

        story:
            "Maharashtra's heritage connects ancient cave art, forts, folk traditions, literature and vibrant public celebrations."
    }

];


/* =====================================================
   CULTURAL MAP STATE
===================================================== */

let currentCultureCategory = "all";


/* =====================================================
   SHOW CULTURAL MAP
===================================================== */

function showCulturalMapScreen() {

    hideAllMainScreens();

    const screen = document.getElementById("culturalMapScreen");

    if (screen) {
        screen.classList.remove("hidden");
    }

    renderCultureStates();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   RENDER STATES
===================================================== */

function renderCultureStates() {

    const grid = document.getElementById("cultureStateGrid");
    const empty = document.getElementById("cultureStateEmpty");
    const count = document.getElementById("cultureStateCount");

    if (!grid) return;

    const searchInput =
        document.getElementById("cultureStateSearch");

    const search =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

    const filtered = culturalMapData.filter(item => {

        const matchesSearch =
            item.state.toLowerCase().includes(search) ||
            item.tagline.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search);

        const matchesCategory =
            currentCultureCategory === "all" ||
            item.categories.includes(currentCultureCategory);

        return matchesSearch && matchesCategory;
    });


    grid.innerHTML = "";


    filtered.forEach(item => {

        const card = document.createElement("button");

        card.className = "culture-state-card";

        card.innerHTML = `
            <div class="state-card-icon">
                ${item.icon}
            </div>

            <h3>${item.state}</h3>

            <p>
                ${item.tagline}
            </p>

            <span class="state-card-arrow">
                →
            </span>
        `;

        card.onclick = function() {
            openCultureState(item.state);
        };

        grid.appendChild(card);

    });


    if (count) {
        count.textContent =
            `${filtered.length} states available`;
    }


    if (empty) {

        if (filtered.length === 0) {
            empty.classList.remove("hidden");
        } else {
            empty.classList.add("hidden");
        }

    }

}


/* =====================================================
   SEARCH
===================================================== */

function filterCultureStates() {
    renderCultureStates();
}


/* =====================================================
   CATEGORY FILTER
===================================================== */

function filterCultureCategory(category, button) {

    currentCultureCategory = category;

    document
        .querySelectorAll(".culture-category")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    if (button) {
        button.classList.add("active");
    }

    renderCultureStates();
}


/* =====================================================
   OPEN STATE
===================================================== */

function openCultureState(stateName) {

    const state = culturalMapData.find(
        item => item.state === stateName
    );

    if (!state) return;


    document.getElementById("cultureDetailIcon")
        .textContent = state.icon;

    document.getElementById("cultureDetailRegion")
        .textContent = "INDIA";

    document.getElementById("cultureDetailName")
        .textContent = state.state;

    document.getElementById("cultureDetailTagline")
        .textContent = state.tagline;

    document.getElementById("cultureDetailDescription")
        .textContent = state.description;

    document.getElementById("cultureArts")
        .textContent = state.arts;

    document.getElementById("cultureFood")
        .textContent = state.food;

    document.getElementById("cultureFestivals")
        .textContent = state.festivals;

    document.getElementById("cultureHeritage")
        .textContent = state.heritage;

    document.getElementById("cultureStory")
        .textContent = state.story;


    const modal =
        document.getElementById("cultureDetailModal");

    modal.classList.remove("hidden");

}


/* =====================================================
   CLOSE DETAIL
===================================================== */

function closeCultureDetail() {

    const modal =
        document.getElementById("cultureDetailModal");

    if (modal) {
        modal.classList.add("hidden");
    }

}


/* =====================================================
   CULTURAL MAP OPEN FEATURE
===================================================== */

function openFeature(feature) {

    if (feature === "Games") {

        showGamesScreen();
        return;
    }


    if (feature === "Cultural Map") {

        showCulturalMapScreen();
        return;
    }


    if (feature === "AI Cultural Guide") {

        showFeatureModal(
            "🤖",
            "AI Cultural Guide",
            "Ask questions about Indian culture, traditions, festivals, food, art and history."
        );

        return;
    }


    showFeatureModal(
        "✨",
        feature,
        "This feature is coming soon."
    );

}

