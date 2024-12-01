import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './doctormy_logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import doc17 from './doc17.png'
import doc18 from './doc18.png'
import doc19 from './doc19.png'
import doc20 from './doc20.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Meera Reddy',
        image: doc4,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '15 Years',
        about: 'Dr. Kumar is a highly experienced general physician with expertise in managing complex medical conditions. He focuses on preventive healthcare and holistic treatment approaches, ensuring comprehensive care for all his patients.',
        fees: 800,
        address: {
            line1: 'Viman Nagar',
            line2: 'Block 49, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Suresh Iyer',
        image: doc5,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS',
        experience: '12 Years',
        about: 'Dr. Iyer is a renowned gynecologist specializing in women\'s health and reproductive medicine. She is known for her patient-centric approach and expertise in managing high-risk pregnancies.',
        fees: 1000,
        address: {
            line1: 'Koregaon Park',
            line2: 'Lane 7, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Anjali Desai',
        image: doc6,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Desai is a skilled dermatologist specializing in both medical and cosmetic dermatology. He is known for his expertise in treating complex skin conditions and modern aesthetic procedures.',
        fees: 900,
        address: {
            line1: 'Kalyani Nagar',
            line2: 'Street 5, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr.  Rajesh Kumar',
        image: doc1,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD',
        experience: '8 Years',
        about: 'Dr. Kumar is a compassionate pediatrician who specializes in child healthcare and development. She is particularly skilled in managing childhood allergies and developmental disorders.',
        fees: 700,
        address: {
            line1: 'Aundh',
            line2: 'Road 3, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Priya Sharma',
        image: doc2,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '20 Years',
        about: 'Dr. Sharma is a distinguished neurologist with extensive experience in treating neurological disorders. She specializes in stroke management and neurodegenerative diseases.',
        fees: 1200,
        address: {
            line1: 'Shivaji Nagar',
            line2: 'Main Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Amit Patel',
        image: doc3,
        speciality: 'Cardiologist',
        degree: 'MBBS, DM',
        experience: '14 Years',
        about: 'Dr. Patel is a leading cardiologist known for his expertise in interventional cardiology. He specializes in preventive cardiology and management of complex cardiac conditions.',
        fees: 1100,
        address: {
            line1: 'Baner',
            line2: 'Highway Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Arjun Malhotra',
        image: doc7,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS',
        experience: '16 Years',
        about: 'Dr. Malhotra is an experienced orthopedic surgeon specializing in joint replacement surgery and sports medicine. He is known for his minimally invasive surgical techniques.',
        fees: 1000,
        address: {
            line1: 'Magarpatta',
            line2: 'City Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Nisha Verma',
        image: doc8,
        speciality: 'Endocrinologist',
        degree: 'MBBS, DM',
        experience: '11 Years',
        about: 'Dr. Verma is a skilled endocrinologist specializing in diabetes management and thyroid disorders. She takes a holistic approach to hormonal health and metabolic disorders.',
        fees: 900,
        address: {
            line1: 'Kothrud',
            line2: 'Main Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Sanjay Gupta',
        image: doc9,
        speciality: 'Psychiatrist',
        degree: 'MBBS, MD',
        experience: '13 Years',
        about: 'Dr. Gupta is a compassionate psychiatrist specializing in mood disorders and anxiety management. He is known for his patient-centered approach to mental health care.',
        fees: 1000,
        address: {
            line1: 'Hadapsar',
            line2: 'IT Park Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Kavita Krishnan',
        image: doc10,
        speciality: 'Ophthalmologist',
        degree: 'MBBS, MS',
        experience: '9 Years',
        about: 'Dr. Krishnan is a skilled ophthalmologist specializing in retinal disorders and cataract surgery. She is experienced in the latest laser eye surgery techniques.',
        fees: 800,
        address: {
            line1: 'Camp',
            line2: 'MG Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Rahul Mehta',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM',
        experience: '12 Years',
        about: 'Dr. Mehta is an expert gastroenterologist specializing in digestive disorders and liver diseases. He is skilled in advanced endoscopic procedures.',
        fees: 1000,
        address: {
            line1: 'Wakad',
            line2: 'Hinjewadi Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Pooja Singh',
        image: doc12,
        speciality: 'Dentist',
        degree: 'BDS, MDS',
        experience: '8 Years',
        about: 'Dr. Singh is a skilled dentist specializing in cosmetic dentistry and oral surgery. She is known for her gentle approach and expertise in dental implants.',
        fees: 700,
        address: {
            line1: 'Deccan',
            line2: 'FC Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Vikram Kapoor',
        image: doc13,
        speciality: 'Pulmonologist',
        degree: 'MBBS, DM',
        experience: '15 Years',
        about: 'Dr. Kapoor is a renowned pulmonologist specializing in respiratory disorders and sleep medicine. He has extensive experience in managing complex respiratory conditions.',
        fees: 1100,
        address: {
            line1: 'Kondhwa',
            line2: 'NIBM Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Neha Joshi',
        image: doc14,
        speciality: 'Rheumatologist',
        degree: 'MBBS, DM',
        experience: '10 Years',
        about: 'Dr. Joshi specializes in autoimmune disorders and joint diseases. She is known for her comprehensive approach to managing chronic rheumatic conditions.',
        fees: 900,
        address: {
            line1: 'Pimpri',
            line2: 'Chinchwad, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Arun Srinivasan',
        image: doc15,
        speciality: 'Urologist',
        degree: 'MBBS, MS, MCh',
        experience: '18 Years',
        about: 'Dr. Srinivasan is an experienced urologist specializing in minimally invasive urological procedures. He is known for his expertise in treating complex urological conditions.',
        fees: 1200,
        address: {
            line1: 'Sinhagad Road',
            line2: 'Near IT Park, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Ravi Shankar',
        image: doc16,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '14 Years',
        about: 'Dr. Shankar is a dedicated general physician with expertise in managing chronic diseases and preventive healthcare. He is known for his thorough diagnostic approach and patient education.',
        fees: 800,
        address: {
            line1: 'Karve Nagar',
            line2: 'Near DMart, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Sneha Kulkarni',
        image: doc17,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '9 Years',
        about: 'Dr. Kulkarni specializes in advanced skincare treatments and cosmetic dermatology. She has expertise in treating various skin conditions and performing modern aesthetic procedures.',
        fees: 1000,
        address: {
            line1: 'Bibwewadi',
            line2: 'Main Road, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Anita Deshmukh',
        image: doc18,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '12 Years',
        about: 'Dr. Deshmukh is a caring pediatrician with special interest in newborn care and childhood development. She is experienced in handling complex pediatric cases and vaccination programs.',
        fees: 900,
        address: {
            line1: 'Warje',
            line2: 'Mumbai-Bangalore Highway, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Karthik Ramakrishnan',
        image: doc19,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD, DM (Gastroenterology)',
        experience: '16 Years',
        about: 'Dr. Ramakrishnan is a highly skilled gastroenterologist specializing in advanced endoscopy and liver diseases. He has extensive experience in treating complex digestive disorders.',
        fees: 1200,
        address: {
            line1: 'Bund Garden Road',
            line2: 'Near Ruby Hall, Pune, Maharashtra'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Deepika Chauhan',
        image: doc20,
        speciality: 'General Physician',
        degree: 'MBBS, DNB (General Medicine)',
        experience: '11 Years',
        about: 'Dr. Chauhan is known for her patient-centric approach to healthcare. She specializes in managing lifestyle diseases and provides comprehensive primary healthcare services.',
        fees: 800,
        address: {
            line1: 'Yerawada',
            line2: 'Airport Road, Pune, Maharashtra'
        }
    }
]