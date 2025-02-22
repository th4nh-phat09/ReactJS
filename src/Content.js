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
//      Gọi callback sau khi component đc gắn vào DOM(tức là DOM thực hiện xong callback mới đc thực hiện)
import { useEffect,useState } from "react";
import React from "react";
//const tabs=['posts','comments','albums']
const tabs=['posts','comments','albums']
function Content(){
      
     const [title,setTitle] =useState('')
     const[posts,setPosts] =useState([])
     const[types,setType] =useState('posts')
     
     useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${types}`)
        .then(res=>res.json())
        .then((res)=>{setPosts(res)})
                },[types])
    return <div>
             {tabs.map((tab)=> 
                                <button 
                                     key={tab} 
                                     style={tab === types ? {
                                        color :'#fff',
                                        backgroundColor:'#333'
                                     } :{}} 
                                     onClick={()=>setType(tab)}>

                                {tab}</button> )}
            <input 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                />
            <ul>
                {posts.map((post)=>{
                   return <li key={post.id}>{post.title ||post.name}</li>
                })}
            </ul>
            </div>
}
export default Content;