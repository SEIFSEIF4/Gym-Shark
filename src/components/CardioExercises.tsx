// import React from 'react';

// type Props = {
//     exName?: string;
//     videoLink: string;
//     text: string;
// }

// const data: Props[] = [
//     {
//         exName: "Frog jumps",
//         videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//         text: "Description for exercise 1"
//     },
//     {
//         exName: "Burpees",
//         videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//         text: "Description for exercise 2"
//     },
//     // Add more objects as needed
// ];

// const YourComponent = ({ exName, videoLink, text }: Props) => {
//     return (
//         <div className="max-w-3xl m-2 mt-3 px-3">
//             <h1 className="text-3xl">{exName}</h1>
//             <div className="my-5">
//                 <a href={videoLink}>Watch Video</a> {/* Placeholder link */}
//                 <iframe src={videoLink}></iframe>
//             </div>
//             <p className="text-medium max-w-md">{text}</p>
//         </div>
//     );
// };

// const YourComponentMap: React.FC = () => {
//     return (
//         <div>
//             {data.map((item, index) => (
//                 <YourComponent
//                     key={index}
//                     exName={item.exName}
//                     videoLink={item.videoLink}
//                     text={item.text}
//                 />
//             ))}
//         </div>
//     );
// };

// export default YourComponentMap;
import React from "react";

export default function CardioExercises() {
  return <div></div>;
}
