//Java script encrytor:- https://obfuscator.io/
async function sendContact(ev) {
    ev.preventDefault();

    const senderEmail = document
        .getElementById('emailInput').value;
    const senderMessage = document
        .getElementById('messageInput').value;
    const webhookBody = {
        embeds: [{
            title: 'Contact Form Submitted',
            fields: [
                { name: 'Sender', value: senderEmail },
                { name: 'Message', value: senderMessage }
            ]
        }],
    };
    const webhookUrl = 'Your Webhook URL';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });
    if (response.ok) {
        Swal.fire(
            'Good job!',
            'Your message is send!',
            'success'
        )
    }
    else if(!senderEmail && !senderMessage) {
        Swal.fire(
            'Sorry!',
            'Fill all the fields!',
            'question'
        )
    }
    else{
        Swal.fire(
            'Sorry!',
            'Something went wrong!',
            'error'
        )
    }
}