"use server";

import { redirect } from "next/navigation";

export async function navigateLogin() {
  redirect(`/api/auth/login`);
}
