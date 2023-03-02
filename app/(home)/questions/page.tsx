import { People } from "./People";

const Questions = () => {
  return (
    <div>
      <People name="Pedro" idade={20} />
      <People name="Mateus" idade={20} />
      <People name="Kalil" idade="20" />
    </div>
  );
};

export default Questions;
