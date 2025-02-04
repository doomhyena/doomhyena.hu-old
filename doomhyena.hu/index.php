<?php
$counterFile = 'counter.txt';

if (!file_exists($counterFile)) {
    file_put_contents($counterFile, 0);
}

$counter = (int)file_get_contents($counterFile);
$counter++;
file_put_contents($counterFile, $counter);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Doomhyena's Official Website</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="pics/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="http://huncoder.hu/files/huncoder-styles-1-0.css"> 
    <link rel="stylesheet" href="http://huncoder.hu/files/huncoder-scripts-1-0.js"> 
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#about" id="about-link">About Me</a></li>
                <li><a href="#projects" id="projects-link">Projects</a></li>
                <li><a href="#skills" id="skills-link">Skills</a></li>
                <li><a href="#contact" id="contact-link">Contact</a></li>
                <button onclick="toggleLanguage()" class="language-btn">HU/ENG</button>
                <button onclick="toggleTheme()" class="theme-btn">Theme</button>
            </ul>
        </nav>
    </header>
    
    <section id="about" class="section">
        <div class="section-box">
            <div class="about-container">
                <img src="pics/pfp.png" alt="Profile Picture">
                <div class="about-text">
                    <h2 id="about-title">About Me</h2>
                    <p id="about-description">
                        I'm a 19 year old high schooler from Hungary. In my free time, I like teaching and coding. 
                        I graduated at <a href ="https://petofivecses.hu">Petőfi Sándor Roman Chatolic Primary and High School</a>,
                        and from September 2024 I continue my studies as a Software Developer and Tester in <a href="https://scholaeu.hu/">Schola Europa Academy</a>. 
                        I've been programming for 5 years, and I've always been interested in it. During this time, I've gained a lot of experience in various programming languages and projects.
                    </p>
                    <h2 id="username-title">My Username</h2>
                    <p id="username-description">
                        How did I come up with the name Doomhyena? Well, one of the games needed a recognizable name. 
                        So, I decided to take inspiration from "Doom," which is a popular first-person shooter game, and added "Hyena" because it sounds cool.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="section">
        <div class="section-box">
            <h2 id="projects-title">Projects</h2>
            <div class="project">
                <h3 id="rangerbot-title">RangerBot</h3>
                <p id="rangerbot-description">RangerBot is a completely Hungarian Discord Bot developed according to the needs of users. We have prepared it according to your needs and we continue to develop it continuously.</p>
                <a href="https://rangerbot.hu/" class="btn" id="rangerbot-link">View Project</a>
            </div>
        </div>
    </section>    

    <section id="skills" class="section">
        <div class="section-box">
            <h2 id="skills-title">Skills</h2>
            <div class="skill">
                <p>Python</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 90%;"></div>
                </div>
            </div>
            <div class="skill">
                <p>C#</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 85%;"></div>
                </div>
            </div>
            <div class="skill">
                <p>PHP</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 75%;"></div>
                </div>
            </div>    
            <div class="skill">
                <p>JavaScript</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 50%;"></div>
                </div>
            </div>
            <div class="skill">
                <p>Java</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 5%;"></div>
                </div>
            </div>
        </div>
    </section>    

    <section id="contact" class="section">
        <div class="section-box">
            <h2 id="contact-title">Contact</h2>
            <div class="contact-buttons">
                <a href="https://discord.gg/daZgQG3cm9" class="btn"><i class="fab fa-discord"></i> Discord</a>
                <a href="https://www.reddit.com/user/doomhyena/" class="btn"><i class="fab fa-reddit"></i> Reddit</a>
                <a href="https://github.com/doomhyena" class="btn"><i class="fab fa-github"></i> Github</a>
                <a href="https://www.youtube.com/@doomhyena" class="btn"><i class="fab fa-youtube"></i> YouTube</a>
                <a href="https://steamcommunity.com/id/doomhyena/" class="btn"><i class="fab fa-steam"></i> Steam</a>
                <a href="https://www.twitch.tv/doomhyena" class="btn"><i class="fab fa-twitch"></i> Twitch</a>
                <a href="https://www.tiktok.com/@doomhyena" class="btn"><i class="fab fa-tiktok"></i> TikTok</a>
                <a href="https://www.linkedin.com/in/csontos-kincs%C5%91-1a3b5632b/" class="btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
    </section>
    <div class="visitor-counter">
        <p>Látogatók száma: <?php echo $counter; ?></p>
    </div>
    <button id="backToTop" title="Vissza a tetejére">↑</button>
    <footer>
        <p id="FooterP">&copy; 2024 Doomhyena. All rights reserved.</p>
    </footer>
    <script src="js/index.js"></script>
</body>
</html>
