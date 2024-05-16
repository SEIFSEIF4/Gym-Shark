import React from "react";
import Image from "next/image";
import MainNavbar from "@/components/MainNavbar";
import { ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

const SubTitleStyle = "text-xl font-bold py-3";
const ParagraphStyle = "py-3";
const ListStyle = "list-disc ml-5 md:text-xl";

export default function Meals({ meals }: { meals: string }) {
  return (
    <>
      <MainNavbar />
      <div className="p-5 max-w-[70vh] sm:max-w-[80vh] lg:max-w-[100vh] xl:max-w-[120vh] m-auto items-center">
        <h1 className="text-3xl font-bold lg:text-5xl py-3 ">
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
          <ShieldCheck className="mr-2" /> Reviewed by Dietitian Maria Laura
          Haddad-Garcia
        </p>
      </div>
      <div className="bg-card flex-col max-w-[70vh] sm:max-w-[80vh] lg:max-w-[100vh] xl:max-w-[120vh] flex justify-start items-start m-auto min-h-screen p-5 pt-3 mb-5">
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
            href="https://www.eatingwell.com/thmb/3YbpzdUovSBmut5mlmQMOT6sW7w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/loaded-cucumber-and-avocado-sandwich-e8edb61dcc8044e28cfa835ad4282719.jpg"
            className="underline text-blue-400"
          >
            Can Eating More Protein Help You Lose Weight? Heres What the Science
            Says
          </a>
        </p>
        <h2 className={SubTitleStyle}>
          High-Protein & High-Fiber Foods to Focus On
        </h2>
        <ul className={ListStyle}>
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
        {/* Day 1 */}
        <div className="">
          <Image
            src="https://www.eatingwell.com/thmb/3YbpzdUovSBmut5mlmQMOT6sW7w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/loaded-cucumber-and-avocado-sandwich-e8edb61dcc8044e28cfa835ad4282719.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-full m-auto"
            alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
          />
        </div>
        <h2 className={SubTitleStyle}>Breakfast (387 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Sun-Dried Tomato & Feta Egg Bites</li>
          <li>1 medium apple</li>
          <li>1 medium apple</li>
        </ul>
        <h2 className={SubTitleStyle}>A.M. Snack (141 calories)</h2>
        <ul className={ListStyle}>
          <li>2 servings Peanut Butter-Oat Energy Balls </li>
        </ul>
        <h2 className={SubTitleStyle}>P.M. Snack (126 calories)</h2>
        <ul className={ListStyle}>
          <li>
            1 (5.3-oz.) container low-fat plain strained (Greek-style) yogurt
          </li>
          <li>¼ cup raspberries</li>
        </ul>
        <h2 className={SubTitleStyle}>Dinner (443 calories)</h2>
        <ul className={ListStyle}>
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
        {/* Day 2 */}
        <h2 className={SubTitleStyle}>Day 2</h2>
        <div className="">
          <Image
            src="https://www.eatingwell.com/thmb/fcyrmz5wOiS1ebyyFFyY-QVTEMI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7221547-64721a457f94445e9d5f80c735df4af6.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
          />
        </div>
        <h2 className={SubTitleStyle}>Breakfast (318 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Quinoa & Chia Oatmeal Mix, prepared with water</li>
          <li>2 Tbsp. chopped walnuts</li>
          <li>½ cup sliced strawberries</li>
        </ul>
        <h2 className={SubTitleStyle}>A.M. Snack (141 calories)</h2>
        <ul className={ListStyle}>
          <li>2 servings Peanut Butter-Oat Energy Balls</li>
        </ul>
        <h2 className={SubTitleStyle}>Lunch Snack (360 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Chicken Fajita Bowls </li>
          <li>1 clementine</li>
        </ul>
        <h2 className={SubTitleStyle}>P.M. Snack (126 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Smoky Collards & Shrimp with Cheesy Grits</li>
        </ul>
        <h2 className={SubTitleStyle}>Dinner (566 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Chicken Parmesan & Quinoa Stuffed Peppers</li>
        </ul>
        <p className={ParagraphStyle}>
          <strong>Daily Totals: </strong>
          1,512 calories, 52g fat, 96g protein, 175g carbohydrate, 32g fiber,
          1,399mg sodium
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 1,200 calories: </strong>
          Omit walnuts at breakfast, change A.M. snack to ½ cup blueberries and
          omit yogurt at P.M. snack.
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 2,000 calories </strong>
          Increase to 4 energy balls at A.M. snack, add 3 Tbsp. chopped walnuts
          to P.M. snack and add 1 serving Caprese Salad with Cherry Tomatoes to
          dinner.
        </p>
        {/* Day 3 */}
        <h2 className={SubTitleStyle}>Day 3</h2>
        <div className="">
          <Image
            src="https://www.eatingwell.com/thmb/mOM1wjzdBhfL97Zqop8Gr3VvxYw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-Sun-Dried-Tomato--Feta-Egg-Bites-BG-Hero-3x2-32513-e3a31bac8563493bb5f435d12b1a896d.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
          />
        </div>
        <h2 className={SubTitleStyle}>Breakfast (387 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Sun-Dried Tomato & Feta Egg Bites</li>
          <li>1 medium apple</li>
          <li>1 cup low-fat plain kefir</li>
        </ul>
        <h2 className={SubTitleStyle}>A.M. Snack (131 calories)</h2>
        <ul className={ListStyle}>
          <li>1 large pear</li>
        </ul>
        <h2 className={SubTitleStyle}>Lunch(325 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Chicken Fajita Bowls </li>
        </ul>
        <h2 className={SubTitleStyle}>P.M. Snack (267 calories)</h2>
        <ul className={ListStyle}>
          <li>
            1 (5.3-oz.) container low-fat plain strained (Greek-style) yogurt
          </li>
          <li>¼ cup raspberries</li>
          <li>2 servings Peanut Butter-Oat Energy Balls</li>
        </ul>
        <h2 className={SubTitleStyle}>Dinner (404 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Grilled Pork Tenderloin with Cherries</li>
          <li>1 serving Roasted Garlic Butter Potatoes</li>
        </ul>
        <p className={ParagraphStyle}>
          <strong>Daily Totals: </strong>
          1,514 calories, 51g fat, 89g protein, 186g carbohydrate, 31g fiber,
          2,080mg sodium
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 1,200 calories: </strong>
          Omit apple at breakfast, change A.M. snack to 1 plum and omit yogurt
          at P.M. snack.
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 2,000 calories </strong>
          Add ¼ cup dry-roasted unsalted almonds to A.M. snack, increase to 3
          servings Peanut Butter-Oat Energy Balls at P.M. snack and add 1
          serving Massaged Kale Salad to dinner.
        </p>
        {/* Day 4 */}
        <h2 className={SubTitleStyle}>Day 4</h2>
        <div className="">
          <Image
            src="https://www.eatingwell.com/thmb/_9wLRp8pFxtuzlYpeR7oRXdmJnU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8059139-75595bc1384443aca9cbd6f2197b2968.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
          />
        </div>
        <h2 className={SubTitleStyle}>Breakfast (318 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Quinoa & Chia Oatmeal Mix, prepared with water</li>
          <li>2 Tbsp. chopped walnuts</li>
          <li>½ cup sliced strawberries</li>
        </ul>
        <h2 className={SubTitleStyle}>A.M. Snack(212 calories)</h2>
        <ul className={ListStyle}>
          <li>3 servings Peanut Butter-Oat Energy Balls</li>
        </ul>
        <h2 className={SubTitleStyle}>Lunch(325 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Chicken Fajita Bowls</li>
        </ul>
        <h2 className={SubTitleStyle}>P.M. Snack (126 calories)</h2>
        <ul className={ListStyle}>
          <li>
            1 (5.3-oz.) container low-fat plain strained (Greek-style) yogurt
          </li>
          <li>¼ cup raspberries</li>
        </ul>
        <h2 className={SubTitleStyle}>Dinner (520 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Grilled Chicken with Red Pepper-Pecan Romesco Sauce</li>
          <li>1 serving Whole-Wheat Couscous with Parmesan & Peas</li>
        </ul>
        <p className={ParagraphStyle}>
          <strong>Daily Totals: </strong>
          1,501 calories, 60g fat, 85g protein, 170g carbohydrate, 34g fiber,
          1,798mg sodium
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 1,200 calories: </strong>
          Omit yogurt at P.M. snack and substitute 1 cup steamed green beans for
          the couscous at dinner.
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 2,000 calories </strong>
          Increase to ¼ cup chopped walnuts at breakfast, add 1 cup low-fat
          plain kefir to A.M. snack, 1 medium apple to lunch and ¼ cup
          dry-roasted unsalted almonds to P.M. snack.
        </p>
        {/* Day 5 */}
        <h2 className={SubTitleStyle}>Day 5</h2>
        <div className="">
          <Image
            src="https://www.eatingwell.com/thmb/uS39RhP_QkhZg8gwOGv8qajlJo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Salmon-Orzo-Casserole-with-Lemon-Dill-1x1-5055-2000-6e697a6491334d4388df2381ff2702ce.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
          />
        </div>
        <h2 className={SubTitleStyle}>Breakfast (387 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Sun-Dried Tomato & Feta Egg Bites </li>
          <li>1 medium apple</li>
          <li>1 cup low-fat plain kefir</li>
        </ul>
        <h2 className={SubTitleStyle}>A.M. Snack(212 calories)</h2>
        <ul className={ListStyle}>
          <li>3 servings Peanut Butter-Oat Energy Balls</li>
        </ul>
        <h2 className={SubTitleStyle}>Lunch(384 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Chicken Fajita Bowls</li>
          <li>1 medium peach</li>
        </ul>
        <h2 className={SubTitleStyle}>P.M. Snack (126 calories)</h2>
        <ul className={ListStyle}>
          <li>
            1 (5.3-oz.) container low-fat plain strained (Greek-style) yogurt
          </li>
          <li>¼ cup raspberries</li>
        </ul>
        <h2 className={SubTitleStyle}>Dinner (391 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Anti-Inflammatory Lemony Salmon & Orzo Casserole</li>
        </ul>
        <p className={ParagraphStyle}>
          <strong>Daily Totals: </strong>
          1,499 calories, 53g fat, 90g protein, 176g carbohydrate, 32g fiber,
          1,987mg sodium
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 1,200 calories: </strong>
          Omit apple at breakfast and change A.M. snack to 1 plum.
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 2,000 calories </strong>
          Add ¼ cup dry-roasted unsalted almonds to A.M. snack, 2 Tbsp. chopped
          walnuts to P.M. snack and 1 serving Traditional Greek Salad to dinner.
        </p>
        {/* Day 6 */}
        <h2 className={SubTitleStyle}>Day 6</h2>
        <div className="">
          <Image
            src="https://www.eatingwell.com/thmb/X6-rMyjhGzIBmo3R8NG92pbqCdY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GrilledSteakSaladwithCornCucumbersandGrilledSweetOnionDressing-RM-7302-ff2a58942e3e4ae0b6b623f63fc8e95f.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
          />
        </div>
        <h2 className={SubTitleStyle}>Breakfast (387 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Sun-Dried Tomato & Feta Egg Bites </li>
          <li>1 medium apple</li>
          <li>1 cup low-fat plain kefir</li>
        </ul>
        <h2 className={SubTitleStyle}>A.M. Snack(212 calories)</h2>
        <ul className={ListStyle}>
          <li>3 servings Peanut Butter-Oat Energy Balls</li>
        </ul>
        <h2 className={SubTitleStyle}>Lunch(384 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Chicken Fajita Bowls</li>
          <li>1 medium peach</li>
        </ul>
        <h2 className={SubTitleStyle}>P.M. Snack (126 calories)</h2>
        <ul className={ListStyle}>
          <li>
            1 (5.3-oz.) container low-fat plain strained (Greek-style) yogurt
          </li>
          <li>¼ cup raspberries</li>
        </ul>
        <h2 className={SubTitleStyle}>Dinner (391 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Anti-Inflammatory Lemony Salmon & Orzo Casserole</li>
        </ul>
        <p className={ParagraphStyle}>
          <strong>Daily Totals: </strong>
          1,499 calories, 53g fat, 90g protein, 176g carbohydrate, 32g fiber,
          1,987mg sodium
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 1,200 calories: </strong>
          Omit apple at breakfast and change A.M. snack to 1 plum.
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 2,000 calories </strong>
          Add ¼ cup dry-roasted unsalted almonds to A.M. snack, 2 Tbsp. chopped
          walnuts to P.M. snack and 1 serving Traditional Greek Salad to dinner.
        </p>
        {/* Day 7 */}
        <h2 className={SubTitleStyle}>Day 7</h2>
        <div className="">
          <Image
            src="https://www.eatingwell.com/thmb/eZtW98DFY5agO2rWOSHciI3isjM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/halibut-fish-tacos-with-cilantro-slaw-1904-8031932-2000-3388a3b269d644e396663664dbd9d392-d30e2434104447c1bc7aa9c6de8fdf58.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt="30-Day No-Sugar, Low-Cholesterol Meal Plan for Beginners, Created by a Dietitian"
          />
        </div>
        <h2 className={SubTitleStyle}>Breakfast (387 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Sun-Dried Tomato & Feta Egg Bites </li>
          <li>1 medium apple</li>
          <li>1 cup low-fat plain kefir</li>
        </ul>
        <h2 className={SubTitleStyle}>A.M. Snack(131 calories)</h2>
        <ul className={ListStyle}>
          <li>1 large pear</li>
        </ul>
        <h2 className={SubTitleStyle}>Lunch(391 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Anti-Inflammatory Lemony Salmon & Orzo Casserole</li>
        </ul>
        <h2 className={SubTitleStyle}>P.M. Snack (42 calories)</h2>
        <ul className={ListStyle}>
          <li>½ cup blueberries</li>
        </ul>
        <h2 className={SubTitleStyle}>Dinner (555 calories)</h2>
        <ul className={ListStyle}>
          <li>1 serving Seared Halibut Fish Tacos with Cilantro Slaw</li>
          <li>1 serving Slow-Cooker Cuban-Style Black Beans</li>
        </ul>
        <p className={ParagraphStyle}>
          <strong>Daily Totals: </strong>
          1,505 calories, 51g fat, 84g protein, 188g carbohydrate, 32g fiber,
          2,276mg sodium
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 1,200 calories: </strong>
          Omit kefir at breakfast and omit Slow-Cooker Cuban-Style Black Beans
          at dinner.
        </p>
        <p className={ParagraphStyle}>
          <strong>Make it 2,000 calories </strong>
          Add ¼ cup dry-roasted unsalted almonds to A.M. snack and add ¾ cup
          low-fat plain strained (Greek-style yogurt) and 2 servings Peanut
          Butter-Oat Energy Balls to P.M. snack.
        </p>
      </div>
      <Footer />
    </>
  );
}
