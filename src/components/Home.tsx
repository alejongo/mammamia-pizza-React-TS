import { Header } from "./Header";
import { PizzaCard } from "./pizzaGrid/PizzaCard";
import { PizzaGrid } from "./pizzaGrid/PizzaGrid";

export const Home = () => {
  return (
    <>
      <Header />
      <PizzaGrid>
        <PizzaCard
          name="Pizza Pepperoni"
          ingredients={["Mozzarella", "Pepperoni"]}
          price={25000}
          image="https://img-global.cpcdn.com/recipes/5734a20cb61636e6/400x400cq70/photo.jpg"
        />
        <PizzaCard
          name="Pizza Española"
          ingredients={["Mozzarella", "Chorizo", "Jamon", "Queso"]}
          price={25000}
          image="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
        />
        <PizzaCard
          name="Pizza Hawaiana"
          ingredients={["Mozzarella", "Piña", "Jamon", "Queso"]}
          price={25000}
          image="https://www.helios.es/wp-content/uploads/2022/07/helios-blog_pizzapina.jpg"
        />
        <PizzaCard
          name="Pizza Margarita"
          ingredients={["Mozzarella", "Tomate", "Albahaca"]}
          price={25000}
          image="https://www.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas-1200x900.jpg"
        />
        <PizzaCard
          name="Pizza 3 Quesos"
          ingredients={["Mozzarella", "Queso Azul", "Queso Crema"]}
          price={25000}
          image="https://images.getrecipekit.com/20220121181240-imagenes-de-recetas-shoppify-recuperado.png?width=650&quality=90&"
        />
      </PizzaGrid>
    </>
  );
};
