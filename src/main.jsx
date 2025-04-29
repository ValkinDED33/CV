import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize"; // Сбрасываем базовые стили браузера
import "./index.css"; // Твои базовые стили проекта
import "@fortawesome/fontawesome-free/css/all.min.css"; // Подключение иконок FontAwesome через NPM
import App from "./App"; // Главный компонент приложения

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Вся твоя страница внутри компонента App */}
  </React.StrictMode>
);
