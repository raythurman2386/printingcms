import { FaPrint, FaGifts, FaLaptop } from "react-icons/fa";

const Card = ({ service }) => {
  const getIcon = (title) => {
    if (title === "Gifts and Toys") {
      return <FaGifts className="text-primary " size={70} />;
    }
    if (title === "Custom Designs") {
      return <FaLaptop className="text-primary " size={70} />;
    }
    if (title === "3D Printing Service") {
      return <FaPrint className="text-primary " size={70} />;
    }
  };
  return (
    <div className="card w-96 bg-neutral-content text-slate-900 shadow-sm hover:shadow-xl transition-shadow">
      <figure className="mt-8 p-8 bg-slate-600 w-40 m-auto rounded-full">
        {getIcon(service.title)}
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-semibold">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};
export default Card;
