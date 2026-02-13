import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { CommonPageEndPoints } from '@/lib/services/CommonEndPoints';

export default async function layout({ children }: any) {
  const navBarResp = await CommonPageEndPoints.navBar();
  const footerData = await CommonPageEndPoints.footerMenu();

  return (
    <>
      <Navbar navBarData={navBarResp} />
      {children}
      <Footer footerData={footerData} />
    </>
  );
}
