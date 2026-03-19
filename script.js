let currentQuestion = 0;

const questions = [
    {
        question: "Where was our very first outing?",
        answers: ["hydri super market"],
        messages: ["I still think about that day ❤️"],
        images: ["firstpicture.jpeg"]
    },
    {
        question: "What is my favorite thing about you?",
        answers: ["hands", "boobies"],
        messages: [
            "They are made to be in my hands 🥺❤️",
            "Softest & the most pleasing thing i have ever touched in my entire life 😍"
        ],
        images: [
            "hands.jpeg",
            "hehe.jpeg"
        ]
    },
    {   question: "Who is our favourite baby?",
        answers: ["meeru"],
        messages: ["Tell bhabi he is our kid hehe"],
        images: ["meeru.jpeg"]
    },
    {   question: "Kyaaa unle maan jaingay?",
        answers: ["yeth"],
        messages: ["InshAllahhhhhh"] 
    }
];

function startGame() {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    document.getElementById("bgMusic").play(); // 🎵 music starts

    loadQuestion();
}

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    let current = questions[currentQuestion];

    if (current.answers.includes(userAnswer)) {

        // Find which answer matched
        let index = current.answers.indexOf(userAnswer);

        // Show corresponding message
        document.getElementById("feedback").innerText = current.messages[index];

        let img = document.getElementById("quizImage");

if (current.images) {
    img.src = current.images[index];
    img.style.display = "block";
}

        currentQuestion++;

        setTimeout(() => {
            if (currentQuestion < questions.length) {
                document.getElementById("answer").value = "";
                document.getElementById("feedback").innerText = "";
                document.getElementById("quizImage").style.display = "none";
                loadQuestion();
            } else {
                document.getElementById("quiz").classList.add("hidden");                
document.getElementById("quiz").classList.add("hidden");
document.getElementById("final").classList.remove("hidden");

// 🎆 CONFETTI HERE
confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.9 }
});

typeMessage(
    `Happy Birthday meri jaan ❤️
    
    I don’t even know where to begin, but I’ll try.
    
    Iddu, you weren’t the same person to me when I first met you. We were completely different people, and I had no idea who you truly were. At first, I was attracted to you because of your beauty but now, after getting to know you, I swear I couldn’t have found anyone better.
    
    You are truly the purest soul I have ever met, and I promise I will take care of you forever, Inshallah.
    
    Time is getting closer now we need to take this love and turn it into something even more beautiful (our marriage).
    
    I honestly cannot ask to be with a more beautiful human with such a sweet smile, your perfectly structured face, your stunning eyes, and your beautiful heart everything about you is perfect to me.
    
    I love you so much, Iqra ❤️
    
    I wish I could be there with you and celebrate your day together, but Inshallah on your next birthday, we will meet. INSHALLAH 🤍
    
    Again, Happy Birthday my princess. You deserve all the happiness in the world. You are the most gorgeous woman alive, and you are mine 🥰
    
    Enjoy your day 😘❤️
    
    I love you ❤️`,
    "loveMessage"
    );
            }
        }, 2500);

    } else {
        document.getElementById("feedback").innerText = "Try again ❤️";
    }
}

function typeMessage(text, elementId) {
    let i = 0;
    let speed = 50;
    
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
            }
        }
    
        typing();
    }
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";
    
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
        document.querySelector(".hearts").appendChild(heart);
    
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    setInterval(createHeart, 400);
    function checkPassword() {
        let input = document.getElementById("passwordInput").value.trim().toLowerCase();
    
        let correctPassword = "ayra"; // 🔐 CHANGE THIS
    
        if (input === correctPassword) {
            document.getElementById("passwordScreen").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
        } else {
            document.getElementById("passwordError").innerText = "Wrong password 😢";
        }
    }