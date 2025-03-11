A web application to upload, view, and manage 3D CAD models in .stl and .obj formats.

🚀 Features

Upload and store 3D model files

View .stl and .obj files in a 3D viewer

Delete uploaded files

Interactive controls (zoom, pan, rotate)

📌 Prerequisites

Ensure you have the following installed:

Node.js (for frontend)

Python (for backend)

Flask (pip install flask flask-cors)

🛠️ Setup and Run

1️⃣ Clone the Repository

sh

Copy

Edit

git clone https://github.com/Hasan-Shaik469/3D-CAD-Viewer.git

cd 3D-CAD-Viewer

2️⃣ Start the Backend (Flask)

sh

Copy

Edit

cd backend  # Navigate to backend folder

pip install -r requirements.txt  # Install dependencies

python app.py  # Run the Flask server

Backend will run on http://localhost:5000/.


3️⃣ Start the Frontend (React)

sh

Copy

Edit

cd frontend  # Navigate to frontend folder

npm install  # Install dependencies

npm start  # Run the React app

Frontend will be available at http://localhost:3000/.


📂 Folder Structure

csharp

Copy

Edit

3D-CAD-Viewer/

│── backend/            # Flask backend

│   ├── uploads/        # Uploaded 3D models

│   ├── app.py          # Main backend script

│   ├── requirements.txt # Backend dependencies

│── frontend/           # React frontend

│   ├── src/            # React components

│   ├── public/         # Static files

│   ├── package.json    # Frontend dependencies

│── README.md           # Project instructions


🎯 Usage

Upload .stl or .obj files

Click on a file to view it in 3D

Use the delete button to remove files

🛠️ Technologies Used

Frontend: React.js, Three.js, Axios

Backend: Flask, Flask-CORS
3D Rendering: react-three-fiber, drei
