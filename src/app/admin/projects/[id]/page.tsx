import EditProjectForm from './EditProjectForm';

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  return <EditProjectForm id={params.id} />;
}