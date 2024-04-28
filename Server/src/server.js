import express from "express";
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware để xử lý dữ liệu từ form
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());


// Route xử lý yêu cầu gửi email từ form
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Khởi tạo transporter để gửi email
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'lts.volm@gmail.com', // Thay bằng địa chỉ email của bạn
            pass: 'lrpo zvei vyfx eyrz' // Thay bằng mật khẩu email của bạn
        }
    });

    // Định dạng nội dung email
    const mailOptions = {
        from: email,
        to: 'lts.volm@gmail.com', // Thay bằng địa chỉ email của bạn
        subject: 'New Message from Portfolio Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Gửi email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
