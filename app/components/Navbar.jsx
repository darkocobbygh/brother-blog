import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='pt-4  pl-6 pr-6'>
    <div className='flex justify-between'>
     <Link href={'/'}>
     Logo
     </Link>
    <ul className='flex gap-10'>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
      <Link href={'/blogs'}>Blogs</Link>
      </li>
      <li>
      <Link href={'/about'}>About</Link>
      </li>
    </ul>
    <div>
      <input type='text' placeholder='Search' className='pl-2'/>
    </div>
    </div>
  </nav>
  )
}

export default Navbar
