"use client"

export default function Card({ url }: any) {
  console.log(url);
  return (
    <div className="rounded w-64 h-96 flex items-center ">
      <img 
        src={url} 
        alt="magic card" 
        className="w-auto h-auto rounded-xl"
        />
    </div>
  );

}
