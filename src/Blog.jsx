import React, { useState } from 'react'
import BlogPost from './BlogPost'

const Blog = () => {
    // 2) Create a list of posts using useState, call listOfPosts
    
    let [listOfPosts, setListOfPosts] = useState([])
// 10) Create a function to add a new post to the listOfPosts

    function addToList(newPost){  // create a function to take the blog posts created from BlogPost.jsx and add them to the list of blog posts to the Blog component - send down the function to BlogPost.jsx - takes this info and adds the new blog post to listOfPosts -  sets the list of posts and creates a new post and puts it into the list of posts
        setListOfPosts(previousPosts => {
            return [newPost, ...previousPosts]  // order matters....this places most recent post at the top
        })
    }

  return (
    <>
    {
    /* 
    #################################################################################################################################################################################### HOMEWORK ####################################################################################################################################################################
    
    TODO  Create a UserInput Component that will take the information from the input of the user and pass it onto the BlogPost Component
    
    The BlogPost Component should NOT have inputs in it. It should only have a submit button, and after pressing the button, it should create a post and add it to the listOfPosts in the Blog Component.

    Optional TODO: Delete the last post from the listOfPosts
    Optional TODO: Add dates to the posts
    */}

    {/* //addToList is the callback function - sending addToList down and add a newPost to it, then update the setListOfPosts */}
{/* 5) Bring in the BlogPost component. This is where the posts will get created and where the input form is. It initially looked like this: <BlogPost />  NEXT GO TO BLOGPOST */}
   {/* 11) Pass the callback function called addToList from this Blog component down to the BlogPost component  - GO TO BlogPost.jsx */}
   {/* <UserInput /> */}
    <BlogPost addToList={addToList}/>  
   
{/* 3) Create a map to loop through all of the posts in the listOfPosts */}

    {listOfPosts.map(post =>{
        return (
            <>
            {/* 4) Display the post's title, author, and content */}
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            <hr />
            </>
        )
    })}
    </>
  )
}

export default Blog