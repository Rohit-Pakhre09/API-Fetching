import { useEffect, useState } from "react";
import axios from "axios";

function Phase() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [count, setCounter] = useState(1);
  const [prev, setprev] = useState(0);
  const [nxt, setNxt] = useState(10);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data);
        setLoading(false);
        console.log(`API Called ${count} time.`);
      } catch (e) {
        console.error(e);
        setError(true);
        setLoading(false);
      }
    };

    fetchedData();
  }, []);

  const nxtOp = () => {
    setNxt((next) => (next >= 100 ? (next = 100) : next + 10));
    setprev((prevs) => (prevs == 90 ? (prevs = 90) : (prevs = nxt)));
    setCounter((count) => (count == 10 ? (count = 10) : count + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevOp = () => {
    setprev((prevs) => prevs - 10);
    setNxt((next) => next - 10);
    setCounter((count) => (count == 1 ? (count = 1) : count - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 p-10 min-h-screen">
      <div className="sm:w-md md:w-xl lg:w-3xl mx-auto flex flex-col justify-center items-center">
        {/* Title */}
        {!loading && !error && (
          <p className="text-2xl font-bold uppercase">Post data</p>
        )}

        {/* Loading */}
        {loading && !error && (
          <p className="text-2xl font-bold text-gray-500 uppercase">
            Loading..
          </p>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-2xl font-bold text-red-600 uppercase">
            Server error❌
          </p>
        )}
        <hr className="w-full opacity-7 m-5" />

        {/* Data Rendering */}
        {!loading && !error && (
          <div>
            {data.slice(prev, nxt).map((el) => (
              <div
                key={el.id}
                className="bg-white p-5 rounded-md shadow mb-4 max-w-full cursor-pointer transition duration-200 ease-in hover:shadow-blue-700"
              >
                <p>
                  <span className="font-medium">{el.id}. Title:</span>{" "}
                  {el.title}
                </p>
                <p>
                  <span className="font-medium">Body:</span> {el.body}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Button */}
        {!loading && !error && (
          <section className="flex gap-5 items-center justify-center w-full select-none mt-5">
            <button
              className="bg-blue-500 text-white font-medium p-2 rounded-md cursor-pointer shadow-md w-25 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={prevOp}
              disabled={count === 1}
            >
              Previous
            </button>
            <span className="bg-gray-300 flex items-center justify-center rounded-lg w-10 h-10 font-bold">
              {count}
            </span>
            <button
              className="bg-blue-500 text-white font-medium p-2 rounded-md cursor-pointer shadow-md w-25 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={nxtOp}
              disabled={count === 10}
            >
              Next
            </button>
          </section>
        )}
      </div>
    </div>
  );
}

export default Phase;
