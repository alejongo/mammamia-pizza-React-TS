type PizzaGridProps = {
  children: React.ReactNode;
};

export const PizzaGrid = ({ children }: PizzaGridProps) => {
  return (
    <>
      <div className="w-5/6 mx-auto">
        <h2 className="text-4xl font-bold mt-5 mb-2">Pizzas</h2>
        <hr className="border-gray-400" />
      </div>
      <div className="w-5/6 mx-auto mt-5 mb-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {children}
      </div>
    </>
  );
};
