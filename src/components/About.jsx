import { Mail, Linkedin, Github, Instagram, Phone } from "lucide-react";

const skills = [
    "Python", "Oracle", "PostgreSQL", "MySQL", "MSSQL", "Airflow", "Pentaho Data Integration", "Tableau", "Power BI", "GCP"
];

const About = () => {
    return (
        <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white text-black px-6 py-12 gap-10"
        >
        {/* FOTO */}
        <div className="flex-shrink-0">
            <img
            src="/akmal.png"
            alt="Akmal Munggaran"
            className="w-64 h-auto rounded-2xl"
            />
        </div>

        {/* TEKS */}
        <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c2f] mb-4">
            About Me
            </h2>
            <p className="text-justify leading-relaxed mb-6 text-gray-800">
            I graduated in Information Systems and Technology from Institut
            Teknologi Bandung, with a strong interest in Data Analyst, Data
            Engineer, and Data Science. Equipped with excellent communication
            skills and a passion for multifaceted problem-solving, I am committed
            to advancing my expertise and contributing to impactful projects in
            data analytics, engineering, and science.
            </p>

            {/* Skills */}
            <div>
            <h3 className="text-2xl font-semibold text-[#1a3c2f] mb-3">
                My Skills
            </h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                {skills.map((skill, index) => (
                <li
                    key={index}
                    className="bg-[#d1fae5] text-[#1a3c2f] border border-[#a7f3d0] px-3 py-1 rounded-full text-sm font-medium"
                >
                    {skill}
                </li>
                ))}
            </ul>
            </div>

            {/* Kontak dengan ikon */}
            <div className="mt-10">
            <h3 className="text-2xl font-semibold text-[#1a3c2f] mb-3">Contact</h3>
            <div className="flex gap-6 justify-center md:justify-start items-center text-[#1a3c2f]">
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=akmalmunggaran42@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-transform hover:scale-110"
                >
                <Mail size={28} />
                </a>
                <a
                href="https://linkedin.com/in/akmalmunggaran"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-transform hover:scale-110"
                >
                <Linkedin size={28} />
                </a>
                <a
                href="https://github.com/akMALE21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-transform hover:scale-110"
                >
                <Github size={28} />
                </a>
                <a
                href="https://wa.me/6285156985695"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-transform hover:scale-110"
                >
                <Phone size={28} />
                </a>
                <a
                href="https://instagram.com/akmal_munggaran21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-transform hover:scale-110"
                >
                <Instagram size={28} />
                </a>
            </div>
            </div>
        </div>
        </section>
    );
};

export default About;
