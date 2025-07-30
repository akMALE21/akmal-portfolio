// src/components/Projects.jsx

const projects = [
    {
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tech: ['Python', 'XGBoost', 'Streamlit'],
        link: 'https://github.com/akMALE21/Loremipsumdolor',
    },
    {
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tech: ['Power BI', 'SQL Server', 'Prophet'],
        link: 'https://github.com/akMALE21/Loremipsumdolor',
    },
    {
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tech: ['Airflow', 'PostgreSQL', 'Python'],
        link: 'https://github.com/akMALE21/Loremipsumdolor',
    },
    {
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tech: ['Airflow', 'PostgreSQL', 'Python'],
        link: 'https://github.com/akMALE21/Loremipsumdolor',
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
