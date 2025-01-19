 
# Census System

This is a Census System project built using Node.js and PostgreSQL. The system manages households and residents' data effectively, leveraging Knex.js for schema migrations and data seeding. It provides core features such as creating households, managing residents, and capturing referral information, ensuring a seamless user experience.

---

## Features

- **Household Management**: Add, edit, and delete households.
- **Resident Management**: Maintain detailed records of residents including relationships, age, and gender.
- **Referral Tracking**: Log and track referrals given by residents.
- **Role-Based Access**: Secure the system with roles such as Admin, Supervisor, and Data Entry.
- **Schema Migrations**: Knex.js ensures smooth schema evolution.
- **Seed Data**: Populate the database with sample data for quick startup.

---

## Technology Stack

- **Backend**: Node.js
- **Database**: PostgreSQL
- **ORM/Query Builder**: Knex.js
- **Containerization**: Docker (optional)

---

## Installation Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-repository/census-system.git
    cd census-system
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**
   
    Create a `.env` file and provide the following variables:
    
    ```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=census_db
    ```

4. **Run Migrations:**

    ```bash
    npx knex migrate:latest --knexfile ./knexfile.js
    ```

5. **Seed the Database (Optional):**

    ```bash
    npx knex seed:run --knexfile ./knexfile.js
    ```

6. **Start the Server:**

    ```bash
    npm start
    ```

---

## Sample API Endpoints

- **Get all households:** `GET /households`
- **Add a new household:** `POST /households`
- **Get residents in a household:** `GET /households/:id/residents`
- **Add a resident:** `POST /residents`
- **Get referrals:** `GET /referrals`
- **Add a referral:** `POST /referrals`

---

## Docker Setup (Optional)

1. **Build the Docker Image:**

    ```bash
    docker build -t census-system .
    ```

2. **Run the Docker Container:**

    ```bash
    docker run -d -p 3000:3000 --env-file .env census-system
    ```

---

## Folder Structure

```plaintext
census-system/
├── knex/
│   ├── migrations/        # Knex.js migration files
│   ├── seeds/             # Seed files for test data
├── src/
│   ├── controllers/       # API controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
├── .env                   # Environment variables
├── knexfile.js            # Knex configuration
├── package.json           # Dependencies and scripts
```

---

## Contribution Guidelines

Feel free to fork this repository and submit a pull request with your changes. Ensure your code adheres to standard coding practices and includes tests where applicable.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own purposes.

