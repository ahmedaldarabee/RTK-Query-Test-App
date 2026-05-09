
// import NewPost from "./components/NewPost";
// import { useGetCommendByIdQuery, useGetCommentQuery } from "./features/comment/commentSlice";
// import { useGetPostsByIdQuery, useGetPostsQuery } from "./features/Posts/postSlice";
import { useCallback, useMemo, useState } from 'react';
import ViewText from './components/ViewText';
import ViewCounter from './components/ViewCounter';

function App() {

  // // comments
  // const {data:CommentData} = useGetCommentQuery(0);
  // const {data:CommentDataById} = useGetCommendByIdQuery(1);


  // // posts
  // const {data,isLoading,error, refetch} = useGetPostsQuery(0);
  // const {data: postData } = useGetPostsByIdQuery(1);

  // if(isLoading){
  //   return <p>is loading....</p>
  // }
  
  // if(error){
  //   return <p>something went error !</p>
  // }

  // // console.log('post data by id 1: ',postData);
  // console.log("Comment Data by id: ", CommentDataById);

  const [count,setCount] = useState(0);
  const [user,setUser] = useState({
    info:"changed happen"
  });

  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };

  const textInfo = useMemo(() => {
    return user;
  },[user]); // to enable show result after we click on add age ! 

  const ageHandler = useCallback(() => {
      setUser((prev) => {
        if(prev.age){
          return prev;
        }else{
          return {...prev,age:22}
        }
      })
   
  },[]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center flex-col">
          {/* <NewPost/>  */}
          <ViewCounter count={count} increaseHandler={counterHandler} />
          <ViewText text={textInfo} ageHandler={ageHandler} />
        </div>
    </div>
  );
}

export default App;