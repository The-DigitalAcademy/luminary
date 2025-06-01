import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer class="bg-gray-50 w-full px-6 py-6 border-t border-gray-300">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    
    <!-- About Section -->
    <div>
      <h4 class="font-bold text-lg text-gray-800">About</h4>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Blog</p>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Meet the team</p>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Contact Us</p>
    </div>

    <!-- Social Media -->
    <div>
      <h3 class="font-bold text-lg text-gray-800">Follow us on social media</h3>
      <p class="text-gray-700">Stay connected with us on our social media platforms.</p>
      <div class="flex items-center gap-4 mt-2">
        <i class="bi bi-facebook text-gray-700 hover:text-gray-500 text-xl cursor-pointer"></i>
        <i class="bi bi-instagram text-gray-700 hover:text-gray-500 text-xl cursor-pointer"></i>
        <i class="bi bi-twitter-x text-gray-700 hover:text-gray-500 text-xl cursor-pointer"></i>
        <i class="bi bi-linkedin text-gray-700 hover:text-gray-500 text-xl cursor-pointer"></i>
      </div>
    </div>

    <!-- Support Section -->
    <div>
      <h4 class="font-bold text-lg text-gray-800">Support</h4>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Shipping</p>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Return</p>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Help center</p>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">FAQ</p>
    </div>

    <!-- Contact Info -->
    <div>
      <h4 class="font-bold text-lg text-gray-800">Get in contact</h4>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Call me back</p>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Tel: 081 839 4747</p>
      <p class="text-gray-700 hover:text-gray-500 cursor-pointer">Email: contact&#64;luminary.com</p>
    </div>

  </div>
</footer>

<hr class="border-gray-300 mt-4">

<!-- Copyright & Policy Section -->
<div class="flex flex-col md:flex-row justify-between px-6 py-4 bg-gray-50 text-gray-600">
  <p class="text-center md:text-left">
    &copy; 2025 <a href="#" class="hover:text-gray-800">Luminary</a>. All rights reserved.
  </p>
  <div class="text-center md:text-right">
    <a href="#" class="hover:text-gray-800">Privacy Policy</a> |
    <a href="#" class="hover:text-gray-800">Terms of Service</a> |
    <a href="#" class="hover:text-gray-800">Cookie Policy</a>
  </div>
</div>
`,
  styles: ``
})
export class FooterComponent {}
