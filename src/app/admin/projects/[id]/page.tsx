'use client';

import { useParams } from 'next/navigation';
import EditProjectForm from './EditProjectForm';

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  return (
    <div className="container mx-auto px-4 py-8">
      <EditProjectForm id={id} />
    </div>
  );
}