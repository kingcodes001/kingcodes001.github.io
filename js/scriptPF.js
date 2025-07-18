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

This system is ideal for organizations and businesses that require efficiency, accuracy, and transparency in their processes. With intuitive dashboards, data analytics, and automated workflows, Smart Manager empowers businesses to operate seamlessly and scale effectively.

Core Features:

User Management: Add, edit, and manage users with role-based access control.

Task & Project Tracking: Monitor progress, deadlines, and team performance in real time.

Inventory & Resource Management: Keep track of stock, assets, and resource allocation effortlessly.

Financial & Billing Tools: Generate invoices, track expenses, and manage accounts with ease.

Reports & Analytics: Get detailed reports for better decision-making.

Cloud Integration: Secure and accessible from anywhere, anytime.


Who is it for?
Small and medium-sized businesses, corporate teams, associations, and entrepreneurs looking for a smart, reliable, and scalable management solution.

Goal:
To reduce manual work, minimize errors, and maximize productivity through automation and smart technology.");
}
);