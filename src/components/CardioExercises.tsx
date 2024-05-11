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
import { Exercises } from "@/data/cardio-exercises";

export default function CardioExercises() {
  return( 

  <div className="flex flex-col bg-card pl-3 border-2 rounded">
    <div> 
      <h1 className="text-4xl m-5 ml-0 text-primary">1.Frog jumps</h1>
    </div>
    <div className="">
        <iframe width="560" height="315" src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></iframe>
    </div>
    <div>
      <p className="m-5 ml-0">
      Frog jumps are an advanced high-intensity cardio exercise that gets your heart rate up quickly using low-body power and endurance
      </p>
      <ul className="list-decimal list-outside m-5 px-5 py-3">
        <li>Place your feet about hip-width apart, and squat low enough that you can put your hands on the floor in front of you.</li>
        <li>Explode and jump up, using your glutes, quads, and hamstrings to generate power.</li>
        <li>Tap your heels together as you jump and take the hands behind your head or up in the air.</li>
        <li>Land with bent knees to protect your joints and get into your squat to prepare for the next jump.</li>
        <li>Repeat 10 to 20 frog jumps. Rest and repeat if desired.</li>
      </ul>
    </div>
  </div>
  );
}
