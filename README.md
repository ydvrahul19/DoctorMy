# DoctorMy - Healthcare Booking Platform

DoctorMy is a modern, user-friendly healthcare appointment booking platform that connects patients with healthcare providers. Built with React and styled with Tailwind CSS, it offers a seamless experience for booking medical appointments online.

## 🌟 Features

- **User Authentication**
  - Secure login and registration system
  - Protected routes for authenticated users
  - Profile management

- **Doctor Booking System**
  - Browse doctors by speciality
  - View detailed doctor profiles
  - Real-time availability checking
  - Interactive calendar for appointment selection
  - Smooth booking process

- **User Dashboard**
  - View and manage appointments
  - Personal profile customization
  - Medical history tracking
  - Appointment reminders

- **Modern UI/UX**
  - Responsive design for all devices
  - Smooth animations with Framer Motion
  - Intuitive navigation
  - Clean and professional interface

## 🚀 Tech Stack

- **Frontend**
  - React
  - Tailwind CSS
  - Framer Motion (animations)
  - React Router (navigation)
  - React Icons
  - React DatePicker

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/DoctorMy.git
cd DoctorMy
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🔧 Environment Setup

Create a `.env` file in the frontend directory with the following variables:
```env
VITE_API_URL=your_api_url_here
```

## 📱 Available Scripts

In the frontend directory, you can run:

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Project Structure

```
frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## 🔐 Authentication

The application uses a token-based authentication system:
- JWT tokens for secure authentication
- Protected routes for authenticated users
- Automatic token refresh mechanism
- Secure storage of user credentials

## 📱 Responsive Design

DoctorMy is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones
- Different browsers

## 🎯 Future Enhancements

- [ ] Implement real-time chat with doctors
- [ ] Add video consultation feature
- [ ] Integrate payment gateway
- [ ] Add multi-language support
- [ ] Implement push notifications
- [ ] Add medical record management
- [ ] Integrate with healthcare providers' systems

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Frontend Developer - [Your Name]
- UI/UX Designer - [Designer Name]
- Project Manager - [PM Name]

## 📞 Support

For support, email support@doctormy.com or join our Slack channel.

## 🙏 Acknowledgments

- All the doctors and healthcare providers who provided feedback
- The open-source community for the amazing tools
- Our beta testers for their valuable feedback

---

Made with ❤️ by the DoctorMy Team
