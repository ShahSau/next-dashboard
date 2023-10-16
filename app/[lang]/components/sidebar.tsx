"use client"

import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { Fragment, useState, use, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'

import {BiSolidDashboard} from "react-icons/bi";
import {CiSettings} from "react-icons/ci";
import { AiFillCloseCircle, AiOutlineMenu, AiOutlineTeam,AiFillPieChart, AiOutlineDotChart} from "react-icons/ai"
import { LuContact } from "react-icons/lu";
import { BsFillPersonFill, BsFillKanbanFill, BsFillBarChartFill, BsGraphUp, BsBarChartSteps, BsGeoAlt } from "react-icons/bs";
import LocaleSwitcher from "./locale-switcher";
import { MdProductionQuantityLimits, MdOutlineGroups } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

import { getDictionary } from '@/lib/dictionary'
import Link from "next/link";

const montserrat = Montserrat ({ weight: '600', subsets: ['latin'] });




function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



const Sidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [ data, setData ] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    const lang:any  = pathname.split("/")[1];

    useEffect(() => {
      const getData = async () => {
        const data = await getDictionary(lang)
        setData(data.sideBar);
        setLoading(false);
      }
      getData();
    },[lang])

    const routes = [
      {
        label: `${data?.Dashboard}`,
        icon: BiSolidDashboard,
        href: 'dashboard',
        color: "text-sky-500"
      },
      {
        label: `${data?.Manage}`,
        icon: AiOutlineTeam,
        href: 'about',
        color: "text-violet-500",
      },
      {
        label: `${data?.Contact}`,
        icon: LuContact,
        color: "text-emerald-700", 
        href: 'contact',
      },
      {
        label: `${data?.Profile}`,
        icon: BsFillPersonFill,
        color: "text-pink-700",
        href: 'profile',
      },
      {
        label:`${data?.Orders}` ,
        icon: MdProductionQuantityLimits,
        color: "text-orange-500",
        href: 'orders',
      },
      {
        label: `${data?.Customers}`,
        icon: MdOutlineGroups,
        color: "text-red-700",
        href: 'customers',
      },
      {
        label: `${data?.Kanban}`,
        icon: BsFillKanbanFill,
        color: "text-emerald-700",
        href: 'kanban',
      },
      {
      label:`${data?.Calender}` ,
      icon: SlCalender,
      color: "text-pink-700",
      href: 'calender',
        },
      {
        label: `${data?.Bar}`,
        icon: BsFillBarChartFill,
        color: "text-green-500",
        href: 'bar',
      },
      {
        label: `${data?.Pie}`,
        icon: AiFillPieChart,
        color: "text-orange-500",
        href: 'pie',
      },
  
      {
        label: `${data?.Line}`,
        icon: BsGraphUp,
        color: "text-sky-500",
        href: 'line',
      },
      {
        label: `${data?.Geography}`,
        icon: BsGeoAlt,
        color: "text-violet-500",
        href: 'geography',
      },
      {
        label: `${data?.Radical}`,
        icon: BsBarChartSteps,
        color: "text-red-700",
        href: 'radical',
      },
      {
        label: `${data?.Chart}`,
        icon: AiOutlineDotChart,
        color: "text-green-500",
        href: 'chart',
      },
    ];

    return(
       !loading && <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>
             <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <AiFillCloseCircle className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="space-y-4 py-2  flex grow flex-col gap-y-5 overflow-y-scroll bg-[#111827] text-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <h6>{data?.Dashboard}</h6>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {routes.map((item) => (
                              <li key={item.label}>
                                 <a
                                   href={item.href}
                                   className={classNames(
                                     'text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                   )}
                                 >
                                  <item.icon
                                    className={classNames(
                                      `${item.color}`,
                                      'h-6 w-6 shrink-0 mr-3'
                                    )}
                                    aria-hidden="true"
                                  />
                                   {item.label}
                                 </a>
                               </li>
                             ))}
                             </ul>
                         </li>
                         <li>
                       </li>
                       <li className="mt-auto">
                         <Link
                           href="/settings"
                           className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                         >
                           <CiSettings
                             className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                             aria-hidden="true"
                           />
                           {data?.Settings}
                         </Link>
                       </li>
                     </ul>
                   </nav>
                 </div>
               </Dialog.Panel>
             </Transition.Child>
           </div>
            </Dialog>
          </Transition.Root>
             {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-scroll bg-[#111827] text-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <h6>{data?.Dashboard}</h6>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {routes.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={`/${lang}/${item.href}`}
                          className={classNames(
                             ' text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              `${item.color}`,
                              'h-6 w-6 shrink-0 mr-3'
                            )}
                            aria-hidden="true"
                          />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                </li>
                <li className="mt-auto">
                  <Link
                    href="/settings"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    <CiSettings
                      className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                    {data?.Settings}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-72">
           <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
             <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
               <span className="sr-only">Open sidebar</span>
               <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
             </button>

             {/* Separator */}
             <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
             <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
               <div className="relative flex flex-1" />
               <div className="flex items-center gap-x-4 lg:gap-x-6">

                 {/* dropdown */}
                 {/* <Menu as="div" className="relative">
                   <Menu.Button className="-m-1.5 flex items-center p-1.5">
                     <span className="sr-only">Open language menu</span>
                     <span className="hidden lg:flex lg:items-center">
                       <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                         Change Language
                       </span>
                       <IoIosArrowDropdown className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                     </span>
                   </Menu.Button>
                   <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  > */}
                    <div>
                    <LocaleSwitcher />
                    </div>
                   
                    {/* <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items> */}
                  {/* </Transition>
                </Menu> */}
              </div>
            </div>
          </div>        

        </div>
        </div>
    )
}



export default Sidebar;








