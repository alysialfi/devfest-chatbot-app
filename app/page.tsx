import Image from "next/image";
import Link from 'next/link'


const menus = [
    {
        color: '#FF9F0E',
        icon: '/home/Planet.svg',
        title: 'Help you plan an amazing travel',
        width: 300,
        position: '',
        link: '/planning-travel-doang-berangkat-kaga'
    },
    {
        color: '#9BC7FA',
        icon: '/home/Kanban-Board.svg',
        title: 'Pomodoro for deep focus',
        width: 320,
        position: 'self-end',
        link: '/planning-travel-doang-berangkat-kaga'
    },
    {
        color: '#E75F4C',
        icon: '/home/Sad.svg',
        title: 'Feeling sad? You got my back, dude',
        width: 250,
        position: '',
        link: '/planning-travel-doang-berangkat-kaga'
    },
    {
        color: '#ECC7EF',
        icon: '/home/Smile.svg',
        title: 'About Creator',
        width: 250,
        position: '',
        link: '/tak-kenal-maka-taaruf'
    },
    {
        color: '#50BBB5',
        icon: '/home/Mail.svg',
        title: "Catch up today's news",
        width: 300,
        position: '',
        link: '/planning-travel-doang-berangkat-kaga'
    },
    {
        color: '#F3EAE2',
        icon: '/home/Magnifying-Glass.svg',
        title: "Search anything",
        width: 400,
        position: 'self-end rotate-12',
        link: '/apa-lu-cari-gua-ada'
    }
] 
export default function Home() {
  return (
    <div
      className={`w-screen h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex w-full h-full">
        <div className="w-full grid grid-cols-3">
          {
            menus.map((menu, id) => {
              return <Link href={menu.link}>
                <div key={id} className={`bg-[${menu.color}] grid place-items-center h-full w-full`} style={{backgroundColor: menu.color}}>
                    <p className="text-xl text-gray-800">{menu.title}</p>
                    <Image src={menu.icon} alt={menu.icon} width={menu.width} height={150} className={`${menu.position}`}></Image>
                </div>
              </Link>
            })
          }
        </div>
      </main>
    </div>
  );
}
