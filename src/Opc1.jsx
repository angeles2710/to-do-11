import React, { useState } from "react";
import Opc1_Footer from "./Opc1_Footer";

const init = {
  topic: "Usuario 1 estás en clase",
  framework: "Curso DevOps ",
  year: " en CIFO LA VIOLETA",
  hours: "85 horas "
};

export default function Task() {
  const [task, setTask] = useState(init);

  const updateTopic = () => {
    setTask((previousState) => {
      return { ...previousState, topic: "Usuario1 Tiempo de Descanso " };
    });
  };
  const updateFramework = () => {
    setTask((previousState) => {
      return { ...previousState, framework: "30 " };
    });
  };
  const updateHours = () => {
    setTask((previousState) => {
      return { ...previousState, hours: "minutos." };
    });
  };
  const updateYear = () => {
    setTask((previousState) => {
      return { ...previousState, year: " Disfruta de las vistas!!" };
    });
  };

  const volverTopic = () => {
    setTask((previousState) => {
      return { ...previousState, topic: "Usuario 1 A clase!!          " };
    });
  };
  const volverFramework = () => {
    setTask((previousState) => {
      return { ...previousState, framework: "Próximo descanso " };
    });
  };
  const volverHours = () => {
    setTask((previousState) => {
      return { ...previousState, hours: "en 1 hora" };
    });
  };
  const volverYear = () => {
    setTask((previousState) => {
      return { ...previousState, year: " Sigue con el ejercicio!!" };
    });
  };


  function updateAll() {
    updateTopic();
    updateFramework();
    updateHours();
    updateYear();
  }

  function volver() {
    volverTopic();
    volverFramework();
    volverHours();
    volverYear();
  }
  

  return (
    <>
      <h1>Hola {task.topic} </h1>
      <p>
        {task.framework} {task.hours} {task.year}.
      </p>
      <p>
        Para descansar pulsa el botón
      </p>
      <button type="button" onClick={updateAll}>
        Descanso
      </button>
      <p>
        Para volver a clase pulsa el botón
      </p>
      <button type="button" onClick={volver}>
        Volver
      </button>
      <Opc1_Footer />
    </>
  );
}
