import React from 'react'

function Card({username = "User" , role = "Member" , location}) {

    // console.log(props); // returns an object (key : value)

  return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-2">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. Its easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}    {/* using props*/}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {role}, {location}
            </div>
            </figcaption>
        </div>
        </figure>
  )
}

export default Card