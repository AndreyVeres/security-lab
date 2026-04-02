'use client';
import { AppModal } from '@/shared/components/common/app-modal';
import { Button } from '@/shared/components/ui/button';
import { CreateUserFormContainer } from './create-user-form/create-user-form.container';

export const CreateUserModal = () => (
  <AppModal trigger={<Button>Create user inside modal</Button>}>
    <AppModal.Header>
      <AppModal.Title>Create User</AppModal.Title>
      <AppModal.Description>fill this form for create new user</AppModal.Description>
    </AppModal.Header>
    <AppModal.Body>
      <CreateUserFormContainer />
    </AppModal.Body>
  </AppModal>
);
