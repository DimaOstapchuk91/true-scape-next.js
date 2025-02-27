import AddCompanyBtn from './components/AddCompanyBtn/AddCompanyBtn';
import ClientComponent from './components/ClientComponent/ClientComponent';
import ServerComponent from './components/ServerComponent/ServerComponent';
import ServerComponentCopy from './components/ServerComponentCopy/ServerComponentCopy';
import './globals.css';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-green-400">Hello Next.js</h1>
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      <AddCompanyBtn />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
