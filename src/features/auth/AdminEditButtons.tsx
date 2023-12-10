import { Button } from '@/components/ui/button';
import { getAuthSession } from '@/src/auth/nextauth-option';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type Props = {
    addLink: string;
    editLink: string;
    removeLink: string;
}
export default async function AdminEditButtons({ addLink, editLink, removeLink }: Props) {
    const session = await getAuthSession();

    if (!session?.user.id) {
        return null;
    } else {
        return (
            <div className="flex flex-row gap-2">
                <Button className="text-lime-600" variant="ghost" size="icon" asChild>
                    <Link href={addLink}>
                        <Plus className="h-4 w-4" />
                    </Link>
                </Button>
                <Button className="text-yellow-600" variant="ghost" size="icon" asChild>
                    <Link href={editLink}>
                        <Pencil className="h-4 w-4" />
                    </Link>
                </Button>

                <Button className="text-red-600" variant="ghost" size="icon" asChild>
                    <Link href={removeLink}>
                        <Trash2 className="h-4 w-4" />
                    </Link>
                </Button>

            </div>
        )
    }

}
