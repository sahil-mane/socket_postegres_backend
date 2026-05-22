import { prisma } from "../../config/db.js";

export const createUserRepo = async (data) => {
  const createUser = await prisma.users.create({
    data: data,
  });

  return createUser;
};

export const getUserRepo = async (username) =>{
    const getAlluserData = await prisma.users.findUnique({
       where:{
           username:username
       } 
    })
    return getAlluserData;
}
