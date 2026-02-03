// ===== DOM ELEMENTS =====
const nameInput = document.getElementById('nameInput');
const activateBtn = document.getElementById('activateBtn');
const dynamicMessage = document.getElementById('dynamicMessage');
const mainTitle = document.getElementById('mainTitle');
const confettiBtn = document.getElementById('confettiBtn');
const laserBtn = document.getElementById('laserBtn');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volume');
const loveBtn = document.getElementById('loveBtn');
const loveMeter = document.getElementById('loveMeter');
const loveCount = document.getElementById('loveCount');
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseOutput = document.getElementById('surpriseOutput');
const shareBtn = document.getElementById('shareBtn');
const resetBtn = document.getElementById('resetBtn');
const viewCount = document.getElementById('viewCount');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Audio elements
const bgMusic = document.getElementById('bgMusic');
const laserSound = document.getElementById('laserSound');
const confettiSound = document.getElementById('confettiSound');
const clickSound = document.getElementById('clickSound');

// Containers
const particleBg = document.getElementById('particle-bg');
const starsContainer = document.getElementById('stars');
const confettiContainer = document.getElementById('confettiContainer');
const laserContainer = document.getElementById('laserContainer');

// ===== DATA =====
const birthdayMessages = [
    "Activating celestial birthday protocols...",
    "Initializing quantum celebration matrix...",
    "Downloading cosmic birthday blessings...",
    "Synchronizing with universal joy frequencies...",
    "Transmitting stardust wishes to your location..."
];

const wishes = [
    {
        title: "STARDUST BLESSINGS",
        message: "May cosmic prosperity flow through your veins like starlight in the nebula.",
        color: "#00f3ff"
    },
    {
        title: "ENERGY SURGE",
        message: "Receive infinite vitality from the quantum energy fields of the universe.",
        color: "#ff00ff"
    },
    {
        title: "GALACTIC LOVE",
        message: "Universal harmony resonates with your soul, creating bonds across dimensions.",
        color: "#00ff9d"
    },
    {
        title: "QUANTUM JOY",
        message: "Digital happiness particles align to create perfect moments of celebration.",
        color: "#9d00ff"
    }
];

const surpriseMessages = [
    "🎉 ACCESS GRANTED: Downloading birthday happiness... COMPLETE!",
    "✨ QUANTUM SURPRISE: You've unlocked infinite celebration energy!",
    "🚀 CELESTIAL GIFT: A nebula of joy has been deployed to your location!",
    "💫 DIGITAL WISH: Your birthday will be remembered across the cosmos!",
    "🌟 STAR MAP: A constellation has been named in your honor today!"
];

// ===== STATE VARIABLES =====
let userName = '';
let loveUnits = 0;
let viewCountNumber = localStorage.getItem('celestialViews') || 0;
let currentMessageIndex = 0;
let isMusicPlaying = false;

// ===== INITIALIZATION =====
function init() {
    // Increment view count
    viewCountNumber++;
    localStorage.setItem('celestialViews', viewCountNumber);
    viewCount.textContent = viewCountNumber;
    
    // Create particle background
    createParticles();
    
    // Create stars
    createStars();
    
    // Setup event listeners
    setupEventListeners();
    
    // Start animations
    startAnimations();
    
    // Start countdown
    startCountdown();
    
    // Typewriter effect
    typeWriterEffect();
    
    // Set volume
    bgMusic.volume = volumeSlider.value / 100;
    
    // Auto-start music
    setTimeout(() => {
        bgMusic.play();
        isMusicPlaying = true;
        playBtn.classList.add('active');
        pauseBtn.classList.remove('active');
    }, 1000);
}

// ===== PARTICLE SYSTEM =====
function createParticles() {
    const colors = ['#00f3ff', '#ff00ff', '#00ff9d', '#9d00ff'];
    
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = Math.random() * 5 + 2 + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.opacity = '0.6';
        particle.style.filter = 'blur(1px)';
        
        particleBg.appendChild(particle);
        
        // Animate particle
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    
    // Additional movement
    setInterval(() => {
        const x = Math.random() * 40 - 20;
        const y = Math.random() * 40 - 20;
        particle.style.transform = `translate(${x}px, ${y}px)`;
    }, 2000);
}

// ===== STAR FIELD =====
function createStars() {
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = Math.random() * 3 + 'px';
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        
        starsContainer.appendChild(star);
        
        // Twinkle effect
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Activate celebration
    activateBtn.addEventListener('click', activateCelebration);
    
    // Name input enter key
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            activateCelebration();
        }
    });
    
    // Wish cards
    document.querySelectorAll('.wish-card').forEach(card => {
        card.addEventListener('click', () => {
            const wishId = parseInt(card.getAttribute('data-wish')) - 1;
            showWish(wishId);
        });
    });
    
    // Confetti button
    confettiBtn.addEventListener('click', createConfettiStorm);
    
    // Laser button
    laserBtn.addEventListener('click', fireLasers);
    
    // Audio controls
    playBtn.addEventListener('click', () => {
        bgMusic.play();
        isMusicPlaying = true;
        playBtn.classList.add('active');
        pauseBtn.classList.remove('active');
        playSound(clickSound);
    });
    
    pauseBtn.addEventListener('click', () => {
        bgMusic.pause();
        isMusicPlaying = false;
        pauseBtn.classList.add('active');
        playBtn.classList.remove('active');
        playSound(clickSound);
    });
    
    nextBtn.addEventListener('click', () => {
        playSound(clickSound);
        dynamicMessage.textContent = "Switching to next cosmic frequency...";
    });
    
    // Volume slider
    volumeSlider.addEventListener('input', () => {
        bgMusic.volume = volumeSlider.value / 100;
    });
    
    // Love button
    loveBtn.addEventListener('click', sendLove);
    
    // Surprise button
    surpriseBtn.addEventListener('click', showSurprise);
    
    // Share button
    shareBtn.addEventListener('click', shareExperience);
    
    // Reset button
    resetBtn.addEventListener('click', resetSimulation);
}

// ===== MAIN FUNCTIONS =====
function activateCelebration() {
    userName = nameInput.value.trim();
    
    if (userName) {
        const messageIndex = Math.floor(Math.random() * birthdayMessages.length);
        dynamicMessage.textContent = `${birthdayMessages[messageIndex]} Welcome, ${userName.toUpperCase()}!`;
        
        mainTitle.querySelector('.title-text').textContent = `HAPPY BIRTHDAY ${userName.toUpperCase()}`;
        
        createConfettiStorm();
        fireLasers();
        
        playSound(confettiSound);
        
        setTimeout(() => {
            showWish(Math.floor(Math.random() * wishes.length));
        }, 2000);
    } else {
        dynamicMessage.textContent = "ERROR: Please enter your name to initialize celebration protocols!";
        nameInput.focus();
    }
}

function showWish(index) {
    const wish = wishes[index];
    
    dynamicMessage.textContent = wish.message;
    
    const wishEffect = document.createElement('div');
    wishEffect.style.position = 'fixed';
    wishEffect.style.top = '0';
    wishEffect.style.left = '0';
    wishEffect.style.width = '100%';
    wishEffect.style.height = '100%';
    wishEffect.style.background = `radial-gradient(circle, ${wish.color}20 0%, transparent 70%)`;
    wishEffect.style.zIndex = '5';
    wishEffect.style.pointerEvents = 'none';
    wishEffect.style.animation = 'fadeOut 2s forwards';
    
    document.body.appendChild(wishEffect);
    
    playSound(clickSound);
    
    setTimeout(() => {
        wishEffect.remove();
    }, 2000);
}

function createConfettiStorm() {
    const colors = ['#00f3ff', '#ff00ff', '#00ff9d', '#9d00ff', '#ffffff'];
    
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = Math.random() * 15 + 5 + 'px';
            confetti.style.height = Math.random() * 15 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            
            confettiContainer.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
            
            animation.onfinish = () => confetti.remove();
        }, i * 10);
    }
    
    playSound(confettiSound);
}

function fireLasers() {
    const colors = ['#00f3ff', '#ff00ff', '#00ff9d'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const laser = document.createElement('div');
            laser.style.position = 'fixed';
            laser.style.width = '4px';
            laser.style.height = '0';
            laser.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            laser.style.left = Math.random() * 100 + 'vw';
            laser.style.top = '0';
            laser.style.zIndex = '1000';
            laser.style.pointerEvents = 'none';
            laser.style.filter = 'blur(1px)';
            laser.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
            
            laserContainer.appendChild(laser);
            
            const animation = laser.animate([
                { height: '0', top: '0', opacity: 1 },
                { height: '100vh', top: '0', opacity: 0 }
            ], {
                duration: 500 + Math.random() * 500,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => laser.remove();
        }, i * 100);
    }
    
    playSound(laserSound);
}

function sendLove() {
    loveUnits += Math.floor(Math.random() * 50) + 10;
    loveCount.textContent = loveUnits;
    
    const maxLove = 1000;
    const percentage = Math.min((loveUnits / maxLove) * 100, 100);
    loveMeter.querySelector('.meter-fill').style.width = percentage + '%';
    
    for (let i = 0; i < 20; i++) {
        createHeartParticle();
    }
    
    dynamicMessage.textContent = `TRANSMITTING ${loveUnits} LOVE UNITS TO ${userName || 'THE UNIVERSE'}...`;
    
    playSound(clickSound);
}

function showSurprise() {
    const randomIndex = Math.floor(Math.random() * surpriseMessages.length);
    const message = surpriseMessages[randomIndex];
    
    surpriseOutput.innerHTML = `
        <div class="surprise-content">
            <div style="font-size: 3rem; margin-bottom: 20px; animation: float 3s infinite;">🎉</div>
            <h3 style="color: #00ff9d; margin-bottom: 15px;">SURPRISE ACTIVATED!</h3>
            <p>${message}</p>
        </div>
    `;
    
    createConfettiStorm();
    createConfettiStorm();
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            fireRainbowLaser();
        }, i * 200);
    }
    
    playSound(confettiSound);
}

function shareExperience() {
    const shareText = `🚀 Experiencing celestial birthday celebrations in the digital heavens! ${userName ? 'Join ' + userName + "'s" : 'Join this'} futuristic birthday party! 🎉`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Celestial Birthday Celebration',
            text: shareText,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(`${shareText} ${window.location.href}`).then(() => {
            dynamicMessage.textContent = "LINK COPIED TO CLIPBOARD! SHARE THE CELESTIAL EXPERIENCE!";
        });
    }
}

function resetSimulation() {
    userName = '';
    loveUnits = 0;
    loveCount.textContent = '0';
    loveMeter.querySelector('.meter-fill').style.width = '0%';
    nameInput.value = '';
    dynamicMessage.textContent = "System reset. Ready for new celestial celebration.";
    mainTitle.querySelector('.title-text').textContent = "HAPPY BIRTHDAY";
    surpriseOutput.innerHTML = '';
    
    startAnimations();
    
    playSound(clickSound);
}

// ===== HELPER FUNCTIONS =====
function startAnimations() {
    const elements = document.querySelectorAll('.wish-card, .cyber-card');
    elements.forEach(el => {
        if (Math.random() > 0.5) {
            el.classList.add('float');
        }
    });
}

function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(0, 0, 0, 0);
    
    function updateCountdown() {
        const now = new Date();
        const timeLeft = targetDate - now;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            
            secondsElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                secondsElement.style.transform = 'scale(1)';
            }, 300);
        } else {
            targetDate.setDate(targetDate.getDate() + 1);
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function typeWriterEffect() {
    const messages = [
        "WELCOME TO CELESTIAL BIRTHDAY CELEBRATIONS",
        "ENTER YOUR NAME TO INITIATE PROTOCOLS",
        "READY FOR QUANTUM CELEBRATION EXPERIENCE",
        "CONNECTING TO UNIVERSAL BIRTHDAY NETWORK"
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentMessage = messages[messageIndex];
        
        if (isDeleting) {
            dynamicMessage.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicMessage.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentMessage.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    type();
}

function createHeartParticle() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.zIndex = '1000';
    heart.style.pointerEvents = 'none';
    
    document.body.appendChild(heart);
    
    const animation = heart.animate([
        { transform: 'translateY(0) scale(1)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight}px) scale(0)`, opacity: 0 }
    ], {
        duration: 2000 + Math.random() * 1000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => heart.remove();
}

function fireRainbowLaser() {
    const laser = document.createElement('div');
    laser.style.position = 'fixed';
    laser.style.width = '8px';
    laser.style.height = '0';
    laser.style.background = 'linear-gradient(45deg, #ff0000, #ff9900, #ffff00, #00ff00, #0099ff, #6633ff)';
    laser.style.left = Math.random() * 100 + 'vw';
    laser.style.top = '0';
    laser.style.zIndex = '1000';
    laser.style.pointerEvents = 'none';
    laser.style.filter = 'blur(2px)';
    
    laserContainer.appendChild(laser);
    
    const animation = laser.animate([
        { height: '0', top: '0', opacity: 1 },
        { height: '100vh', top: '0', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => laser.remove();
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(e => console.log("Sound error:", e));
}

// ===== INITIALIZE =====
window.addEventListener('load', init);

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
    
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);
