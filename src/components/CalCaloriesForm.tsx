"use client";
import React, { act, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CaloriesResult from "./CaloriesResult";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { activityLevel } from "@/lib/constants";

const calcFormSchema = z.object({
  Age: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .int()
      .positive({ message: "Age must be a positive number." })
      .min(15, { message: "Age must be at least 15." })
      .max(80, { message: "Age must be at most 80." })
  ),
  height: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .int()
      .positive({ message: "Height must be a positive number." })
      .min(50, { message: "Height must be at least 50 CM." })
      .max(300, { message: "Height must be at most 300 CM." })
  ),
  weight: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .int()
      .positive({ message: "Weight must be a positive number." })
      .min(20, { message: "Weight must be at least 50 CM." })
      .max(250, { message: "Weight must be at most 300 CM." })
  ),
  gender: z.enum(["male", "female"], {
    required_error: "You need to select a gender.",
  }),
  activity: z.enum(
    ["Sedentary", "Light", "Active", "Moderate", "VeryActive", "Extra"],
    {
      required_error: "You need to select an activity level.",
    }
  ),
});
type CalcFormSchema = z.infer<typeof calcFormSchema>;

export default function CalCaloriesForm() {
  const defaultValues = {
    Age: 0,
    height: 0,
    weight: 0,
  };

  const form = useForm<CalcFormSchema>({
    resolver: zodResolver(calcFormSchema),
    // defaultValues,
  });

  const onSubmit = (data: CalcFormSchema) => {
    let bmr = 0;
    if (data.gender === "male") {
      // Male
      bmr =
        88.362 + 13.397 * data.weight + 4.799 * data.height - 5.677 * data.Age;
    } else {
      // Female
      bmr =
        447.593 + 9.247 * data.weight + 3.098 * data.height - 4.33 * data.Age;
    }
    const activity = activityLevel[data.activity];
    setResult(Math.round(bmr * activity));
  };

  const [Result, setResult] = useState<number>(0);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 animate-appearance-in"
      >
        <div className="flex flex-col gap-5 md:flex-row justify-center items-center p-5">
          <Card className="w-[350px] sm:w-[450px] md:w-[375px] lg:w-[480px] sm:min-h-[520px]">
            <CardHeader>
              <CardTitle>Calorie Calculator</CardTitle>
              <CardDescription>
                The Calorie Calculator can be used to estimate the number of
                calories a person needs to consume each day.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col space-y-1.5">
                  <FormField
                    name="Age"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="Age">Age</FormLabel>
                        <FormControl>
                          <Input
                            id="Age"
                            type="number"
                            max={100}
                            maxLength={3}
                            min={1}
                            placeholder="Enter your Age"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="flex flex-row w-full items-center justify-between py-2">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row "
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                aria-labelledby="male"
                                aria-label="male"
                                value="male"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                aria-labelledby="female"
                                aria-label="female"
                                value="female"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Female
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <div className="flex flex-col w-full gap-4 mt-3">
                  <div className="flex flex-row  justify-between">
                    <div className="flex flex-col  space-y-1.5 w-full">
                      <div className="flex flex-row gap-3 justify-between w-full">
                        <FormField
                          name="height"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem className="w-[50%]">
                              <FormLabel htmlFor="height">height</FormLabel>
                              <FormControl>
                                <Input
                                  id="height"
                                  type="number"
                                  min={20}
                                  max={300}
                                  maxLength={3}
                                  placeholder="Enter your height (cm)"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          name="weight"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem className="w-[50%]">
                              <FormLabel htmlFor="Weight">Weight</FormLabel>
                              <FormControl>
                                <Input
                                  id="weight"
                                  type="number"
                                  min={20}
                                  max={300}
                                  maxLength={3}
                                  placeholder="Enter your Weight (kg)"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="activity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Activity</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Basal Metabolic Rate (bmr)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Sedentary">
                                Sedentary: little or no exercise
                              </SelectItem>
                              <SelectItem value="Light">
                                Light: exercise 1-3 times/week
                              </SelectItem>
                              <SelectItem value="Active">
                                Active: intense exercise 3-4 times/week
                              </SelectItem>
                              <SelectItem value="Moderate">
                                Moderate: exercise 4-5 times/week
                              </SelectItem>
                              <SelectItem value="VeryActive">
                                Very active: intense exercise 6-7 times/week
                              </SelectItem>
                              <SelectItem value="Extra">
                                Extra active: very intense exercise, or physical
                                job
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row gap-5 mt-3">
                <Button type="submit" className="text-card">
                  Calculate
                </Button>
                <Button onClick={() => form.reset()} className=" bg-foreground">
                  Clear
                </Button>
              </div>
            </CardFooter>
          </Card>
          <CaloriesResult
            maintainWeight={Math.round(Result)}
            mildWeightLoss={Math.round(Result * 0.9)}
            WeightLoss={Math.round(Result * 0.79)}
            extremeWeightLoss={Math.round(Result * 0.59)}
          />
        </div>
      </form>
    </Form>
  );
}
