import clsx from "clsx";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import Text from "@/components/common/text";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  description?: string;
  title?: string;
};

const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
  const { className, children, description, title } = props;
  const divClasses = clsx({
    ["block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-w-lg dark:bg-gray-700"]:
      true,
  });

  return (
    <div {...props} className={twMerge(divClasses, className)}>
      {title ? (
        <Text variant="h5" color="primary">
          {title}
        </Text>
      ) : null}
      {description ? (
        <Text variant="p" color="secondary">
          {description}
        </Text>
      ) : null}
      {children}
    </div>
  );
};

export default Card;
