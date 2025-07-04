import Image from "next/image"



export default function HomePage () {
  return(
    <main>
      <Image 
      width={300}
      height={600}
      src="/couch.jpg"
      alt="name of the image"
      />
    </main>
  )
}

