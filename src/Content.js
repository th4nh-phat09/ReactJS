// Dùng nó khi ta giải quyết side effect
// Ví dụ:
// Update DOM
// Call API
// listener Event

//      useEffect(callback,[deps])
//      callback dùng để xử lý side effect
//      có thể xử lý các side effect ở ngoài useState side effect nma nên xử lý bên trong hook bởi vì đôi khi các xử lý nó làm chậm việc render 
//      giao diện mà render giao diện mới là ý chính còn xử lý side effect thì chỉ là phụ nên ta nên để bên trong hook bởi vì nó renfder vào DOM rôi
//      mới gọi callback rồi xử lý side effecr
//      deps là không bắt buộc
//      deps có thể là props của component đó,hoặc bất cứ thứ gì ví dụ biến hoặc state,...
     
//      1.useEffect(callback)
//      Gọi callback mỗi khi component re-render
//      2.useEffect(callback,[])
//      Chỉ gọi callback một lần khi component được mounted
//      3.useEffect(callback,[deps])
//      chỉ gọi lại callback mỗi khi deps thay đổi
//      ------------------------------------------
//      Callback sẽ luôn được gọi sau componet mounted
//      Gọi callback sau khi component đc gắn vào DOM(tức là DOM thực hiện xong callback mới gọi)
import { useEffect,useState } from "react";
import React from "react";
function Content(){
   const [title,setTitle] =useState('')
   const [posts,setPosts] =useState([])       
   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then((res)=>{setPosts(res)})   
      },[])
      //Nếu chỗ đây nó ko có deps là mảng rỗng thì nó sẽ gọi vô hạn callback
         return <div>
                 <input 
                     value={title} 
                     onChange={(e)=>setTitle(e.target.value)}
                     />
                 <ul>
                     {posts.map((post)=>{
                        return <li key={post.id}>{post.title}</li>
                     })}
                 </ul>
                 </div>
     }
export default Content;