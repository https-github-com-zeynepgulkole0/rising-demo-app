"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const ActionDropdown = ({ id }: { id: number }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button aria-label="Customise options" className="action_btn">
        Actions
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content className="DropdownMenuContent">
        <DropdownMenu.Item className="DropdownMenuItem">
          Number of IP
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

export default ActionDropdown;
