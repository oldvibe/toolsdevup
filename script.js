/* ========================================
   TOOLsDEVUP
   Tool Directory
======================================== */


/* ========================================
   TOOL DATABASE
======================================== */

const tools = [

    {
        name: "ElevenLabs",

        category: "AI",

        icon: "🎙️",

        description:
            "Create realistic AI voices, speech and audio for content, projects and applications.",

        free: true,

        tags: [
            "Voice AI",
            "Audio",
            "Creator"
        ],

        url: "tools/ai/elevenlabs.html"
    },


    {
        name: "Gamma",

        category: "AI",

        icon: "✨",

        description:
            "Create polished presentations, documents and visual content with AI.",

        free: true,

        tags: [
            "Presentations",
            "AI",
            "Productivity"
        ],

        url: "https://gamma.app/"
    },


    {
        name: "Descript",

        category: "AI",

        icon: "🎬",

        description:
            "Edit video and audio using powerful AI-assisted workflows.",

        free: true,

        tags: [
            "Video",
            "Audio",
            "AI"
        ],

        url: "https://www.descript.com/"
    },


    {
        name: "Vercel",

        category: "Developer",

        icon: "▲",

        description:
            "Deploy modern web applications with a developer-focused cloud platform.",

        free: true,

        tags: [
            "Deploy",
            "Web",
            "Cloud"
        ],

        url: "https://vercel.com/"
    },


    {
        name: "DigitalOcean",

        category: "Developer",

        icon: "🌊",

        description:
            "Simple cloud infrastructure for developers building and deploying applications.",

        free: true,

        tags: [
            "Cloud",
            "VPS",
            "Developer"
        ],

        url: "https://www.digitalocean.com/"
    },


    {
        name: "Cloudflare",

        category: "Developer",

        icon: "☁️",

        description:
            "Build and protect modern applications with web infrastructure and security.",

        free: true,

        tags: [
            "Cloud",
            "Security",
            "DNS"
        ],

        url: "https://www.cloudflare.com/"
    },


    {
        name: "GitHub",

        category: "Developer",

        icon: "⌘",

        description:
            "Collaborate, host code and manage software development projects.",

        free: true,

        tags: [
            "Git",
            "Code",
            "Collaboration"
        ],

        url: "https://github.com/"
    },


    {
        name: "Canva",

        category: "Student",

        icon: "🎨",

        description:
            "Create presentations, graphics, documents and visual content.",

        free: true,

        tags: [
            "Design",
            "Presentations",
            "Study"
        ],

        url: "https://www.canva.com/"
    },


    {
        name: "Grammarly",

        category: "Student",

        icon: "✍️",

        description:
            "Improve your writing, clarity and communication with AI assistance.",

        free: true,

        tags: [
            "Writing",
            "AI",
            "Study"
        ],

        url: "https://www.grammarly.com/"
    },


    {
        name: "Notion",

        category: "Student",

        icon: "▣",

        description:
            "Organize notes, projects, databases and your entire student workflow.",

        free: true,

        tags: [
            "Notes",
            "Planning",
            "Productivity"
        ],

        url: "https://www.notion.so/"
    }

];


/* ========================================
   DOM
======================================== */

const toolsGrid =
    document.getElementById("tools-grid");

const searchInput =
    document.getElementById("tool-search");

const filterButtons =
    document.querySelectorAll(".filter-button");

const noResults =
    document.getElementById("no-results");


/* ========================================
   STATE
======================================== */

let currentCategory = "all";


/* ========================================
   RENDER
======================================== */

function renderTools() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    const filteredTools =
        tools.filter((tool) => {

            const matchesCategory =
                currentCategory === "all" ||
                tool.category === currentCategory;


            const searchableText = [

                tool.name,

                tool.category,

                tool.description,

                ...tool.tags

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                searchableText.includes(searchTerm);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    toolsGrid.innerHTML = "";


    if (filteredTools.length === 0) {

        noResults.classList.remove(
            "hidden"
        );

        return;

    }


    noResults.classList.add(
        "hidden"
    );


    filteredTools.forEach((tool) => {

        const card =
            document.createElement("article");


        card.className =
            "tool-card";


        card.innerHTML = `

            <div class="tool-card-top">

                <div class="tool-icon">

                    ${tool.icon}

                </div>


                <span class="tool-category">

                    ${tool.category}

                </span>

            </div>


            <h3>

                ${tool.name}

            </h3>


            <p class="tool-description">

                ${tool.description}

            </p>


            <div class="tool-tags">

                ${tool.tags
                    .map(
                        tag =>
                            `<span>${tag}</span>`
                    )
                    .join("")}

            </div>


            <div class="tool-card-footer">

                <div>

                    ${
                        tool.free

                            ? `
                                <span class="tool-free">
                                    ✓ Free plan
                                </span>
                              `

                            : `
                                <span class="tool-paid">
                                    Paid
                                </span>
                              `
                    }

                </div>


                <a
                    class="tool-link"
                    href="${tool.url}"
                >

                    View tool →

                </a>

            </div>

        `;


        toolsGrid.appendChild(card);

    });

}


/* ========================================
   FILTERS
======================================== */

filterButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                (btn) => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category;


            renderTools();

        }
    );

});


/* ========================================
   SEARCH
======================================== */

searchInput.addEventListener(
    "input",
    renderTools
);


/* ========================================
   INITIAL RENDER
======================================== */

renderTools();