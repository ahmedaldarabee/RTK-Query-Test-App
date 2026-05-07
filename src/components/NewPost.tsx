import { useState, type FormEvent } from "react";
import { useCreatePostsMutation } from "../features/Posts/postSlice"



const NewPost = () => {

    const [newPostData,setNewPostData] = useState({
        title:"",
        body:"",
        id:1212332
    });

    // const { createPost , error,isLoading} = useCreatePostsMutation();
    // Mutation that return : [arrayFunction, resultObject] as: 

    const [createPost,{ error,isLoading }] = useCreatePostsMutation();
    // refetch is NOT available in mutations, where it just with queries !

    if(error){
        return <p> something went error when creating a post ! </p>
    }

    const newPostHandler = async (e:FormEvent) => {
        e.preventDefault(); // to avoid doing re-loading to the page and form refresh !
        // unwrap to handle api based on try-catch correctness way to handle error if happen and handle response in clean way
        try {
            const response = await createPost(newPostData).unwrap();
            console.log('creating new post response: ',response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full flex items-center justify-center'>
            <form onSubmit={newPostHandler}>
                <div className='w-full flex items-center flex-col gap-4'>
                    <input
                        className='block border px-4 py-0.5 rounded-md outline-none border-sky-600'
                        placeholder="Enter your title here"
                        type="text"
                        name="title"
                        id="title-data"
                        onChange={(e) => {
                            // ...prev what mean?
                            setNewPostData((prev) => ({...prev,title:e.target.value}));
                        }}
                        />
                    <input
                        className='block border px-4 py-0.5 rounded-md outline-none border-sky-600'
                        placeholder="Enter the body here"
                        type="text"
                        name="body"
                        id="body-data"
                        onChange={(e) => {
                            setNewPostData((prev) => ({...prev,body:e.target.value}));
                        }}
                        />
                </div>
                
                <button 
                        disabled={isLoading}
                        className='block w-full cursor-pointer bg-sky-600 text-white rounded-md mt-6 hover:bg-sky-700 transition-all duration-300'
                        type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default NewPost