import { cn } from "@/lib/utils";
import { Badge } from "./badge"

type Props = {
  tags: string[];
  prefix?: string;
  tagsClassName?: string;
  badgeClassName?: string;
}
export const Tags = (props: Props) => {
  const { tags, prefix = "", tagsClassName, badgeClassName } = props;

  return <div className={cn("flex flex-wrap gap-1", badgeClassName)}>
    {
      tags.map(tag => <Badge
        variant={'outline'}
        key={tag}
        className={cn(tagsClassName)}
      >
        {prefix}
        {tag}
      </Badge>)
    }
  </div>
}
