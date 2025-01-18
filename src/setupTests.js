// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// // import { useState } from "react";
// // import Content from "./Content";

// // //Mounted -Unmounted
// // //Mounted là thời điểm component đc gắn vào DOM
// // //Unmounted thì ngược lại
// // //thực chất thời điểm nó đc mounted là thời điểm nó đc sử dụng trong react element chứ ko phải DOM như trên để dễ hiểu thôi 
// // function App() {
 
// //   const [show,setShow] =useState(false)

// //   return (
// //     <div style={{padding :32}}>
// //        <button onClick={()=>setShow(!show)}>Toggle</button>
// //         {show &&<Content />}
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState, useEffect, useRef } from "react";

// // function App() {
// //   const [state1, setState1] = useState(0);
// //   const [state2, setState2] = useState(0);
// //   const renderCount = useRef(0);

// //   useEffect(() => {
// //     console.log("useEffect 1");
// //     setState1((prev) => prev + 1);
// //   }, []);

// //   useEffect(() => {
// //     console.log("useEffect 2");
// //     setState2((prev) => prev + 1);
// //   }, []);

// //   renderCount.current++;
// //   console.log("Component rendered " + renderCount.current);

// //   return (
// //     <div>
// //       <p>State1: {state1}</p>
// //       <p>State2: {state2}</p>
// //     </div>
// //   );
// // }

// //  export default App;

// // import React, { useState, useEffect } from "react";

// // function App() {
// //   const [count1, setCount1] = useState(0);
// //   const [count2, setCount2] = useState(0);
// //   useEffect(() => {
// //     setTimeout(() => {
// //       setCount1((prev) => prev + 1); // Render cycle thứ hai
// //     }, 2000);

// //   }, []);
// //   useEffect(() => {
// //     setTimeout(() => {
// //       setCount2((prev) => prev + 1); // Render cycle thứ ba
// //     }, 1000); // Cùng delay
// //   }, []);

// //   console.log("Component rendered: " );

// //   return <div>
// //         <h1>{count1}</h1>
// //         <h1>{count2}</h1>
// //   </div>
// // }

// // export default App;

// // import React, { useState, useEffect } from "react";

// // function App() {
// //   const [width, setWidth] = useState(window.innerWidth);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setWidth(window.innerWidth); // Cập nhật state khi kích thước cửa sổ thay đổi
// //     };

// //     window.addEventListener("resize", handleResize); // Gán sự kiện resize cho window
// //   }, []);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setWidth(window.innerWidth); // Cập nhật state khi kích thước cửa sổ thay đổi
// //     };

// //     window.addEventListener("resize", handleResize); // Gán sự kiện resize cho window
// //   }, []);

// //   console.log("Component rendered: ");

// //   return <div>Window width: {width}</div>;
// // }

// // export default App;


// // import React, { useState, useEffect } from "react";

// // function App() {
// //     const [count1, setCount1] = useState(0);
// //     const [count2, setCount2] = useState(0);

// //     useEffect(() => {
// //         // Đăng ký sự kiện "click" trên cửa sổ
// //         const handleClick = () => {
// //           console.log('1');
// //             setCount1((prevCount) => prevCount + 1);
            
// //         };

// //         window.addEventListener("click", handleClick);

// //         return () => {
// //             window.removeEventListener("click", handleClick);
           
            
// //         };
// //     }, []); // Chỉ đăng ký sự kiện một lần khi component mount

// //     useEffect(() => {
// //         // Đăng ký sự kiện "click" trên cửa sổ
// //         const handleClick = () => {
// //           console.log('2');
// //             setCount1((prevCount) => prevCount + 1);
// //         };

// //         window.addEventListener("click", handleClick);

// //         return () => {
// //             window.removeEventListener("click", handleClick);
// //         };
// //     }, []); // Chỉ đăng ký sự kiện một lần khi component mount

// //     console.log("Component rendered");

// //     return (
// //         <div>
// //             <p>Click count: {count1}</p>
// //             <p>Click count: {count2}</p>
// //         </div>
// //     );
// // }

// // export default App;

// function App() {
//   const [state1, setState1] = React.useState(0);
//   const [state2, setState2] = React.useState(0);

//   React.useEffect(() => {
//     setState1(1);
//   }, []);

//   React.useEffect(() => {
//     setState2(2);
//   }, []);

//   console.log("Component rendered");

//   return (
//     <div>
//       <p>State1: {state1}</p>
//       <p>State2: {state2}</p>
//     </div>
//   );
// }
// export default App;
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
    //  const tabs=['posts','comments','albums']
    //  function Content(){
           
    //       const [title,setTitle] =useState('')
    //       const[posts,setPosts] =useState([])
    //       const[types,setType] =useState('posts')
          
    //       useEffect(()=>{
    //          fetch(`https://jsonplaceholder.typicode.com/${types}`)
    //          .then(res=>res.json())
    //          .then((res)=>{setPosts(res)})
    //                  },[types])
    //      return <div>
    //               {tabs.map((tab)=> 
    //                                  <button 
    //                                       key={tab} 
    //                                       style={tab === types ? {
    //                                          color :'#fff',
    //                                          backgroundColor:'#333'
    //                                       } :{}} 
    //                                       onClick={()=>setType(tab)}>
     
    //                                  {tab}</button> )}
    //              <input 
    //                  value={title} 
    //                  onChange={(e)=>setTitle(e.target.value)}
    //                  />
    //              <ul>
    //                  {posts.map((post)=>{
    //                     return <li key={post.id}>{post.title ||post.name}</li>
    //                  })}
    //              </ul>
    //              </div>
    //  }
     