import { Fragment, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useController, useFormContext } from "react-hook-form";

interface SelectItem<T> {
  id: number;
  name?: string;
  value: T;
}

interface SelectProps<T> {
  name: string;
  items: SelectItem<T>[];
  required?: boolean;
  className?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Select<T>({ name, items, required, className }: SelectProps<T>) {
  const { control } = useFormContext();
  const { field } = useController({ control, name, rules: { required } });
  const { onChange, ...methods } = field;

  const [selected, setSelected] = useState(items[0]);

  return (
    <Listbox onChange={(e)=>{
      setSelected(e)
      onChange(e.value)
    }} {...methods}>
      {({ open }) => (
        <div
          className={`relative w-full h-full min-h-6 font-sans ${className}`}
        >
          <ListboxButton className="relative w-full h-full px-2 py-auto flex flex-row justify-stretch items-center cursor-default rounded-md bg-white text-left text-[#13131B] ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
            <span className="w-full flex items-center truncate font-normal text-12">
              {selected.name ?? selected.value as string}
            </span>
            <span className="pointer-events-none flex items-center">
              <ChevronDownIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {items.map((item) => (
                <ListboxOption
                  key={item.id}
                  className={({ active }) =>
                    classNames(
                      active ? "bg-primary text-white" : "text-gray-900",
                      "relative cursor-default select-none h-6 px-2 py-auto flex items-center"
                    )
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={classNames(
                            selected ? "font-bold" : "font-normal",
                            "pl-2 block truncate text-12"
                          )}
                        >
                          {item.name ?? item.value as string}
                        </span>
                      </div>
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
