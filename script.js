tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                stone: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                    950: '#0c0a09',
                }
            }
        }
    }
}

// Portfolio posts data
const posts = [
    {
        title: "Majutuskesk-konna Tarkvara",
        description: "Siin on koolis õpitud Terraform ja Ansible kasutamine koos Proxmox hüperviisoriga.",
        categories: ["terraform", "anible"],
        link: "https://github.com/Gren-95/Majutuskeskkonna_Riistvara_efe",
        linkType: "github"
    },
    {
        title: "esc2pipe",
        description: "Selle Fish pluginaga on võimalik kasutajal sisestada | sümbol käskude jaoks terminalis.",
        categories: ["bash"],
        link: "https://github.com/Gren-95/esc2pipe",
        image: "./src/images/programming/bash/esc2pipe.png",
        linkType: "github"
    },
    {
        title: "IMS - (Inventory Managment System)",
        description: "Seda veebilehte arendasin Jeld-Wen Eesti AS-ile, et printeri kasettidest oleks ülevaade.",
        categories: ["html", "php", "docker"],
        link: "./src/images/programming/html/inventory.png",
        image: "./src/images/programming/html/inventory.png",
        linkType: "image"
    },
    {
        title: "Linux Toolbox",
        description: "See on minu skript linux desktopile, et lihtsustada arvuti sätestust ja kasutust. Selle skripti abil saan faile liigutada, pakendeid paigaldada jne.",
        categories: ["bash"],
        link: "./src/images/programming/bash/util.png",
        image: "./src/images/programming/bash/util.png",
        linkType: "image"
    },
    {
        title: "Toolbox",
        description: "See oli üks minu olulisemaid PowerShell projekte, mille ma lõin pärast esimese kursuse läbimist suvevaheajal.",
        categories: ["powershell"],
        link: "https://github.com/Gren-95/efe-toolbox",
        image: "./src/images/programming/powershell/toolbox.png",
        linkType: "github"
    },
    {
        title: "Shutdown-GUI",
        description: "See oli minu esimene katse luua graafilise liideega skript PowerShell Form abil. Tegin selle skripti nalja pärast, et teisi klassikaaslasi ehmatada.",
        categories: ["powershell"],
        link: "https://github.com/Gren-95/Shutdown-scripts-windows-10",
        image: "./src/images/programming/powershell/shutdown-gui.png",
        linkType: "github"
    },
    {
        title: "School Sample",
        description: "See oli minu näide õpetajale, et tulevikus ei võtaks tal nii kaua aega näidete toomisega. Lisaks sellele on see hea põhi mille abil graafiline skript luua powershellis.",
        categories: ["powershell"],
        link: "https://github.com/Gren-95/School-Sample",
        image: "./src/images/programming/powershell/school-sample.png",
        linkType: "github"
    },
    {
        title: "Markdown homework",
        description: "See oli minu kodutöö, mille otsustasin koostada Markdowni märgistuskeeles. Tegin seda sellepärast, et koodi kirjutamine MS Wordis oli kole ja aeglane.",
        categories: ["markdown"],
        link: "https://github.com/Gren-95/linux-school-work-nginx-samba-squid",
        image: "./src/images/programming/markdown/markdown skeem.png",
        linkType: "github"
    },
    {
        title: "Simple batch file converter",
        description: "See oli minu esimene katse luua Pythoni programm, mille ma tegin pärast esimese kursuse läbimist vaheajal. Sellega on võimalik teisendada massiliselt failiformaate.",
        categories: ["python"],
        link: "https://github.com/Gren-95/Simple-file-converters",
        image: "./src/images/programming/python/file-converter.png",
        linkType: "github"
    },
    {
        title: "Veebitehnoloogiate õppimine",
        description: "See oli kooli tunnis õpitud HTML, mida ma nüüdseks olen hakanud iseseisvalt edasi arendama. Lisaks põhialuste omandamisele olen uurinud ka CSS-i ja JavaScripti, et muuta oma veebilehed interaktiivsemaks ja visuaalselt atraktiivsemaks.",
        categories: ["html"],
        link: "https://github.com/Gren-95/School-html-css",
        image: "./src/images/programming/html/html-school.png",
        linkType: "github"
    },
    {
        title: "Cube",
        description: "Esimese poole esimesest tunnist tegin 3D mudeli navigatsioonikuubikust. Algul arvasin, et kaamera/vaate liigutamine selles keskkonnas võib olla keeruline, kuna see oli mulle võõras. Üllatusin, et see osutus oodatust lihtsamaks.",
        categories: ["mudel"],
        link: "./src/images/3d/cube.png",
        image: "./src/images/3d/cube.png",
        linkType: "image"
    },
    {
        title: "Lego 2x4 punane klots",
        description: "Teise poole esimeses tunnis valmistasin 3D mudeli Lego 2x4 punasest klotsist ning õppisin kasutama Tinkercad keskkonda.",
        categories: ["mudel"],
        link: "./src/images/3d/lego.png",
        image: "./src/images/3d/lego.png",
        linkType: "image"
    },
    {
        title: "Taburett",
        description: "Kolmandas tunnis modelleerisin tabureti, kasutades selleks Sketchup keskkonda. Märkasin, et Sketchupis on modelleerimine veidi keerulisem kui Tinkercadis, eriti ringi liikumise osas.",
        categories: ["mudel"],
        link: "./src/images/3d/stool.png",
        image: "./src/images/3d/stool.png",
        linkType: "image"
    },
    {
        title: "Pink",
        description: "Teise poole kolmandast tunnist tegin lisaülesandena modernse pingi. Selles töös tundsin, et sain töö tehtud täiuslikult.",
        categories: ["mudel"],
        link: "./src/images/3d/bench.png",
        image: "./src/images/3d/bench.png",
        linkType: "image"
    },
    {
        title: "Loss",
        description: "Neljandas tunnis hakkasin tegema lossi, millel olid värav, seinad, kaitsekraav ja vibutorn. Tundsin, et selle lossi tegemine oleks olnud ilma näidiseta raske, kuid sain hakkama.",
        categories: ["mudel"],
        link: "./src/images/3d/castle.png",
        image: "./src/images/3d/castle.png",
        linkType: "image"
    },
    {
        title: "Lumehelbed",
        description: "Viiendas tunnis tegin 4 erinevat lumehelvest komponentse tööriista abiga. Alguses ei saanud ma aru, kuidas joondada lumehelbeid korralikult, kuid peale katsetamist taipasin, kuidas neid teha kiirelt ja efektiivselt.",
        categories: ["mudel"],
        link: "./src/images/3d/snowflake.png",
        image: "./src/images/3d/snowflake.png",
        linkType: "image"
    },
    {
        title: "Maja",
        description: "Kuuendast kuni kaheksanda tunnini tegin valmis ühekorruselise maja. Selles töö oli limiteeriv faktor veebikesskkond, kuna see jäi väga aeglaeks peale moobli liamit Sketchup mudeli poest.",
        categories: ["mudel"],
        link: "./src/images/3d/house.png",
        image: "./src/images/3d/house.png",
        linkType: "image"
    },
    {
        title: "Renault FT-17",
        description: "Viimaseks 3D modeleerimise tunniks tegin selle Renault FT-17 tangi. Tanki tegin 2 nädalavahetust Blender programmi abil, kuna see oli tasuta litsensiga ja laialdaselt kausutuses. Töö tegemiseks õppisin programmi iseseisvalt ja lõpuks olin Blender programmiga suht pädev.",
        categories: ["mudel"],
        link: "./src/images/3d/tank.png",
        image: "./src/images/3d/tank.png",
        linkType: "image"
    },
    {
        title: "Hyprland Dots",
        description: "Minu Hyprland konfiguratsioon, mis on inspireeritud Tailwind Stone värvipaletist. See sisaldab waybar, kitty, hyprpaper ja swaync konfiguratsioone, et luua ühtne ja ilus töölaua keskkond.",
        categories: ["bash"],
        link: "https://github.com/Gren-95/hyprland-dots",
        linkType: "github"
    },
    {
        title: "IT Equipment Management System",
        description: "Lihtne IT seadmete haldussüsteem, mis on loodud PHP, Bootstrap ja Docker abil. See võimaldab jälgida ja hallata IT seadmeid, sealhulgas TeamViewer seotud seadmeid.",
        categories: ["php", "html", "docker"],
        link: "https://github.com/Gren-95/item-it_inventory_managment",
        linkType: "github"
    },
    {
        title: "Java GUI Calculator",
        description: "Põhjalik kalkulaatori rakendus Java keeles, mis sisaldab mitmeid arvutusrežiime ja kaasaegset kasutajaliidest. See projekt demonstreerib Java GUI arendamise oskusi.",
        categories: ["java"],
        link: "https://github.com/Gren-95/java-gui-calculator",
        linkType: "github"
    },
    {
        title: "Trello Clone API",
        description: "Lihtne Trello API kloon, mis on ehitatud React ja Express abil. See projekt demonstreerib täieliku full-stack rakenduse arendamist, sealhulgas backend API ja frontend integratsiooni.",
        categories: ["javascript"],
        link: "https://github.com/Gren-95/trello-clone-api",
        linkType: "github"
    },
    {
        title: "Bank API",
        description: "Tugev panga API implementatsioon, mis toetab sisemisi ja väliste (B2B) tehinguid. See järgib OpenAPI 3 spetsifikatsioone ja demonstreerib keerukate finantstehingute haldamist.",
        categories: ["javascript"],
        link: "https://github.com/Gren-95/bank-api",
        linkType: "github"
    },
    {
        title: "Ask Me",
        description: "Google Forms kloon, mis on ehitatud TypeScript abil. See projekt demonstreerib vormide loomise ja andmete kogumise rakenduse arendamist.",
        categories: ["javascript"],
        link: "https://github.com/Gren-95/ask-me",
        linkType: "github"
    },
    {
        title: "FinanceFlux",
        description: "Finantsdemo rakendus, mis demonstreerib finantsandmete visualiseerimist ja haldamist. See projekt näitab kaasaegset finantstehnoloogia rakendamist.",
        categories: ["javascript"],
        link: "https://github.com/Gren-95/FinanceFlux",
        linkType: "github"
    },
    {
        title: "Quick Polls",
        description: "Kiire küsitluste rakendus, mis võimaldab luua ja jagada küsitlusi. See projekt demonstreerib reaalajas andmete kogumist ja visualiseerimist.",
        categories: ["javascript"],
        link: "https://github.com/Gren-95/quick-polls",
        linkType: "github"
    },
    {
        title: "Appointment Scheduler",
        description: "Broneeringute haldussüsteem Java keeles, mis võimaldab hallata ajakavasid ja broneeringuid. See projekt demonstreerib Java rakenduste arendamist.",
        categories: ["java"],
        link: "https://github.com/Gren-95/appointment-scheduler",
        linkType: "github"
    },
    {
        title: "Linux Configs",
        description: "Minu konfiguratsioonifailid neofetch, fish ja kitty jaoks. Need konfiguratsioonid loovad isikupärastatud ja funktsionaalse Linux töölaua keskkonna.",
        categories: ["bash"],
        link: "https://github.com/Gren-95/linux-configs",
        linkType: "github"
    }
];

// Education entries (newest first)
const education = [
    {
        title: "Viljandi Kutseõppekeskus",
        period: "2025 - 2026",
        image: "./src/images/schools/vikk.png",
        alt: "Viljandi Kutseõppekeskus"
    },
    {
        title: "Rakvere Ametikool",
        period: "2021 - 2024",
        image: "./src/images/schools/rak.jpg",
        alt: "Rakvere Ametikool"
    },
    {
        title: "Rakvere Põhikool",
        period: "2012 - 2021",
        image: "./src/images/schools/rpk.jpg",
        alt: "Rakvere Põhikool"
    }
];

// Experience entries (newest first)
const experience = [
    {
        title: "Jeld-Wen Eesti AS - tööline",
        period: "2024 (Talv) - praegu",
        image: "./src/images/xp/komp2.bmp",
        alt: "Jeld-Wen Eesti AS",
        description: ""
    },
    {
        title: "Jeld-Wen Eesti AS - praktika",
        period: "2023 (Kevad) - 2024 (Talv)",
        image: "./src/images/xp/komp3.bmp",
        alt: "Jeld-Wen Eesti AS",
        description: ""
    }
];

// Function to shuffle array randomly
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Function to create a single post HTML
function createPostHTML(post) {
    const categoriesString = post.categories.join(' ');

    let linkContent;
    if (post.linkType === 'github') {
        linkContent = `
                <a href="${post.link}" target="_blank"
                    class="inline-flex items-center gap-2 text-amber-400 dark:text-amber-600 hover:text-amber-300 dark:hover:text-amber-500 font-semibold transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                    <span>Vaata GitHub'is</span>
                </a>
            `;
    } else {
        linkContent = `
                <a href="${post.link}" target="_blank" class="block overflow-hidden rounded-xl">
                    <img class="w-full rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                        src="${post.image}" alt="${post.title}">
                </a>
            `;
    }

    return `
            <div class="item gallery-item visible ${categoriesString} group bg-gradient-to-br from-stone-800 to-stone-900 dark:from-stone-200 dark:to-stone-300 rounded-2xl p-6 border border-stone-700 dark:border-stone-400 shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                <h3 class="text-xl font-bold mb-3 text-stone-100 dark:text-stone-900 group-hover:text-stone-50 dark:group-hover:text-stone-800 transition-colors">
                    ${post.title}
                </h3>
                <p class="text-stone-300 dark:text-stone-700 mb-4 leading-relaxed text-base md:text-lg">
                    ${post.description}
                </p>
                ${linkContent}
            </div>
        `;
}

// Function to get number of columns based on screen size
function getColumnCount() {
    if (window.innerWidth < 768) return 1;  // Mobile: 1 column
    if (window.innerWidth < 1024) return 2; // Tablet: 2 columns
    return 3; // Desktop: 3 columns
}

// Function to get the shortest column
function getShortestColumn(columns) {
    if (!columns || columns.length === 0) {
        return 0;
    }

    let shortestIndex = 0;
    let shortestHeight = columns[0]?.offsetHeight || 0;

    columns.forEach((column, index) => {
        if (!column) return;
        const height = column.offsetHeight || 0;
        if (height < shortestHeight) {
            shortestHeight = height;
            shortestIndex = index;
        }
    });

    return shortestIndex;
}

// Track current filter category
let currentFilterCategory = 'kõik';

// Function to render education entries
function renderEducation() {
    const educationContainer = document.getElementById('education-items');
    if (!educationContainer) return;

    educationContainer.innerHTML = '';

    education.forEach(entry => {
        const entryHTML = `
                <div class="bg-stone-900/50 dark:bg-stone-100 rounded-xl p-6 border border-stone-700 dark:border-stone-400 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex-shrink-0" style="min-width: 280px; max-width: 350px;">
                    <h3 class="text-2xl font-semibold mb-3 text-stone-200 dark:text-stone-800" style="min-height: 3.5rem;">${entry.title}</h3>
                    <div class="flex items-center gap-3 mb-4 text-stone-400 dark:text-stone-700">
                        <div class="h-8 w-8 p-1.5 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg">
                            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
            </div>
                        <span class="text-lg">${entry.period}</span>
                    </div>
                    <img class="w-full h-48 object-cover rounded-xl shadow-lg border-2 border-stone-600 dark:border-stone-300" src="${entry.image}" alt="${entry.alt}">
                </div>
            `;
        educationContainer.innerHTML += entryHTML;
    });
}

// Function to render experience entries
function renderExperience() {
    const experienceContainer = document.getElementById('experience-items');
    if (!experienceContainer) return;

    experienceContainer.innerHTML = '';

    experience.forEach(entry => {
        const entryHTML = `
                <div class="bg-stone-900/50 dark:bg-stone-100 rounded-xl p-6 border border-stone-700 dark:border-stone-400 hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 flex-shrink-0" style="min-width: 280px; max-width: 350px;">
                    <h3 class="text-2xl font-semibold mb-3 text-stone-200 dark:text-stone-800" style="min-height: 3.5rem;">${entry.title}</h3>
                    <div class="flex items-center gap-3 mb-4 text-stone-400 dark:text-stone-700">
                        <div class="h-8 w-8 p-1.5 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
            </div>
                        <span class="text-lg">${entry.period}</span>
        </div>
                    <img class="w-full h-48 object-cover rounded-xl shadow-lg border-2 border-stone-600 dark:border-stone-300" src="${entry.image}" alt="${entry.alt}">
                    ${entry.description ? `<p class="mt-4 text-stone-300 dark:text-stone-700 text-base md:text-lg">${entry.description}</p>` : ''}
    </div>
            `;
        experienceContainer.innerHTML += entryHTML;
    });
}

// Function to render posts with staggered animation and masonry layout
function renderPosts(filterCategory = 'kõik') {
    const galleryItems = document.getElementById('gallery-items');
    if (!galleryItems) return;

    // Update current filter category
    currentFilterCategory = filterCategory;

    // Clear the container
    galleryItems.innerHTML = '';

    // Ensure container displays as row on desktop/tablet
    const isMobile = window.innerWidth < 768;
    galleryItems.style.display = 'flex';
    galleryItems.style.flexDirection = isMobile ? 'column' : 'row';
    galleryItems.style.gap = isMobile ? '1rem' : '1.5rem';
    galleryItems.style.alignItems = 'flex-start';
    galleryItems.style.width = '100%';

    // Filter posts based on category
    let postsToRender = posts;
    if (filterCategory !== 'kõik') {
        postsToRender = posts.filter(post =>
            post.categories.includes(filterCategory)
        );
    }

    // Shuffle posts randomly
    const shuffledPosts = shuffleArray(postsToRender);

    // Get number of columns based on screen size
    const columnCount = getColumnCount();

    // Create columns
    const columns = [];
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'gallery-column';
        // Ensure columns display correctly
        column.style.flex = '1';
        column.style.display = 'flex';
        column.style.flexDirection = 'column';
        column.style.gap = '1.5rem';
        column.style.minWidth = '0';
        galleryItems.appendChild(column);
        columns.push(column);
    }

    // Force a reflow to ensure layout updates
    void galleryItems.offsetHeight;

    // Render posts one by one with staggered delay, adding to shortest column
    shuffledPosts.forEach((post, index) => {
        setTimeout(() => {
            // Recalculate columns if window was resized
            const currentColumnCount = getColumnCount();
            if (currentColumnCount !== columns.length) {
                // Re-render if column count changed
                renderPosts(filterCategory);
                return;
            }

            // Ensure columns still exist
            if (!galleryItems || columns.length === 0) {
                return;
            }

            const postHTML = createPostHTML(post);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = postHTML.trim();
            const postElement = tempDiv.firstChild;

            if (!postElement) {
                return;
            }

            // Add initial hidden state for animation
            postElement.style.opacity = '0';
            postElement.style.transform = 'translateY(20px)';

            // Find shortest column and add post to it
            // Force a reflow to ensure accurate height measurements
            void galleryItems.offsetHeight;
            const shortestColumnIndex = getShortestColumn(columns);
            if (columns[shortestColumnIndex]) {
                columns[shortestColumnIndex].appendChild(postElement);

                // Force another reflow after appending
                void postElement.offsetHeight;

                // Trigger animation
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        postElement.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                        postElement.style.opacity = '1';
                        postElement.style.transform = 'translateY(0)';
                    });
                });
            }
        }, index * 50); // 50ms delay between each post
    });

    // Ensure all posts are rendered even if there are timing issues
    setTimeout(() => {
        const allPosts = galleryItems.querySelectorAll('.gallery-item');
        allPosts.forEach(post => {
            if (post.style.opacity === '0' || post.style.opacity === '') {
                post.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                post.style.opacity = '1';
                post.style.transform = 'translateY(0)';
            }
        });
    }, (shuffledPosts.length * 50) + 500); // Wait for all animations + buffer
}

// Handle window resize (only add listener once)
let resizeTimeout;
if (!window.portfolioResizeHandler) {
    window.portfolioResizeHandler = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const galleryItems = document.getElementById('gallery-items');
            if (galleryItems && galleryItems.children.length > 0) {
                const currentColumns = galleryItems.querySelectorAll('.gallery-column').length;
                const newColumnCount = getColumnCount();
                if (newColumnCount !== currentColumns) {
                    renderPosts(currentFilterCategory);
                }
            }
        }, 250);
    };
    window.addEventListener('resize', window.portfolioResizeHandler);
}

// Theme toggle functionality
function initTheme() {
    const theme = localStorage.getItem('theme');
    const html = document.documentElement;

    // Default to dark mode if no preference is set
    if (theme === 'light') {
        html.classList.remove('dark');
    } else {
        // Default to dark mode
        html.classList.add('dark');
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize theme on page load (before DOM is ready to prevent flash)
initTheme();

// Theme toggle button event
$(document).ready(function () {
    // Render portfolio posts
    renderPosts();

    // Render education and experience entries
    renderEducation();
    renderExperience();

    $('#theme-toggle').on('click', function () {
        toggleTheme();
    });

    const filterButtons = $('#filter-buttons button');
    const getGalleryItems = () => $('#gallery-items .item');

    // Color mapping for active states (inverted: lighter in light mode, darker in dark mode)
    const colorMap = {
        'amber': { bg: 'bg-amber-500/20 dark:bg-amber-600', border: 'border-amber-500 dark:border-amber-600', text: 'text-amber-300 dark:text-amber-100', icon: 'text-amber-400 dark:text-amber-100' },
        'blue': { bg: 'bg-blue-500/20 dark:bg-blue-600', border: 'border-blue-500 dark:border-blue-600', text: 'text-blue-300 dark:text-blue-100', icon: 'text-blue-400 dark:text-blue-100' },
        'teal': { bg: 'bg-teal-500/20 dark:bg-teal-600', border: 'border-teal-500 dark:border-teal-600', text: 'text-teal-300 dark:text-teal-100', icon: 'text-teal-400 dark:text-teal-100' },
        'yellow': { bg: 'bg-yellow-500/20 dark:bg-yellow-600', border: 'border-yellow-500 dark:border-yellow-600', text: 'text-yellow-300 dark:text-yellow-100', icon: 'text-yellow-400 dark:text-yellow-100' },
        'green': { bg: 'bg-green-500/20 dark:bg-green-600', border: 'border-green-500 dark:border-green-600', text: 'text-green-300 dark:text-green-100', icon: 'text-green-400 dark:text-green-100' },
        'orange': { bg: 'bg-orange-500/20 dark:bg-orange-600', border: 'border-orange-500 dark:border-orange-600', text: 'text-orange-300 dark:text-orange-100', icon: 'text-orange-400 dark:text-orange-100' },
        'cyan': { bg: 'bg-cyan-500/20 dark:bg-cyan-600', border: 'border-cyan-500 dark:border-cyan-600', text: 'text-cyan-300 dark:text-cyan-100', icon: 'text-cyan-400 dark:text-cyan-100' },
        'purple': { bg: 'bg-purple-500/20 dark:bg-purple-600', border: 'border-purple-500 dark:border-purple-600', text: 'text-purple-300 dark:text-purple-100', icon: 'text-purple-400 dark:text-purple-100' },
        'red': { bg: 'bg-red-500/20 dark:bg-red-600', border: 'border-red-500 dark:border-red-600', text: 'text-red-300 dark:text-red-100', icon: 'text-red-400 dark:text-red-100' },
        'violet': { bg: 'bg-violet-500/20 dark:bg-violet-600', border: 'border-violet-500 dark:border-violet-600', text: 'text-violet-300 dark:text-violet-100', icon: 'text-violet-400 dark:text-violet-100' },
        'indigo': { bg: 'bg-indigo-500/20 dark:bg-indigo-600', border: 'border-indigo-500 dark:border-indigo-600', text: 'text-indigo-300 dark:text-indigo-100', icon: 'text-indigo-400 dark:text-indigo-100' },
        'rose': { bg: 'bg-rose-500/20 dark:bg-rose-600', border: 'border-rose-500 dark:border-rose-600', text: 'text-rose-300 dark:text-rose-100', icon: 'text-rose-400 dark:text-rose-100' },
        'slate': { bg: 'bg-slate-500/20 dark:bg-slate-600', border: 'border-slate-500 dark:border-slate-600', text: 'text-slate-300 dark:text-slate-100', icon: 'text-slate-400 dark:text-slate-100' }
    };

    // Function to clear all active states
    function clearAllActiveStates() {
        filterButtons.each(function () {
            const $btn = $(this);
            const activeClasses = $btn.data('active-classes');
            if (activeClasses) {
                $btn.removeClass(activeClasses);
                $btn.find('svg').removeClass($btn.data('active-icon-classes') || '');
                $btn.removeData('active-classes');
                $btn.removeData('active-icon-classes');
            }
            // Also remove any lingering active classes that might not be stored
            $btn.removeClass('scale-110');
            // Remove all possible color classes that could be active states
            const colorNames = ['amber', 'blue', 'teal', 'yellow', 'green', 'orange', 'cyan', 'purple', 'red', 'violet', 'indigo', 'rose', 'slate'];
            colorNames.forEach(colorName => {
                $btn.removeClass(`bg-${colorName}-500/20 bg-${colorName}-500/30 bg-${colorName}-500/40 bg-${colorName}-500 bg-${colorName}-600`);
                $btn.removeClass(`dark:bg-${colorName}-500/20 dark:bg-${colorName}-500 dark:bg-${colorName}-600`);
                $btn.removeClass(`border-${colorName}-500 border-${colorName}-600`);
                $btn.removeClass(`dark:border-${colorName}-500 dark:border-${colorName}-600`);
                $btn.removeClass(`text-${colorName}-100 text-${colorName}-200 text-${colorName}-300 text-${colorName}-400`);
                $btn.removeClass(`dark:text-${colorName}-100 dark:text-${colorName}-300 dark:text-${colorName}-400`);
                $btn.find('svg').removeClass(`text-${colorName}-100 text-${colorName}-200 text-${colorName}-300 text-${colorName}-400`);
                $btn.find('svg').removeClass(`dark:text-${colorName}-100 dark:text-${colorName}-300 dark:text-${colorName}-400`);
            });
        });
    }

    // Function to set active state
    function setActiveButton(button) {
        // First, clear all active states
        clearAllActiveStates();

        // Then set the new active button
        const color = button.data('color');
        const colors = colorMap[color] || colorMap['amber'];

        // Store and add active state to clicked button
        const activeClasses = colors.bg + ' ' + colors.border + ' ' + colors.text;
        button.data('active-classes', activeClasses);
        button.data('active-icon-classes', colors.icon);
        button.addClass(activeClasses + ' scale-110');
        button.find('svg').addClass(colors.icon);
    }

    // Set initial active button (first button should be "Kõik")
    clearAllActiveStates();
    setActiveButton(filterButtons.first());

    // Filter button click handler
    filterButtons.on('click', function () {
        const category = $(this).data('filter');
        const button = $(this);

        // Set active state
        setActiveButton(button);

        // Re-render posts based on selected category
        renderPosts(category);
    });

    const containers = $('.container-1, .container-2, .container-3');
    const navLinks = $('.nav-link');

    function showContainer(index) {
        containers.each(function (i) {
            if (i === index) { $(this).removeClass('hidden').addClass('block'); }
            else { $(this).addClass('hidden').removeClass('block'); }
        });

        // Update active nav link
        navLinks.each(function (i) {
            if (i === index) { $(this).addClass('bg-stone-700 dark:bg-stone-300 text-amber-300 dark:text-amber-700').removeClass('text-stone-200 dark:text-stone-900'); }
            else { $(this).removeClass('bg-stone-700 dark:bg-stone-300 text-amber-300 dark:text-amber-700').addClass('text-stone-200 dark:text-stone-900'); }
        });

        // Save current tab to localStorage
        localStorage.setItem('activeTab', index);
    }

    // Navigation link click handlers
    navLinks.on('click', function (e) {
        e.preventDefault();
        const index = navLinks.index(this);
        showContainer(index);
    });

    // Initialize - load saved tab or default to 0
    const savedTab = localStorage.getItem('activeTab');
    const initialTab = savedTab !== null ? parseInt(savedTab, 10) : 0;
    showContainer(initialTab);

    // Load and render markdown file
    function loadMarkdown() {
        fetch('./src/dll.md')
            .then(response => response.text())
            .then(markdown => {
                // Configure marked options
                marked.setOptions({
                    breaks: true,
                    gfm: true
                });

                // Convert markdown to HTML
                const html = marked.parse(markdown);

                // Apply custom styling to match the site's design
                let styledHtml = html
                    .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">')
                    .replace(/<h2>/g, '<h2 class="text-2xl font-semibold mb-4 mt-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">')
                    .replace(/<h3>/g, '<h3 class="text-xl font-semibold mb-3 mt-4 text-stone-200">')
                    .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 mb-4 text-stone-300">')
                    .replace(/<li>/g, '<li class="text-base md:text-lg">')
                    .replace(/<p>/g, '<p class="mb-4 text-stone-300 text-base md:text-lg">');

                // Handle links - add classes and target="_blank" for external links
                styledHtml = styledHtml.replace(/<a href="([^"]+)">/g, function (match, href) {
                    const isExternal = href.startsWith('http') || href.startsWith('//');
                    const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
                    return `<a href="${href}" class="text-amber-400 hover:text-amber-300 underline transition-colors"${target}>`;
                });

                // Style images
                styledHtml = styledHtml.replace(/<img /g, '<img class="rounded-xl shadow-lg max-w-full h-auto mb-4" ');

                // Insert into container
                $('#markdown-content').html(styledHtml);
            })
            .catch(error => {
                console.error('Error loading markdown:', error);
                $('#markdown-content').html('<p class="text-red-400">Error loading markdown file.</p>');
            });
    }

    // Load markdown when page is ready
    loadMarkdown();

    // Initialize all fun features
    initFunFeatures();
});

// ========== FUN FEATURES ==========

function initFunFeatures() {
    initCursorTrail();
    initTypingAnimation();
    initScrollToTop();
}

// 1. Cursor Trail (Desktop only)
function initCursorTrail() {
    if (window.innerWidth < 768 || !window.matchMedia('(pointer: fine)').matches) {
        return; // Disable on mobile
    }

    const trails = [];
    const trailCount = 10;

    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.opacity = (trailCount - i) / trailCount * 0.5;
        document.body.appendChild(trail);
        trails.push({ element: trail, x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        let prevX = mouseX;
        let prevY = mouseY;

        trails.forEach((trail, index) => {
            const nextX = prevX;
            const nextY = prevY;

            trail.element.style.left = nextX + 'px';
            trail.element.style.top = nextY + 'px';

            prevX = trail.x;
            prevY = trail.y;

            trail.x = nextX;
            trail.y = nextY;
        });

        requestAnimationFrame(animateTrail);
    }

    animateTrail();
}

// 2. Typing Animation
function initTypingAnimation() {
    const nameElement = document.getElementById('typing-name');
    const titleElement = document.getElementById('typing-title');

    if (!nameElement || !titleElement) return;

    const name = 'Efe Marko Güldere';
    const title = 'IT noorem tarkvaraarendaja & IT-spetsialist';

    function typeText(element, text, speed = 100, callback) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor"></span>';
                i++;
                setTimeout(type, speed);
            } else {
                element.innerHTML = text;
                if (callback) callback();
            }
        }

        type();
    }

    // Start typing name
    setTimeout(() => {
        typeText(nameElement, name, 80, () => {
            // Start typing title after name is done
            setTimeout(() => {
                typeText(titleElement, title, 60);
            }, 300);
        });
    }, 500);
}

// 3. Scroll to Top Button
function initScrollToTop() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (!scrollButton) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
