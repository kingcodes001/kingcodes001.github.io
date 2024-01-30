//service form variables in the service part section
var order_form = document.getElementById("service-form");
var website_form_part = document.getElementById("website-making-term-service-order");
var graphics_form_part = document.getElementById("graphics-design-term-service-order");
var typing_form_part = document.getElementById("document-typing-term-service-order");
var opening_form_button = document.getElementById("opening-form");
var opening_form_butto = document.getElementById("opening-for");


//section variables
var projects_section = document.getElementById("projects");
var contacts_section = document.getElementById("contacts");
var services_section = document.getElementById("services");
var home_section = document.getElementById("home");
var about_section = document.getElementById("about");


//read more in the projects sections in security alarm project as saproject 




function websiteform(){
    graphics_form_part.style.display="none";
    opening_form_butto.style.display="none";
    typing_form_part.style.display="none";
    opening_form_button.style.display="none";
    order_form.style.display="flex";
}

function graphicsform(){
    order_form.style.display="flex";
    website_form_part.style.display="none";;
    typing_form_part.style.display="none";
    opening_form_button.style.display="none";
    opening_form_butto.style.display="none";
}

function typingform(){
    order_form.style.display="flex";
    graphics_form_part.style.display="none";
    website_form_part.style.display="none";
    opening_form_button.style.display="none";
    opening_form_butto.style.display="none";
    alert("SORRY KING_CODES will need you to send a hand written document in his email:kingcodes001@gmail.com so as to get the feedback of your order as soon as possible THANK YOU")
}

function close_form(){
    order_form.style.display="none";
    typing_form_part.style.display="initial";
    graphics_form_part.style.display="initial";
    website_form_part.style.display="initial";
    opening_form_button.style.display="initial";
    opening_form_butto.style.display="initial";
}


function backnormal(){
    services_section.style.display="flex"
    contacts_section.style.display="flex"
    home_section.style.display="flex"
    about_section.style.display="flex"
    projects_section.style.display="flex"
    sa_project.style.display="grid"
    sa_project_information.style.display="none"
}