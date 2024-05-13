import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargor='Ingenierio de Software'
          empresa='Amazon'
          testimonio='"Da miedo cambiar de carrera.Solo gane la confianza de que podia programar trabajando atraves de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambio mi vida." '
          altfoto='Shawn'/>
          

        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargor='Ingenieria de Software'
          empresa='ChatDesk'
          testimonio='"freeCodeCamp fue la puerta de entrada de mi carrera como desarrollador de software. El plan de estudios bien estructurado llevo mis conocimientos de programacion de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increible." '
          altfoto='Sarah'/>

        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargor='Ingenieria de Software'
          empresa='Spotify'
          testimonio='"Siempre he tenido problemas en aprender JavaScript. He tomado muchos cursos, pero el curso freecodecamp fue el que se quedo. Estudiar JavaScript, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify. " '
          altfoto='Emma'/>
      </div>
    </div>
  );
}

export default App;
