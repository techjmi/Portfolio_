// ...

app.post('/receive-message', async (req, res) => {
    const { name, email, message } = req.body;

    // Email content
    const mailOptions = {
        from: email,
        to: 'tufailjmi786@gmail.com',
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        const transporter = nodemailer.createTransport({
            // Service: 'Gmail',
        });

        await transporter.sendMail(mailOptions);

        // Respond to the client with a success message
        res.json({ success: true });
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ success: false, error: 'An error occurred while sending the message.' });
    }
});

// ...
