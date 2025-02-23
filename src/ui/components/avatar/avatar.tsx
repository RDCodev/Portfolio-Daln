import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@utils/cn";

export interface AvatarDefaultProps {
  src?: string;
  alt: string;
  fallback: string;
};

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, AvatarDefaultProps { };

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, className, ...props }) => (
  <AvatarPrimitive.Root className={cn(
    "relative flex h-[54px] w-[54px] shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    <AvatarPrimitive.Image 
      className="aspect-square h-full w-full" 
      src={src}
    />
    <AvatarPrimitive.Fallback 
      className="flex font-poppins font-medium text-xl h-full w-full items-center justify-center rounded-full bg-woodsmoke-800">
        { fallback }
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
);

export { Avatar }