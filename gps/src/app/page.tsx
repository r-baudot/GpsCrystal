import { GpsManager } from "@/features/gps/GpsManager";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <GpsManager />
    </Layout>
  );
}
