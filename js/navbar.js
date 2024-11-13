function loadNavbar() {
    const nav = document.getElementById("navbar-container");

    // Get current page URL
    const currentPage = window.location.pathname.split("/").pop();
    console.log(currentPage)
    var homeRef = "";
    if(currentPage.includes("#section")){
        homeRef =  "#section1"
    }
    else{
        homeRef = "index.html"
    }

    // Check if the current page is index.html
    if (currentPage === "index.html" || currentPage === "") {
        // Load full navbar for index.html
        nav.innerHTML = `
        <nav class="navbar" style="position: sticky;">
            <ul class="navbar-menu">
                <li><a href=#top>HOME</a></li>
                <li><a href="#section2">INTERESTS</a></li>
                <li><a href="#section3">CO-CURRICULAR ACTIVITIES</a></li>
                <li><a href="projects.html">PROJECTS</a></li>
            </ul>
        </nav>
        `;
        navClick();
    } else {
        // Load limited navbar for other pages
        nav.innerHTML = `
        <nav class="navbar">
            <ul class="navbar-menu">
                <li><a href="index.html">HOME</a></li>
                <li><a href="${currentPage}">${currentPage.replace(".html", "").toUpperCase()}</a></li>
            </ul>
        </nav>
        `;
    }
}

function navClick(){
    const nav = document.getElementById("navbar-container");
    const navbarLinks = nav.querySelectorAll('.navbar-menu a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            
            if (targetId.includes("#")) {
                const sectionId = targetId.substring(targetId.indexOf("#") + 1);
                const targetSection = document.getElementById(sectionId);
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                console.log("Navigated to section:", sectionId);
            } else {
                // Navigate to another page
                window.location.href = targetId;
            }
        });
    });
}


function scrollOpacity(){
    const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });
}

