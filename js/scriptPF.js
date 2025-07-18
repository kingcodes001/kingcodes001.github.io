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
    alert("Smart Manager is an advanced web-based management system designed to simplify and automate day-to-day business operations. It provides a centralized platform for managing resources, tracking performance, and improving decision-making with real-time insights.
This system is ideal for organizations and businesses that require efficiency, accuracy, and transparency in their processes. With intuitive dashboards, data analytics, and automated workflows, Smart Manager empowers businesses to operate seamlessly and scale effectively.");
}
);