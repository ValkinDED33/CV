import Cv from "./cv/cv.jsx"; // Импортируем компонент Cv
import background from "./assets/background.jpg"; // Импортируем фоновое изображение

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {/* Рендерим компонент Cv */}
      <Cv />
    </div>
  );
};

export default App;
