import Image from 'next/image'
import hero from '../assets/hero.jpg';
import { data } from './data/data';

export default function Home() {
  return (
    <div className="text-red-300 pl-20 pr-20">
      <div className='pt-10'>
        <Image src={hero} alt=''/>
      </div>
      <div className='pt-8 grid grid-cols-3 gap-4'>
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
