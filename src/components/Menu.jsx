import React,{useState} from 'react'
import {data} from '../data/data'

const Menu = () => {
    //console.log(data);
  const [Foods,setFoods]=useState(data);

  const filtercategory=(category)=>{
    setFoods(
      data.filter((item)=>{
        return item.category === category;
      })
    )
  }  

  const filterprice=(a,b)=>{
    setFoods(
      data.filter((item)=>{
        return a<=item.price && item.price<=b;
      })
    )
  }

  const filtertype=(type)=>{
    setFoods(
      data.filter((item)=>{
        return item.type === type;
      })
    )
  }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-[#04AA6D] font-bold text-4xl text-center'>Menu</h1>

        {/*Filter*/}
        <div className='flex flex-col lg:flex-row justify-between'>
           {/*Category*/}
           <div>
            <p className='font-bold text-gray-700'>Category of food</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>All</button>
                <button onClick={()=>filtercategory('pizza')} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>Pizza</button>
                <button onClick={()=>filtercategory('indian')} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>Indian</button>
                <button onClick={()=>filtercategory('dessert')} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>Dessert</button>
                <button onClick={()=>filtercategory('burger')} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>Burgers</button>
            </div>
            </div> 

          {/*Type*/}
          <div>
            <p className='font-bold text-gray-700'>Type of food</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={()=>filtertype('veg')} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>Veg</button>
                <button onClick={()=>filtertype('non-veg')} className='m-1 border-red-500 text-white bg-[#d86969] hover:bg-red-500 hover:text-black px-2'>Non-Veg</button>  
            </div>
          </div>      

           {/*Price*/}
           <div>
            <p className='font-bold text-gray-700'>Price Classification</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={()=>filterprice(0,100)} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>0-100</button>
                <button onClick={()=>filterprice(101,200)} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>101-200</button>
                <button onClick={()=>filterprice(201,300)} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>201-300</button>
                <button onClick={()=>filterprice(301,500)} className='m-1 border-green-300 text-white bg-[#04AA6D] hover:bg-green-300 hover:text-black px-2'>301-500</button>
            </div>
            </div> 
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {Foods.map((item,index)=>(
            <div key={index} className='border shadow-2xl rounded-lg hover:scale-105 duration-300'>
              <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-[#04AA6D] text-white p-1 rounded-full'>{item.price}</span>
                </p>
              </div>
            </div>

          ))}
        </div>
    </div>
  );
};

export default Menu