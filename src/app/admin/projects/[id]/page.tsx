import EditProjectForm from './EditProjectForm';

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  return <EditProjectForm id={params.id} />;
}