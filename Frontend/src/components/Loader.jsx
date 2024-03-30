import React from 'react'

const Loader = () => {
  return (
<div>
<div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
</div>
<div className="loader-container flex items-center h-screen justify-center">
    {/* <div className="loader font-bold text-center bg-green-400 text-3xl">Loading...!!!</div> */}
    <div className="w-16 h-16 border-4 border-dashed rounded-full text-center animate-spin dark:border-gray-700"></div>
  </div>
  </div>
  )
}

export default Loader
