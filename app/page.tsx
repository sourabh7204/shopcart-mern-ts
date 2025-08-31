import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <Container className=" bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Next.js is a React framework for building full-stack web applications...
      </p>
      <Button variant="destructive">CheckOut</Button>
    </Container>
  );
}

export default Home;
