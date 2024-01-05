# ERP

The College ERP POC is a Node Express project with authentication, role management, and analytics. It manages staff, students, and department data, provides attendance tracking, and offers analytics on students and vacant seats based on specified parameters.

## Overview

The College ERP POC is designed to efficiently manage staff and student data, providing key analytics for effective management. The system incorporates an admin role for adding staff, students, and department data. Utilizing Node Express, the project includes robust REST endpoints for CRUD operations, ensuring data retrieval, insertion, update, and deletion. Role management and authentication mechanisms enhance security. Analytics features offer insights into total student counts per year and branch, highlighting the maximum count. Additional functionalities include generating lists of absent students and those with attendance below 75%, along with a year-wise overview of vacant seats. The project enhances college management through streamlined data handling and insightful analytics.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)

## Getting Started

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. **Install dependencies:**

    ```bash
    cd ERP
    npm install
    ```

### Configuration:

1. **Install MongoDB:**

   - [Download and Install MongoDB](https://www.mongodb.com/try/download/community) on your machine.

2. **Set up a Cloud-based MongoDB instance (optional):**

   - If you prefer, you can use a cloud-based MongoDB service such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Follow their documentation to create an account and set up a cluster.

3. **Configure MongoDB Connection:**

   Create a MongoDB configuration file (e.g., `db.js`) in the root of your project:

   ```javascript
   // db.js
   const mongoose = require('mongoose');
   const dbUrl = mongodb-link; // Update the path based on your project structure

4. **Postman Setup**

    **Import Postman Collection:**

       - Import the provided Postman collection located at [path/to/your/PostmanCollection.json](path/to/your/PostmanCollection.json). This collection includes pre-configured requests             for testing your APIs.

    **Configure Environment (optional):**

       - If your APIs require environment-specific variables, consider configuring a Postman environment. Update the environment variables accordingly.
   

   **Run the Project Locally:**

   ```bash
   npm start
   ```
     - Visit http://localhost:3000 in your browser.


### Usage

- In this College ERP POC, the Node Express Boilerplate establishes a robust foundation for storing and managing staff and student data. It incorporates Role Management and   Authentication to ensure secure access. The REST endpoints facilitate retrieval, insertion, updating, and deletion of data, offering a comprehensive API. The analytics features provide  valuable insights, including total students per year and branch, identifying the maximum count. Additionally, the system enables querying for absent students on a specific day,       students with attendance below 75%, and a year-wise overview of vacant seats. The project enhances college management through efficient data handling and insightful analytics.

### Contributing
We welcome contributions to enhance and improve the College ERP POC. To contribute, follow these steps:

- Fork the repository and create a new branch for your feature or bug fix.
- Implement your changes, ensuring to follow coding standards.
- Write unit tests for new features or modifications.
- Submit a pull request with a clear description of changes and their purpose.
-Participate in the code review process and address feedback.
- Upon approval, your contribution will be merged.

Thank you for contributing to the College ERP POC project. Your efforts help make the system more robust and efficient for everyone.
