import React from 'react';
import dp from './assets/dp.jpg';
interface AppProps {}

function App(props: AppProps) {
  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <section className="flex flex-col flex-wrap items-center justify-evenly">
        <div className="p-10">
          <p>Hi! I am</p>
          <h1 className="text-3xl">Atul Ramachandran</h1>
          <p>Fullstack developer</p>
        </div>
        <div>
          <img
            src={dp}
            className="object-scale-down lg:w-96 w-80 rounded-full ring ring-yellow-700"
          />
        </div>
      </section>
      <section>
        <div className="flex flex-wrap justify-center">
          <a className="p-10 text-blue-800" href="https://blog.atulr.com">
            Blog
          </a>
          <a className="p-10 text-blue-800" href="https://github.com/a7ul">
            Github
          </a>
          <a className="p-10 text-blue-800" href="https://twitter.com/a7ulr">
            Twitter
          </a>
          <a
            className="p-10 text-blue-800"
            href="https://linkedin.com/in/atulanand94"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
