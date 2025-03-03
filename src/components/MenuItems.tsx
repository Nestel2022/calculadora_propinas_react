import { IMenuItem } from "../interfaces"

interface IMenuItemProps {
    item: IMenuItem,
    addItem: () => void
}

export default function MenuItems({item, addItem} : IMenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    onClick={() => addItem()}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
