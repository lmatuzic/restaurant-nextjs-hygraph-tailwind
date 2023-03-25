import apolloClient from "./lib/apollo/graphql/apollo.config";
import { TEST } from "./lib/apollo/graphql/queries/test";
import styles from "./page.module.css";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    console.log("sjebalo se negde!");
  }

  return response.json();
}

async function getQueryData() {
  const { data } = await apolloClient.query({
    query: TEST,
  });

  return data;
}

export default async function Home() {
  const posts = await getData();
  const testQueryData = await getQueryData();

  console.log(testQueryData.demoModels);

  return (
    <main className={styles.main}>
      <h1>TEST</h1>

      <div>
        {testQueryData.demoModels.map((item: any, index: number) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </main>
  );
}
