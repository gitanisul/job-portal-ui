import { useId } from "react";

const POSITIONS = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
};

const ARROWS = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-1",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1",
};

const Tooltip = ({ content, position = "top", children }) => {
  const id = useId();

  return (
    <span className="group/tooltip relative inline-block">
      {children({ "aria-describedby": id })}
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute z-20 w-64 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700/50 shadow-xl text-xs leading-relaxed text-gray-300 text-center opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:visible transition-all duration-300 ${POSITIONS[position]}`}
      >
        {content}
        <span
          className={`absolute w-2 h-2 rotate-45 bg-gray-800 border-gray-700/50 ${
            position === "top" ? "border-r border-b" : "border-l border-t"
          } ${ARROWS[position]}`}
        ></span>
      </span>
    </span>
  );
};

export default Tooltip;
