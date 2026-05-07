
import NewPost from "./components/NewPost";
import { useGetCommendByIdQuery, useGetCommentQuery } from "./features/comment/commentSlice";
import { useGetPostsByIdQuery, useGetPostsQuery } from "./features/Posts/postSlice";

function App() {

  // comments
  const {data:CommentData} = useGetCommentQuery(0);
  const {data:CommentDataById} = useGetCommendByIdQuery(1);


  // posts
  const {data,isLoading,error, refetch} = useGetPostsQuery(0);
  const {data: postData } = useGetPostsByIdQuery(1);

  if(isLoading){
    return <p>is loading....</p>
  }
  
  if(error){
    return <p>something went error !</p>
  }

  // console.log('post data by id 1: ',postData);
  console.log("Comment Data by id: ", CommentDataById);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <NewPost/> 
        </div>
    </div>
  );
}

export default App;