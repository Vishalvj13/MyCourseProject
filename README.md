# 🏥 Hospital Management System

The **Hospital Management System** is designed following **SOLID design principles**, facilitating **efficient hospital operations** and **streamlined communication** among staff. The project consists of a **React.js frontend** and a **Spring Boot backend**, with **MySQL** as the database.

---

## ✨ Features

- **Patient Management:** Register, update, and track patient records.
- **Appointment Scheduling:** Manage appointments between patients and doctors.
- **Staff Management:** Handle hospital staff details and roles.
- **Billing System:** Generate and manage patient billing information.

---

## 🛠 Technologies Used

### 🔹 Frontend
- **React.js:** User interface development and state management.
- **Axios:** HTTP client for API communication.

### 🔹 Backend
- **Spring Boot:** RESTful API development.
- **Spring Data JPA:** Simplifies database interactions using JPA.
- **MySQL:** Relational database management.
- **Postman:** API testing.

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure the following are installed on your system:
- **[Node.js](https://nodejs.org/)** (For frontend)
- **[Java 11](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)** (For backend)
- **[MySQL](https://www.mysql.com/)** (For database)

---

## ⚙️ Installation & Setup

### 🔹 Backend Setup (Spring Boot)

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Build the project using Maven:
   ```bash
   mvn clean install
   ```

3. Configure the `application.properties` file with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/hospital_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

---

### 🔹 Frontend Setup (React.js)

1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## 🌐 Usage

- Access the application at **`http://localhost:3000`**.
- **Register as a new user** or **log in** with existing credentials.
- Navigate through the **dashboard** to manage:
  - 🏥 **Patients**
  - 🗓 **Appointments**
  - 👨‍⚕️ **Staff**
  - 💰 **Billing**

---

## 💌 API Testing

Postman is used for testing the API endpoints. You can import the Postman collection and test different functionalities such as creating a patient, booking an appointment, and retrieving data.
