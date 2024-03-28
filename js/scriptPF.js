var sa_project = document.getElementById("saproject");
var sa_project_information = document.getElementById("saproject-information-proposal");
let saclick = document.querySelector(".read-project");


//section variables
var projects_section = document.getElementById("projects");
var contacts_section = document.getElementById("contacts");
var services_section = document.getElementById("services");
var home_section = document.getElementById("home");
var about_section = document.getElementById("about");


function backnormal(){
    services_section.style.display="flex"
    contacts_section.style.display="flex"
    home_section.style.display="flex"
    about_section.style.display="flex"
    projects_section.style.display="flex"
    sa_project.style.display="grid"
    sa_project_information.style.display="none"
}

saclick.addEventListener("click",
function(){
    alert("Sorry security alarm project explanation unavailabale.project explanation will be available in 24/4/2024");
}
);