// import React from "react";
// import Navbar from "./components/Navbar";
// // import Card from "./components/Home/Card";
// // import CardCarousel from "./components/Home/CardCarousel"
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";
// import Slider from "react-slick";
// import { useState, useEffect } from "react";
// // import { Card, CardContent, Typography } from "@material-ui/core";

// const Dashboard = () => {
//   const API_URL = "http://localhost:8080/api/v1/card/user/";
//   const BEARER_TOKEN =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InN1ZG9AZ2FicmllbC5kZXYiLCJGaXJzdF9uYW1lIjoiR2FicmllbCIsIkxhc3RfbmFtZSI6Ik9uZyIsIlVpZCI6IjY0MWE4NTk1OGExNTNhMDdiMmVjMzBhZCIsImV4cCI6MTY3OTU0NjEzM30.7KvVMWyFXMMadB6s2uIQBBjzWczuVK-ziMdyOkE8bLs";

//   const CardDetails = ({ userEmail }) => {
//     const [cards, setCards] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(`${API_URL}${userEmail}`, {
//             headers: {
//               Authorization: `Bearer ${BEARER_TOKEN}`,
//             },
//           });
//           const data = await response.json();
//           setCards(data);
//         } catch (error) {
//           setError(error);
//         }
//       };

//       fetchData();
//     }, [userEmail]);

//     if (error) {
//       return <div>An error occurred: {error.message}</div>;
//     }
//   };

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <div>
//         <div className="w-full h-screen md:w-auto md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
//           <div className="bg-gradient-to-r from-gray-100 to-gray-50">
//             <div className="p-4">
//               <p className="font-bold text-2xl pt-10 px-5">
//                 {" "}
//                 Good to see you here, username!
//               </p>
//             </div>
//             <div className="flex flex-row justify-between">
//               <Cards
//                 cvc="123"
//                 expiry="07/26"
//                 name="BERNICE TEO"
//                 number="4534 5678 9012 3456"
//               />
//               <Cards
//                 cvc="212"
//                 expiry="07/26"
//                 name="BERNICE TEO"
//                 number="2334 5678 9012 3456"
//               />
//               <Cards
//                 cvc="123"
//                 expiry="07/26"
//                 name="BERNICE TEO"
//                 number="6234 5678 9012 3456"
//               />
//             </div>
//             <CardDetails userEmail="sudo@gabriel.dev" />
//           </div>
//         </div>
//       </div>
//       <div>
//         {cards.map((card) => (
//           <Card key={card.card_id} style={{ marginBottom: "20px" }}>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 Card ID: {card.card_id}
//               </Typography>
//               <Typography color="textSecondary">
//                 Card PAN: {card.card_pan}
//               </Typography>
//               <Typography color="textSecondary">
//                 Card Type: {card.card_type}
//               </Typography>
//               <Typography color="textSecondary">
//                 Value Type: {card.value_type}
//               </Typography>
//               <Typography color="textSecondary">Value: {card.value}</Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Navbar from "./components/Navbar";
// import Card from "./components/Home/Card";
// import CardCarousel from "./components/Home/CardCarousel"
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
// import { Card, CardContent, Typography } from "@material-ui/core";

const Dashboard = () => {
  const API_URL = "http://localhost:8080/api/v1/card/user/";
  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODAwNjQ1MzN9.jFcFfsp8nznwKJhc9m5QMpmC8wkLwhQtZydCZBRlQH8";

  const CardDetails = ({ userEmail }) => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${API_URL}${userEmail}`, {
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
            },
          });
          const data = await response.json();
          setCards(data);
          console.log(data);
        } catch (error) {
          setError(error);
        }
      };

      fetchData();
    }, [userEmail]);

    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <div className="w-full h-screen md:w-auto md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="p-4">
            <p className="font-bold text-2xl pt-10 px-5">
              {" "}
              Good to see you here, username!
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <Cards
              cvc="123"
              expiry="07/26"
              name="BERNICE TEO"
              number="4534 5678 9012 3456"
            />
            <Cards
              cvc="212"
              expiry="07/26"
              name="BERNICE TEO"
              number="2334 5678 9012 3456"
            />
            <Cards
              cvc="123"
              expiry="07/26"
              name="BERNICE TEO"
              number="6234 5678 9012 3456"
            />
          </div>
          <CardDetails userEmail="sudo@gabriel.dev" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
