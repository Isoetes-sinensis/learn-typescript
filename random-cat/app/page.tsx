import { connection } from "next/server";
import { fetchImage } from "./fetch-image";
import { CatImage } from "./cat-image";

export default async function Home() {
  await connection();
  const images = await fetchImage();
  return <CatImage url={images.url} />;
}