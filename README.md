# 📊 VectorShift Clone - YCombinator Backed Startup

🔗 **Live Demo**: [vector-shift-clone](https://super-robot-orpin.vercel.app/)

This project is a **clone of a Y Combinator-backed startup**, developed as a coding assignment. It demonstrates **advanced frontend and backend skills**, ensuring a **scalable, modular, and user-friendly application**. 

## 🎨 Screenshots

![image](https://github.com/user-attachments/assets/39de6d99-e8ce-4e23-993d-0a8239516948)

## 🛠️ Tech Stack
- **Frontend**: **React** with **Tailwind CSS** for a modern, responsive UI.
- **Backend**: **Python** with **FastAPI** for efficient API handling.
- **Graph Library**: **ReactFlow**, heavily customized to meet project-specific requirements.

## ✨ Key Features
1. **Node Abstraction**: Developed a reusable `NodeBase` component for modular code structure, simplifying node creation.
2. **Enhanced UX**: 
   - Improved CSS with lighter color schemes.
   - Enhanced notification visibility.
   - Ensured an intuitive and smooth user experience.
3. **Backend Integration**: 
   - Created a new API to verify if a graph is a **DAG (Directed Acyclic Graph)** using **Kahn's Algorithm**.
4. **Text Node Logic Update**: 
   - Added dynamic handles for unique variables on the left side of nodes.
   - Enhanced text visibility for large inputs.
5. **Custom ReactFlow Integration**: 
   - Customized **ReactFlow** components to enhance functionality, improve user interactions, and meet project requirements.

## 📚 What I Learned
- **Modular Development**: Structured components for easy scalability and maintainability.
- **UX/UI Improvements**: Gained hands-on experience in making design choices that improve usability and readability.
- **Algorithm Implementation**: Applied **Kahn's Algorithm** to validate graph structures programmatically.
- **FastAPI**: Integrated and optimized APIs with Python, improving backend performance.
- **ReactFlow Customization**: Learned to extend and adapt **ReactFlow** for specialized needs.
- **Frontend-Backend Sync**: Strengthened skills in integrating frontend and backend seamlessly.

## 🚀 Project Highlights
- Completed within **2 days**, meeting all functional and user experience requirements.
- Focused on enhancing the application's **scalability, modularity, and usability**.

## 📦 How to Run Locally

1. **Clone the repository**:
 ```bash
   git clone https://github.com/hexabytecode/vector-shift-clone/.git
   cd vector-shift-clone
 ```

3.	**Install dependencies:**
  ```bash
    cd frontend/
    npm install
  ```

  ```bash
    cd backend/
    pip install -r requirements.txt
  ```


3. **Start the development server:**
  ```bash
    cd frontend/
    npm start
  ```
  ```bash
    cd backend/
    uvicorn main:app --reload
  ```

4.	**Access the app:**
Open http://localhost:3000 in your browser for the frontend. Backend APIs can be tested at http://127.0.0.1:8000/
