import React from 'react';

const Blogs = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl mb-4'>Blogs</h1>
      <div className='grid md:grid-cols-2 gap-12 container mx-auto mt-18'>
      <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		
	<div className="space-y-4">
		<div className="space-y-2">
			
			<div className="flex items-center text-2xl">
      <h2>What is the purpose of React Router?</h2>
			</div>
		</div>
		<div className="space-y-2">
			
			<p className="leading-snug text-gray-400">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
		</div>
	</div>
</div>
      </div>
      <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		
	<div className="space-y-4">
		<div className="space-y-2">
			
			<div className="flex items-center text-2xl">
      <h2>How context api works?</h2>
			</div>
		</div>
		<div className="space-y-2">
			
			<p className="leading-snug text-gray-400">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
		</div>
	</div>
  
</div>
      </div>
      <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		
	<div className="space-y-4">
		<div className="space-y-2">
			
			<div className="flex items-center text-2xl">
      <h2>How context api works?</h2>
			</div>
		</div>
		<div className="space-y-2">
			
			<p className="leading-snug text-gray-400">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
		</div>
	</div>
  
</div>
      </div>
    </div>
    </div>
  );
};

export default Blogs;