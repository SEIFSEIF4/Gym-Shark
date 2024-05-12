import MainNavbar from "@/components/MainNavbar";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const SubTitleStyle = "text-xl font-bold py-3";
const ParagraphStyle = "py-3";

export default function Meals({ meals }: { meals: string }) {
  return (
    <>
      <MainNavbar />
      <div className="p-5">
        <h1 className="text-3xl font-bold lg:text-5xl py-3">
          7-Day No-Sugar, High-Fiber & High-Protein Meal Plan, Created by a
          Dietitian
        </h1>
        <p className={ParagraphStyle}>
          This meal plan will keep you satisfied all day long!
        </p>
        <p className={ParagraphStyle}>
          By Emily Lachtrupp, Published on May 10, 2024
        </p>
        <p className="flex flex-row py-3">
          <ShieldCheck />
          Reviewed by Dietitian Maria Laura Haddad-Garcia
        </p>
      </div>
      <div className="bg-gray-500 flex-col max-w-[50vh] flex justify-start items-start m-auto min-h-screen p-3">
        <Image
          src="https://www.eatingwell.com/thmb/Cw5Gytde31-DiNC5RdUhIc9y8hc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/30-Day-No-Sugar-Low-Cholesterol-Meal-Plan-for-Beginners-743864c472fd4a088ed33ee3da6e7a9d.jpg"
          width={500}
          height={500}
          className="object-cover w-full h-full"
          alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
        />
        <p className="py-8">
          Looking for a meal plan that will keep you feeling satiated? Look no
          further. In this 7-day meal plan, we map out a week of meals and
          snacks that focus on two nutrients that play an important role in
          keeping you full: protein and fiber. Plus, we skip added sugars to
          leave more room for nutrient-dense foods. To promote a seamless
          routine, we included some meal-prep tips at the beginning of the week.
          Let’s check it out!
        </p>
        <h2 className={SubTitleStyle}>Why This Meal Plan Is Great for You</h2>
        <p className={ParagraphStyle}>
          At least 80 grams of protein and 30 grams of fiber are provided daily
          to keep you energized between meals. By slowing down your digestion,
          protein can help you have sustained energy throughout the day. While
          desserts and sweet bites can certainly have their place in a healthy
          eating routine, many people are eating more added sugars than they
          realize. On average, Americans consume about 17 teaspoons of added
          sugar each day, significantly over the American Heart Association’s
          recommended daily max of 9 teaspoons for men and 6 for women.1 Centers
          for Disease Control and Prevention. Get the Facts: Added Sugars. 2
          It’s expected that added sugars are in foods like desserts and
          sweetened beverages, but you may be surprised where else added sugars
          are making their way into your routine, such as store-bought sauces,
          dressings and pre-made soups. Take a peek at the nutrition label the
          next time you’re grocery shopping to see if sugar is listed on the
          ingredients.
        </p>
        <p className={ParagraphStyle}>
          We set this meal plan at 1,500 calories per day and included
          modifications for 1,200 and 2,000 calories per day as individual
          calorie needs vary. To make the job easier for you, we included some
          meal-prep tips at the beginning of the week for make-ahead breakfast,
          lunch and snack options. As with all meal plans, use this as a guide,
          but feel free to make adjustments as needed based on your routine and
          taste preferences.
        </p>
        <h2 className={SubTitleStyle}>
          How Do Protein and Fiber Keep You Full?
        </h2>
        <p className={ParagraphStyle}>
          Protein and fiber both play a role in keeping you full—but how? While
          both slow down your digestion, each has additional mechanisms.
          Research shows that when protein is digested, the hunger hormone
          ghrelin is suppressed while satiety hormones are released, which helps
          increase feelings of fullness.4 Fiber is digested slowly, meaning it
          takes longer to make its way through the digestive system, keeping us
          fuller for longer. Additionally, soluble fiber is fermented in the
          colon, forming short-chain fatty acids that increase the release of
          appetite-regulating peptides, which can also help improve satiety.
        </p>
        <p>
          <strong>Related: </strong>
          <a
            href="https://www.eatingwell.com/article/7913417/can-eating-more-protein-help-you-lose-weight/"
            className="underline text-blue-400"
          >
            Can Eating More Protein Help You Lose Weight? Heres What the Science
            Says
          </a>
        </p>
        <h2 className={SubTitleStyle}>
          High-Protein & High-Fiber Foods to Focus On
        </h2>
        <ul className="list-disc ml-5">
          <li>Soy</li>
          <li>Fish</li>
          <li>Meat</li>
          <li>Fruit</li>
          <li>Dairy</li>
          <li>Beans</li>
          <li>Seitan</li>
          <li>Lentils</li>
          <li>shellfish</li>
          <li>Vegetables</li>
        </ul>
        <h2 className={SubTitleStyle}>Day 1</h2>
        <div className="">
          <Image
            src="https://www.eatingwell.com/thmb/Cw5Gytde31-DiNC5RdUhIc9y8hc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/30-Day-No-Sugar-Low-Cholesterol-Meal-Plan-for-Beginners-743864c472fd4a088ed33ee3da6e7a9d.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
          />
        </div>
        <h2 className={SubTitleStyle}>Breakfast (387 calories)</h2>
        <ul className="list-disc ml-5">
          <li>1 serving Sun-Dried Tomato & Feta Egg Bites</li>
          <li>1 medium apple</li>
          <li>1 medium apple</li>
        </ul>
        <h2 className={SubTitleStyle}>A.M. Snack (141 calories)</h2>
        <ul className="list-disc ml-5">
          <li>2 servings Peanut Butter-Oat Energy Balls </li>
        </ul>
        <h2 className={SubTitleStyle}>P.M. Snack (126 calories)</h2>
        <ul className="list-disc ml-5">
          <li>
            1 (5.3-oz.) container low-fat plain strained (Greek-style) yogurt
          </li>
          <li>¼ cup raspberries</li>
        </ul>
        <h2 className={SubTitleStyle}>Dinner (443 calories)</h2>
        <ul className="list-disc ml-5">
          <li>1 serving Smoky Collards & Shrimp with Cheesy Grits</li>
        </ul>
        <p className={ParagraphStyle}>
          <strong>Daily Totals: </strong>
          1,520 calories, 60g fat, 97g protein, 160g carbohydrate, 32g fiber,
          2,019mg sodium
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 1,200 calories: </strong>
          Omit kefir at breakfast, change lunch to 1 serving Cucumber Salad
          Sandwich with 1/4 cup blueberries and omit yogurt at P.M. snack.
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 2,000 calories </strong>
          Add ¼ cup dry-roasted unsalted almonds to A.M. snack and add 1 medium
          banana with 1 ½ Tbsp. natural peanut butter as an evening snack.
        </p>
      </div>
    </>
  );
}
