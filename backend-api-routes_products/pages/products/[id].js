import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ProductsId() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.name} </h1>
      <p>{data.description} </p>
      <p>{data.price} </p>
      <p>{data.currency} </p>
      <p>{data.category} </p>

      <Link href="/products"> Back to all</Link>
    </>
  );
}
