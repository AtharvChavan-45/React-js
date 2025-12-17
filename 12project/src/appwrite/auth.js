import conf from "../conf/conf";
import { Client,Account,ID } from "appwrite";

// Instead of writing Appwrite code again and again in components, we centralize everything in 
// one class → AuthService.

export class AuthService {
    client = new Client(); // connects your app to appwrite server
    account;

    // Constructor runs automatically when AuthService is created

    constructor(){

        // Connect frontend to Appwrite backend

        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
         // Initialize account service using client
        this.account = new Account(this.client);// handles authentication related actions
    }

   async createAccount({email,password,name}){
    try{
        const userAccount  = await this.account.create({
            userId:ID.unique(),
            email:email,
            password:password,
            name:name
        });
        if (userAccount) { // auto login after signup
            // if account is created successfully automatically logs in the user
            // return session data
            return this.login({email,password});
        } else {
            return userAccount;
        }
    }catch(error)
    {
        throw error;
    }
   } 
   async login({email,password}){
    try {
        return await this.account.createEmailPasswordSession({
            email:email,
            password:password
        });
    } catch (error) {
        throw error;
    }
   }
   
   async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error",error);
        return null; // Return null if the call fails (user not logged in)
    }
}
    async logout(){
    try {
         await this.account.deleteSessions();
    } catch (error) {
    throw error;
    }
}

}
// Create a single instance of AuthService
const authService = new AuthService();

// only one AuthService instance is needed
// can be used anywhere in your app
export default authService
