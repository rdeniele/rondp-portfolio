import EditProjectForm from './EditProjectForm';

export default function Page({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return <EditProjectForm id={params.id} />;
}