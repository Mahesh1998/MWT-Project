import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faClock, faCircleCheck, faCheckDouble, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Inter } from "next/font/google";
import BootstrapClient from '@/components/BootstrapClient.js';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant reservation system",
  description: "Tool for restaurants to manage reservations",
};

const menuDetails = [
  {
    title: "Tables",
    path: "/tables",
    icon: faTable
  },
  {
    title: "Waitlist",
    path: "/waitlist",
    icon: faClock
  },
  {
    title: "Confirmed",
    path: "/confirmed",
    icon: faCalendarCheck
  },
  {
    title: "Closed",
    path: "/closed",
    icon: faCheckDouble
  },
];

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <div className="container-fluid overflow-hidden">
          <div className="row vh-100 overflow-auto">
            <div className="col-12 col-lg-3 col-xl-2 px-lg-2 px-0 bg-dark d-flex sticky-top">
              <div className="d-flex flex-lg-column flex-row flex-grow-1 align-items-center align-items-lg-start px-lg-3 py-2 text-white position-fixed d-none d-lg-block">
                <Navbar menuDetails={menuDetails} />
              </div>
              <div className="d-flex flex-lg-column flex-row flex-grow-1 align-items-center align-items-lg-start px-lg-3 py-2 text-white d-lg-none">
                <Navbar menuDetails={menuDetails} />
              </div>
            </div>
            <div className="col d-flex flex-column h-100 my-3 overflow-hidden">
              <main className="row">
                {children}
              </main>
            </div>
          </div>
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
