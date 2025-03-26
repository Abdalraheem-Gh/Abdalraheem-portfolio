'use client';

import Image from "next/image";
import Link from "next/link";

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center border-0  md:gap-2 md:p-2   bg-primary-foreground  rounded-full  ml-2">
      {/* واتساب */}
      <Link
        href="https://wa.me/qr/4E2OZOB434LKC1"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        title="Whatsapp"

      >
        <Image
          src={'/Images/Social-Icons/whatsapp.png'}
          alt='Whatsapp'
          height={24}
          width={24}
          priority={true}
        />
      </Link>

      {/* فيسبوك */}
      <Link
        href="https://www.facebook.com/raheem.ghannam"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        title="Facebook"

      >
        <Image
          src={'/Images/Social-Icons/facebook.png'}
          alt='Facebook'
          height={24}
          width={24}
          priority={true}
        />
      </Link>

      {/* لينكدإن */}
      <Link
        href="https://www.linkedin.com/in/abdalraheem-ghannam-8b501b192"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        title="LinkedIn"

      >
        <Image
          src={'/Images/Social-Icons/linkedin.png'}
          alt='LinkedIn'
          height={24}
          width={24}
          priority={true}
        />
      </Link>

      {/* جيت هاب */}
      <Link
        href="https://www.github.com/Abdalraheem-Gh"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        title="GitHub"
      >
        <Image
          src={'/Images/Social-Icons/github.png'}
          alt='GitHub'
          height={24}
          width={24}
          priority={true}
        />
      </Link>
    </div>
  );
}
// 'use client'
// import {
//     Menubar,
//     MenubarMenu,
//     MenubarTrigger,
//     MenubarContent,
//     MenubarItem,
//   } from "@/components/ui/menubar";
// import Image from "next/image";
// import Link from "next/link";
   
//   export function MenuBarContact() {
//     return (
//       <Menubar className="rounded-full p-4 bg-primary-foreground  border-1 mt-4 ml-2">
//         {/* واتساب */}
//         <MenubarMenu>
//           <MenubarTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//              <Image
//               src={'/Images/Social-Icons/whatsapp.png'}
//                alt='Whatsapp'
//                height={24}
//                width={24}
//                priority={true}
//                />
//           </MenubarTrigger>
//           <MenubarContent>
//             <MenubarItem asChild>
//               <Link href="https://wa.me/qr/4E2OZOB434LKC1" target="_blank" rel="noopener noreferrer">
//                 اتصال عبر واتساب
//               </Link>
//             </MenubarItem>
//           </MenubarContent>
//         </MenubarMenu>
  
//         {/* فيسبوك*/}
//         <MenubarMenu>
//           <MenubarTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//           <Image
//               src={'/Images/Social-Icons/facebook.png'}
//                alt='Facebook '
//                height={24}
//                width={24}
//                priority={true}
//                />
//           </MenubarTrigger>
//           <MenubarContent>
//             <MenubarItem asChild>
//               <Link href="https://www.facebook.com/raheem.ghannam" target="_blank" rel="noopener noreferrer">
//                 مراسلة على تلغرام
//               </Link>
//             </MenubarItem>
//           </MenubarContent>
//         </MenubarMenu>
  
//         {/* لينكدإن */}
//         <MenubarMenu>
//           <MenubarTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//           <Image
//               src={'/Images/Social-Icons/linkedin.png'}
//                alt='LinkedIn'
//                height={24}
//                width={24}
//                priority={true}
//                />
//           </MenubarTrigger>
//           <MenubarContent>
//             <MenubarItem asChild>
//               <Link href="www.linkedin.com/in/abdalraheem-ghannam-8b501b192" target="_blank" rel="noopener noreferrer">
//                 مشاهدة البروفايل
//               </Link>
//             </MenubarItem>
//           </MenubarContent>
//         </MenubarMenu>
  
//         {/* جيت هاب */}
//         <MenubarMenu>
//           <MenubarTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//           <Image
//               src={'/Images/Social-Icons/github.png'}
//                alt='GitHub'
//                height={24}
//                width={24}
//                priority={true}
//                />
//           </MenubarTrigger>
//           <MenubarContent>
//             <MenubarItem asChild>
//               <Link href="https://github.com/Abdalraheem-Gh" target="_blank" rel="noopener noreferrer">
//                 عرض المشاريع
//               </Link>
//             </MenubarItem>
//           </MenubarContent>
//         </MenubarMenu>
//       </Menubar>
//     );
//   }