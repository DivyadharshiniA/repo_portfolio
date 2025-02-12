// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto my-16 p-8">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-2">
        📧 Email: <a href="mailto:divyadd.am@gmail.com" className="text-blue-500 hover:underline">divyadd.am@gmail.com</a>
      </p>
      <p className="text-lg mb-2">
        💻 GitHub: <a href="https://github.com/DivyadharshiniA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/DivyadharshiniA</a>
      </p>
      <p className="text-lg mb-2">
        🔗 LinkedIn: <a href="https://linkedin.com/in/divyadharshinia/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/divyadharshinia</a>
      </p>
      <p className="text-lg mb-2">
        🎯 LeetCode: <a href="https://leetcode.com/DivyadharshiniA/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">leetcode.com/u/DivyadharshiniA/</a>
      </p>
    </div>
  );
};

export default Contact;
