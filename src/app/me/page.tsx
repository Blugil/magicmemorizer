"use client"
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';


export default async function mepage() {
  const session = await getServerSession(authOptions);
  //console.log(session);
  return (
    <div>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    </div>
  )
}
