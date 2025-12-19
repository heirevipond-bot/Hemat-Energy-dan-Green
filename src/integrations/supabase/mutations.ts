import { supabase } from "./client";

interface UserInterest {
  name: string;
  email: string;
  interest_category: string;
}

export async function insertUserInterest(data: UserInterest) {
  const { error } = await supabase
    .from('users_interest')
    .insert([
      {
        name: data.name,
        email: data.email,
        interest_category: data.interest_category,
      },
    ]);

  if (error) {
    console.error("Error inserting user interest:", error);
    throw new Error(error.message);
  }
}