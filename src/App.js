import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState(false); // Khởi tạo state show với giá trị false

  return (
    <div style={{ padding: 32 }}>
      {show && <Content />} {/* Hiển thị component Content nếu show là true */}
      <button onClick={() => setShow(!show)}>Toggle</button> {/* Nút để toggle giá trị show */}
    </div>
  );
}

export default App;