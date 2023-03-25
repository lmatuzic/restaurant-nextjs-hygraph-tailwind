import apolloClient from "./lib/apollo/graphql/apollo.config";
import { TEST } from "./lib/apollo/graphql/queries/test";

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
    <main className="container mx-auto px-4">
      <h1 className="text-sky-400">TEST</h1>

      <div>
        {testQueryData.demoModels.map((item: any, index: number) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </main>
  );
}
