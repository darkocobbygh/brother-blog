
const page = () => {
  return (
    <div>
      <form action="" className="flex flex-col justify-center items-center pt-20 gap-2">
       <div>
       <label htmlFor="title">Title: </label>
        <input type="text" placeholder="title for your content" />
       </div>
       <div>
        <label htmlFor="content">Content: </label>
        <input type="text" placeholder="type in your content here" />
       </div>
        <button className="bg-red-200 h-14 w-20 rounded-2xl">Submit</button>
      </form>
    </div>
  )
}

export default page
