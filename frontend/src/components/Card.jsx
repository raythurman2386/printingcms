import { urlFor } from "../utils";
const Card = ({ item }) => {
  return (
    <div className="card w-96 bg-neutral-content text-slate-900 shadow-sm hover:shadow-xl transition-shadow">
      <figure className="">
        <img
          src={urlFor(item.imgUrl)}
          alt={item.title}
          className="w-full h-32"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-semibold">{item.title}</h2>
        <p>{item.description}</p>
        {item._type === "affiliates" && (
          <a
            className="btn btn-primary"
            href={item.affiliateLink}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
};
export default Card;
