import useSWR from "swr";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ProductsPage() {
  const { data, isLoading } = useSWR("/api/products", fetcher);
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return "no Products";
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
