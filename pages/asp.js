import { scrape } from "./api/scrape";

export default function AspPage(props) {
  const {
    data: { status },
  } = props;
  return (
    <main>
      <h1>Current ASP Status</h1>
      <h2>{status}</h2>
    </main>
  );
}

export async function getServerSideProps({ req, res }) {
  const data = await scrape(req, res);
  return { props: { data } };
}
