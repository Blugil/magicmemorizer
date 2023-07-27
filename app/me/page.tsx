import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';


export default async function mepage() {
  const session = await getServerSession(authOptions);
  //console.log(session);
  if (session?.user?.email === process.env.ADMIN_EMAIL) {
    return (
      <div>
        Welcome Administrator
      </div>
    )
  }
  return (
    <div>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    </div>
  )
}
