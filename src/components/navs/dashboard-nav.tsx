// import ThemeToggle from "@/lib/theme/theme-button";
import Link from "next/link";
import { auth } from "@/server/auth";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import { getThemeToggler } from "@/lib/theme/get-theme-button";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavLinks = [{ href: "/", label: "Home" }];

const DashboardNav = async () => {
  return (
    <section className="section-container sticky ">
      <div className="container">
        <nav className=" justify-between flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="https://www.shadcnblocks.com/images/block/block-1.svg"
                className="w-8"
                alt="logo"
              />
              <span className="text-xl font-bold">Shadcn Blocks</span>
            </div>
            <div className="flex items-center">
              {NavLinks.map((link) => (
                <Link
                  key={link.label}
                  className={cn(
                    "text-muted-foreground",
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    })
                  )}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center"></div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://www.shadcnblocks.com/images/block/block-1.svg"
                className="w-8"
                alt="logo"
              />
              <span className="text-xl font-bold">Shadcn Blocks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardNav;
