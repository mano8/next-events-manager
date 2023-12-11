import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/src/db/query/user.query';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const removeHttp = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, '');
};

type ProfileProps = PropsWithChildren<{
  user: UserProfile;
}>;

export const Profile = ({ user, children }: ProfileProps) => {
  return (
    <div className="mt-4">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-2xl font-bold">{user.name}</h3>
          <p>{user?.username}</p>
        </div>
        <Avatar size="lg">
          {user.image ? <AvatarImage src={user.image} alt={user.username} /> : null}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {user.bio ? (
        <p>{user.bio}</p>
      ) : (null)}
      <div className="flex items-center gap-2 mt-4">
        {user.link ? (
          <>
            <p className="text-muted-foreground">{' ‧ '}</p>
            <Link className="text-muted-foreground hover:underline" href={user.link}>
              {removeHttp(user.link)}
            </Link>
          </>
        ) : null}
      </div>
      {children}
    </div>
  );
};
