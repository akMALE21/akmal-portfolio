// src/components/Projects.jsx

const projects = [
    {
        title: 'Most Popular Track 2022 - ETL & BI (2025)',
        description: 'Developed an ETL pipeline to prepare datasets for analysis and visualization of the most popular track in 2022.',
        tech: ['Apache Airflow', 'Python', 'Power BI'],
        link: 'https://github.com/akMALE21/most-popular-tracks-2022',
    },
    {
        title: 'Most Popular Track 2022 - ML (2025)',
        description: 'Clustering tracks into genres using K-Means, stored in PostgreSQL to uncover hidden patterns in music preferences.',
        tech: ['Python', 'PostgreSQL'],
        link: 'https://github.com/akMALE21/most-popular-tracks-2022',
    },
    {
        title: 'Volleyball Performance Dashboard (2025)',
        description: 'Interactive Tableau dashboard visualizing team performance, match trends, and stadium locations.',
        tech: ['Tableau Public', 'Python'],
        link: 'https://github.com/akMALE21/volleyball-performance-dashboard',
    },
    {
        title: 'Snacktify (2023)',
        description: 'Mobile application that helps people identify recipes and nutritional content of food by using their smartphone camera.',
        tech: ['GCP', 'Python', 'FastAPI'],
        link: 'https://github.com/Snacktify',
    },
];


const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c2f] mb-12 text-center">
            Projects
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-[#1a3c2f]">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((techItem, i) => (
                    <span
                        key={i}
                        className="text-sm bg-green-100 text-[#155e4b] px-2 py-1 rounded-full"
                    >
                        {techItem}
                    </span>
                    ))}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 [#1a3c2f] hover:underline text-sm"
                >
                    View Project →
                </a>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;
