import { ReactElement } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";
import Button from "components/atoms/Button/button";

type DialogProps = {
  onOpenChange?: (open: boolean) => void;
  title?: string | ReactElement;
  description?: string | ReactElement;
  variant?: "default" | "destructive" | "warning" | "success";
  closeButtonText?: string;
  cancelButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
  onConfirm?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
  onCancel?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
  overlay?: boolean;
  children: ReactElement;
} & (
  | {
      open: boolean;
      onClose: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
      trigger: never;
    }
  | {
      open: never;
      onClose?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
      trigger: ReactElement;
    }
);

export const Dialog = (props: DialogProps) => {
  const {
    open,
    onClose,
    onOpenChange,
    title,
    description,
    variant,
    closeButtonText = "Close",
    cancelButton = true,
    cancelButtonText = "Cancel",
    confirmButtonText = "OK",
    onConfirm,
    onCancel,
    trigger,
    overlay = true,
    children,
  } = props;

  // TODO: warning and success variant styling
  const dialogVariant = variant === "destructive" ? variant : "primary";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Trigger>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {overlay ? (
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
          ) : null}
          <DialogPrimitive.Content
            onEscapeKeyDown={() => {}}
            className="fixed z-50 w-full pb-3 gap-4 bg-light-slate-2 lg:p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 md:w-max rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 grid grid-cols-1 p-4 max-w-[90%] lg:max-w-xl rounded-t-lg"
          >
            <div className="flex flex-col space-y-2 text-center sm:text-left">
              {title ? (
                <DialogPrimitive.Title className="text-lg font-semibold text-slate-900">{title}</DialogPrimitive.Title>
              ) : null}
              {description ? (
                <DialogPrimitive.Description className="text-sm text-slate-500">
                  {description}
                </DialogPrimitive.Description>
              ) : null}
            </div>
            {children}
            <div className="flex gap-3 justify-end">
              {cancelButton ? (
                <DialogPrimitive.Close>
                  <Button className="w-max" variant="default" onClick={onCancel}>
                    {cancelButtonText}
                  </Button>
                </DialogPrimitive.Close>
              ) : null}
              <DialogPrimitive.Close>
                <Button
                  onClick={(event) => {
                    onConfirm && onConfirm(event);
                  }}
                  className="w-max"
                  variant={dialogVariant}
                >
                  {confirmButtonText}
                </Button>
              </DialogPrimitive.Close>
            </div>
            <DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 ">
              <AiOutlineClose size={20} />
              <span className="sr-only">{closeButtonText}</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
