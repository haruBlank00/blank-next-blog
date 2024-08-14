"use client";

import React from 'react';
import Link from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./breadcrumbs"
import { usePathname } from 'next/navigation'
import { useMemo } from "react"
import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";
import { Separator } from './separator';

export type IBreadCrumbItem = {
  id: string
  label: string
  href: string
}

interface BlankBreadCrumbs {
  items: IBreadCrumbItem[]
}

export const BlankBreadCrumbs = () => {
  const pathname = usePathname();

  const { crumbs, currentPath }: { crumbs: IBreadCrumbItem[], currentPath: string } = useMemo(() => {
    const paths = pathname.split("/").filter(Boolean);

    const crumbs = paths.map(path => ({
      id: nanoid(),
      label: path,
      href: "/" + paths.slice(0, paths.indexOf(path) + 1).join("/"),
    }))

    const currentPath = paths.slice(-1)[0];

    return { crumbs, currentPath };
  }, [pathname])

  return <>
    <Breadcrumb className='mb-2'>
      <BreadcrumbList>
        {
          crumbs.map((item, index) => {
            const isLastItem = index === crumbs.length - 1;
            const isActive = item.label === currentPath;

            return <React.Fragment key={item.id}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.href} className={cn('capitalize dark:text-neutral-400', { 'text-primary dark:text-neutral-200': isActive })}>
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {!isLastItem && <BreadcrumbSeparator key={item.id} />}
            </React.Fragment>
          })
        }
      </BreadcrumbList>
    </Breadcrumb>

    <Separator className='mb-4' />
  </>
}
