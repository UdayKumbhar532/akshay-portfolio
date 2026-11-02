export const personalInfo = {
  name: "Peddi Akshay",
  roleTitle: "Aspiring Data Analyst | Business Intelligence",
  tagline: "Turning Raw Data Into Meaningful Business Insights.",
  bioShort: "I'm Peddi Akshay, a Computer Science Engineering student with hands-on experience in Python, SQL, Advanced Excel and Power BI. I enjoy transforming raw datasets into meaningful insights, building interactive dashboards and helping businesses make smarter, data-driven decisions.",
  aboutDetailed: [
    "I'm a B.Tech Computer Science and Engineering student at Bhaskar Engineering College, graduating in 2027. My interests lie in data analytics, business intelligence, database management, and Python-based data processing.",
    "I have practical experience working with structured datasets, cleaning and validating data, developing SQL queries, creating interactive dashboards, and generating business reports.",
    "Through academic projects, internships, and operational experience, I have developed an analytical approach to solving problems and understanding business performance.",
    "I enjoy identifying patterns, understanding trends, and transforming complex information into clear, actionable insights."
  ],
  location: "Hyderabad, Telangana, India",
  email: "akshaypeddi91@gmail.com",
  phone: "+91 9182171443",
  linkedin: "https://linkedin.com/in/akshay-peddi-b8a75136b",
  github: "https://github.com/akshaypeddi",
  availability: "Open to Data Analyst Opportunities",
  college: "Bhaskar Engineering College",
  degree: "B.Tech Computer Science Engineering",
  graduation: "2027",
  values: [
    { label: "Data Integrity", desc: "Rigorous cleaning & schema validation" },
    { label: "Actionable Insights", desc: "Translating metrics to business value" },
    { label: "Interactive BI", desc: "Dynamic dashboards & executive reports" },
    { label: "Continuous Learning", desc: "Exploring modern analytics & AI tools" }
  ],
  stats: [
    { label: "Data Records Analyzed", value: "5,000+", subtext: "Processed & Cleaned" },
    { label: "Core Analytics Stack", value: "Python & SQL", subtext: "Excel & Power BI" },
    { label: "Forecasting Impact", value: "18%", subtext: "Reported Project Gain" }
  ]
};

export const techBadges = [
  { name: "Python", category: "Language" },
  { name: "SQL", category: "Database" },
  { name: "Microsoft Excel", category: "Analytics" },
  { name: "Power BI", category: "BI" },
  { name: "Pandas", category: "Data Science" },
  { name: "NumPy", category: "Computation" },
  { name: "Matplotlib", category: "Visualization" },
  { name: "MySQL", category: "RDBMS" }
];

export const skillCategories = [
  {
    id: "data-analytics",
    icon: "BarChart3",
    title: "Data Analytics",
    subtitle: "End-to-End Analysis",
    description: "Cleaning, exploring, and structuring raw transactional data to identify key business drivers, variances, and performance bottlenecks.",
    skills: [
      "Data Cleaning",
      "Data Validation",
      "Exploratory Data Analysis (EDA)",
      "Trend Analysis",
      "Business Analytics",
      "Data Documentation"
    ]
  },
  {
    id: "programming",
    icon: "Code2",
    title: "Programming",
    subtitle: "Python Data Processing",
    description: "Developing robust data extraction routines, handling missing records, and transforming complex datasets using Python scientific libraries.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Structures",
      "Automation Scripts"
    ]
  },
  {
    id: "databases",
    icon: "Database",
    title: "Databases & SQL",
    subtitle: "Relational Modeling & Queries",
    description: "Writing complex relational queries, subqueries, aggregations, and window functions while preserving schema integrity and query speed.",
    skills: [
      "SQL",
      "MySQL",
      "Relational Database Queries",
      "Schema Integrity",
      "Query Optimisation",
      "Data Joins & Aggregations"
    ]
  },
  {
    id: "bi",
    icon: "LayoutDashboard",
    title: "Business Intelligence",
    subtitle: "Visual Dashboards",
    description: "Crafting intuitive executive dashboards and visual models that provide actionable clarity on key performance indicators.",
    skills: [
      "Microsoft Power BI",
      "Advanced Microsoft Excel",
      "Pivot Tables",
      "VLOOKUP & XLOOKUP",
      "Data Visualisation",
      "Interactive Dashboards"
    ]
  },
  {
    id: "reporting",
    icon: "FileSpreadsheet",
    title: "Business Reporting",
    subtitle: "KPI & Performance Tracking",
    description: "Producing concise operational and executive reports, tracking procurement costs, stock movements, and revenue trends.",
    skills: [
      "KPI Tracking",
      "Sales Reporting",
      "Variance Analysis",
      "Inventory Analysis",
      "Automated Reporting",
      "Margin Optimization"
    ]
  },
  {
    id: "professional",
    icon: "Lightbulb",
    title: "Professional Skills",
    subtitle: "Communication & Problem Solving",
    description: "Bridging the gap between raw data numbers and business stakeholder decisions through clear cross-functional presentation.",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Technical Documentation",
      "Cross-Functional Collaboration",
      "Stakeholder Communication",
      "Operational Discipline"
    ]
  }
];

export const featuredProjects = [
  {
    id: "food-stall-analytics",
    title: "Food Stall Sales Analytics & Business Reporting",
    badge: "Flagship Analytics Project",
    category: "Sales & Operations Analytics",
    period: "Academic & Operational Case Study",
    highlightMetric: "5,000+ Records Analyzed",
    impactMetric: "18% Reported Inventory Forecast Improvement",
    tools: ["Python", "SQL", "Advanced Excel", "Power BI", "Pandas"],
    shortDesc: "An end-to-end sales analytics and business reporting project designed to transform transactional sales records into actionable business insights. The project focuses on analysing revenue trends, customer preferences, peak sales hours, inventory movement and profit margins.",
    overview: "This project provides a comprehensive data-driven evaluation of food stall retail operations over a multi-month period. By ingesting messy raw sales logs, the analysis uncovers customer purchasing habits, hourly demand fluctuations, and stock turnover rates to optimize daily procurement.",
    keyContributions: [
      "Collected, cleaned and structured more than 5,000 transactional records from operational registers.",
      "Used Python and SQL for data cleaning, transformation, missing value imputation, and schema validation.",
      "Developed advanced SQL queries to analyse sales velocity, basket sizes, and peak rush-hour patterns.",
      "Created Excel models leveraging Pivot Tables, VLOOKUP, XLOOKUP, and conditional formatting rules.",
      "Built interactive dashboards using Power BI and Excel for real-time KPI monitoring.",
      "Analysed product categories and highlighted slow-moving inventory items to prevent spoilage.",
      "Identified insights supporting inventory forecasting, with an 18% improvement reported in the project model.",
      "Prepared analytical documentation and comprehensive executive business summaries."
    ],
    sqlSnippet: `-- Peak Sales Hour Analysis & Basket Revenue
SELECT 
    EXTRACT(HOUR FROM order_timestamp) AS order_hour,
    COUNT(DISTINCT order_id) AS total_orders,
    ROUND(SUM(total_amount), 2) AS gross_revenue,
    ROUND(AVG(total_amount), 2) AS avg_order_value,
    SUM(quantity_sold) AS units_sold
FROM sales_transactions
WHERE payment_status = 'COMPLETED'
GROUP BY EXTRACT(HOUR FROM order_timestamp)
ORDER BY gross_revenue DESC;`,
    keyFindings: [
      { metric: "Peak Hours", finding: "7:00 PM – 9:30 PM generated 64% of total daily revenue." },
      { metric: "Top Category", finding: "Beverages and fast-moving snacks yielded 42% of overall gross margin." },
      { metric: "Slow Inventory", finding: "Identified 3 perishable items accounting for 70% of inventory wastage." },
      { metric: "Forecast Accuracy", finding: "18% reported reduction in daily stock-out occurrences." }
    ],
    recommendations: [
      "Shift prep schedules to start 45 minutes ahead of the 7:00 PM demand surge.",
      "Implement dynamic bundling of slow-moving side items with high-velocity beverages.",
      "Automate daily raw material procurement re-order levels using the Excel formula model."
    ]
  },
  {
    id: "customer-retention-insights",
    title: "Customer Purchase Behavior & Churn Analysis",
    badge: "Exploratory Analytics",
    category: "Customer Analytics",
    period: "Independent Data Study",
    highlightMetric: "3,200+ Customer Profiles",
    impactMetric: "Segmented RFM Scorecard",
    tools: ["Python", "Pandas", "Matplotlib", "SQL", "Seaborn"],
    shortDesc: "Exploratory customer segmentation and retention study evaluating purchase frequency, recency, and monetary contribution to identify high-value customer clusters.",
    overview: "Built an RFM (Recency, Frequency, Monetary) data pipeline in Python to categorize shoppers into distinct tiers, helping marketing teams target retention campaigns efficiently.",
    keyContributions: [
      "Engineered behavioral metrics using Pandas datetime transformations on historical sales transactions.",
      "Identified dormant customer segments at risk of churn and quantified potential revenue recovery.",
      "Visualized cohort retention heatmaps using Seaborn and Matplotlib."
    ],
    sqlSnippet: `-- Customer Recency & Frequency Scoring
SELECT 
    customer_id,
    DATEDIFF(CURRENT_DATE, MAX(order_date)) AS recency_days,
    COUNT(order_id) AS total_purchases,
    ROUND(SUM(order_amount), 2) AS monetary_value
FROM customer_orders
GROUP BY customer_id
HAVING total_purchases >= 1;`,
    keyFindings: [
      { metric: "Core Champions", finding: "Top 12% of customer base accounted for 48% of lifetime purchases." },
      { metric: "Lapsed Window", finding: "Customers who did not repurchase within 35 days exhibited 80% churn risk." }
    ],
    recommendations: [
      "Trigger automated SMS reminder incentives at day 25 post-purchase.",
      "Provide exclusive loyalty rewards for top-tier RFM clusters."
    ]
  }
];

export const experienceTimeline = [
  {
    id: "exp-1",
    role: "Python Programming Intern",
    organization: "CodeAlpha",
    period: "May 2025 – June 2025",
    type: "Internship",
    location: "Remote",
    responsibilities: [
      "Developed Python automation scripts for cleaning and processing structured datasets.",
      "Reduced manual data manipulation errors through automated validation routines.",
      "Created modular and maintainable data transformation scripts following PEP 8 conventions.",
      "Documented project deliverables and presented technical findings to engineering mentors."
    ]
  },
  {
    id: "exp-2",
    role: "Python Programming Intern",
    organization: "CodeSoft",
    period: "Internship Project",
    type: "Internship",
    location: "Remote",
    responsibilities: [
      "Implemented data structure routines and algorithmic problem-solving logic using Python.",
      "Participated in active debugging, edge-case testing, and peer code reviews.",
      "Conducted validation testing to improve script execution reliability and data accuracy."
    ]
  },
  {
    id: "exp-3",
    role: "Co-Founder & Operations Partner",
    organization: "Bite & Buzz",
    period: "Nov 2024 – Dec 2024 (Also Jun 2023 – Nov 2023)",
    type: "Business Operations",
    location: "Hyderabad, India",
    responsibilities: [
      "Monitored daily revenue, procurement costs, customer traffic, and sales registers.",
      "Tracked profit margins, cash flow dynamics, and item-level contribution margins.",
      "Coordinated with local food suppliers and maintained continuous stock inventory records.",
      "Focused on reducing daily perishable wastage and improving turnaround efficiency during peak hours."
    ]
  },
  {
    id: "exp-4",
    role: "Project & Quality Intern",
    organization: "Singareni Collieries Company Limited",
    period: "Industrial Internship",
    type: "Quality & Operations",
    location: "Telangana, India",
    responsibilities: [
      "Conducted on-site data recording, field logging, and equipment operational monitoring.",
      "Assisted senior engineers with rigorous quality inspections and process verification.",
      "Maintained structured technical project documentation and daily logs.",
      "Collaborated with multidisciplinary teams to ensure compliance with quality standards."
    ]
  }
];

export const certifications = [
  {
    id: "cert-codealpha",
    title: "Python Programming Certification",
    organization: "CodeAlpha",
    badge: "Verified Credential",
    skills: ["Python", "Scripting", "Data Structures", "Automation"],
    status: "Completed",
    description: "Hands-on certification verifying core programming principles, object-oriented concepts, and automation script development."
  },
  {
    id: "cert-codesoft",
    title: "Python Programming Certification",
    organization: "CodeSoft",
    badge: "Verified Credential",
    skills: ["Python", "Algorithm Design", "Logic Building", "Debugging"],
    status: "Completed",
    description: "Comprehensive coursework and practical internship tasks evaluating problem solving and algorithmic execution in Python."
  }
];

export const educationList = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Bhaskar Engineering College",
    period: "2023 – 2027",
    cgpa: "7.4 CGPA",
    status: "Expected Graduation: 2027",
    details: "Focusing on Database Management Systems, Data Structures, Algorithms, Python Programming, and Statistical Data Analysis."
  },
  {
    degree: "Diploma in Electrical Engineering",
    institution: "Singareni Collieries Polytechnic",
    period: "2020 – 2023",
    cgpa: "8.9 CGPA",
    status: "Completed with Distinction",
    details: "Built strong quantitative, analytical, and technical foundation in industrial systems, measurement, and quality control."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Montessori English Medium High School - IIT",
    period: "Completed",
    cgpa: "10.0 GPA",
    status: "Perfect 10/10 GPA",
    details: "High academic distinction with focus on Mathematics, Science, and Analytical Problem Solving."
  }
];

