import conf from "../conf/conf";
import { Client,ID,TablesDB,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);

    }

   async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
        // Wrap all arguments into a single object
        return await this.databases.createRow({
            databaseId: conf.appwriteDatabaseId,
            tableId: conf.appwriteCollectionId, // Note: collectionId is now tableId
            rowId: slug, 
            data: {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        });
    } catch (error) {
        console.log("Appwrite service :: createPost :: error", error);
        throw error;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateRow({
            databaseId:conf.appwriteDatabaseId,
            tableId:conf.appwriteCollectionId,
            rowId:slug,
            data:{
                title,
                content,
                featuredImage,
                status
            
            }
            });
        } catch (error) {
             console.log("Appwrite service :: updatePost :: error", error);
             throw error;
            }
        }
    
     async deletePost(slug) {
        try {
            // Wrap all arguments into a single object
            await this.databases.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId, // Note: collectionId is now tableId
                rowId: slug
            
            })
        return true;

        } catch (error) {
        console.log("Appwrite service :: deletePost :: error", error);
        throw error;
       // return false;
        }
    
    }

    async getPost(slug){
        try {
            return await this.databases.getRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteCollectionId,
                slug
            })
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            throw error;
           // return false;
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listRows({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteCollectionId,
                queries:queries,

            })
            
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId:conf.appwriteBucketId,
                fileId:ID.unique(),
                file:file
               // file:document.getElementById('uploader').file[0]

            })
        } catch (error) {
            console.log("Appwrite service :: uploadfile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId:conf.appwriteBucketId,
                fileId:fileId
            }
                
            )
        } catch (error) {
            console.log("Appwrite service :: deletefile :: error", error);
            return false;
        }
    }
    
    async getFilePreview(fileId){
        return this.bucket.getFilePreview({
            bucketId:conf.appwriteBucketId,
            fileId:fileId
        })
    }

   
}

const service = new Service()

export default service