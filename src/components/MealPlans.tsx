"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function MealPlans() {
  const list = [
    {
      title: "by a Dietitian",
      img: "https://www.eatingwell.com/thmb/AGTb-qmMP7kf3yF79oAAaNR6DxI=/750x0/filters:gifv(webm)/prep-0420-square-logo-b7cfe71938fe482d961da8b01ed18798.gif",
      description: "Mediterranean Diet Meal Plans",
    },
    {
      title:
        "7-Day Mediterranean Diet Meal Plan for Heart Health, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/ZD1rHDfyJ4VYYN6e1Q8BQDwBZ8k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7-Day-Mediterranean-Diet-Meal-Plan-for-Heart-Health-Created-by-a-Dietitian-8d2d5451b2f64850ac9777e9fe2e719e.jpg",
      description: "Mediterranean Diet Meal Plans",
    },
    {
      title:
        "The Best 7-Day Healthy Delicious nutrient-rich Meal Plan, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/GEBq9rUxxn99T7Y0gbaWmZazlPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7-Day-2000-Calorie-Healthy-Eating-Plan-Created-by-a-Dietitian-20a2dc000109438594c16239e78dfbba.jpg",
      description: "Meal Planning 101",
    },
    {
      title:
        "30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/Cw5Gytde31-DiNC5RdUhIc9y8hc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/30-Day-No-Sugar-Low-Cholesterol-Meal-Plan-for-Beginners-743864c472fd4a088ed33ee3da6e7a9d.jpg",
      description: "Low Cholesterol Meal Plans",
    },
    {
      title:
        "7-Day No-Sugar High-Protein Delicious Healthy Meal Plan for Diabetes",
      img: "https://www.eatingwell.com/thmb/_-oy59TnT80FRA24H81aGLDO9yM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Lemon-Chicken-Orzo-Soup-with-Kale-39f4ca5010fe487292a86798b68d4d60.jpg",
      description: "Diabetes Meal Plans",
    },
    {
      title:
        "7-Day No-Sugar High-Fiber Delicious Meal Plan Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/y8xlduNfAuSNAqvyZB6mb6g5PYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/slow-cooker-turkey-chili-bb986bd37aaa4f7986a6983158f42094.jpg",
      description: "High-Fiber Meal Plans",
    },
    {
      title:
        "7-Day No-Sugar Anti-Inflammatory Meal Plan for Metabolic Syndrome, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/g7frIzAow1R4gKijLkyqtxL_b0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/JF_One-PotChickenAndCabbageWithRice_3x2_13613-814bb07872c7459fb776e2bcc8f46c5b.jpg",
      description: "Diabetes Meal Plans",
    },
    {
      title:
        "7-Day No-Sugar, Anti-Inflammatory Meal Plan for Weight Loss, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/rNzywiz6trgN_9-uVZqRhtm0DaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7-Day-No-Sugar-Anti-inflammatory-Meal-Plan-for-Weight-Loss-de7134184cc547ee8b1bb49f62072882.jpg",
      description: "Weight-Loss Meal Plans",
    },
    {
      title:
        "7-Day Gut-Healthy Anti-Inflammatory Meal Plan, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/c5NMIr1Jh1MW1hPb-gBZ-_YyNHQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7-Day-Gut-Healthy-Anti-Inflammatory-Meal-Plan-Created-by-a-Dietitian-b2ab0c12ca364b86805a71b44f87ae2e.jpg",
      description: "High-Fiber Meal Plans",
    },
    {
      title:
        "7-Day Gut-Healthy Anti-Inflammatory Meal Plan, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/c5NMIr1Jh1MW1hPb-gBZ-_YyNHQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7-Day-Gut-Healthy-Anti-Inflammatory-Meal-Plan-Created-by-a-Dietitian-b2ab0c12ca364b86805a71b44f87ae2e.jpg",
      description: "High-Fiber Meal Plans",
    },
    {
      title:
        "7-Day Gut-Healthy Anti-Inflammatory Meal Plan, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/c5NMIr1Jh1MW1hPb-gBZ-_YyNHQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7-Day-Gut-Healthy-Anti-Inflammatory-Meal-Plan-Created-by-a-Dietitian-b2ab0c12ca364b86805a71b44f87ae2e.jpg",
      description: "High-Fiber Meal Plans",
    },
    {
      title:
        "7-Day Gut-Healthy Anti-Inflammatory Meal Plan, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/c5NMIr1Jh1MW1hPb-gBZ-_YyNHQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7-Day-Gut-Healthy-Anti-Inflammatory-Meal-Plan-Created-by-a-Dietitian-b2ab0c12ca364b86805a71b44f87ae2e.jpg",
      description: "High-Fiber Meal Plans",
    },
    {
      title:
        "7-Day Gut-Healthy Anti-Inflammatory Meal Plan, Created by a Dietitian",
      img: "https://www.eatingwell.com/thmb/c5NMIr1Jh1MW1hPb-gBZ-_YyNHQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7-Day-Gut-Healthy-Anti-Inflammatory-Meal-Plan-Created-by-a-Dietitian-b2ab0c12ca364b86805a71b44f87ae2e.jpg",
      description: "High-Fiber Meal Plans",
    },
  ];

  return (
    <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 2xl:grid-cols-5 p-20 ">
      {list.map((item, index) => (
        <Card shadow="md" key={index} isPressable>
          <CardBody className="overflow-visible p-0">
            <video
              // shadow="sm"
              // radius="lg"
              width="100%"
              // alt={item.title}
              loop
              autoPlay
              muted
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small flex-col gap-1 ">
            <p className="text-default-500">{item.description}</p>
            <p className="font-bold text-md">{item.title}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
