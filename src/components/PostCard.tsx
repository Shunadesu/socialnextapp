"use client"

import { getPosts, toggleLike } from '@/actions/post.action'
import { useUser } from '@clerk/nextjs'
// import { Post } from '@prisma/client'
import React, { useState } from 'react'

type Posts = Awaited<ReturnType<typeof getPosts>>
type Post = Posts[number]

const PostCard = ({post, dbUserId}: {post: Post, dbUserId: string | null}) => {

    const user = useUser();

    const [newComment, setNewComment] = useState("");
    const [isCommenting, setIsCommenting] = useState(false);
    const [isLiking, setIsLiking] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasLiked, setHasLiked] = useState(post.likes.some(like => like.userId === dbUserId));
    const [likes, setLikes] = useState(post._count.likes);

    const handleLike = async () => {
        if(isLiking) return;
        try {
            setIsLiking(true);
            setHasLiked(prev => !prev);
            setLikes(prev => prev + (hasLiked ? -1 : 1 ));
            await toggleLike(post.id)           
        } catch (error) {   
            setLikes(post._count.likes)
            setHasLiked(false);
        }finally{
            setIsLiking(false);
        }
    }
    
    const handleAddComment = async () => {
        if(!newComment.trim() || isCommenting) return; 
        try {
            setIsCommenting(true);
        } catch (error) {
            
        }
    }
    const handleDelete = async () => {}

    return (
        <div>PostCard</div>
    )
}

export default PostCard