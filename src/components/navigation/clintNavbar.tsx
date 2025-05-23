import Image from "next/image";
import Logo from '@/assets/image/logo.svg'
import Link from "next/link";


export default function ClintNav() {
   return(
      <div>
         <div className="flex flex-row items-center justify-between mx-[150px] bg-amber-100 px-4 py-2 rounded-xl mt-2 ">
            <div className="flex flex-row items-center gap-2">
               <Image src={Logo} alt="logo" className="w-[30px] " />
               <p>Notes</p>
            </div>
            <div className="flex flex-row items-center gap-4">
               <p>ADD NOTES</p>
               <p>ADD CALENDAR</p>
               <p>CHATS</p>
               <p>TWITT</p>
            </div>
            <div className="flex flex-row items-center gap-4">
               <Link href='/auth/log'>Logon</Link>
               <Link href='/auth/registration'>Registration</Link>
            </div>
         </div>
      </div>
   )
}