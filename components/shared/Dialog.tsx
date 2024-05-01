import { DialogDescription } from "@radix-ui/react-dialog";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "lib/hooks/useMediaQuery";
import {
  Dialog as InternalDialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from "components/molecules/Dialog/dialog";
import { Drawer } from "./Drawer";

interface DialogProps {
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onClose: (open: boolean) => void;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}

export const Dialog = ({ trigger, isOpen, onClose, title, description, children }: DialogProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isSmallScreen && isOpen) {
      triggerRef.current?.click();
    }
  }, [isOpen, isSmallScreen]);

  return (
    <>
      {isSmallScreen ? (
        <>
          <Drawer
            title={title}
            description={description}
            trigger={trigger ?? <button ref={triggerRef} className="invisible" />}
            showCloseButton={true}
          >
            {children}
          </Drawer>
        </>
      ) : (
        <InternalDialog open={isOpen}>
          <DialogTrigger>{trigger}</DialogTrigger>
          <DialogContent className="p-4 md:max-w-lg lg:max-w-xl m-4">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </InternalDialog>
      )}
    </>
  );
};
