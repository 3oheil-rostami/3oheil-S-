"use client";
import React from "react";
import Link from "./Link";
import AccordionContent from "./AccordionContent";
import { Link as LinkType } from "@/types";

interface LinkAccordionProps {
  title: string;
  links?: LinkType[];
  subAccordions?: {
    title: string;
    href: string;
    subLinks: LinkType[];
    isHasArrowIcon?: boolean;
  }[];
}

export default function LinkAccordion({
  title,
  links = [],
  subAccordions = [],
}: LinkAccordionProps) {
  return (
    <li className="accordion">
      <div className="daisy-collapse daisy-collapse-arrow">
        <input type="checkbox" name={title} defaultChecked />
        <div className="daisy-collapse-title text-base font-medium">
          {title}
        </div>
        <div className="daisy-collapse-content">
          {!!subAccordions.length ? (
            <ul className=" ps-3 pt-2">
              {subAccordions.map((accordionItem, index) => (
                <li className="transition-all" key={index}>
                  <span className="cursor-pointer w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100">
                    <Link href={accordionItem.href}>{accordionItem.title}</Link>
                  </span>
                  <div className=" w-full overflow-hidden transition-all duration-300 ">
                    <AccordionContent links={accordionItem.subLinks} />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <AccordionContent links={links} />
          )}
        </div>
      </div>
    </li>
  );
}
