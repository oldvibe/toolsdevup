const tools = [
    {
        name: "ElevenLabs",
        category: "AI",
        description:
            "AI voice generation and audio tools for creators, students and developers.",
        free: true,
        url: "https://elevenlabs.io/"
    },

    {
        name: "Gamma",
        category: "AI",
        description:
            "Create presentations, documents and visual content with AI.",
        free: true,
        url: "https://gamma.app/"
    },

    {
        name: "Descript",
        category: "AI",
        description:
            "AI-powered tools for editing video, audio and podcasts.",
        free: true,
        url: "https://www.descript.com/"
    },

    {
        name: "Vercel",
        category: "Developer",
        description:
            "Deploy and scale modern web applications and websites.",
        free: true,
        url: "https://vercel.com/"
    },

    {
        name: "DigitalOcean",
        category: "Developer",
        description:
            "Cloud infrastructure and developer services for building applications.",
        free: true,
        url: "https://www.digitalocean.com/"
    },

    {
        name: "Cloudflare",
        category: "Developer",
        description:
            "Web performance, security, DNS and developer infrastructure.",
        free: true,
        url: "https://www.cloudflare.com/"
    },

    {
        name: "GitHub",
        category: "Developer",
        description:
            "Platform for hosting code, collaborating and managing software projects.",
        free: true,
        url: "https://github.com/"
    },

    {
        name: "Canva",
        category: "Student",
        description:
            "Create presentations, graphics, documents and visual content.",
        free: true,
        url: "https://www.canva.com/"
    },

    {
        name: "Grammarly",
        category: "Student",
        description:
            "Writing assistant for improving clarity, grammar and communication.",
        free: true,
        url: "https://www.grammarly.com/"
    },

    {
        name: "Notion",
        category: "Student",
        description:
            "Workspace for notes, projects, databases and personal organization.",
        free: true,
        url: "https://www.notion.so/"
    }
];


const toolsGrid = document.getElementById("tools-grid");
const searchInput = document.getElementById("tool-search");
const filterButtons = document.querySelectorAll(".filter-button");
const noResults = document.getElementById("no-results");


let currentCategory = "all";


function renderTools() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    const filteredTools = tools.filter((tool) => {

        const matchesCategory =
            currentCategory === "all" ||
            tool.category === currentCategory;


        const matchesSearch =
            tool.name
                .toLowerCase()
                .includes(searchTerm) ||

            tool.description
                .toLowerCase()
                .includes(searchTerm);


        return matchesCategory && matchesSearch;

    });


    toolsGrid.innerHTML = "";


    if (filteredTools.length === 0) {

        noResults.classList.remove("hidden");

        return;

    }


    noResults.classList.add("hidden");


    filteredTools.forEach((tool) => {

        const card =
            document.createElement("article");


        card.className = "tool-card";


        card.innerHTML = `

            <span class="tool-category">
                ${tool.category}
            </span>

            <h3>
                ${tool.name}
            </h3>

            <p>
                ${tool.description}
            </p>

            <div class="tool-card-footer">

                ${
                    tool.free
                        ? '<span class="tool-free">FREE PLAN</span>'
                        : '<span></span>'
                }

                <a
                    class="tool-link"
                    href="${tool.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Tool →
                </a>

            </div>

        `;


        toolsGrid.appendChild(card);

    });

}


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        currentCategory =
            button.dataset.category;


        renderTools();

    });

});


searchInput.addEventListener(
    "input",
    renderTools
);


renderTools();
