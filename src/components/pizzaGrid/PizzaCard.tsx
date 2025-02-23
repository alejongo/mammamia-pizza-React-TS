import { formatMoney } from "../../helpers/toLocaleString";

type PizzaCardProps = {
  name: string;
  ingredients: string[];
  price: number;
  image: string;
};

export const PizzaCard = ({
  name,
  ingredients,
  price,
  image,
}: PizzaCardProps) => {
  return (
    <>
      <div className="outline outline-gray-300 flex flex-col items-center rounded-md">
        <img
          className="w-full h-40 object-fit rounded-t-md"
          src={image}
          alt=""
        />
        <div className="w-full p-3">
          <p className="font-bold text-2xl mb-2">{name}</p>
          <p className="mt-2 text-gray-500">
            <span className="font-bold">Ingredientes: </span>
            {ingredients.join(", ")}
          </p>
          <p className="mt-2 text-gray-500">
            <span className="font-bold ">Precio:</span>{" "}
            {`$ ${formatMoney(price)}`}
          </p>
        </div>
        <div className="flex justify-between w-full p-4">
          <button className="outline outline-lime-800 text-lime-800 py-2 px-3 rounded-md text-sm hover:bg-lime-800 hover:text-white hover:cursor-pointer">
            Ver detalles
          </button>
          <button className="outline bg-lime-800 text-white py-2 px-3 rounded-md text-sm hover:bg-lime-700  hover:cursor-pointer hover:outline-2 hover:outline-lime-300">
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
