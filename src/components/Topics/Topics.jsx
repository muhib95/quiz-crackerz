import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import image from '../../image/image.jpg'

const Topics = () => {
  const exams=useLoaderData();
  const {data}=exams;
  
  return (
    <div>
      <section className="bg-gray-800 text-gray-100 mb-5">
	<div className="container flex flex-col mx-auto lg:flex-row">
	<img src={image} alt="" className='md:w-1/5 sm:w-5/6' />
		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			
			<h2 className="text-3xl font-semibold leading-none">Modern online Quiz Test</h2>
			<p className="mt-4 mb-8 text-lg">We design and create original, high quality, fun quizzes, covering personality, knowledge, relationships and more. We hope that through our quizzes you’ll have fun with your friends, learn lots of interesting facts, and even get to know yourself a little better.

We’ve already created dozens of popular quizzes and we’ve had a lot of fun in the process. Right now we’re working harder to bring you even more quizzes in the near future. So stay tuned.</p>
			
		</div>
	</div>
</section>
      <div className='grid md:grid-cols-4 container mx-auto gap-2 justify-center'>
      {
        data.map(item=><Topic item={item} key={item.id}></Topic>)
      }
      </div>
    
    </div>
    
    
    
  );
};

export default Topics;