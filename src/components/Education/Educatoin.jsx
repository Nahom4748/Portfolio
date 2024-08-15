import React from "react";

function Educatoin() {
  return (
    <div class="w-full max-w-md mx-auto">
      <div class="flex border-b border-gray-300">
        <button
          class="w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tl-lg focus:outline-none active:bg-gray-200"
          onclick="openTab(event, 'tab1')"
        >
          Tab 1
        </button>
        <button
          class="w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tr-lg focus:outline-none"
          onclick="openTab(event, 'tab2')"
        >
          Tab 2
        </button>
      </div>
      <div id="tab1" class="tabcontent p-4">
        <h2 class="text-lg font-bold text-gray-800">Tab 1 Content</h2>
        <p class="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          enim euismod, imperdiet felis vel, ultrices risus. Sed nec quam id
          elit fringilla blandit a a risus.
        </p>
      </div>
      <div id="tab2" class="tabcontent p-4 hidden">
        <h2 class="text-lg font-bold text-gray-800">Tab 2 Content</h2>
        <p class="mt-2 text-gray-700">
          Duis lobortis velit tellus, eget luctus tellus facilisis eget.
          Maecenas non massa varius, molestie lorem eget, molestie nisi.
          Suspendisse potenti.
        </p>
      </div>
    </div>
  );
}

export default Educatoin;
