import EditProjectForm from './EditProjectForm';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: Props) {
  return <EditProjectForm id={params.id} />;
}