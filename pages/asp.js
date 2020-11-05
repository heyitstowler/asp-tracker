import { scrape } from "./api/scrape";
import Content from '../components/content';
import Header from '../components/header';
import styles from '../components/asp.module.css'

export default function AspPage(props) {
  const {
    data: { status },
  } = props;
  return (
    <div>
        <Content>
            <h1>Current ASP Status</h1>
            <h2 className={status==='IN EFFECT' ? styles.asp : null}>{status}</h2>
            <h3><a href="https://twitter.com/NYCASP?s=20">NYCASP Twitter</a></h3>
        </Content>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const data = await scrape(req, res);
  return { props: { data } };
}
