let incidents = [
    {
        id: 1,
        title: "Biased Recommendation Algorithm",
        description: "Algorithm favored certain demographics, leading to unequal content exposure. This caused a skewed representation in search results and recommendations, potentially reinforcing existing biases in the system. The issue was detected during routine algorithmic auditing.",
        severity: "Medium",
        category: "Bias",
        status: "In Progress",
        reported_at: "2025-03-15T10:00:00Z",
        conversation_id: "conv_789012345",
        tags: ["#bias", "#algorithm"]
    },
    {
        id: 2,
        title: "LLM Hallucination in Safety Info",
        description: "Large Language Model generated incorrect safety protocols, risking user trust and potentially causing physical harm if followed. The model confidently provided fabricated emergency procedures that contradicted established safety guidelines.",
        severity: "High",
        category: "Hallucination",
        status: "Open",
        reported_at: "2025-04-01T14:30:00Z",
        conversation_id: "conv_234567890",
        tags: ["#hallucination", "#urgent"]
    },
    {
        id: 3,
        title: "Minor Data Leak via Chatbot",
        description: "Chatbot exposed non-sensitive metadata due to misconfiguration in logging protocols. While no personally identifiable information was exposed, the incident demonstrates the importance of thorough testing of data handling procedures.",
        severity: "Low",
        category: "Data Leak",
        status: "Resolved",
        reported_at: "2025-03-20T09:15:00Z",
        conversation_id: "conv_345678901",
        tags: ["#dataleak"]
    },
    {
        id: 4,
        title: "Overconfident AI Response",
        description: "AI provided overly confident answers without sufficient evidence or context to support its claims. The system failed to communicate uncertainty in domains where its training data was sparse, potentially misleading users.",
        severity: "Medium",
        category: "Overconfidence",
        status: "Open",
        reported_at: "2025-04-10T11:45:00Z",
        conversation_id: "conv_456789012",
        tags: ["#overconfidence"]
    },
    {
        id: 5,
        title: "Critical System Misclassification",
        description: "AI misclassified critical inputs, impacting decision-making processes in a high-stakes environment. The system incorrectly categorized important alerts as benign, potentially delaying response to significant issues.",
        severity: "High",
        category: "Misclassification",
        status: "In Progress",
        reported_at: "2025-04-20T16:20:00Z",
        conversation_id: "conv_567890123",
        tags: ["#misclassification", "#urgent"]
    },
    {
        id: 6,
        title: "Ethnic Bias in Image Recognition",
        description: "Image recognition system showed bias in identifying individuals from certain ethnic groups, leading to inaccurate tagging and potential misidentification in security applications.",
        severity: "High",
        category: "Bias",
        status: "Open",
        reported_at: "2025-02-25T08:00:00Z",
        conversation_id: "conv_678901234",
        tags: ["#bias", "#security"]
    },
    {
        id: 7,
        title: "Chatbot Data Exposure",
        description: "Chatbot inadvertently exposed user session data due to improper sanitization of logs, risking minor privacy breaches.",
        severity: "Low",
        category: "Data Leak",
        status: "Resolved",
        reported_at: "2025-03-10T13:20:00Z",
        conversation_id: "conv_789012346",
        tags: ["#dataleak"]
    },
    {
        id: 8,
        title: "Hallucinated Financial Advice",
        description: "AI model generated fabricated financial advice, recommending non-existent investment opportunities, which could lead to financial losses if acted upon.",
        severity: "High",
        category: "Hallucination",
        status: "In Progress",
        reported_at: "2025-04-05T09:30:00Z",
        conversation_id: "conv_890123456",
        tags: ["#hallucination", "#finance"]
    },
    {
        id: 9,
        title: "Overconfident Medical Diagnosis",
        description: "AI diagnostic tool provided a confident but incorrect diagnosis due to limited training data, potentially leading to misinformed medical decisions.",
        severity: "Medium",
        category: "Overconfidence",
        status: "Open",
        reported_at: "2025-04-15T14:00:00Z",
        conversation_id: "conv_901234567",
        tags: ["#overconfidence", "#medical"]
    },
    {
        id: 10,
        title: "Misclassification in Fraud Detection",
        description: "Fraud detection system misclassified legitimate transactions as fraudulent, causing user inconvenience and potential financial disruptions.",
        severity: "Medium",
        category: "Misclassification",
        status: "Resolved",
        reported_at: "2025-03-30T11:00:00Z",
        conversation_id: "conv_012345678",
        tags: ["#misclassification"]
    },
    {
        id: 11,
        title: "Gender Bias in Hiring Algorithm",
        description: "Hiring algorithm showed bias against certain genders, leading to unfair candidate evaluations and potential legal implications.",
        severity: "High",
        category: "Bias",
        status: "In Progress",
        reported_at: "2025-04-22T10:45:00Z",
        conversation_id: "conv_123456789",
        tags: ["#bias", "#hiring"]
    },
    {
        id: 12,
        title: "Chatbot Logging Error",
        description: "Chatbot logged sensitive user inputs due to a configuration error, though no data was exposed externally.",
        severity: "Low",
        category: "Data Leak",
        status: "Resolved",
        reported_at: "2025-03-05T15:30:00Z",
        conversation_id: "conv_234567890",
        tags: ["#dataleak"]
    },
    {
        id: 13,
        title: "Hallucinated Legal Advice",
        description: "AI provided incorrect legal advice, citing non-existent laws, which could mislead users in legal proceedings.",
        severity: "High",
        category: "Hallucination",
        status: "Open",
        reported_at: "2025-04-18T12:15:00Z",
        conversation_id: "conv_345678901",
        tags: ["#hallucination", "#legal"]
    },
    {
        id: 14,
        title: "Overconfident Weather Prediction",
        description: "AI weather model predicted extreme weather events with high confidence but low accuracy, potentially affecting planning and safety measures.",
        severity: "Medium",
        category: "Overconfidence",
        status: "In Progress",
        reported_at: "2025-04-12T16:00:00Z",
        conversation_id: "conv_456789012",
        tags: ["#overconfidence", "#weather"]
    },
    {
        id: 15,
        title: "Misclassification in Content Moderation",
        description: "Content moderation AI misclassified safe content as harmful, leading to unnecessary content removals and user complaints.",
        severity: "Medium",
        category: "Misclassification",
        status: "Open",
        reported_at: "2025-04-25T09:00:00Z",
        conversation_id: "conv_567890123",
        tags: ["#misclassification", "#content"]
    },
    
        {
            "id": 16,
            "title": "Regional Accent Bias in Voice Assistant",
            "description": "Voice assistant failed to recognize certain regional accents, reducing accessibility and causing user frustration.",
            "severity": "Medium",
            "category": "Bias",
            "status": "Open",
            "reported_at": "2025-04-23T12:10:00Z",
            "conversation_id": "conv_101010101",
            "tags": ["#bias", "#voice"]
        },
        {
            "id": 17,
            "title": "Fabricated Product Recommendations",
            "description": "Recommendation system suggested non-existent products, leading to broken links and customer distrust.",
            "severity": "High",
            "category": "Hallucination",
            "status": "In Progress",
            "reported_at": "2025-04-24T15:50:00Z",
            "conversation_id": "conv_202020202",
            "tags": ["#hallucination", "#ecommerce"]
        },
        {
            "id": 18,
            "title": "User Metadata Leakage",
            "description": "Improper handling of metadata in API logs exposed device information and location data.",
            "severity": "Low",
            "category": "Data Leak",
            "status": "Resolved",
            "reported_at": "2025-03-28T18:00:00Z",
            "conversation_id": "conv_303030303",
            "tags": ["#dataleak"]
        },
        {
            "id": 19,
            "title": "Unverified Medical Treatment Recommendations",
            "description": "AI suggested unapproved treatments for chronic illnesses without credible sources.",
            "severity": "High",
            "category": "Hallucination",
            "status": "Open",
            "reported_at": "2025-04-10T09:40:00Z",
            "conversation_id": "conv_404040404",
            "tags": ["#hallucination", "#medical"]
        },
        {
            "id": 20,
            "title": "Overconfident Cybersecurity Risk Analysis",
            "description": "System underestimated potential vulnerabilities, providing false assurances about system safety.",
            "severity": "Medium",
            "category": "Overconfidence",
            "status": "In Progress",
            "reported_at": "2025-04-14T17:20:00Z",
            "conversation_id": "conv_505050505",
            "tags": ["#overconfidence", "#cybersecurity"]
        },
        {
            "id": 21,
            "title": "False Positive in Spam Detection",
            "description": "Spam detection algorithm flagged genuine emails, disrupting business communications.",
            "severity": "Medium",
            "category": "Misclassification",
            "status": "Open",
            "reported_at": "2025-04-18T10:00:00Z",
            "conversation_id": "conv_606060606",
            "tags": ["#misclassification", "#email"]
        },
        {
            "id": 22,
            "title": "Gender Stereotyping in Chatbot Responses",
            "description": "Chatbot reinforced harmful gender stereotypes in its conversation templates.",
            "severity": "High",
            "category": "Bias",
            "status": "Open",
            "reported_at": "2025-04-26T13:45:00Z",
            "conversation_id": "conv_707070707",
            "tags": ["#bias", "#chatbot"]
        },
        {
            "id": 23,
            "title": "Privacy Violation in Sentiment Analysis Tool",
            "description": "Sentiment analysis tool retained user input longer than policy guidelines allowed.",
            "severity": "Low",
            "category": "Data Leak",
            "status": "Resolved",
            "reported_at": "2025-03-22T11:30:00Z",
            "conversation_id": "conv_808080808",
            "tags": ["#dataleak", "#sentiment"]
        },
        {
            "id": 24,
            "title": "Incorrect Summarization of Legal Contracts",
            "description": "AI summarizer misinterpreted key clauses in legal documents, risking contractual misunderstandings.",
            "severity": "High",
            "category": "Hallucination",
            "status": "In Progress",
            "reported_at": "2025-04-21T08:30:00Z",
            "conversation_id": "conv_909090909",
            "tags": ["#hallucination", "#legal"]
        },
        {
            "id": 25,
            "title": "Low-Confidence Disaster Alerts",
            "description": "Disaster response model failed to communicate uncertainties, issuing confusing warnings during emergencies.",
            "severity": "Medium",
            "category": "Overconfidence",
            "status": "Open",
            "reported_at": "2025-04-19T06:15:00Z",
            "conversation_id": "conv_111111111",
            "tags": ["#overconfidence", "#disaster"]
        },
        {
            "id": 26,
            "title": "AI Ignored Critical Anomalies",
            "description": "Anomaly detection system missed clear warning signs due to misclassification of abnormal patterns.",
            "severity": "High",
            "category": "Misclassification",
            "status": "In Progress",
            "reported_at": "2025-04-16T12:00:00Z",
            "conversation_id": "conv_121212121",
            "tags": ["#misclassification", "#anomaly"]
        },
        {
            "id": 27,
            "title": "Ethnicity-Based Profiling in Law Enforcement AI",
            "description": "AI system disproportionately flagged individuals from minority communities, leading to biased policing outcomes.",
            "severity": "High",
            "category": "Bias",
            "status": "Open",
            "reported_at": "2025-02-28T15:00:00Z",
            "conversation_id": "conv_131313131",
            "tags": ["#bias", "#lawenforcement"]
        },
        {
            "id": 28,
            "title": "Unsecured API Logs",
            "description": "APIs stored unencrypted request data, exposing system-level operational details.",
            "severity": "Low",
            "category": "Data Leak",
            "status": "Resolved",
            "reported_at": "2025-03-19T17:45:00Z",
            "conversation_id": "conv_141414141",
            "tags": ["#dataleak", "#api"]
        },
        {
            "id": 29,
            "title": "Incorrect Flight Booking Assistance",
            "description": "AI assistant suggested flights that were either canceled or non-existent, confusing users.",
            "severity": "High",
            "category": "Hallucination",
            "status": "Open",
            "reported_at": "2025-04-24T14:25:00Z",
            "conversation_id": "conv_151515151",
            "tags": ["#hallucination", "#travel"]
        },
        {
            "id": 30,
            "title": "Overconfidence in Loan Approval Predictions",
            "description": "AI system greenlit risky applicants based on incomplete data, underestimating credit risks.",
            "severity": "High",
            "category": "Overconfidence",
            "status": "In Progress",
            "reported_at": "2025-04-17T09:00:00Z",
            "conversation_id": "conv_161616161",
            "tags": ["#overconfidence", "#finance"]
        },
        
            {
                "id": 31,
                "title": "Age Bias in Job Matching Algorithm",
                "description": "Job matching system showed preference for younger candidates, disadvantaging experienced professionals.",
                "severity": "Medium",
                "category": "Bias",
                "status": "Open",
                "reported_at": "2025-04-28T11:20:00Z",
                "conversation_id": "conv_171717171",
                "tags": ["#bias", "#hiring"]
            },
            {
                "id": 32,
                "title": "Fabricated Scientific References",
                "description": "AI research assistant generated fake citations and references to non-existent papers.",
                "severity": "High",
                "category": "Hallucination",
                "status": "In Progress",
                "reported_at": "2025-04-29T14:30:00Z",
                "conversation_id": "conv_181818181",
                "tags": ["#hallucination", "#research"]
            },
            {
                "id": 33,
                "title": "Temporary Cache Exposure",
                "description": "System cached user data in unsecured temporary files, though no external access occurred.",
                "severity": "Low",
                "category": "Data Leak",
                "status": "Resolved",
                "reported_at": "2025-03-25T10:15:00Z",
                "conversation_id": "conv_191919191",
                "tags": ["#dataleak"]
            },
            {
                "id": 34,
                "title": "Overconfident Stock Market Predictions",
                "description": "Trading algorithm predicted market movements with unrealistic certainty, misleading investors.",
                "severity": "High",
                "category": "Overconfidence",
                "status": "Open",
                "reported_at": "2025-04-30T16:45:00Z",
                "conversation_id": "conv_202020203",
                "tags": ["#overconfidence", "#finance"]
            },
            {
                "id": 35,
                "title": "Misclassification of Medical Images",
                "description": "Diagnostic AI incorrectly labeled benign tumors as malignant, causing unnecessary alarm.",
                "severity": "High",
                "category": "Misclassification",
                "status": "In Progress",
                "reported_at": "2025-05-01T09:10:00Z",
                "conversation_id": "conv_212121212",
                "tags": ["#misclassification", "#medical"]
            },
            {
                "id": 36,
                "title": "Socioeconomic Bias in Loan Approvals",
                "description": "Loan approval algorithm disadvantaged applicants from lower-income neighborhoods.",
                "severity": "High",
                "category": "Bias",
                "status": "Open",
                "reported_at": "2025-05-02T13:50:00Z",
                "conversation_id": "conv_222222222",
                "tags": ["#bias", "#finance"]
            },
            {
                "id": 37,
                "title": "Session Data Retention Issue",
                "description": "Chat sessions were retained beyond the mandated retention period.",
                "severity": "Low",
                "category": "Data Leak",
                "status": "Resolved",
                "reported_at": "2025-04-05T08:20:00Z",
                "conversation_id": "conv_232323232",
                "tags": ["#dataleak"]
            },
            {
                "id": 38,
                "title": "Hallucinated Historical Facts",
                "description": "Educational AI invented historical events and dates, misleading students.",
                "severity": "Medium",
                "category": "Hallucination",
                "status": "In Progress",
                "reported_at": "2025-05-03T15:00:00Z",
                "conversation_id": "conv_242424242",
                "tags": ["#hallucination", "#education"]
            },
            {
                "id": 39,
                "title": "Overconfident Translation Errors",
                "description": "Translation system provided incorrect translations with high confidence in legal documents.",
                "severity": "Medium",
                "category": "Overconfidence",
                "status": "Open",
                "reported_at": "2025-05-04T11:30:00Z",
                "conversation_id": "conv_252525252",
                "tags": ["#overconfidence", "#translation"]
            },
            {
                "id": 40,
                "title": "Misclassification in Customer Support Routing",
                "description": "Support ticket system routed urgent queries to wrong departments, delaying resolutions.",
                "severity": "Medium",
                "category": "Misclassification",
                "status": "Open",
                "reported_at": "2025-05-05T14:15:00Z",
                "conversation_id": "conv_262626262",
                "tags": ["#misclassification", "#support"]
            },
            {
                "id": 41,
                "title": "Disability Accessibility Bias",
                "description": "Voice recognition system failed to accommodate speech impairments, excluding users.",
                "severity": "Medium",
                "category": "Bias",
                "status": "In Progress",
                "reported_at": "2025-05-06T10:40:00Z",
                "conversation_id": "conv_272727272",
                "tags": ["#bias", "#accessibility"]
            },
            {
                "id": 42,
                "title": "Fabricated Celebrity Endorsements",
                "description": "Marketing AI generated fake celebrity quotes for products, risking legal action.",
                "severity": "High",
                "category": "Hallucination",
                "status": "Open",
                "reported_at": "2025-05-07T16:20:00Z",
                "conversation_id": "conv_282828282",
                "tags": ["#hallucination", "#marketing"]
            },
            {
                "id": 43,
                "title": "Debug Log Exposure",
                "description": "Development debug logs containing system information were accidentally exposed internally.",
                "severity": "Low",
                "category": "Data Leak",
                "status": "Resolved",
                "reported_at": "2025-04-10T09:05:00Z",
                "conversation_id": "conv_292929292",
                "tags": ["#dataleak"]
            },
            {
                "id": 44,
                "title": "Overconfident Nutritional Advice",
                "description": "Health app provided absolute dietary recommendations without scientific basis.",
                "severity": "Medium",
                "category": "Overconfidence",
                "status": "In Progress",
                "reported_at": "2025-05-08T12:50:00Z",
                "conversation_id": "conv_303030304",
                "tags": ["#overconfidence", "#health"]
            },
            {
                "id": 45,
                "title": "False Fraud Alerts",
                "description": "Payment system flagged legitimate transactions from specific regions as fraudulent.",
                "severity": "Medium",
                "category": "Misclassification",
                "status": "Open",
                "reported_at": "2025-05-09T15:30:00Z",
                "conversation_id": "conv_313131313",
                "tags": ["#misclassification", "#finance"]
            },
            {
                "id": 46,
                "title": "Cultural Bias in Content Moderation",
                "description": "Moderation system disproportionately flagged content from certain cultural contexts.",
                "severity": "High",
                "category": "Bias",
                "status": "Open",
                "reported_at": "2025-05-10T08:45:00Z",
                "conversation_id": "conv_323232323",
                "tags": ["#bias", "#moderation"]
            },
            {
                "id": 47,
                "title": "Temporary Data Exposure During Migration",
                "description": "User preferences were briefly exposed during database migration, though quickly corrected.",
                "severity": "Low",
                "category": "Data Leak",
                "status": "Resolved",
                "reported_at": "2025-04-15T11:10:00Z",
                "conversation_id": "conv_333333333",
                "tags": ["#dataleak"]
            },
            {
                "id": 48,
                "title": "Hallucinated Technical Specifications",
                "description": "AI support agent provided incorrect technical specs for products, causing installation errors.",
                "severity": "High",
                "category": "Hallucination",
                "status": "In Progress",
                "reported_at": "2025-05-11T14:00:00Z",
                "conversation_id": "conv_343434343",
                "tags": ["#hallucination", "#technical"]
            },
            {
                "id": 49,
                "title": "Overconfident Language Proficiency Assessment",
                "description": "Language testing AI overestimated users' proficiency levels, affecting placement decisions.",
                "severity": "Medium",
                "category": "Overconfidence",
                "status": "Open",
                "reported_at": "2025-05-12T17:25:00Z",
                "conversation_id": "conv_353535353",
                "tags": ["#overconfidence", "#education"]
            },
            {
                "id": 50,
                "title": "Incorrect Sentiment Analysis in Reviews",
                "description": "Review analysis system misclassified negative feedback as positive, skewing metrics.",
                "severity": "Medium",
                "category": "Misclassification",
                "status": "Open",
                "reported_at": "2025-05-13T10:15:00Z",
                "conversation_id": "conv_363636363",
                "tags": ["#misclassification", "#reviews"]
            },
            {
                "id": 51,
                "title": "Religious Bias in Content Filtering",
                "description": "Content filtering system disproportionately blocked material from certain religious groups.",
                "severity": "High",
                "category": "Bias",
                "status": "In Progress",
                "reported_at": "2025-05-14T13:40:00Z",
                "conversation_id": "conv_373737373",
                "tags": ["#bias", "#moderation"]
            },
            {
                "id": 52,
                "title": "Fabricated News Summaries",
                "description": "News aggregator AI inserted made-up details into article summaries, spreading misinformation.",
                "severity": "High",
                "category": "Hallucination",
                "status": "Open",
                "reported_at": "2025-05-15T16:50:00Z",
                "conversation_id": "conv_383838383",
                "tags": ["#hallucination", "#news"]
            },
            {
                "id": 53,
                "title": "Configuration File Exposure",
                "description": "Internal configuration files were temporarily accessible due to permission error.",
                "severity": "Low",
                "category": "Data Leak",
                "status": "Resolved",
                "reported_at": "2025-04-20T09:30:00Z",
                "conversation_id": "conv_393939393",
                "tags": ["#dataleak"]
            },
            {
                "id": 54,
                "title": "Overconfident Personality Assessments",
                "description": "HR tool provided definitive personality profiles based on limited data, misleading recruiters.",
                "severity": "Medium",
                "category": "Overconfidence",
                "status": "In Progress",
                "reported_at": "2025-05-16T12:20:00Z",
                "conversation_id": "conv_404040405",
                "tags": ["#overconfidence", "#hr"]
            },
            {
                "id": 55,
                "title": "Misclassification of Art as Explicit",
                "description": "Content filter incorrectly flagged artistic nudity as explicit material.",
                "severity": "Medium",
                "category": "Misclassification",
                "status": "Open",
                "reported_at": "2025-05-17T15:10:00Z",
                "conversation_id": "conv_414141414",
                "tags": ["#misclassification", "#art"]
            },
            {
                "id": 56,
                "title": "Geographic Bias in Service Recommendations",
                "description": "Recommendation system excluded valid services based on users' geographic locations.",
                "severity": "Medium",
                "category": "Bias",
                "status": "Open",
                "reported_at": "2025-05-18T11:45:00Z",
                "conversation_id": "conv_424242424",
                "tags": ["#bias", "#recommendations"]
            },
            {
                "id": 57,
                "title": "Hallucinated Academic Qualifications",
                "description": "Career advisor AI invented degree programs and certifications that don't exist.",
                "severity": "High",
                "category": "Hallucination",
                "status": "In Progress",
                "reported_at": "2025-05-19T14:35:00Z",
                "conversation_id": "conv_434343434",
                "tags": ["#hallucination", "#education"]
            },
            {
                "id": 58,
                "title": "Overconfident Real Estate Valuations",
                "description": "Property valuation AI provided precise estimates without accounting for local market fluctuations.",
                "severity": "Medium",
                "category": "Overconfidence",
                "status": "Open",
                "reported_at": "2025-05-20T17:15:00Z",
                "conversation_id": "conv_444444444",
                "tags": ["#overconfidence", "#realestate"]
            },
            {
                "id": 59,
                "title": "Incorrect Spam Flagging in Forums",
                "description": "Community forum AI mistakenly marked legitimate discussions as spam, silencing users.",
                "severity": "Medium",
                "category": "Misclassification",
                "status": "Open",
                "reported_at": "2025-05-21T10:05:00Z",
                "conversation_id": "conv_454545454",
                "tags": ["#misclassification", "#forum"]
            },
            {
                "id": 60,
                "title": "Bias in Mental Health Assessment",
                "description": "Mental health chatbot showed bias in interpreting symptoms based on demographic factors.",
                "severity": "High",
                "category": "Bias",
                "status": "In Progress",
                "reported_at": "2025-05-22T13:55:00Z",
                "conversation_id": "conv_464646464",
                "tags": ["#bias", "#health"]
            }
        
    
];

// DOM Elements
const incidentsList = document.getElementById('incidents-list');
const emptyState = document.getElementById('empty-state');
const loadingState = document.getElementById('loading-state');
const severityFilter = document.getElementById('severity-filter');
const categoryFilter = document.getElementById('category-filter');
const statusFilter = document.getElementById('status-filter');
const sortBy = document.getElementById('sort-by');
const searchInput = document.getElementById('search-input');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const clearDatesBtn = document.querySelector('.clear-dates-btn');
const addIncidentBtn = document.getElementById('add-incident-btn');
const exportBtn = document.getElementById('export-btn');
const feedbackBtn = document.getElementById('feedback-btn');
const incidentModal = document.getElementById('incident-modal');
const detailsModal = document.getElementById('details-modal');
const chartsModal = document.getElementById('charts-modal');
const exportModal = document.getElementById('export-modal');
const feedbackModal = document.getElementById('feedback-modal');
const closeModalBtns = document.querySelectorAll('.close-btn');
const incidentForm = document.getElementById('incident-form');
const exportForm = document.getElementById('export-form');
const feedbackForm = document.getElementById('feedback-form');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const themeToggle = document.getElementById('theme-toggle');
const notificationBtn = document.getElementById('notification-btn');
const notificationBadge = document.getElementById('notification-badge');
const notificationDropdown = document.getElementById('notification-dropdown');
const notificationList = document.getElementById('notification-list');
const seeMoreChartsBtn = document.getElementById('see-more-charts');
const gridViewBtn = document.getElementById('grid-view-btn');
const timelineViewBtn = document.getElementById('timeline-view-btn');
const customizeDashboardBtn = document.getElementById('customize-dashboard');
const paginationControls = document.getElementById('pagination-controls');
const autocompleteDropdown = document.getElementById('autocomplete-dropdown');

// Metric counters
const totalCount = document.getElementById('total-count');
const highCount = document.getElementById('high-count');
const mediumCount = document.getElementById('medium-count');
const lowCount = document.getElementById('low-count');
const totalProgress = document.getElementById('total-progress');
const highProgress = document.getElementById('high-progress');
const mediumProgress = document.getElementById('medium-progress');
const lowProgress = document.getElementById('low-progress');

// Form inputs
const titleInput = document.getElementById('incident-title');
const descriptionInput = document.getElementById('incident-description');
const severityInput = document.getElementById('incident-severity');
const categoryInput = document.getElementById('incident-category');
const statusInput = document.getElementById('incident-status');
const conversationIdInput = document.getElementById('conversation-id');
const tagsInput = document.getElementById('incident-tags');
const exportFormat = document.getElementById('export-format');
const exportPreview = document.getElementById('export-preview');
const feedbackType = document.getElementById('feedback-type');
const feedbackMessage = document.getElementById('feedback-message');

// Form error elements
const titleError = document.getElementById('title-error');
const descriptionError = document.getElementById('description-error');
const severityError = document.getElementById('severity-error');
const categoryError = document.getElementById('category-error');
const statusError = document.getElementById('status-error');

// Chart references
let severityChart, timelineChart, modalSeverityChart, modalTimelineChart, modalCategoryChart, modalStatusChart;
let gridster;

// Pagination settings
const itemsPerPage = 6;
let currentPage = 1;
let isTimelineView = false;
let currentFilteredIncidents = [];
let currentIncidentId = null;
let notifications = [];
let unreadNotifications = 0;

// Load from localStorage
function loadFromLocalStorage() {
    const savedIncidents = localStorage.getItem('aiSafetyIncidents');
    if (savedIncidents) {
        incidents = JSON.parse(savedIncidents);
    }
    
    const savedTheme = localStorage.getItem('aiSafetyDashboardTheme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    
}

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('aiSafetyIncidents', JSON.stringify(incidents));
}

// Format date for display
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Update metrics display with progress bars
function updateMetrics(filteredIncidents) {
    const maxIncidents = incidents.length || 1;
    const counts = {
        total: filteredIncidents.length,
        high: filteredIncidents.filter(i => i.severity === 'High').length,
        medium: filteredIncidents.filter(i => i.severity === 'Medium').length,
        low: filteredIncidents.filter(i => i.severity === 'Low').length
    };
    
    totalCount.textContent = counts.total;
    highCount.textContent = counts.high;
    mediumCount.textContent = counts.medium;
    lowCount.textContent = counts.low;
    
    totalProgress.style.width = `${(counts.total / maxIncidents) * 100}%`;
    highProgress.style.width = `${(counts.high / maxIncidents) * 100}%`;
    mediumProgress.style.width = `${(counts.medium / maxIncidents) * 100}%`;
    lowProgress.style.width = `${(counts.low / maxIncidents) * 100}%`;
    
    updateCharts(filteredIncidents);
    updateAIInsights(filteredIncidents);
}

// Update AI insights
function updateAIInsights(filteredIncidents) {
    const trendInsight = document.getElementById('trend-insight');
    const predictiveInsight = document.getElementById('predictive-insight');
    const anomalyInsight = document.getElementById('anomaly-insight');

    // Placeholder logic for trends
    const hallucinationCount = filteredIncidents.filter(i => i.category === 'Hallucination').length;
    trendInsight.textContent = hallucinationCount > 5 ? "Spike in hallucination incidents detected." : "No significant trends detected.";

    // Placeholder logic for predictions
    const highSeverityOpen = filteredIncidents.filter(i => i.severity === 'High' && i.status === 'Open').length;
    predictiveInsight.textContent = highSeverityOpen > 3 ? "Potential increase in high-severity incidents expected." : "No predictive alerts at this time.";

    // Placeholder logic for anomalies
    const recentIncidents = filteredIncidents.filter(i => new Date(i.reported_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length;
    anomalyInsight.textContent = recentIncidents > 10 ? "Unusual spike in recent incidents detected." : "No anomalies detected.";
}

// Create and update charts
function updateCharts(filteredIncidents) {
    const severityData = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
            label: 'Incidents by Severity',
            data: [
                filteredIncidents.filter(i => i.severity === 'High').length,
                filteredIncidents.filter(i => i.severity === 'Medium').length,
                filteredIncidents.filter(i => i.severity === 'Low').length
            ],
            backgroundColor: [
                getComputedStyle(document.documentElement).getPropertyValue('--chart-high'),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-medium'),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-low')
            ],
            borderWidth: 0,
            borderRadius: 8,
            hoverOffset: 20
        }]
    };

    const timelineData = prepareTimelineData(filteredIncidents);
    const categoryData = prepareCategoryData(filteredIncidents);
    const statusData = prepareStatusData(filteredIncidents);
    
    if (severityChart) {
        severityChart.data = severityData;
        severityChart.update();
    }
    if (timelineChart) {
        timelineChart.data = timelineData;
        timelineChart.update();
    }
    if (modalSeverityChart) {
        modalSeverityChart.data = severityData;
        modalSeverityChart.update();
    }
    if (modalTimelineChart) {
        modalTimelineChart.data = timelineData;
        modalTimelineChart.update();
    }
    if (modalCategoryChart) {
        modalCategoryChart.data = categoryData;
        modalCategoryChart.update();
    }
    if (modalStatusChart) {
        modalStatusChart.data = statusData;
        modalStatusChart.update();
    }
}

// Prepare timeline data
function prepareTimelineData(filteredIncidents) {
    const sortedIncidents = [...filteredIncidents].sort((a, b) => 
        new Date(a.reported_at) - new Date(b.reported_at)
    );
    
    const dateGroups = {};
    sortedIncidents.forEach(incident => {
        const date = new Date(incident.reported_at).toISOString().split('T')[0];
        if (!dateGroups[date]) {
            dateGroups[date] = {
                total: 0,
                high: 0,
                medium: 0,
                low: 0
            };
        }
        dateGroups[date].total++;
        dateGroups[date][incident.severity.toLowerCase()]++;
    });
    
    const labels = Object.keys(dateGroups);
    return {
        labels: labels,
        datasets: [
            {
                label: 'All Incidents',
                data: labels.map(date => dateGroups[date].total),
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-timeline'),
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-accent'),
                borderWidth: 3,
                tension: 0.3,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 8
            },
            {
                label: 'High Severity',
                data: labels.map(date => dateGroups[date].high),
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--severity-high'),
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: 'Medium Severity',
                data: labels.map(date => dateGroups[date].medium),
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--severity-medium'),
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: 'Low Severity',
                data: labels.map(date => dateGroups[date].low),
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--severity-low'),
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    };
}

// Prepare category data
function prepareCategoryData(filteredIncidents) {
    const categories = ['Bias', 'Hallucination', 'Data Leak', 'Overconfidence', 'Misclassification'];
    return {
        labels: categories,
        datasets: [
            {
                label: 'High Severity',
                data: categories.map(cat => filteredIncidents.filter(i => i.category === cat && i.severity === 'High').length),
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-high'),
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--severity-high'),
                borderWidth: 1
            },
            {
                label: 'Medium Severity',
                data: categories.map(cat => filteredIncidents.filter(i => i.category === cat && i.severity === 'Medium').length),
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-medium'),
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--severity-medium'),
                borderWidth: 1
            },
            {
                label: 'Low Severity',
                data: categories.map(cat => filteredIncidents.filter(i => i.category === cat && i.severity === 'Low').length),
                backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--chart-low'),
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--severity-low'),
                borderWidth: 1
            }
        ]
    };
}

// Prepare status data
function prepareStatusData(filteredIncidents) {
    const statuses = ['Open', 'In Progress', 'Resolved'];
    return {
        labels: statuses,
        datasets: [{
            label: 'Incident Status',
            data: statuses.map(status => filteredIncidents.filter(i => i.status === status).length),
            backgroundColor: [
                getComputedStyle(document.documentElement).getPropertyValue('--chart-high'),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-medium'),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-low')
            ],
            borderWidth: 0,
            borderRadius: 8,
            hoverOffset: 20
        }]
    };
}

// Initialize charts
function initCharts(severityData, timelineData, categoryData, statusData) {
    const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-grid');
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--light-text');
    
    Chart.defaults.font.family = 'Inter, sans-serif';
    Chart.defaults.font.size = 13;
    Chart.defaults.color = textColor;
    
    if (severityChart) severityChart.destroy();
    if (timelineChart) timelineChart.destroy();
    if (modalSeverityChart) modalSeverityChart.destroy();
    if (modalTimelineChart) modalTimelineChart.destroy();
    if (modalCategoryChart) modalCategoryChart.destroy();
    if (modalStatusChart) modalStatusChart.destroy();
    
    const severityCtx = document.getElementById('severityChart')?.getContext('2d');
    if (severityCtx) {
        severityChart = new Chart(severityCtx, {
            type: 'doughnut',
            data: severityData,
            options: getChartOptions('doughnut')
        });
    }
    
    const timelineCtx = document.getElementById('timelineChart')?.getContext('2d');
    if (timelineCtx) {
        timelineChart = new Chart(timelineCtx, {
            type: 'line',
            data: timelineData,
            options: getChartOptions('line', gridColor)
        });
    }
    
    const modalSeverityCtx = document.getElementById('modal-severity-chart')?.getContext('2d');
    if (modalSeverityCtx) {
        modalSeverityChart = new Chart(modalSeverityCtx, {
            type: 'doughnut',
            data: severityData,
            options: getChartOptions('doughnut')
        });
    }
    
    const modalTimelineCtx = document.getElementById('modal-timeline-chart')?.getContext('2d');
    if (modalTimelineCtx) {
        modalTimelineChart = new Chart(modalTimelineCtx, {
            type: 'line',
            data: timelineData,
            options: getChartOptions('line', gridColor)
        });
    }
    
    const modalCategoryCtx = document.getElementById('modal-category-chart')?.getContext('2d');
    if (modalCategoryCtx) {
        modalCategoryChart = new Chart(modalCategoryCtx, {
            type: 'bar',
            data: categoryData,
            options: {
                ...getChartOptions('bar', gridColor),
                scales: {
                    x: { stacked: true, grid: { display: false } },
                    y: { stacked: true, beginAtZero: true, ticks: { precision: 0, stepSize: 1 } }
                }
            }
        });
    }
    
    const modalStatusCtx = document.getElementById('modal-status-chart')?.getContext('2d');
    if (modalStatusCtx) {
        modalStatusChart = new Chart(modalStatusCtx, {
            type: 'pie',
            data: statusData,
            options: getChartOptions('pie')
        });
    }
    
    document.addEventListener('themeChanged', updateChartColors);
}

// Common chart options
function getChartOptions(type, gridColor) {
    const baseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'easeOutElastic'
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 25,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: { size: 13 }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    title: function(tooltipItems) {
                        return type === 'line' 
                            ? new Date(tooltipItems[0].label).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })
                            : `${tooltipItems[0].label} Incidents`;
                    },
                    label: function(context) {
                        return `Count: ${context.raw}`;
                    }
                }
            }
        }
    };
    
    if (type === 'line' || type === 'bar') {
        baseOptions.interaction = { mode: 'index', intersect: false };
        baseOptions.scales = {
            x: {
                grid: { display: true, color: gridColor || 'rgba(0,0,0,0.05)' },
                ticks: { maxRotation: 45, minRotation: 45, font: { size: 12 } }
            },
            y: {
                beginAtZero: true,
                grid: { display: true, color: gridColor || 'rgba(0,0,0,0.05)' },
                ticks: { precision: 0, stepSize: 1, font: { size: 12 } }
            }
        };
    } else if (type === 'doughnut' || type === 'pie') {
        baseOptions.cutout = type === 'doughnut' ? '70%' : '50%';
        baseOptions.rotation = -45;
    }
    
    return baseOptions;
}

// Update chart colors on theme change
function updateChartColors() {
    const newGridColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-grid');
    const newTextColor = getComputedStyle(document.documentElement).getPropertyValue('--light-text');
    
    Chart.defaults.color = newTextColor;
    
    const charts = [severityChart, timelineChart, modalSeverityChart, modalTimelineChart, 
                   modalCategoryChart, modalStatusChart];
    charts.forEach(chart => {
        if (chart) {
            if (chart.options.scales && chart.options.scales.x && chart.options.scales.y) {
                chart.options.scales.x.grid.color = newGridColor;
                chart.options.scales.y.grid.color = newGridColor;
            }
            if (chart.data.datasets[0].backgroundColor instanceof Array) {
                chart.data.datasets[0].backgroundColor = [
                    getComputedStyle(document.documentElement).getPropertyValue('--chart-high'),
                    getComputedStyle(document.documentElement).getPropertyValue('--chart-medium'),
                    getComputedStyle(document.documentElement).getPropertyValue('--chart-low')
                ];
            }
            chart.update();
        }
    });
}

// Update incident status
function updateIncidentStatus(incidentId, newStatus) {
    const incident = incidents.find(inc => inc.id === incidentId);
    if (incident) {
        incident.status = newStatus;
        saveToLocalStorage();
        applyFilters();
        addNotification(`Incident #${incidentId} status updated to ${newStatus}`);
        showToast(`Incident status updated to ${newStatus}!`);
        if (detailsModal.classList.contains('active')) {
            closeModal(detailsModal);
        }
    }
}

// Render incidents list
function renderIncidents(incidentsToRender, page = 1) {
    incidentsList.innerHTML = '';
    emptyState.classList.add('hidden');
    loadingState.classList.remove('hidden');
    
    setTimeout(() => {
        loadingState.classList.add('hidden');
        
        if (incidentsToRender.length === 0) {
            emptyState.classList.remove('hidden');
            incidentsList.appendChild(emptyState);
            updateMetrics([]);
            renderPagination(0);
            return;
        }
        
        updateMetrics(incidentsToRender);
        
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedIncidents = incidentsToRender.slice(startIndex, endIndex);
        
        if (isTimelineView) {
            renderTimelineView(paginatedIncidents);
        } else {
            renderGridView(paginatedIncidents);
        }
        
        renderPagination(incidentsToRender.length, page);
    }, 500);
}

// Render grid view
function renderGridView(incidentsToRender) {
    incidentsList.className = 'incidents-container';
    
    incidentsToRender.forEach((incident, index) => {
        const card = document.createElement('article');
        card.className = 'incident-card';
        card.setAttribute('data-id', incident.id);
        card.setAttribute('data-severity', incident.severity);
        card.draggable = true;
        
        const header = document.createElement('div');
        header.className = 'card-header';
        
        const titleEl = document.createElement('h3');
        titleEl.className = 'card-title';
        titleEl.textContent = incident.title;
        titleEl.style.cursor = 'pointer';
        titleEl.addEventListener('click', () => openDetailsModal(incident));
        
        const severityBadge = document.createElement('span');
        severityBadge.className = `severity-badge severity-${incident.severity.toLowerCase()}`;
        severityBadge.textContent = incident.severity;
        
        header.appendChild(titleEl);
        header.appendChild(severityBadge);
        
        const body = document.createElement('div');
        body.className = 'card-body';
        
        const description = document.createElement('p');
        description.className = 'card-description';
        description.textContent = incident.description;
        
        if (incident.conversation_id || incident.tags) {
            const meta = document.createElement('div');
            meta.className = 'card-meta';
            if (incident.conversation_id) {
                const conversationId = document.createElement('span');
                conversationId.textContent = `Conversation ID: ${incident.conversation_id}`;
                meta.appendChild(conversationId);
            }
            if (incident.tags && incident.tags.length) {
                const tags = document.createElement('span');
                tags.textContent = `Tags: ${incident.tags.join(', ')}`;
                meta.appendChild(tags);
            }
            body.appendChild(description);
            body.appendChild(meta);
        } else {
            body.appendChild(description);
        }
        
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = 'View Details';
        toggleBtn.setAttribute('aria-expanded', 'false');
        
        toggleBtn.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            this.textContent = expanded ? 'View Details' : 'Hide Details';
            body.classList.toggle('expanded');
        });
        
        body.appendChild(toggleBtn);
        
        const footer = document.createElement('div');
        footer.className = 'card-footer';
        footer.innerHTML = `
            <span>Reported: ${formatDate(incident.reported_at)}</span>
            <span>Status: ${incident.status}</span>
        `;
        
        const statusButtons = document.createElement('div');
        statusButtons.className = 'status-buttons';
        if (incident.status !== 'In Progress') {
            const inProgressBtn = document.createElement('button');
            inProgressBtn.className = 'toggle-btn';
            inProgressBtn.textContent = 'Mark In Progress';
            inProgressBtn.addEventListener('click', () => updateIncidentStatus(incident.id, 'In Progress'));
            statusButtons.appendChild(inProgressBtn);
        }
        if (incident.status !== 'Resolved') {
            const resolveBtn = document.createElement('button');
            resolveBtn.className = 'toggle-btn';
            resolveBtn.textContent = 'Mark Resolved';
            resolveBtn.addEventListener('click', () => updateIncidentStatus(incident.id, 'Resolved'));
            statusButtons.appendChild(resolveBtn);
        }
        body.appendChild(statusButtons);
        
        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(footer);
        
        card.addEventListener('dragstart', (e) => {
            card.classList.add('dragging');
            e.dataTransfer.setData('text/plain', index);
        });
        
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });
        
        card.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        card.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
            const dropIndex = index;
            
            if (draggedIndex !== dropIndex) {
                const [draggedIncident] = currentFilteredIncidents.splice(draggedIndex, 1);
                currentFilteredIncidents.splice(dropIndex, 0, draggedIncident);
                saveToLocalStorage();
                applyFilters();
            }
        });
        
        incidentsList.appendChild(card);
    });
}

// Render timeline view
function renderTimelineView(incidentsToRender) {
    incidentsList.className = 'timeline';
    
    incidentsToRender.forEach((incident, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`;
        
        const date = document.createElement('div');
        date.className = 'timeline-date';
        date.textContent = formatDate(incident.reported_at);
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        content.innerHTML = `
            <h3 class="card-title" style="cursor: pointer;">${incident.title}</h3>
            <p class="card-description">${incident.description}</p>
            <div class="details-meta">
                <span class="severity-badge severity-${incident.severity.toLowerCase()}">${incident.severity}</span>
                <span>Category: ${incident.category}</span>
                <span>Status: ${incident.status}</span>
                ${incident.conversation_id ? `<span>Conversation ID: ${incident.conversation_id}</span>` : ''}
                ${incident.tags && incident.tags.length ? `<span>Tags: ${incident.tags.join(', ')}</span>` : ''}
            </div>
            <div class="status-buttons">
                ${incident.status !== 'In Progress' ? '<button class="toggle-btn" onclick="updateIncidentStatus(' + incident.id + ', \'In Progress\')">Mark In Progress</button>' : ''}
                ${incident.status !== 'Resolved' ? '<button class="toggle-btn" onclick="updateIncidentStatus(' + incident.id + ', \'Resolved\')">Mark Resolved</button>' : ''}
            </div>
        `;
        
        content.querySelector('.card-title').addEventListener('click', () => openDetailsModal(incident));
        
        item.appendChild(date);
        item.appendChild(content);
        incidentsList.appendChild(item);
    });
}

// Render pagination controls
function renderPagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    paginationControls.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.textContent = 'Prev';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderIncidents(currentFilteredIncidents, currentPage);
        }
    });
    paginationControls.appendChild(prevBtn);
    
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            renderIncidents(currentFilteredIncidents, currentPage);
        });
        paginationControls.appendChild(btn);
    }
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderIncidents(currentFilteredIncidents, currentPage);
        }
    });
    paginationControls.appendChild(nextBtn);
    
    const info = document.createElement('div');
    info.className = 'pagination-info';
    info.textContent = `Showing ${Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}–${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems} incidents`;
    paginationControls.appendChild(info);
}

// Apply filters and sort
function applyFilters() {
    const severityValue = severityFilter.value;
    const categoryValue = categoryFilter.value;
    const statusValue = statusFilter.value;
    const sortValue = sortBy.value;
    const searchValue = searchInput.value.trim().toLowerCase();
    const startDate = startDateInput.value ? new Date(startDateInput.value) : null;
    const endDate = endDateInput.value ? new Date(endDateInput.value) : null;
    
    currentFilteredIncidents = incidents.filter(incident => {
        const matchesSeverity = severityValue === 'All' || incident.severity === severityValue;
        const matchesCategory = categoryValue === 'All' || incident.category === categoryValue;
        const matchesStatus = statusValue === 'All' || incident.status === statusValue;
        const matchesSearch = searchValue === '' || 
                             incident.title.toLowerCase().includes(searchValue) ||
                             incident.description.toLowerCase().includes(searchValue) ||
                             (incident.tags && incident.tags.some(tag => tag.toLowerCase().includes(searchValue)));
        const incidentDate = new Date(incident.reported_at);
        const matchesDate = (!startDate || incidentDate >= startDate) && 
                           (!endDate || incidentDate <= new Date(endDate.valueOf() + 86400000));
        
        return matchesSeverity && matchesCategory && matchesStatus && matchesSearch && matchesDate;
    });
    
    currentFilteredIncidents.sort((a, b) => {
        const dateA = new Date(a.reported_at);
        const dateB = new Date(b.reported_at);
        return sortValue === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    currentPage = 1;
    renderIncidents(currentFilteredIncidents, currentPage);
}

// Autocomplete search
function setupAutocomplete() {
    const commonTags = ['#bias', '#hallucination', '#dataleak', '#overconfidence', '#misclassification', '#urgent'];
    
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();
        autocompleteDropdown.innerHTML = '';
        autocompleteDropdown.classList.add('hidden');
        
        if (value.startsWith('#')) {
            const suggestions = commonTags.filter(tag => tag.toLowerCase().includes(value));
            if (suggestions.length) {
                suggestions.forEach(tag => {
                    const item = document.createElement('div');
                    item.className = 'autocomplete-item';
                    item.textContent = tag;
                    item.addEventListener('click', () => {
                        searchInput.value = tag;
                        autocompleteDropdown.classList.add('hidden');
                        applyFilters();
                    });
                    autocompleteDropdown.appendChild(item);
                });
                autocompleteDropdown.classList.remove('hidden');
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !autocompleteDropdown.contains(e.target)) {
            autocompleteDropdown.classList.add('hidden');
        }
    });
}

// Export data
function exportData(format, selectedFields) {
    let content, type, extension;
    
    if (format === 'csv') {
        const headers = selectedFields;
        const rows = incidents.map(incident => {
            return selectedFields.map(field => {
                let value = incident[field === 'date' ? 'reported_at' : field] || '';
                if (field === 'tags') value = value ? value.join(', ') : '';
                return `"${value.toString().replace(/"/g, '""')}"`;
            });
        });
        
        content = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');
        type = 'text/csv;charset=utf-8;';
        extension = 'csv';
    } else if (format === 'json') {
        const filteredIncidents = incidents.map(incident => {
            const obj = {};
            selectedFields.forEach(field => {
                obj[field] = incident[field === 'date' ? 'reported_at' : field];
            });
            return obj;
        });
        content = JSON.stringify(filteredIncidents, null, 2);
        type = 'application/json;charset=utf-8;';
        extension = 'json';
    } else if (format === 'pdf') {
        showToast('PDF export is not implemented yet.');
        return;
    }
    
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `ai_safety_incidents_${new Date().toISOString().split('T')[0]}.${extension}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast(`Data exported as ${format.toUpperCase()} successfully!`);
}

// Handle export form submission
function handleExport(event) {
    event.preventDefault();
    const format = exportFormat.value;
    const selectedFields = Array.from(exportForm.querySelectorAll('.checkbox-group input:checked')).map(input => input.value);
    
    if (!selectedFields.length) {
        showToast('Please select at least one field to export.');
        return;
    }
    
    exportData(format, selectedFields);
    closeModal(exportModal);
}

// Handle feedback submission
function handleFeedback(event) {
    event.preventDefault();
    if (!feedbackType.value || feedbackMessage.value.length < 20) {
        showToast('Please select a feedback type and provide a message (min 20 characters).');
        return;
    }
    
    console.log('Feedback submitted:', {
        type: feedbackType.value,
        message: feedbackMessage.value
    });
    
    showToast('Feedback submitted successfully!');
    feedbackForm.reset();
    closeModal(feedbackModal);
}

// Add new incident
function addIncident(event) {
    event.preventDefault();
    
    let isValid = true;
    
    if (titleInput.value.trim() === '') {
        titleError.textContent = 'Title is required';
        titleError.classList.add('active');
        isValid = false;
    } else {
        titleError.textContent = '';
        titleError.classList.remove('active');
    }
    
    if (descriptionInput.value.trim() === '') {
        descriptionError.textContent = 'Description is required';
        descriptionError.classList.add('active');
        isValid = false;
    } else if (descriptionInput.value.trim().length < 50) {
        descriptionError.textContent = 'Description must be at least 50 characters';
        descriptionError.classList.add('active');
        isValid = false;
    } else {
        descriptionError.textContent = '';
        descriptionError.classList.remove('active');
    }
    
    if (severityInput.value === '') {
        severityError.textContent = 'Please select a severity level';
        severityError.classList.add('active');
        isValid = false;
    } else {
        severityError.textContent = '';
        severityError.classList.remove('active');
    }
    
    if (categoryInput.value === '') {
        categoryError.textContent = 'Please select a category';
        categoryError.classList.add('active');
        isValid = false;
    } else {
        categoryError.textContent = '';
        categoryError.classList.remove('active');
    }
    
    if (statusInput.value === '') {
        statusError.textContent = 'Please select a status';
        statusError.classList.add('active');
        isValid = false;
    } else {
        statusError.textContent = '';
        statusError.classList.remove('active');
    }
    
    if (!isValid) return;
    
    const newId = incidents.length > 0 ? Math.max(...incidents.map(inc => inc.id)) + 1 : 1;
    const tags = tagsInput.value.trim().split(',').map(tag => tag.trim()).filter(tag => tag.startsWith('#'));
    const newIncident = {
        id: newId,
        title: titleInput.value.trim(),
        description: descriptionInput.value.trim(),
        severity: severityInput.value,
        category: categoryInput.value,
        status: statusInput.value,
        reported_at: new Date().toISOString(),
        conversation_id: conversationIdInput.value.trim() || null,
        tags: tags.length ? tags : []
    };
    
    incidents.unshift(newIncident);
    saveToLocalStorage();
    closeModal(incidentModal);
    incidentForm.reset();
    applyFilters();
    addNotification(`New incident reported: ${newIncident.title}`);
    showToast('Incident reported successfully!');
}

// Show toast notification
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.classList.add('theme-transition');
    document.documentElement.setAttribute('data-theme', newTheme);
    
    localStorage.setItem('aiSafetyDashboardTheme', newTheme);
    
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
    }, 400);
    
    document.dispatchEvent(new CustomEvent('themeChanged'));
}

// Toggle high contrast mode


// Add notification
function addNotification(message) {
    notifications.unshift({
        id: notifications.length + 1,
        message,
        timestamp: new Date().toISOString(),
        read: false
    });
    
    unreadNotifications++;
    notificationBadge.textContent = unreadNotifications;
    notificationBadge.classList.remove('hidden');
    
    renderNotifications();
}

// Render notifications
function renderNotifications() {
    notificationList.innerHTML = '';
    
    notifications.slice(0, 5).forEach(notification => {
        const li = document.createElement('li');
        li.className = `notification-item ${notification.read ? 'read' : 'unread'}`;
        li.innerHTML = `
            <span>${notification.message}</span>
            <small>${formatDate(notification.timestamp)}</small>
        `;
        li.addEventListener('click', () => {
            if (!notification.read) {
                notification.read = true;
                unreadNotifications--;
                notificationBadge.textContent = unreadNotifications;
                if (unreadNotifications === 0) notificationBadge.classList.add('hidden');
                renderNotifications();
            }
        });
        notificationList.appendChild(li);
    });
}

// Initialize Gridster for widget customization
function initGridster() {
    try {
        if (typeof jQuery.fn.gridster !== 'function') {
            console.error('Gridster.js is not loaded or initialized correctly');
            showToast('Dashboard customization unavailable. Please refresh the page.');
            return;
        }
        const gridsterContainer = document.querySelector('.gridster');
        if (!gridsterContainer) {
            console.error('Gridster container (.gridster) not found in DOM');
            showToast('Dashboard customization unavailable. Check page structure.');
            return;
        }
        gridster = jQuery(".gridster").gridster({
            widget_margins: [10, 10],
            widget_base_dimensions: [300, 300],
            draggable: {
                handle: '.chart-card h3'
            }
        }).data('gridster');
        
        customizeDashboardBtn.addEventListener('click', () => {
            if (gridster.draggable.enabled) {
                gridster.disable();
                customizeDashboardBtn.textContent = 'Customize Dashboard';
            } else {
                gridster.enable();
                customizeDashboardBtn.textContent = 'Save Layout';
            }
        });
    } catch (error) {
        console.error('Error initializing Gridster:', error);
        showToast('Failed to initialize dashboard customization.');
    }
}

// Open modal
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (modal === incidentModal) {
        titleInput.focus();
    } else if (modal === feedbackModal) {
        feedbackType.focus();
    } else if (modal === exportModal) {
        exportFormat.focus();
    }
}

// Close modal
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    if (modal === incidentModal) {
        titleError.textContent = '';
        descriptionError.textContent = '';
        severityError.textContent = '';
        categoryError.textContent = '';
        statusError.textContent = '';
        titleError.classList.remove('active');
        descriptionError.classList.remove('active');
        severityError.classList.remove('active');
        categoryError.classList.remove('active');
        statusError.classList.remove('active');
    }
}

// Open details modal
function openDetailsModal(incident) {
    currentIncidentId = incident.id;
    document.getElementById('details-title').textContent = incident.title;
    document.getElementById('details-description').textContent = incident.description;
    document.getElementById('details-severity').innerHTML = `<span class="severity-badge severity-${incident.severity.toLowerCase()}">${incident.severity}</span>`;
    document.getElementById('details-category').textContent = `Category: ${incident.category}`;
    const statusSelect = document.getElementById('details-status');
    statusSelect.value = incident.status;
    document.getElementById('details-date').textContent = `Reported: ${formatDate(incident.reported_at)}`;
    document.getElementById('details-conversation').textContent = incident.conversation_id ? `Conversation ID: ${incident.conversation_id}` : '';
    document.getElementById('details-tags').textContent = incident.tags && incident.tags.length ? `Tags: ${incident.tags.join(', ')}` : '';
    
    openModal(detailsModal);
}

// Update status from modal
function updateStatusFromModal(selectElement) {
    const newStatus = selectElement.value;
    if (currentIncidentId && newStatus) {
        updateIncidentStatus(currentIncidentId, newStatus);
    }
}

// Toggle view
function toggleView(view) {
    isTimelineView = view === 'timeline';
    gridViewBtn.classList.toggle('active', !isTimelineView);
    timelineViewBtn.classList.toggle('active', isTimelineView);
    currentPage = 1;
    renderIncidents(currentFilteredIncidents, currentPage);
}

// Keyboard navigation for accessibility
function setupKeyboardNavigation() {
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusableElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });

    [incidentModal, detailsModal, chartsModal, exportModal, feedbackModal].forEach(modal => {
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && modal.classList.contains('active')) {
                const focusableModalElements = modal.querySelectorAll(
                    'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableModalElements[0];
                const lastElement = focusableModalElements[focusableModalElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    });
}

// Initialize
function init() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    loadFromLocalStorage();
    
    const severityData = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
            label: 'Incidents by Severity',
            data: [
                incidents.filter(i => i.severity === 'High').length,
                incidents.filter(i => i.severity === 'Medium').length,
                incidents.filter(i => i.severity === 'Low').length
            ],
            backgroundColor: [
                getComputedStyle(document.documentElement).getPropertyValue('--chart-high'),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-medium'),
                getComputedStyle(document.documentElement).getPropertyValue('--chart-low')
            ],
            borderWidth: 0,
            borderRadius: 8,
            hoverOffset: 20
        }]
    };
    const timelineData = prepareTimelineData(incidents);
    const categoryData = prepareCategoryData(incidents);
    const statusData = prepareStatusData(incidents);
    initCharts(severityData, timelineData, categoryData, statusData);
    
    initGridster();
    
    setupAutocomplete();
    
    setupKeyboardNavigation();
    
    severityFilter.addEventListener('change', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
    startDateInput.addEventListener('change', applyFilters);
    endDateInput.addEventListener('change', applyFilters);
    clearDatesBtn.addEventListener('click', () => {
        startDateInput.value = '';
        endDateInput.value = '';
        applyFilters();
    });
    addIncidentBtn.addEventListener('click', () => openModal(incidentModal));
    exportBtn.addEventListener('click', () => openModal(exportModal));
    feedbackBtn.addEventListener('click', () => openModal(feedbackModal));
    seeMoreChartsBtn.addEventListener('click', () => openModal(chartsModal));
    gridViewBtn.addEventListener('click', () => toggleView('grid'));
    timelineViewBtn.addEventListener('click', () => toggleView('timeline'));
    incidentForm.addEventListener('submit', addIncident);
    exportForm.addEventListener('submit', handleExport);
    feedbackForm.addEventListener('submit', handleFeedback);
    themeToggle.addEventListener('click', toggleTheme);
    
    
    notificationBtn.addEventListener('click', () => {
        notificationDropdown.classList.toggle('hidden');
    });
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });
    
    [incidentModal, detailsModal, chartsModal, exportModal, feedbackModal].forEach(modal => {
        modal.addEventListener('click', event => {
            if (event.target === modal || event.target.classList.contains('modal-backdrop')) {
                closeModal(modal);
            }
        });
    });
    
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            [incidentModal, detailsModal, chartsModal, exportModal, feedbackModal].forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal);
                }
            });
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
            notificationDropdown.classList.add('hidden');
        }
    });
    
    exportForm.addEventListener('change', () => {
        const format = exportFormat.value;
        const selectedFields = Array.from(exportForm.querySelectorAll('.checkbox-group input:checked')).map(input => input.value);
        
        if (format === 'csv') {
            const headers = selectedFields;
            const rows = incidents.slice(0, 2).map(incident => {
                return selectedFields.map(field => {
                    let value = incident[field === 'date' ? 'reported_at' : field] || '';
                    if (field === 'tags') value = value ? value.join(', ') : '';
                    return `"${value.toString().replace(/"/g, '""')}"`;
                });
            });
            exportPreview.value = [
                headers.join(','),
                ...rows.map(row => row.join(','))
            ].join('\n');
        } else if (format === 'json') {
            const filteredIncidents = incidents.slice(0, 2).map(incident => {
                const obj = {};
                selectedFields.forEach(field => {
                    obj[field] = incident[field === 'date' ? 'reported_at' : field];
                });
                return obj;
            });
            exportPreview.value = JSON.stringify(filteredIncidents, null, 2);
        } else {
            exportPreview.value = 'PDF preview not available.';
        }
    });
    
    window.addEventListener('resize', () => {
        const charts = [severityChart, timelineChart, modalSeverityChart, modalTimelineChart, 
                       modalCategoryChart, modalStatusChart];
        charts.forEach(chart => {
            if (chart) chart.resize();
        });
    });
    
    setTimeout(() => {
        const charts = [severityChart, timelineChart, modalSeverityChart, modalTimelineChart, 
                       modalCategoryChart, modalStatusChart];
        charts.forEach(chart => {
            if (chart) chart.resize();
        });
    }, 100);
    
    applyFilters();
}

// Expose updateIncidentStatus to global scope for timeline view
window.updateIncidentStatus = updateIncidentStatus;

// Start application
document.addEventListener('DOMContentLoaded', init);
