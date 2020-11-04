import { scrape } from "./api/scrape";
import Layout from '../components/layout';

export default function AspPage(props) {
  const {
    data: { status },
  } = props;
  return (
    <Layout>
      <main>
        <h1>Current ASP Status</h1>
        <h2>{status}</h2>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const data = await scrape(req, res);
  return { props: { data } };
}
