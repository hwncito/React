import Navbar from "../../common/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;

// Solo podemos retornar un elemento como el JS.
// Si queremos retornar muchos elementos, lo hacemos mediante fragments <></>
// Los fragments son como una etiqueta html pero sin nada dentro
