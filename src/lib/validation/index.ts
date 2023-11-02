import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
    name : z.string().min(2,{message : 'Too Short'}),
    username : z.string().min(2,{message : 'Too Short'}),
    email : z.string().email(),
    password : z.string().min(8,{message : 'Password Must Be Atleast 8 characters'}),
});

export const SigninValidation = z.object({
    email : z.string().email(),
    password : z.string().min(8,{message : 'Password Must Be Atleast 8 characters'}), 
});

export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
    caption : z.string().min(5).max(50000),
    file : z.custom<File[]>(),
    location : z.string().min(2).max(1000),
    tags : z.string()
});