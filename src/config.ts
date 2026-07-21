export const siteConfig = {
  name: "Viveena Khatri",
  title: "Data Engineer | PySpark • Databricks • SQL • Kafka • Airflow",
  description: "Portfolio website of Viveena Khatri",
  accentColor: "#FF3621",
  resume: "/resume.pdf",
  social: {
    email: "viveenak@gmail.com",
    linkedin: "https://linkedin.com/in/viveenakhatri/",
    github: "https://github.com/Viveena",
  },
  aboutMe:
        "I am a Data Engineer passionate about designing scalable data pipelines and modern analytics platforms. I have hands-on experience with Databricks, PySpark, Apache Kafka, Airflow, SQL, and Python through production internships and real-world projects. I enjoy transforming raw data into reliable, business-ready insights using modern data engineering practices.",
  skills: [
"Python",
"SQL",
"PySpark",
"Databricks",
"Apache Kafka",
"Apache Airflow",
"Docker",
"Git",
"Linux",
"MySQL",
"InfluxDB",
"Redis",
"Grafana",
"Pandas",
"NumPy",
"MQTT",
"MongoDB",
"Node.js",
"Express.js"
],
  projects: [
    {
    name: "Retail Lakehouse Data Pipeline",

    description:
      "Designed and implemented an end-to-end retail data pipeline on Databricks using the Medallion Architecture (Bronze, Silver, and Gold). Built ETL workflows with PySpark to ingest, clean, transform, and aggregate retail sales data into analytics-ready datasets.",
    link: "https://github.com/Viveena/Retail-Lakehouse-Data-Pipeline",

    skills: [
      "Databricks",
      "PySpark",
      "Delta Tables",
      "SQL",
      "CSV",
      "ETL",
      "Medallion Architecture"
    ]
},
    {
      name:"Real-Time ETL News Pipeline",

      description:
      "Developed an automated News ETL pipeline to extract, transform, and load real-time news data from external APIs. The pipeline ingests news articles, processes them, and stores the transformed data in a database for analytics and reporting.",
      link: "https://github.com/Viveena/newsFlow_ETL_Pipeline",
      skills:[
      "PySpark",
      "MySQL",
      "Grafana",
      "Docker",
      "Airflow",
      "Redis",
      ]
    },
    {
      name: "Real-Time E-Commerce Analytics Platform",
      description:
        "Developed a real-time analytics platform to process and visualize e-commerce data, enabling data-driven decision making.",
      link: "https://github.com/Viveena/ecommerce-analytics",
      skills: ["Kafka", "PySpark", "MySQL", "Grafana", "Airflow",]
    },
     
  ],
  experience: [
    {
      company: "Spanidea Systems Pvt. Ltd.",
      title: "Data Engineering Intern",
      dateRange: "Jan 2026 – Jun 2026",
      bullets:[
        "Built ETL and data transformation workflows for enterprise network telemetry.",
        "Standardized raw device data into structured JSON payloads.",
        "Led migration of 60+ MySQL tables with validation and automation.",
        "Developed stored procedures, triggers, and schema mapping solutions.",
        "Ensured production-scale data integrity through testing."
        ]
    },
    {
      company: "Freelance",
      title: "Backend Developer",
      dateRange: "Jan 2026 – Feb 2026",
      bullets:[
        "Built production REST APIs.",
        "Implemented JWT authentication.",
        "Optimized SQL queries.",
        "Integrated backend services with frontend applications."
        ]
    },
    {
      company: "Beyond Marketing",
      title: "Frontend Developer Intern",
      dateRange: "Jun 2025 – Jul 2025",
      bullets: [
        "Independently designed and developed 'MediiTrack', a production-ready medical mobile application using React Native (Expo), TypeScript, and modern UI practices.",
        "Converted high-fidelity Figma designs into responsive, reusable, and performant components, ensuring a consistent user experience across Android and iOS devices."
      ],
    },
    {
      company: "Defence Research and Development Organisation",
      title: "Python Developer Intern",
      dateRange: "Jun 2024 – Jul 2024",
      bullets: [
        "Developed Python Tkinter interface.",
        "Integrated multiple search filters.",
        "Improved processing efficiency."
      ]
    },  
  ],
  education: [
    {
    school:"MBM University, Jodhpur",

    degree:"Bachelor of Electronics & Computer Engineering",

    dateRange:"2022 – 2026",

    achievements:[
    "CGPA: 8.19"
    ]
    },
  ],
};
