// import axios from "axios";
// import { useEffect, useState } from "react";

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const config = {
//     "headers": {
//         "content-type": "application/json",
//         "authorization": "apikey 0qgwoGwN5XRJLyE350RqVK:2YglBd0gvdT81TyM09iYlW"
//     }
//   }

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(url, config)
//       .then((response) => {
//         //We will deal with response data here
//         setData(response.data);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [url]);

// //   const refetch = () => {
// //     setLoading(true);
// //     axios
// //       .get(url)
// //       .then((response) => {
// //         //We will deal with response data here
// //         setData(response.data);
// //       })
// //       .catch((err) => {
// //         setError(err);
// //       })
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   };

//   return { data, loading, error };
// }

// export default useFetch;
