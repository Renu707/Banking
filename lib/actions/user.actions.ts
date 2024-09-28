'use server';



import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appWrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email,password}:signInProps) => {
    try {
      const { account } = await createAdminClient();
      const response=await account.createEmailPasswordSession(email,password);
      return  parseStringify(response);

        
    } catch (error) {
        
        console.error('Error',error);
    }






}
export const signUp = async (userData:SignUpParams) => {

    const {email,password,firstName,lastName}=userData;
    try {const { account } = await createAdminClient();

    const newUserAccount =await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
    const session = await account.createEmailPasswordSession(email, password);
  
    cookies().set("appWrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
        
    } catch (error) {
        
        console.log('Error',error);
    }






}
// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    console.log('User:', user);
    return parseStringify(user);  // parseStringify is not always necessary; just return user for simplicity
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

  export const logoutAccount = async () =>
  {
    try {
      const { account} =await createSessionClient();
      cookies().delete('appWrite-session')
      await account.deleteSession('current');

      
    } catch (error) { return null;
      
    }
  }