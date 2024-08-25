import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Person } from "@/models";
import { useAppDispatch } from "@/hooks";
import { removeFavorite } from "@/app/features";
type Props = {
  person: Person;
};

const CellAction: React.FC<Props> = ({ person }) => {
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="w-8 h-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => dispatch(removeFavorite(person))}
        >
          Remove from favorites
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
