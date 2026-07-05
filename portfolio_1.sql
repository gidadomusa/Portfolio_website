

-- 1. Projects Table
CREATE TABLE Projects (
    ProjectID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    TechStack TEXT, -- Stored as a comma-separated string
    DemoUrl TEXT,
    SourceUrl TEXT,
    ImageThumbnail TEXT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Skills Table
CREATE TABLE Skills (
    SkillID INTEGER PRIMARY KEY AUTOINCREMENT,
    SkillName TEXT NOT NULL,
    Category TEXT, -- e.g., 'Backend', 'ML', 'Frontend'
    ProficiencyLevel INTEGER CHECK(ProficiencyLevel BETWEEN 0 AND 100)
);

-- 3. ContactMessages Table
CREATE TABLE ContactMessages (
    MessageID INTEGER PRIMARY KEY AUTOINCREMENT,
    SenderName TEXT NOT NULL,
    SenderEmail TEXT NOT NULL,
    MessageBody TEXT NOT NULL,
    SentAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    IsRead INTEGER DEFAULT 0 -- 0 for false, 1 for true
);

-- 4. Initial Seed Data
INSERT INTO Projects (Title, Description, TechStack, SourceUrl)
VALUES 
('Fraud Detection System', 'ML model using Random Forest with a React dashboard.', 'Python, React, SQLite', 'https://github.com/user/fraud-det'),
('Micro SaaS API', 'Backend API for niche mobile apps in Nigeria.', 'Node.js, Express, SQLite', 'https://github.com/user/saas-api');

INSERT INTO Skills (SkillName, Category, ProficiencyLevel)
VALUES 
('Python', 'Languages', 90),
('SQLite', 'Databases', 85),
('React', 'Frontend', 75);
