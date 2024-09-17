import React from 'react';

const Footer = () => {
  return (
  <footer class="bg-neutral-500 text-white py-8">
    <div class="container mx-auto flex justify-between items-center">
      <p>&copy; 2024 Julien Hovan. All rights reserved.</p>
      <div class="space-x-4">
        <a href="https://www.linkedin.com/in/julien-hovan/" class="hover:text-neutral-500">LinkedIn</a>
        <a href="https://github.com/JewelsHovan" class="hover:text-neutral-500">GitHub</a>
        <a href="https://x.com/" class="hover:text-neutral-500">Twitter</a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;