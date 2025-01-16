import React, { useState } from "react";

function App() {
  // Giả lập dữ liệu từ API
  const courses = [
    { id: '1', text: 'HTML, CSS' },
    { id: '2', text: 'JavaScript' },
    { id: '3', text: 'ReactJS' },
  ];
  const [checked, setChecked] = useState('1'); // Lưu trữ ID của radio button được chọn

  const handleClick = (id) => {
      setChecked(id);
  }

  return (
    <div>
    <h1>Chọn Khóa Học</h1>
      {courses.map(course =>
        <div key={course.id}>
          <input type="radio" checked={checked === course.id} onChange={()=>handleClick(course.id)}/>
          <label htmlFor={course.id}>{course.text}</label>
        </div>
      )}
    </div>
  )

  // const [checked, setChecked] = useState(''); // Lưu trữ ID của radio button được chọn

  // // Hàm xử lý khi người dùng chọn một radio button
  // function handleChange(id) {
  //   setChecked(id); // Cập nhật `checked` với `id` được chọn
 // }

  // return (
  //   <div>
  //     <h1>Chọn khóa học</h1>
  //     {courses.map(course => (
  //       <div key={course.id}>
  //         <input
  //           type="radio"
  //           id={course.id}
  //           name="course"
  //           value={course.id}
  //           checked={checked === course.id}
  //           onChange={() => handleChange(course.id)} // Gọi hàm handleChange khi chọn
  //         />
  //         <label htmlFor={course.id}>{course.text}</label>
  //       </div>
  //     ))}
  //     <p>Khóa học đã chọn: {checked}</p>
  //   </div>
  // );
}

export default App;