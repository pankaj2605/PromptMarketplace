// todo
import {User,currentUser} from "@clerk/nextjs/server";
import {NextRequest,NextResponse} from "next/server";


export async function GET(req:NextRequest){
    try{
        const user:User | null= await currentUser();
        if(!user){
            return new NextResponse("Please login to access this resource",{
                status:400,
            });
        }

        // todo --we need to chweck user have shop or not


        return NextResponse.json({user});
    }catch(error){
        console.log('Load User error',error);
        return new NextResponse("Intenal Error",{status:500})
    }
}