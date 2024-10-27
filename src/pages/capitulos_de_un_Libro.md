Claro, aquí tienes un ejemplo de cómo podrías generar el código en React utilizando Tailwind CSS para mostrar el número de capítulos de un libro de la Biblia como botones:

```jsx
import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

const BibleBookChapters = ({ bookName, totalChapters }) => {
  const [selectedChapter, setSelectedChapter] = useState(1);

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    // Aquí puedes agregar lógica adicional según sea necesario al seleccionar un capítulo
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap gap-2">
        {[...Array(totalChapters).keys()].map((chapter) => (
          <button
            key={chapter + 1}
            onClick={() => handleChapterSelect(chapter + 1)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              selectedChapter === chapter + 1 ? "bg-blue-700" : ""
            }`}
          >
            {chapter + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BibleBookChapters;
```

En este ejemplo, creamos un componente llamado `BibleBookChapters` que toma `bookName` (nombre del libro) y `totalChapters` (número total de capítulos del libro) como props. Utilizamos el estado local para almacenar el `selectedChapter`, es decir, el capítulo seleccionado.

Luego generamos botones para cada capítulo usando un bucle con `.map()`. Al hacer clic en un botón, se activa la función `handleChapterSelect` que actualiza el estado del `selectedChapter`. Además, aplicamos clases de Tailwind CSS a los botones para darles estilo.