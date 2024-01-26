import { Banner } from "../Banner";
const images = [
  "/icons/js.svg",
  "/icons/react.svg",
  "/icons/nextjs.svg",
  "/icons/mongo.svg",
  "/icons/express.svg",
  "/icons/nodejs.svg",
  "/icons/python.svg",
  "/icons/shopify.svg",
  "/icons/java.svg",
  "/icons/sql.svg",
  "/icons/flask.svg",
].map((image) => ({
  image,
}));


function TechStack() {
  return <Banner images={images} speed={10000} />;
}

export default TechStack;
