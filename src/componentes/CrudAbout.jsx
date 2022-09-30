import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import vladi from "../img/vladi.jpeg";
function BasicExample() {
  return (
    <CrudAboutCss>
      <div className="CrudAbout">
        <h2>CRUD</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Qué es CRUD?</Accordion.Header>
            <Accordion.Body>
              CRUD Significado: CRUD es un acrónimo que proviene del mundo de la
              programación informática y hace referencia a las cuatro funciones
              que se consideran necesarias para implementar una aplicación de
              almacenamiento persistente: crear, leer, actualizar y borrar . El
              almacenamiento persistente se refiere a cualquier dispositivo de
              almacenamiento de datos que conserva la energía después de que se
              apaga el dispositivo, como un disco duro o una unidad de estado
              sólido. Por el contrario, la memoria de acceso aleatorio y el
              almacenamiento en caché interno son dos ejemplos de memoria
              volátil: contienen datos que se borrarán cuando pierdan energía.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Crear</Accordion.Header>
            <Accordion.Body>
              La función de creación permite a los usuarios crear un nuevo
              registro en la base de datos. En la aplicación de base de datos
              relacional SQL, la función Crear se llama INSERTAR. En Oracle HCM
              Cloud, se llama crear. Recuerde que un registro es una fila y que
              las columnas se denominan atributos. Un usuario puede crear una
              nueva fila y completarla con datos que correspondan a cada
              atributo, pero solo un administrador puede agregar nuevos
              atributos a la tabla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Leer</Accordion.Header>
            <Accordion.Body>
              La función de lectura es similar a una función de búsqueda.
              Permite a los usuarios buscar y recuperar registros específicos en
              la tabla y leer sus valores. Los usuarios pueden encontrar los
              registros deseados utilizando palabras clave o filtrando los datos
              según criterios personalizados. Por ejemplo, una base de datos de
              automóviles podría permitir a los usuarios escribir "Toyota
              Corolla 1996", o podría proporcionar opciones para filtrar los
              resultados de la búsqueda por marca, modelo y año.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Actualizar</Accordion.Header>
            <Accordion.Body>
              La función de actualización se utiliza para modificar registros
              existentes que existen en la base de datos. Para cambiar
              completamente un registro, es posible que los usuarios tengan que
              modificar la información en varios campos. Por ejemplo, un
              restaurante que almacena recetas para elementos de menú en una
              base de datos puede tener una tabla cuyos atributos son "plato",
              "tiempo de cocción", "costo" y "precio". Un día, el chef decide
              reemplazar un ingrediente del plato por algo diferente. Como
              resultado, el registro existente en la base de datos debe
              cambiarse y todos los valores de los atributos deben cambiarse
              para reflejar las características del nuevo plato. Tanto en la
              nube SQL como en Oracle HCM, la función de actualización se llama
              simplemente "Actualizar".
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Borrar</Accordion.Header>
            <Accordion.Body>
              La función de eliminación permite a los usuarios eliminar
              registros de una base de datos que ya no se necesitan. Tanto SQL
              como Oracle HCM Cloud tienen una función de eliminación que
              permite a los usuarios eliminar uno o más registros de la base de
              datos. Algunas aplicaciones de bases de datos relacionales pueden
              permitir a los usuarios realizar una eliminación definitiva o una
              eliminación temporal. Una eliminación definitiva elimina registros
              de la base de datos de forma permanente, mientras que una
              eliminación temporal puede simplemente actualizar el estado de una
              fila para indicar que se eliminó dejando los datos presentes e
              intactos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Aplicaciones CRUD</Accordion.Header>
            <Accordion.Body>
              Las operaciones CRUD se utilizan ampliamente en muchas
              aplicaciones compatibles con bases de datos relacionales
              subyacentes. Estas cuatro funciones CRUD básicas son
              increíblemente versátiles en la forma en que pueden admitir una
              variedad de funciones importantes en diferentes modelos
              comerciales y verticales de la industria. Veamos un ejemplo de
              cómo se implementa CRUD.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <hr />
        <div className="AboutMe">
          <section className="textSectio">
            <p>
              <h3>Waddimi Saint Louis</h3>
              Soy un programador con experiencia en las tecmologias FRONTEND
              como Javascript, Reactjs, sass entre otras, durante 1 año he
              programado páginas de Internet usando diferentes frameworks.
              Durante el tiempo que he trabajado, he aprendido a emplear muy
              bien mis herramientas. Además, tengo la capacidad de trabajar bajo
              presion.
              <br />
              Con mi formación académica logré especializarme en programación de
              toda clase de software, administración de redes, análisis de
              sistemas, montaje y adaptación de equipo. También he tomado cursos
              de manera autodidacta.
              <br />
              Los desafíos y tareas a los que me tenga que enfrentar en su
              institución serán completados con profesionalismo y con la mayor
              eficiencia posible.
            </p>
          </section>
          <section className="imgsect">
            <img src={vladi} alt="" />
          </section>
        </div>
        <hr />
        <p>©2022 WakaCode. All rights reserved</p>
      </div>
    </CrudAboutCss>
  );
}

const CrudAboutCss = styled.div`
  .CrudAbout {
    font-family: "Poppins", sans-serif;
    width: 95vw;
    padding: 5px;
    h2 {
      margin: 10px;
    }
    p {
      text-align: center;
      margin: 3% auto;
      font-size: 20px;
    }
    .AboutMe {
      display: flex;
      height: auto;
      margin: 5% auto;
      justify-content: space-between;
      flex: 50% auto;
      padding: 15px;
      .textSectio {
        width: auto;
        h2 {
          margin: 10px;
        }
      }

      .imgsect {
        width: 50vw;
        border-left: 1px solid;
        margin: 10px;
        img {
          height: 68vh;
          margin: 10px 0 0 30px;
          border-radius: 10px;
        }
      }
    }
  }
`;

export default BasicExample;
