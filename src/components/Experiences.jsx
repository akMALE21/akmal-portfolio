const experiences = [
    {
        role: "Data Engineer Intern",
        company: "PT. Enseval Putera Megatrading Tbk",
        duration: "Sep 2024 – now",
        description: `
            - Developed and optimized ETL processes using Prefect in Python, managing over 20+ ETL pipelines to ensure efficient data extraction and transformation.
            - Perform data processing and build data extraction procedures using Oracle, Mssql, Postgresql, and Mysql, improving the efficiency of data retrieval processes.
            - Implemented MBA using Apriori Algorithm to optimize warehouse storage layouts and utilized Prophet and XGBoost models for inventory forecasting
            - Prepared over 20 data documentation files using metadata tools, simplifying future data validation and tracking processes.
        `,
    },
    {
        role: "Data Engineer Intern",
        company: "PT. Oviatech Prima Integra",
        duration: "Jul 2023 – Feb 2024",
        description: `
            - Involved in the development of 5 BI dashboards for a banking project using Tableau.
            - Built over 10 data sets leveraging ETL processes for dashboard development using Pentaho Data Integration.
            - Contributed in data preparation for the data sources.
        `,
    },
];

const Experiences = () => {
    return (
        <section
        id="experiences"
        className="min-h-screen bg-[#ecfdf5] text-[#1a3c2f] px-6 py-12 scroll-mt-10"
        >
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#1a3c2f] mb-12">
            Experiences
            </h2>

            <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
                <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow whitespace-pre-wrap"
                >
                <h3 className="text-2xl font-semibold text-[#1a3c2f]">{exp.role}</h3>
                <p className="text-lg font-medium mb-1 text-[#155e4b]">
                    {exp.company}
                </p>
                <p className="text-sm italic mb-3 text-[#4b5563]">{exp.duration}</p>
                <p className="text-sm text-justify text-[#1f2937]">{exp.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};


export default Experiences;
