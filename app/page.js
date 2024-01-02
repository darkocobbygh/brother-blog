import Image from 'next/image'
import hero from '../assets/hero.jpg';
import { data } from './data/data';

export default function Home() {
  return (
    <div className="text-red-300 sm:pl-20 pr-6 sm:pr-20 ">
      <div className='pt-10 pl-6 sm:pl-0 h-full'>
        <Image src={hero} alt='' className='h-[450px]'/>
      </div>
      <div className='pt-8 grid pl-6 sm:pl-0 sm:grid-cols-3 gap-4'>
        {data.map((datas)=>(
          <div key={datas.id}>
            <Image src={datas.authorPic} alt='' />
            <p className='text-tech'>{datas.tech} </p>
            <p className='font-semibold text-black'>{datas.title} </p>
            <p className='text-author'>{datas.author} </p>
          </div>
        ))}
      </div>
    </div>
  )
}
