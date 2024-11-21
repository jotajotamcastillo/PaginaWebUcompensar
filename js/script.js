// Inicializa EmailJS con tu Public Key (reemplaza 'YUObW3IhrQS_4NXoS' con tu clave real)
emailjs.init('YUObW3IhrQS_4NXoS');  // Reemplaza 'YUObW3IhrQS_4NXoS' con tu Public Key

// Obtener el formulario
const form = document.getElementById('contact-form');

// Función para manejar el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Definir los parámetros a enviar con el correo
    const params = {
        name: name,
        email: email,
        message: message
    };

    // Enviar el correo con EmailJS utilizando el ID del servicio y el template correcto
    emailjs.send('service_864x8o8', 'template_qxvbyj8', params)
        .then(function(response) {
            // Mostrar alerta si el mensaje fue enviado exitosamente
            alert('¡Mensaje enviado exitosamente!');
            form.reset(); // Limpiar el formulario después del envío
        }, function(error) {
            // Mostrar alerta si hubo un error en el envío
            alert('Hubo un error al enviar el mensaje: ' + error.text);
        });
});
