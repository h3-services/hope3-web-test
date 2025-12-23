import React, { useState } from 'react';
import '../styles/OurStudents.css';
import Navbar from './navbar';
import NewFooter from './NewFooter';

// Import student images from assets
import IrfanaImg from '../assets/our-students/Irfana.png';
import IyappanImg from '../assets/our-students/Iyappan.png';
import AmrishImg from '../assets/our-students/amrish.png';
import AnithaImg from '../assets/our-students/anitha.png';
import ArshithaImg from '../assets/our-students/arshitha.png';
import BalajiImg from '../assets/our-students/balaji.png';
import BalasaranyaImg from '../assets/our-students/balasaranya.png';
import DevadharshiniImg from '../assets/our-students/devadharshini.png';
import GovindaramanImg from '../assets/our-students/govindaraman.png';
import JananiImg from '../assets/our-students/janani.png';
import JijithImg from '../assets/our-students/jijith.png';
import KalaiarasanImg from '../assets/our-students/kalaiarasan.png';
import KaviyaImg from '../assets/our-students/kaviya.png';
import PoojaImg from '../assets/our-students/pooja.png';
import PrathiswaranImg from '../assets/our-students/prathiswaran.png';
import SornamImg from '../assets/our-students/sornam.png';
import ViswanathanImg from '../assets/our-students/viswanathan.png';

// Student data with life stories
const row1Students = [
    {
        id: 1,
        name: "Irfana",
        image: IrfanaImg,
        story: "I developed a strong interest in the field of innovation and creativity, which led me to join the HOPE3 Varsity Robotics Club. Under the guidance of Meenakshi Anna, an expert from Intel (USA), I have been working on various robotics projects and have achieved significant success. Our team has won several competitions, including second place in a competition held by Bosch (MNC), which also gave me the opportunity to intern with them. Through this experience, I learned that understanding the concepts behind what we learn is the key to success, rather than simply memorizing from books.",
        storyTamil: "எனக்கு creation-ல இருக்கும் ஆர்வத்தினால் Hope3 Varsity Robotics club-ல join பண்ணி, Intel (USA) work பண்ற மீனாட்சி அண்ணா guidance-ல நான் project-லாம் பண்ணிக்கிட்டு வரேன். நிறைய competition-ல கலந்து win பண்றோம். மற்றும் Bosch (MNC) போட்டியில இரண்டாம் இடத்தை பிடித்தது மட்டும் இல்லாமல் அதே companyல internship வாய்ப்பும் கிடைத்தது. வெறுமனே bookல இருக்கிறது மட்டும் படிக்காம ஒவ்வொரு விஷயத்தையும் புரிஞ்சு படிச்சா சாதிக்கலாம் என்கிற நம்பிக்கை வந்து இருக்கு.",
        achievement: "Runner-up in a hackathon conducted by Bosch and as a result got an internship with the company."
    },
    {
        id: 2,
        name: "Iyappan",
        image: IyappanImg,
        story: "A person's thirst for knowledge can be a strong motivator to learn anything in this vast world. Even though I was a commerce student, Hope3 varsity believed in me and encouraged me to learn computer programming. In addition to this, I have always been interested in exploring new skill sets such as product development and soft skills. The HOPE3 varsity clubs provided me with a platform to showcase my talents and hone my skills toward my interest. Although I currently work as a business analyst at a major company, I am still pursuing my dreams and striving towards greater achievements.",
        storyTamil: "ஒரு விஷயத்தை கத்துக்கணும்-ன்ற ஆர்வம் இருந்தா போதும் நம்ம எதை வேணாலும் கத்துக்க முடியும். நான் ஒரு commerce student. இருந்தாலும் நானும் ஒரு computer programming பண்ண முடியும்-னு நம்பிக்கையும் ஊக்கத்தையும் கொடுத்தது Hope3 varsity. அது மட்டுமில்லாமல் எனக்கு நிறைய விஷயங்களை கத்துகிறது பிடிக்கும் எடுத்துக்காட்டு: soft skill, product development, communication club-ல எல்லாம் join பண்ணி படிச்சதோட மட்டும் இல்லாம அதை present பண்ண மேடையும் கொடுத்தது Hope3 varsity. இப்ப நான் ஒரு பெரிய கம்பெனில business analyst வேலை பார்த்துட்டே என்னோட பெரிய கனவுகளை நோக்கி ஓடிட்டு இருக்கேன்.",
        achievement: "The combination of interest and passion guided this government school student to secure a premium job in one of India's top MNCs."
    },
    {
        id: 3,
        name: "Amrish",
        image: AmrishImg,
        story: "My ultimate passion and interest lies in the field of computers. During my college years, I collaborated with HOPE3 to create an application named 'Find a Bed'. The purpose of this app is to help people find available hospital beds during the COVID-19 pandemic. As a result of my work in this project, I was able to secure a job at a multinational company. The success of the project was largely attributed to the opportunities provided by HOPE3 Varsity, which allowed us to donate our theoretical knowledge to practical situations.",
        storyTamil: "கம்ப்யூட்டர் மட்டும்தான் என் கனவு passion எல்லாமே. College படிக்கும்போதே Hope3 யோட சேர்ந்து Covid time-ல Bed availability எங்கெல்லாம் இருக்குன்னு தெரிஞ்சுக்க 'Find a bed' என்ற app பண்ணினேன். MNC-ல வேலை கிடைச்சதுக்கு, Hope3 யோட சேர்ந்து பண்ண projects எல்லாம் முக்கிய காரணம். சொல்லி கொடுத்தது மட்டுமல்லாமல் அத practical-லா donate பண்ண platform மும் ஏற்படுத்தி கொடுத்தது Hope3 varsity.",
        achievement: "Completed many projects for clients during college days which earned him a Walmart internship and clinched a job in Ericsson."
    },
    {
        id: 4,
        name: "Anitha",
        image: AnithaImg,
        story: "As a BE Computer Science student, I had big aspirations in my life and have been putting in a lot of effort to achieve them. However, I often encountered many doubts that I couldn't find proper clarification or guidance for in college. Fortunately, I found the support I needed through HOPE3, which has helped me tremendously. Thanks to their guidance, I am now working at an MNC.",
        storyTamil: "நான் ஒரு B.E computer science student. எனக்கு பெரிய அளவில சாதிக்கணும்னு ஆசை. அதுக்காக நிறைய முயற்சிகள் பண்ணிட்டே இருப்பேன். அப்ப எனக்கு கேள்விகள் வரும் கல்லூரியில் அதற்கான விடைகளோ வழிகாட்டுதல்களோ கிடைக்கல. Hope3யிடம் அதுக்கான பதில்கள் இருந்தது, கூடவே வழிகாட்டியாகவும் இருந்தாங்க. இப்ப நான் ஒரு பெரிய MNC-ல work பண்ணிட்டு இருக்கேன்.",
        achievement: "Coming from a government school background, I was able to acquire a job at a reputed MNC through determination and skill."
    },
    {
        id: 5,
        name: "Arshitha",
        image: ArshithaImg,
        story: "My love for Physics knows no bounds - I am infinitely passionate about understanding its intricacies and gaining a deep understanding of how the world works. Following my 12th-grade studies, I received invaluable support from HOPE3 for my JEE preparation. Not only did they help me prepare for the exam, but they also taught me the importance of yoga and meditation to improve my mental strength. Under the watchful guidance of Dr.Meenakshi Sir, I made tremendous progress and received well-structured guidance. Thanks to HOPE3's unwavering support, I secured a seat at NIT Hamirpur to pursue my love of Physics. I am now embarking on a thrilling journey toward gaining more knowledge and satisfying my thirst for understanding.",
        storyTamil: "Physics பிடிக்கும்னு சொல்றதை விட அது மேல தீவிரமான காதல் என்று சொல்லலாம் என் லட்சியமே physics ஆழமா புரிஞ்சுக்கிறது தான் அது மூலமா இந்த உலகம் எப்படி இயங்குதுன்னு தெரிஞ்சுக்கணும். 12th அப்புறம் JEE preparation பண்ண Hope3 foundation support கிடைத்தது. அது மட்டும் இல்லாம mental strength-கு yoga meditation எல்லாம் கத்து கொடுத்தாங்க. Meenakshi அண்ணா regular-அ என்னோட progress-அ reviews செய்து guide பண்ணாங்க. இப்படி எல்லா விஷயத்திலும் எனக்கு உறுதுணையா இருந்ததின் காரணமா NIT Hamirpur-ல seat கிடைச்சது இப்ப அறிவுக்கான தேடுதல் நல்ல முறையில் பயணிச்சிட்டு இருக்கேன்.",
        achievement: "Cracked the tough JEE exam and is pursuing Engineering Physics at the prestigious National Institute of Technology in Hamirpur."
    },
    {
        id: 6,
        name: "Balaji",
        image: BalajiImg,
        story: "I believe that simply studying from a book is not enough - I aim to understand every concept in depth. Unfortunately, I can't able to achieve them only through books, Deep down I had an interest to learn more than just books but don't know where to begin. That's when I came to know about HOPE3 Varsity and joined it immediately. Their teaching methodology was simple, clear, and practical, allowing me to fully grasp and understand each topic in depth. Thanks to HOPE3's guidance, I am now working at India's top MNC TCS.",
        storyTamil: "வெறும் புத்தகத்தில் இருந்து மட்டும் படிக்கிறது போதாதுனு நான் நம்புறேன். புத்தகங்களை விட அதிகமா கத்துக்கணும்கிற ஆர்வம் எனக்கு ரொம்பவே இருந்தது, ஆனால் எங்க எப்படி ஆரம்பிக்கிறது என்று தெரியவில்லை. அப்பதான் Hope3 Varsity பத்தி தெரிஞ்சு அதுல சேர்ந்தேன். அவங்க சொல்லிக் கொடுக்கிற முறை வந்து ரொம்ப easy-வும் clear-வும் நடைமுறையில் செயல்படுத்தும் படியாகவும் இருந்தது. ஒவ்வொன்றையும் முழுமையாகவும் ஆழமாகவும் உள்வாங்கிக் கொள்ள உதவியது. Hope3 வழிகாட்டுதலுக்கு நன்றி. நான் இப்போ இந்தியாவின் சிறந்த MNC TCS-இல் வேலை பார்க்கிறேன்.",
        achievement: "Through unwavering confidence and effort, he landed a premium job in one of India's best MNCs."
    },
    {
        id: 7,
        name: "Balasaranya",
        image: BalasaranyaImg,
        story: "Designing is my ultimate passion and I owe a lot of credit to HOPE3 for helping me to discover this interest. They provided me with unwavering support and exposed me to various new technologies in the field of design. Currently, I am working as a Software Developer in a great company and also taking on several design projects. With HOPE3's guidance, I am confident that I will soon be able to establish myself as a professional designer.",
        storyTamil: "என்னோட passion designing அத என்னையே கண்டுபிடிக்க வச்சு அதுல என்னென்ன New Technologies இருக்குன்னு சொல்லி அத explore பண்ணவும் வச்சது Hope3 மீனாட்சி அண்ணா. இப்ப நான் ஒரு நல்ல software company developer-அ வேலை செஞ்சுக்கிட்டே designing சில projects எடுத்து பண்ணிக்கிட்டு வரேன். கூடிய சீக்கிரம் ஒரு professional designer-அ வர முடியும் என்கிற நம்பிக்கை வந்திருக்கு.",
        achievement: "Landed a job at an MNC while studying in college through passion and self-motivation, without the help of on/off campus recruitment."
    },
    {
        id: 8,
        name: "Devadharshini",
        image: DevadharshiniImg,
        story: "Since I was a child, My dream and aspiration have always been to become a doctor. With the excellent guidance and support of HOPE3, my dream came to a reality. Their guidance has instilled in me the confidence that even a student from a Government School can achieve their dream of becoming a doctor.",
        storyTamil: "சிறு வயதில் இருந்தே டாக்டர் ஆகணும் என்பது தான் என் கனவு. அந்தக் கனவை நனவாக்கியது Hope3யின் வழிகாட்டுதல்தான். Hope3 அரசு பள்ளி மாணவர்களும் டாக்டர் ஆகலாம் என்ற நம்பிக்கையை கொடுத்தது.",
        achievement: "Secured the first rank in NEET-2022 from government school category."
    },
    {
        id: 9,
        name: "Govindaraman",
        image: GovindaramanImg,
        story: "My goal is to earn more to give more. Fortunately, I received timely and inspiring support from HOPE3. They provided me with the proper guidance to follow the correct path to my success. As a result, I am currently employed at an MNC and using my resources to help those in need to the best of my ability.",
        storyTamil: "என்னோட கனவே நல்லா சம்பாதித்து நிறைய பேருக்கு உதவறது தான். அந்த கனவுக்கு பக்கபலமாகவும் தகுந்த நேரங்களில் உறுதுணையாக இருந்து ஊக்கத்தையும் தெளிவையும் கொடுத்தது, என்னை முன்னேற்ற பாதைக்கு செல்ல வெச்சது Hope3 foundation. இப்ப நான் ஒரு MNC company-ல வேலை பார்த்துட்டு, என்னால முடிஞ்ச உதவிகளை செஞ்சுட்டு இருக்கேன்.",
        achievement: "Being from a government school, his focused efforts and grit helped him secure a job as a software developer."
    },
];

const row2Students = [
    {
        id: 10,
        name: "Janani",
        image: JananiImg,
        story: "Becoming a doctor was not just a desire, but my ultimate dream. Thanks to Mr.Palani and Mr.Shiva from Hope3, who provided me with the necessary motivation and hope to pursue my dream. Without their guidance, I would have ended up in engineering, a field in which I have no interest. With the help of the HOPE3 foundation, I received funding for a year-long coaching program in a top-class private training Institution. Thanks to their support, I was able to turn my dream into reality today.",
        storyTamil: "Doctor ஆகணும்-னு ஆசை சொல்றத விட கனவு-னு சொல்லலாம். அதுக்கான ஊக்கத்தையும் நம்பிக்கையும் கொடுத்தது Hope3 பழனி அண்ணா மற்றும் சிவா அண்ணா. ஒருவேளை நடக்காம இருந்திருந்தால் எனக்கு விருப்பமில்லாத engineering தான் படிச்சிட்டு இருந்திருப்பேன். அதுக்காக ஒரு வருடம் தனியார் பயிற்சி மையத்தில் சேர்ந்து படிக்க உதவியது Mugavari foundation மற்றும் Hope3 foundation. அந்த confident கொடுத்ததுனால தான் என் கனவ achievement பண்ண முடிஞ்சது.",
        achievement: "Through tenacious effort, she was able crack NEET on her second attempt to secure a seat in an MBBS program."
    },
    {
        id: 11,
        name: "Jijith",
        image: JijithImg,
        story: "HOPE3 has been an unwavering support in my pursuit of my dream of becoming a civil servant. I am now working as a senior Bailiff at Coimbatore District Court, having cleared the exams conducted by Madras High Court. However, my ambition of joining the civil services remains steadfast. I am committed to supporting Hope3 and to mentoring and guiding other students in their journeys as well.",
        storyTamil: "என் கனவு லட்சியம் இலக்கு எல்லாமே civil service பண்ணனும் தான். இந்த preparation- கு Hope3 foundation எனக்கு ரொம்ப உறுதுணையா இருந்தாங்க. Madras High Court நடத்தும் தேர்வுல pass ஆகி Senior Bailiffஆ Coimbatore District Courtல வேலை பார்த்துக்கொண்டு இருக்கிறேன். அதோட சரின்னு நிக்கல, என் கனவ நோக்கி ஓடிட்டு இருக்கேன். Hope3க்கும் பக்க பலமாகவும் மற்றும் அடுத்து வருகின்ற மாணவர்களுக்கு வழிகாட்டியாகவும் இருப்பேன்.",
        achievement: "With unwavering effort towards serving the society as a civil servant he has now become a Senior Bailiff at the High Court in Coimbatore."
    },
    {
        id: 12,
        name: "Kalaiarasan",
        image: KalaiarasanImg,
        story: "I encountered numerous personal challenges and obstacles, but HOPE3 provided me with the tools to overcome them. The yoga and meditation techniques I learned at HOPE3 helped me gain confidence and clarity when making important decisions. Moreover, their guidance and support helped me prepare for off-campus interviews, which ultimately landed me a job at a large MNC.",
        storyTamil: "எனக்கு தனிப்பட்ட முறையிலும் சூழ்நிலை காரணமாகவும் பல சிக்கல்களும் சவால்களும் இருந்தது. இங்க கத்துக்கிட்ட யோகாவும், தியானமும், தைரியத்தையும் மற்றும் பல தெளிவான முடிவுகள் எடுக்கவும் உதவியாகவும் இருந்தது. அது மட்டும் இல்லாம off campus interview-ல எப்படி face பண்றதுக்கான confidence கொடுத்தது Hope3 foundation. இப்ப நான் ஒரு பெரிய MNC-ல work பண்ணிட்டு இருக்கேன்.",
        achievement: "From a government school background, he was able to acquire a job at an MNC through his skill and persistent effort."
    },
    {
        id: 13,
        name: "Kaviya",
        image: KaviyaImg,
        story: "I was selected for an internship program offered by a national-level political party that focused on improving the welfare of rural villages. Under the guidance of MP, I was assigned to document the problems faced by people across 13 villages and to provide a suitable solution to the problem. This was a challenging task, but one that I was eager to take on. I was particularly proud of my efforts to help an elderly man without any support obtain his Aadhar card. With the support and encouragement of Hope3, I was able to successfully complete this internship and make a positive impact on the lives of many in these rural communities.",
        storyTamil: "College students-கு ஒரு National political party-ல இருந்து village welfare scheme Internship வாய்ப்பு வந்தது. நான் அதுல select ஆகி அந்த scheme-ல MP mam கிராம பஞ்சாயத்து தத்தெடுத்து இருக்காங்க. அதுல 13 villagers-ல மக்கள் சந்திக்க கூடிய பிரச்சனைகள் என்ன அதுக்கான தீர்வுகள் என்ன document பண்றதுதான் என் work. அது ஒரு சவாலா இருந்தது. கேட்பாரற்ற இருந்த ஒரு முதியவருக்கு பல சிரமங்களுக்கு இடையே ஆதார் கார்டு எடுக்க உதவியா இருந்து, அவருடைய வாழ்வாதாரத்துக்கு வழி செய்தது என் வாழ்வில் மறக்க முடியாத நிகழ்வாக இருந்து. இந்த internship நல்லபடியா முடிக்க hope3 foundation கொடுத்த தைரியம் முக்கிய காரணமா இருந்தது.",
        achievement: "Fueled by her passion in political science and public policy she has worked on internships with an MP and a political consultancy."
    },
    {
        id: 14,
        name: "Pooja",
        image: PoojaImg,
        story: "Pooja's determination to succeed despite adversity makes her story truly inspiring. HOPE3 provided the support system she needed to thrive.",
        achievement: "Working in the healthcare sector and studying to become a medical professional."
    },
    {
        id: 15,
        name: "Prathiswaran",
        image: PrathiswaranImg,
        story: "I aspired to make a name for myself in the field of computer science. HOPE3 varsity played a significant role in my journey toward success by providing me with hands-on practical knowledge and boosting my confidence. I am currently pursuing my studies while interning at Zoho, thanks to the foundation's constant encouragement and support.",
        storyTamil: "Computer உலகத்துல ஏதாவது achievement பண்ணனும்னு தான் ஆசை. Hope3 varsity கொடுத்த practical knowledge மற்றும் என் encouragement-லயும் confident-லயும் என்னால அடுத்த கட்டத்தை நோக்கி முன்னேற முடிந்தது. இப்ப நான் college-ல படிச்சிட்டு zoho-ல internship பண்ணிட்டு இருக்கேன்.",
        achievement: "A proficient coder who secured an internship with ZOHO."
    },
    {
        id: 16,
        name: "Sornam",
        image: SornamImg,
        story: "My goal is to become an entrepreneur. I studied UG zoology. After completing it, I came to know about HOPE3 and joined it. I wanted to do business and I am doing online business now. Even if the margin of business is low, there is satisfaction. After I joined HOPE3, they helped me to pursue MBA. Now I am working as a digital marketing executive after completing my MBA. HOPE3 guided me very well in this process, getting this job is a good thing, This is just a starting point and HOPE3 always motivates to start my very own business. Hopefully, this dream will become reality very soon in the future.",
        storyTamil: "என்னுடைய இலக்கே ஒரு entrepreneurஆகுறது தான். நான் UG zoology படிச்சேன். அதை முடிச்சதுக்கு அப்புறம் தான் Hope3 உள்ள வந்தேன். எனக்கு business பண்ணனும் தான் ஆசை, onlineயும் நான் business பண்ணி இருக்கேன். அதுலயும் movement slowவா இருந்தாலும் margin குறைவா இருந்தாலும் மனநிறைவு உண்டு. நான் Hope3 வந்து MBA படிச்சேன். இப்போ MBA HR marketing முடிச்சுட்டு digital marketing executive வா work பண்ணிட்டு இருக்கேன். As soon as possible I will start my business. இந்த வேலை கிடைச்சது success தான், ஆனா இது வெறும் staring point இதுக்கப்புறம் தான் business start பண்ண போறேன். I will work hard. இந்த successக்கு காரணம் hope3 வழிகாட்டுதல் தான்",
        achievement: "Working as a digital marketing executive after completing MBA, future entrepreneur."
    },
    {
        id: 17,
        name: "Viswanathan",
        image: ViswanathanImg,
        story: "Despite scoring high marks, pursuing studies seemed like an unattainable dream for me. However, HOPE3 gave me a new opportunity. My aspiration was to become a doctor, and Mr.Palani from Hope3 provided me with guidance and motivation to focus on my goal and move forward. He advised me to stay away from my mobile phone for three months and prepare diligently to achieve my ambition. Following his advice, I cleared NEET and now I am pursuing my MBBS at Madras Medical College. Thanks to him, my dream has become a reality instead of just being a vision.",
        storyTamil: "First mark எடுத்திருந்தாலும் மேல் படிப்பு ஒரு கனவ இருந்தது. எனக்கு Hope3 foundation மூலமா பெரிய கதவு திறந்தது. Doctor ஆகணும்னு ஆசை இருந்த எனக்கு அது ஆசையா மட்டும் இல்லாம அதை இலக்காக்கி மாத்தி முயற்சி பண்ண வெச்சது Hope3 பழனி அண்ணா. அவருடைய அறிவுரையின் படி மூன்று மாதம் Mobile use பண்ணாம குறிக்கோளுடன் படித்து Neet exam clear பண்ணி, இன்னிக்கி சென்னையில medical college-ல doctor-க்கு படிச்சிட்டு இருக்கேன்.",
        achievement: "The first doctor from his village and school and has inspired many more from there to embark on this journey."
    },
];

// Student Card Component (no name overlay)
const StudentCard = ({ student, onClick }) => {
    return (
        <div className="student-card" onClick={() => onClick(student)}>
            <img
                src={student.image}
                alt={student.name}
                className="student-card-image"
            />
        </div>
    );
};

// Marquee Row Component
const MarqueeRow = ({ students, direction, onCardClick }) => {
    const duplicatedStudents = [...students, ...students];

    return (
        <div className="marquee-section">
            <div className={`marquee-row ${direction === 'left' ? 'marquee-left-to-right' : 'marquee-right-to-left'}`}>
                {duplicatedStudents.map((student, index) => (
                    <StudentCard
                        key={`${student.id}-${index}`}
                        student={student}
                        onClick={onCardClick}
                    />
                ))}
            </div>
        </div>
    );
};

// Modal Component with Flip Card (Rectangle with image + story)
const StudentModal = ({ student, isOpen, onClose }) => {
    if (!student) return null;

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <button className="modal-close" onClick={onClose}>×</button>
            <div className="flip-card-container" onClick={(e) => e.stopPropagation()}>
                <div className="flip-card">
                    {/* Front of card */}
                    <div className="flip-card-front">
                        <img src={student.image} alt={student.name} />
                        <div className="flip-card-front-overlay">
                            <h3>{student.name}</h3>
                            <div className="hover-hint">
                                <span>👆</span>
                                <span>Hover to see their story</span>
                            </div>
                        </div>
                    </div>

                    {/* Back of card - Content only */}
                    <div className="flip-card-back">
                        <div className="flip-card-back-content">
                            <h3>{student.name}</h3>
                            <p className="role">HOPE3 Success Story</p>
                            <p className="bio">
                                {student.story}
                            </p>
                            {student.storyTamil && (
                                <p className="bio-tamil">
                                    {student.storyTamil}
                                </p>
                            )}
                            <div className="achievement-section">
                                <h4>What They Achieved</h4>
                                <p>{student.achievement}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Our Students Page
const OurStudents = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (student) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedStudent(null), 400);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <Navbar />
            <div className="students-page">
                <div className="students-headline">
                    <h1>Our Students</h1>
                    <p>Meet the brilliant minds who transformed their lives through HOPE3</p>
                </div>

                <h2 className="section-title">
                    <span>Success Stories</span> <span className="purple-text">from our alumni</span>
                </h2>

                {/* First row - Right to Left (9 students) */}
                <MarqueeRow
                    students={row1Students}
                    direction="right"
                    onCardClick={handleCardClick}
                />

                {/* Second row - Left to Right (8 students) */}
                <MarqueeRow
                    students={row2Students}
                    direction="left"
                    onCardClick={handleCardClick}
                />

                {/* Modal */}
                <StudentModal
                    student={selectedStudent}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </div>
            <NewFooter />
        </>
    );
};

export default OurStudents;
