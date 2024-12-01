import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiCheck, FiPrinter, FiDownload, FiCalendar } from 'react-icons/fi';

const AppointmentConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state?.appointmentData;

  // Redirect if no appointment data
  React.useEffect(() => {
    if (!appointmentData) {
      navigate('/doctors');
    }
  }, [appointmentData, navigate]);

  if (!appointmentData) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a text version of the appointment details
    const appointmentText = `
      DoctorMy Appointment Confirmation
      
      Doctor: ${appointmentData.doctorName}
      Specialty: ${appointmentData.specialty}
      Date: ${new Date(appointmentData.date).toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}
      Time: ${appointmentData.time}
      Location: ${appointmentData.location}
      
      Important Notes:
      - Please arrive 15 minutes before your appointment
      - Bring any relevant medical records
      - Wear a mask during your visit
      - Follow COVID-19 safety protocols
      
      Need to reschedule? Contact us at:
      Email: doctormy@gmail.com
      Phone: +91 987654123
    `;

    // Create and download the file
    const blob = new Blob([appointmentText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'appointment_details.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Message */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-green-100 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center"
        >
          <FiCheck className="text-green-500 w-10 h-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-blue-600 px-6 py-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">Appointment Confirmed!</h1>
            <p className="text-blue-100">
              A confirmation email has been sent to your registered email address
            </p>
          </div>

          {/* Appointment Details */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Doctor</label>
                <p className="text-lg font-medium">{appointmentData.doctorName}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Specialty</label>
                <p className="text-lg font-medium">{appointmentData.specialty}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Date</label>
                <p className="text-lg font-medium">
                  {new Date(appointmentData.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Time</label>
                <p className="text-lg font-medium">{appointmentData.time}</p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-gray-500">Location</label>
                <p className="text-lg font-medium">{appointmentData.location}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrint}
                className="flex items-center px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200"
              >
                <FiPrinter className="mr-2" />
                Print Details
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-gray-200"
              >
                <FiDownload className="mr-2" />
                Download
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/my-appointments')}
                className="flex items-center px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700"
              >
                <FiCalendar className="mr-2" />
                View All Appointments
              </motion.button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-50 p-6 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Next Steps</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">1</span>
                <p className="text-gray-600">Please arrive 15 minutes before your appointment time for registration</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">2</span>
                <p className="text-gray-600">Bring any relevant medical records or test reports</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">3</span>
                <p className="text-gray-600">Wear a mask during your visit and follow COVID-19 safety protocols</p>
              </li>
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div className="p-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Need to cancel or reschedule? Please contact us at least 24 hours before your appointment.
              You can reach us at <span className="text-blue-600">doctormy@gmail.com</span> or call{' '}
              <span className="text-blue-600">+91 987654123</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
