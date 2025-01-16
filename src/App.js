import React, { useState } from "react";

function App() {
  // Giả lập dữ liệu từ API
  const courses = [
    { id: '1', text: 'HTML, CSS' },
    { id: '2', text: 'JavaScript' },
    { id: '3', text: 'ReactJS' },
  ];
  const [checked, setChecked] = useState([]); // Lưu trữ ID của radio button được chọn

  const handleClick = (id) => {
     if(checked.includes(id)) {
      setChecked(checked.filter(item => item !== id));
  }
  else
    setChecked(prev => [...prev, id]);
}

  return (
    <div>
    <h1>Chọn Khóa Học</h1>
      {courses.map(course =>
        <div key={course.id}>
          <input type="Checkbox" checked={checked.includes(course.id)} onChange={()=>handleClick(course.id)}/>
          <label htmlFor={course.id}>{course.text}</label>
        </div>
      )}
    </div>
  )

}

export default App;