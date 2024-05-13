"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";
import logoMmb from "../../public/mmb-rb.png";
import { ModeToggle } from "./model-toggle";
import { useClickAway } from "react-use";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { FaPython } from "react-icons/fa";
import Hamburger from "hamburger-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Django ",
    href: "#",
    description:
      "Créez des sites web dynamiques et évolutifs avec des fonctionnalités comme l'authentification des utilisateurs, la gestion de contenu, etc.",
  },
  {
    title: "Dash",
    href: "#",
    description:
      "Apprenez à déployer vos applications Dash sur le web pour que d'autres puissent les utiliser.",
  },
  {
    title: "Flask",
    href: "#",
    description:
      "Créez des applications web légères et flexibles avec Flask, un microframework Python",
  },
  {
    title: "Excel",
    href: "#",
    description:
      "Apprenez à organiser, analyser et visualiser des données avec Excel.",
  },
  {
    title: "Machine Learning",
    href: "#",
    description:
      "Développez les compétences nécessaires pour construire des modèles de Machine Learning capables de faire des prédictions, résoudre des problèmes et automatiser des tâches.",
  },
];

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  return (
    <div className="container mx-auto">
      <nav className="w-full md:px-20 py-3 shadow-lg dark:bg-background">
        <div className="flex items-center justify-between gap-3">
          <section className="font-bold text-xl bg-gray-400 w-36 h-8 px-2 py-3 rounded-lg flex justify-center items-center">
            <Link href="/">
              <Image src={logoMmb} alt="Logo MmB" width={120} height={120} />
            </Link>
          </section>
          <span className="md:hidden">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          </span>
          <div
            className={
              isOpen
                ? "flex flex-col fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-4 bg-neutral-100 dark:bg-background border-b border-b-white/20 md:flex-row"
                : "md:flex md:items-center md:z-auto w-full md:w-auto pl-7 hidden md:opacity-1"
            }
          >
            <NavigationMenu className="flex justify-center items-center ">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tutoriels</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-2">
                        <NavigationMenuLink asChild className="mt-0">
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/posts/python"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              <FaPython className="text-5xl" />
                              Python
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Retrouvez nos articles et tutoriels sur le langage
                              python
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/posts/react" title="React js">
                        React et NextJs, composants réutilisables
                      </ListItem>
                      <ListItem href="/posts/flutter" title="Flutter">
                        Développer des applications mobiles fluides et
                        performantes
                      </ListItem>
                      <ListItem href="/posts/tailwindcss" title="TailwindCSS">
                        Tous nos articles sur les UI avec TailwindCSS
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Formations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Jobs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex justify-between items-center">
              <div className="flex justify-end gap-4 mr-4">
                <a href="https://twitter.com/moubarakmohame4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a href="https://web.facebook.com/profile.php?id=100093378948984">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
