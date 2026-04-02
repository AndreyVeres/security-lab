import { CreateUserForm, CreateUserModal } from '@/features/create-user';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-10">
      <CreateUserForm />
      <CreateUserModal />
    </div>
  );
}
