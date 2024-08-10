import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function BlogsPage() {
  return <div>
    <header className="flex justify-end">
      <Link href={'/dashboard/blogs/new'}>
        <Button className="flex items-center gap-2" size={"sm"}>
          <IconPlus />
          Add a Blog
        </Button>

      </Link>
    </header>
  </div>
}
