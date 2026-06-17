import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
      title="My Favourite Video Games 🕹️"
      tagline="I love gaming and I am a gamer 😊. Welcome to my Gaming World! "
      />
       <CardGrid items={items} />
    </main>
  );
}
