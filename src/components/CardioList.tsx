import React from 'react';
import ExercisesList from '@/components/ExercisesList';
import CardioExercisesComponent from '@/components/CardioExercises'; 

export default function CardioExercisesPage() {
  return (
    <div className="max-w-7xl flex flex-col m-auto mt-10">
        <div className="text-4xl max-w-3xl ml-5"> 
            <h1>20 Cardio Exercises for a Gym-Free Workout</h1>
        </div>
        <p className="mt-10 max-w-3xl ml-5">
            Add variety and new challenges to your home workout with cardio exercises 
            that boost the intensity of your fitness regimen. Powerful, 
            explosive movements that use body weight allow you a maximum cardio workout with no equipment necessary.
        </p>
        <ExercisesList />
        <CardioExercisesComponent />
    </div>
  );
}
