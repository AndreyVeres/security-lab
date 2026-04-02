'use client';
import React, { useState, PropsWithChildren } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
} from '../ui/dialog';

type Controls = {
  open: VoidFunction;
  close: VoidFunction;
};
type AppModalProps = {
  children: ((controls: Controls) => React.ReactNode) | React.ReactNode;
  trigger?: React.ReactNode;
};

export const AppModal: React.FC<AppModalProps> & {
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
  Title: typeof ModalTitle;
  Body: typeof ModalBody;
  Close: typeof ModalClose;
  Description: typeof ModalDescription;
} = ({ children, trigger }) => {
  const [open, setOpen] = useState(!trigger);

  const controls = {
    open: () => setOpen(true),
    close: () => setOpen(false),
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent>{typeof children === 'function' ? children(controls) : children}</DialogContent>
    </Dialog>
  );
};
const ModalHeader: React.FC<PropsWithChildren> = ({ children }) => <DialogHeader>{children}</DialogHeader>;
const ModalFooter: React.FC<PropsWithChildren> = ({ children }) => <DialogFooter>{children}</DialogFooter>;
const ModalTitle: React.FC<PropsWithChildren> = ({ children }) => <DialogTitle>{children}</DialogTitle>;
const ModalBody: React.FC<PropsWithChildren> = ({ children }) => <div>{children}</div>;
const ModalClose: React.FC<PropsWithChildren> = ({ children }) => <DialogClose asChild>{children}</DialogClose>;
const ModalDescription: React.FC<PropsWithChildren> = ({ children }) => (
  <DialogDescription>{children}</DialogDescription>
);

AppModal.Header = ModalHeader;
AppModal.Footer = ModalFooter;
AppModal.Title = ModalTitle;
AppModal.Body = ModalBody;
AppModal.Close = ModalClose;
AppModal.Description = ModalDescription;
