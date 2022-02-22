import Prismic from "prismic-javascript";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Layout from "../components/Layout";
import Link from "next/link";
import { Client } from "../utils/prismicHelpers";

export default function Home({ projects }) {
  projects.results.map((project, index) => {
    console.log(project);
    return project;
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className=" text-2xl uppercase font-bold opacity-50 my-10 ml-24">
          {" "}
          See what's happening around the world
        </h1>

        <div className="flex">
          <div className="flex flex-col w-2/3 ml-24 mr-20">
            {projects.results.map((project, index) => (
              <div className="mb-10 bg-sky-400" key={project.uid}>
                project
                <Link href={`projects/${project.uid}`}>
                  <h1 className="bold text-3xl text-blue-600 cursor-pointer">
                    {RichText.render(project.data.title)}
                  </h1>
                </Link>
                <img className="w-2/3" src={project.data.image.url} alt="img" />
                <h1 className="mt-5">
                  {" "}
                  {RichText.render(project.data["preview-info"])}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

// this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const projects = await Client().query(
    Prismic.Predicates.at("document.type", "project")
  );

  return {
    props: {
      projects: projects,
    },
  };
}
