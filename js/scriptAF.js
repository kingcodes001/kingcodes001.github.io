
function getvalue() {
    const contact_name = document.querySelector('#name').value;
    const contact_email = document.querySelector('#email').value;
    const visitor_name = document.querySelector('#visitor-name');
    const visitor_email = document.querySelector('#visitor-email')

    const order_name = document.querySelector('#client-name').value;
    const order_email = document.querySelector('#client-email').value;
    const order_phone = document.querySelector('#client-phone').value;
    const client_name = document.querySelector('#service-name');
    const client_email = document.querySelector('#service-email');
    const client_phone = document.querySelector('#service-phone');


    visitor_name.innerHTML = contact_name;
    visitor_email.innerHTML = contact_email;

    client_name.innerHTML = order_name;
    client_email.innerHTML = order_email;
    client_phone.innerHTML = order_phone;
}


