// components/menu/menu-list.tsx
import { MenuItem } from "@/components/menu/item";
import { prisma } from "@/lib/prisma";
import type { MenuItem as Item } from "@/lib/generated/prisma";
export async function MenuList() {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item: Item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
