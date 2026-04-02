import { UserType } from '@/entities/user';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Field, FieldError, FieldGroup } from '@/shared/components/ui/field';
import { Input } from '@/shared/components/ui/input';

type Props = {
  values: Partial<UserType>;
  errors: Record<string, string | undefined>;
  onChange: (name: keyof UserType, value: string) => void;
  onSubmit: VoidFunction;
};

export const CreateUserFormComponent = (props: Props) => {
  const { onSubmit, values, errors, onChange } = props;
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <form onSubmit={onSubmit}>
          <FieldGroup>
            <Field data-invalid={errors?.username}>
              <Input
                value={values.username}
                id="username"
                onChange={(e) => onChange('username', e.target.value)}
                placeholder="Username"
                autoComplete="off"
              />
              {errors.username && <FieldError errors={[{ message: errors.username }]} />}
            </Field>

            <Field data-invalid={errors?.password}>
              <Input
                value={values.password}
                id="password"
                onChange={(e) => onChange('password', e.target.value)}
                placeholder="Password"
                autoComplete="off"
              />
              {errors.password && <FieldError errors={[{ message: errors.password }]} />}
            </Field>

            <Button type="submit">Create</Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
