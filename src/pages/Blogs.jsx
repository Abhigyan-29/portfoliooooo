const Blogs = () => {
  return (
    <div className="ml-72 p-24 max-w-4xl">
      <h1 className="text-4xl font-semibold mb-10">Blogs</h1>

      <div className="space-y-6">
        <BlogItem title="Building AI Products" />
        <BlogItem title="React Performance Optimization" />
      </div>
    </div>
  )
}

const BlogItem = ({ title }) => {
  return (
    <div className="border-b border-gray-200 dark:border-[#222] pb-4 hover:opacity-70 transition">
      <h2 className="text-xl font-medium">{title}</h2>
    </div>
  )
}

export default Blogs
