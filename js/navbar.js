function dropDownHTML(currentPage){
    const pages = ["one.html", "projects.html"];
    return `
    <div style="margin-left:auto">
        <li>
            <select id="page-selector" class="dropdown dropdown-blur">
                <option value="one.html" ${pages.includes(currentPage) ? "selected" : ""}>Assignment 01</option>
                <option value="two.html" ${currentPage === "two.html" ? "selected" : ""}>Assignment 02</option>
            </select>
        </li>
    </div>
`;
}

function navBarOne(currentPage){
    return `
        <nav class="navbar" style="position: sticky;">
            <ul class="navbar-menu">
                <li><a href="#top">HOME</a></li>
                <li><a href="#section2">INTERESTS</a></li>
                <li><a href="#section3">CO-CURRICULAR ACTIVITIES</a></li>
                <li><a href="projects.html">PROJECTS</a></li>
                ${dropDownHTML(currentPage)}
            </ul>
        </nav>
        `;
}

function navBarTwo(currentPage){
    return `
        <nav class="navbar">
            <ul class="navbar-menu">
                <li><a href="#top">WEIGHT CONVERTER</a></li>
                <li><a href="#section2">SERIES CALCULATOR</a></li>
                <li><a href="#section3">MAGIC BOX</a></li>
                ${dropDownHTML(currentPage)}
            </ul>
        </nav>
        `
}
function navBarProject(currentPage){
    
    return `
        <nav class="navbar">
            <ul class="navbar-menu">
                <li><a href="one.html">HOME</a></li>
                <li><a href="one.html#section2">INTERESTS</a></li>
                <li><a href="one.html#section3">CO-CURRICULAR ACTIVITIES</a></li>
                <li><a href="projects.html">PROJECTS</a></li>
                ${dropDownHTML(currentPage)}
            </ul>
        </nav>
        `
}

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
        homeRef = "one.html"
    }

    // Check if the current page is one.html
    if (currentPage === "one.html" || currentPage === "") {
        nav.innerHTML = navBarOne(currentPage);
        navClick();
    } 
    else if (currentPage === "two.html") {
        nav.innerHTML = navBarTwo(currentPage);
        navClick();
    }
    else {  //project.html
        nav.innerHTML = navBarProject(currentPage);
        navSubClick();

    }

    addDropdownListener();
}

function addDropdownListener() {
    const dropdown = document.getElementById("page-selector");
    dropdown.addEventListener("change", (event) => {
        const selectedPage = event.target.value;
        window.location.href = selectedPage;
    });
}

function navSubClick() {
    const nav = document.getElementById("navbar-container");
    const navbarLinks = nav.querySelectorAll('.navbar-menu a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            const href = link.getAttribute('href');
            const [page, sectionId] = href.split('#');

            if (page === "one.html") {
                localStorage.setItem('scrollToSection', sectionId || ""); 
                window.location.href = page;
            } else {
                if (sectionId) {
                    const targetSection = document.getElementById(sectionId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }
                } else {
                    window.location.href = href;
                }
            }
        });
    });
}

function scrollSectionFromLocalStorage(){
    const scrollToSection = localStorage.getItem('scrollToSection');
    if (scrollToSection) {
        const targetSection = document.getElementById(scrollToSection);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        localStorage.removeItem('scrollToSection'); // Clear after scrolling
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
                console.log(sectionId)
                const targetSection = document.getElementById(sectionId);
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                history.replaceState(null, null, window.location.pathname);
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

