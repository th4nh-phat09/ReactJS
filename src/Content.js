import { useEffect ,useState} from  'react'
//Dùng nó khi ta giải quyết side effect
//Ví dụ:
//Update DOM
// Call API
//listener Event

     //useEffect(callback,[deps])
     //callback dùng để xử lý side effect
     //deps là không bắt buộc
     //deps có thể là props của component đó,hoặc bất cứ thứ gì ví dụ biến hoặc state,...
     
     //1.useEffect(callback)
     //Gọi callback mỗi khi component re-render
     //Gọi callback sau khi component đc gắn vào DOM
     //2.useEffect(callback,[])
     //Chỉ gọi callback một lần khi component được mounted
     //3.useEffect(callback,[deps])
     //chỉ gọi lại callback mỗi khi deps thay đổi
     //------------------------------------------
     //1.callback sẽ luôn được gọi sau componet mounted
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

export default Content